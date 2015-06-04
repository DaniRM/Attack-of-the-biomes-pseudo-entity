var bigEnemyWeapon = function(playerReference, worldReference, bigEnemyReference) {
    //References
    var mWorldReference = worldReference;
    var mBigEnemyReference = bigEnemyReference;
    var mPlayerReference = playerReference;
    
    //Big enemt weapon variables
    var mEnemyWeaponsGroup = null;
    var mEnemyWeapon = [];
    var enemyWeapon = null;
    var weaponTime = 300;
    
    this.update = function() {
        //Physics
        phaser.physics.arcade.overlap(mEnemyWeapon, mPlayerReference, playerDie, null, this);
        phaser.physics.arcade.collide(mEnemyWeaponsGroup, mWorldReference, weaponDie, null, this);
        createWeapons();
    };
    
    //Function for when weapon collide with player
    var playerDie = function(enemyWeapon){ 
        mPlayerReference.health -= 3;
        enemyWeapon.kill();
    };
    
    //Function for when weapon collide with world
    var weaponDie = function(enemyWeapon){
        enemyWeapon.kill();
    };
    
    //Function for create big enemy weapons
    var createWeapons = function(){ 
            
        if(phaser.time.now > weaponTime)
        {
            if (phaser.physics.arcade.distanceBetween(mBigEnemyReference, mPlayerReference) < 300)
            {
                enemyWeapon = mEnemyWeaponsGroup.create(mBigEnemyReference.x,mBigEnemyReference.y-20,'bullet');
                
                enablePhysics();
                
                enemyWeapon.rotation = phaser.physics.arcade.moveToObject(enemyWeapon, mPlayerReference, 200);
                
                mEnemyWeapon.push(enemyWeapon); 
                
                weaponTime = phaser.time.now + 500; 
            }       
        }   
    };
    
    //Physics
    var enablePhysics = function() {  
        phaser.physics.arcade.enable(mEnemyWeapon);
        enemyWeapon.body.outOfBoundsKill = true;
        enemyWeapon.checkWorldBounds = true;
    };
     
    (function() {
       mEnemyWeaponsGroup = phaser.add.group();
       mEnemyWeaponsGroup.enableBody = true;
    })();
};