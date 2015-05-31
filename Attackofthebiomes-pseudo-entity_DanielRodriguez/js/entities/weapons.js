var Weapon = function(enemyReference, player) {
    var mWeaponGroup = null;
    var mWeapon = [];
    var weapon = null;
    var enemy = null;
    var mEnemyReference = enemyReference;
    var mPlayer = player;
    var weaponTime = 500;
    var mCursor = phaser.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    var mListeners = [];
    
    var minSpeed = -75;
    var maxSpeed = 75;
    var vx = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    var vy = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    this.update = function() {
        createWeapons();
    };
    
     var createWeapons = function(){ 
        if(mCursor.isDown)
        {
            if(phaser.time.now > weaponTime)
            {
                var y = phaser.world.randomY;
                weapon = mWeaponGroup.create(player.x,player.y,'bullet');
                enablePhysics();
                mWeapon.push(weapon);  
            }
        }
    };

    var enablePhysics = function() {  
        console.log(phaser.time.now);
      
        phaser.physics.arcade.enable(mWeapon);
        weapon.body.collideWorldBounds = true;
        weapon.body.outOfBoundsKill = true;
        weapon.body.velocity.x = vx;
        weapon.checkWorldBounds = true;
        weaponTime = phaser.time.now + 500;  
       
    };

    var enemyDie = function() {
        console.log("Enemy Die!");
    };
     
    (function() {
       mWeaponGroup = phaser.add.group();
       mWeaponGroup.enableBody = true;
        
       createWeapons();
    })();
};