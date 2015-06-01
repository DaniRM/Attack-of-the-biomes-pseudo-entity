var bigEnemyWeapon = function(player, worldReference, bigEnemieReference) {
    var mEnemieWeaponsGroup = null;
    var mEnemieWeapon = [];
    var mWorldReference = worldReference;
    var mBigEnemieReference = bigEnemieReference;
    var enemyWeapon = null;
    var mPlayer = player;
    var weaponTime = 300;
    
    this.update = function() {
        phaser.physics.arcade.overlap(mEnemieWeapon, mPlayer, playerDie, null, this);
        phaser.physics.arcade.collide(mEnemieWeaponsGroup, mWorldReference, weaponDie, null, this);
        createWeapons();
    };
    
    var playerDie = function(enemyWeapon){ 
        mPlayer.health -= 2;
        enemyWeapon.kill();
    };
    
    var weaponDie = function(enemyWeapon){
        enemyWeapon.kill();
    };

    var createWeapons = function(){ 
            
        if(phaser.time.now > weaponTime)
        {
            if (phaser.physics.arcade.distanceBetween(mBigEnemieReference, mPlayer) < 300)
            {
                enemyWeapon = mEnemieWeaponsGroup.create(mBigEnemieReference.x,mBigEnemieReference.y-20,'bullet');
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