var EnemieWeapon = function(player, worldReference, enemieReference) {
    var mEnemieWeaponsGroup = null;
    var mEnemieWeapon = [];
    var mWorldReference = worldReference;
    var mEnemieReference = enemieReference;
    var enemyWeapon = null;
    var enemy1 = null;
    var mPlayer = player;
    var weaponTime = 300;
    
    this.update = function() {
       
        phaser.physics.arcade.overlap(mEnemieWeapon, mPlayer, playerDie, null, this);
        phaser.physics.arcade.collide(mEnemieWeaponsGroup, mWorldReference, weaponDie, null, this);
        mEnemieReference.forEachAlive(function(enemy){
            createWeapons(enemy);
        },this);  
    };
    
    var playerDie = function(enemyWeapon){ 
        mPlayer.health -= 2;
        enemyWeapon.kill();
    };
    
    var weaponDie = function(enemyWeapon){
        enemyWeapon.kill();
    };

    var createWeapons = function(enemy){ 
            
        if(phaser.time.now > weaponTime)
        {
            if (phaser.physics.arcade.distanceBetween(enemy, mPlayer) < 300)
            {
                enemyWeapon = mEnemieWeaponsGroup.create(enemy.x,enemy.y-20,'bullet');
                enablePhysics();
                enemyWeapon.rotation = phaser.physics.arcade.moveToObject(enemyWeapon, mPlayer, 200);
                mEnemieWeapon.push(enemyWeapon); 
                weaponTime = phaser.time.now + 2000; 
            }       
        }   
    };
    
    
    var enablePhysics = function() {  
        phaser.physics.arcade.enable(mEnemieWeapon);
        enemyWeapon.body.outOfBoundsKill = true;
        enemyWeapon.checkWorldBounds = true;
    };
     
    (function() {
       mEnemieWeaponsGroup = phaser.add.group();
       mEnemieWeaponsGroup.enableBody = true;
    })();
};