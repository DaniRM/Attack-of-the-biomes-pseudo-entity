var Weapon = function(player, worldReference, enemieReference, bigEnemyReference) {
    var mWeaponGroup = null;
    var mWeapon = [];
    var mWorldReference = worldReference;
    var mEnemieReference = enemieReference;
    var mBigEnemyReference = bigEnemyReference;
    var weapon = null;
    var enemy = null;
    var mPlayer = player;
    var weaponTime = 300;
    var mCursor = phaser.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    var mListeners = [];
    
    var minSpeed = -75;
    var maxSpeed = 75;
    var vx = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    var vy = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    
    this.registerListener = function(listener) {
        mListeners.push(listener);
    }
    
    this.update = function() {
        mWeaponGroup.forEachAlive(function(weapon){
            mEnemieReference.forEachAlive(function(enemy){
                phaser.physics.arcade.overlap(mWeapon, mEnemieReference, enemyDie, null, this);
            },this);
        },this);
        phaser.physics.arcade.overlap(mWeapon, mBigEnemyReference, bigEnemyDie, null, this);
        phaser.physics.arcade.collide(mWeaponGroup, mWorldReference, weaponDie, null, this);
        
        if(mCursor.isDown)
        {
            createWeapons();
        }
    };
    
    var bigEnemyDie = function(weapon, enemy){
        
        enemy.health -= 3;
        if(enemy.health <= 0)
         {
             enemy.kill();
             enemy.healthbar.kill();
         }
         weapon.kill();
    };
    
    var enemyDie = function(weapon, enemy){
         enemy.health -= 1;
         if(enemy.health <= 0)
         {
             enemy.kill();
             enemy.healthbar.kill();
         }
         weapon.kill();
    };
    
     var createWeapons = function(){ 
        if(phaser.time.now > weaponTime)
        {
            var y = phaser.world.randomY;
            weapon = mWeaponGroup.create(player.x,player.y,'bullet');
                
            enablePhysics();
            mWeapon.push(weapon);
            weaponTime = phaser.time.now + 200;       
        }      
    };
    
    var weaponDie = function(weapon){
        weapon.kill();  
    };

    var enablePhysics = function() {  
        phaser.physics.arcade.enable(mWeapon);
        weapon.body.outOfBoundsKill = true;
        weapon.body.velocity.x = vx;
        weapon.checkWorldBounds = true;
    };
     
    (function() {
       mWeaponGroup = phaser.add.group();
       mWeaponGroup.enableBody = true;
    })();
};