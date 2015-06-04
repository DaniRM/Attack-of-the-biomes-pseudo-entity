var EnemyWeapon = function(playerReference, worldReference, enemyReference) {
    //References
    var mWorldReference = worldReference;
    var mEnemyReference = enemyReference;
    var mPlayerReference = playerReference;
    
    //Enemy weapon variables
    var mEnemyWeaponsGroup = null;
    var mEnemyWeapon = [];
    var enemyWeapon = null;
    var weaponTime = 300;
    
    this.update = function() {
        //Physics
        phaser.physics.arcade.overlap(mEnemyWeapon, mPlayerReference, playerDie, null, this);
        phaser.physics.arcade.collide(mEnemyWeaponsGroup, mWorldReference, weaponDie, null, this);
        mEnemyReference.forEachAlive(function(enemy){
            createWeapons(enemy);
        },this);  
    };
    
    //Function for when weapon overlap with player
    var playerDie = function(enemyWeapon){ 
        mPlayerReference.health -= 3;
        enemyWeapon.kill();
    };
    
    //Function for when weapon collide with world
    var weaponDie = function(enemyWeapon){
        enemyWeapon.kill();
    };
    
    //Function for create weapons
    var createWeapons = function(enemy){ 
            
        if(phaser.time.now > weaponTime)
        {
            if (phaser.physics.arcade.distanceBetween(enemy, mPlayerReference) < 300)
            {
                enemyWeapon = mEnemyWeaponsGroup.create(enemy.x,enemy.y-20,'bullet');
                enablePhysics();
                
                enemyWeapon.rotation = phaser.physics.arcade.moveToObject(enemyWeapon, mPlayerReference, 250);
                
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