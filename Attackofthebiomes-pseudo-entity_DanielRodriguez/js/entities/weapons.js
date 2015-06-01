var Weapon = function(player, worldReference, enemieReference) {
    var mWeaponGroup = null;
    var mWeapon = [];
    var mWorldReference = worldReference;
    var mEnemieReference = enemieReference;
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
                phaser.physics.arcade.overlap(mWeaponGroup, mEnemieReference, enemyDie, null, this);
            },this);
        },this);
        
        phaser.physics.arcade.collide(mWeaponGroup, mWorldReference, weaponDie, null, this);
        
        if(mCursor.isDown)
        {
            createWeapons();
        }
    };
    
    var enemyDie = function(enemy, weapon){ 
        enemy.kill();
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
        weaponTime = phaser.time.now + 500;  
       
    };
     
    (function() {
       mWeaponGroup = phaser.add.group();
       mWeaponGroup.enableBody = true;
    })();
};