var SuperHability = function(playerReference, worldReference, enemyReference, bigEnemyReference, scoreReference) {
    //References
    var mWorldReference = worldReference;
    var mEnemyReference = enemyReference;
    var mBigEnemyReference = bigEnemyReference;
    var mPlayerReference = playerReference;
    var mScoreReference = scoreReference;
    
    //Variable for weapons
    var mWeaponGroup = null;
    var mWeapon = [];
    var weapon = null;
    var weaponTime = 300;
    var weaponRotation = 0;
    
    //Cursor
    var mCursor = phaser.input.keyboard.addKey(Phaser.Keyboard.M);
    
    this.update = function() {
        //Physics
        mWeaponGroup.forEachAlive(function(weapon){
            mEnemyReference.forEachAlive(function(enemy){
                phaser.physics.arcade.overlap(mWeapon, mEnemyReference, enemyDie, null, this);
            },this);
        },this);
        phaser.physics.arcade.overlap(mWeapon, mBigEnemyReference, bigEnemyDie, null, this);
        phaser.physics.arcade.collide(mWeaponGroup, mWorldReference, weaponDie, null, this);
        
        //Cursor
        if(mCursor.isDown)
        {
            if(playerReference.mana>40)
            {
                createWeapons();
                playerReference.mana-=60;
            }
        }
    };
    
    //Function for kill weapon when it collide with the world
    var weaponDie = function(weapon){
        weapon.kill();  
    };
    
    //Function for kill weapon and big enemy when it hasn't life
    var bigEnemyDie = function(weapon, enemy){
        enemy.health -= 8;
        if(enemy.health <= 0)
         {
             enemy.kill();
             enemy.healthbar.kill();
             mScoreReference.score+=50;
         }
         weapon.kill();
    };
    
    //Function for kill weapon and big enemy when it hasn't life
    var enemyDie = function(weapon, enemy){
         enemy.health -= 8;
         if(enemy.health <= 0)
         {
             enemy.kill();
             enemy.healthbar.kill();
             mScoreReference.score+=8;
         }
         weapon.kill();
    };
    
    //Function for create weapons
    var createWeapons = function(){ 
        if(phaser.time.now > weaponTime)
        {
            for(i=0;i<6;i++)
            {
                weapon = mWeaponGroup.create(mPlayerReference.x+20,mPlayerReference.y+20,'superHability1');

                enablePhysics();

                mWeapon.push(weapon);

                weaponTime = phaser.time.now + 200; 
            }
        }      
    };
    
    var enablePhysics = function() {  
        phaser.physics.arcade.enable(mWeapon);
        weapon.body.outOfBoundsKill = true;
        weapon.body.velocity.x = 700;
        weapon.checkWorldBounds = true;
        weapon.rotation = weaponRotation;
        phaser.physics.arcade.velocityFromRotation(weaponRotation, 700, weapon.body.velocity);
        weaponRotation += 45;
    };
     
    (function() {
       mWeaponGroup = phaser.add.group();
       mWeaponGroup.enableBody = true;
    })();
};