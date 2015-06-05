var Weapon = function(playerReference, playerReference2, worldReference, enemyReference, bigEnemyReference, scoreReference , player, mode) {
    //References
    var mWorldReference = worldReference;
    var mEnemyReference = enemyReference;
    var mBigEnemyReference = bigEnemyReference;
    var mPlayerReference = playerReference;
    var mScoreReference = scoreReference;
    var mPlayerReference2 = playerReference2;
    
    //Variable for weapons
    var mWeaponGroup = null;
    var mWeapon = [];
    var weapon = null;
    var weaponTime = 300;
    
    var mWeaponGroup2 = null;
    var mWeapon2 = [];
    var weapon2 = null;
    
    //Cursor
    var mCursor = phaser.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    var mCursor2 = phaser.input.keyboard.addKey(Phaser.Keyboard.Q);
    
    this.update = function() {
        //Physics
        mWeaponGroup.forEachAlive(function(weapon){
            mEnemyReference.forEachAlive(function(enemy){
                phaser.physics.arcade.overlap(mWeapon, mEnemyReference, enemyDie, null, this);
            },this);
        },this);
        phaser.physics.arcade.overlap(mWeapon, mBigEnemyReference, bigEnemyDie, null, this);
        phaser.physics.arcade.collide(mWeaponGroup, mWorldReference, weaponDie, null, this);
        
        if(mode == 1)
        {
            mWeaponGroup2.forEachAlive(function(weapon2){
                mEnemyReference.forEachAlive(function(enemy){
                    phaser.physics.arcade.overlap(mWeapon2, mEnemyReference, enemyDie2, null, this);
                },this);
            },this);
            phaser.physics.arcade.overlap(mWeapon2, mBigEnemyReference, bigEnemyDie2, null, this);
            phaser.physics.arcade.collide(mWeaponGroup2, mWorldReference, weaponDie2, null, this);
        }
        //Cursor
        if(mCursor.isDown)
        {
            createWeapons();
        }
        
          
        if(mode == 1)
        {
            if(mCursor2.isDown)
            {
                createWeapons2();
            }
        }
    };
    
    //Function for kill weapon when it collide with the world
    var weaponDie = function(weapon){
        weapon.kill();  
    };
    
    var weaponDie2 = function(weapon2){
        weapon2.kill();  
    };
    
    //Function for kill weapon and big enemy when it hasn't life
    var bigEnemyDie = function(weapon, enemy){
        enemy.health -= 1;
        if(enemy.health <= 0)
         {
             enemy.kill();
             enemy.healthbar.kill();
             mScoreReference.score+=50;
             var parametersToSend = mScoreReference.score;
             phaser.state.start('final',true, false, parametersToSend);
         }
         weapon.kill(); 
    };
    
    var bigEnemyDie2 = function(weapon2, enemy){
        enemy.health -= 1;
        if(enemy.health <= 0)
         {
             enemy.kill();
             enemy.healthbar.kill();
             mScoreReference.score+=50;
             var parametersToSend = mScoreReference.score;
             phaser.state.start('final',true, false, parametersToSend);
         }
         weapon2.kill(); 
    };
    
    //Function for kill weapon and big enemy when it hasn't life
    var enemyDie = function(weapon, enemy){
         enemy.health -= 1;
         if(enemy.health <= 0)
         {
             enemy.kill();
             enemy.healthbar.kill();
             mScoreReference.score+=8;
         }
         weapon.kill();
    };
    
     var enemyDie2 = function(weapon2, enemy){
         enemy.health -= 1;
         if(enemy.health <= 0)
         {
             enemy.kill();
             enemy.healthbar.kill();
             mScoreReference.score+=8;
         }
         weapon2.kill();
    };
    
    //Function for create weapons
    var createWeapons = function(){ 
        if(phaser.time.now > weaponTime)
        {
            weapon = mWeaponGroup.create(mPlayerReference.x+40,mPlayerReference.y+20, player[0].weapon);
                
            enablePhysics();
            
            mWeapon.push(weapon);
            
            weaponTime = phaser.time.now + 200;  
        }      
    };
    
     var createWeapons2 = function(){ 
        if(phaser.time.now > weaponTime)
        {
            weapon2 = mWeaponGroup2.create(mPlayerReference2.x+40,mPlayerReference2.y+20, player[1].weapon);
                
            enablePhysics2();
            
            mWeapon2.push(weapon2);
            
            weaponTime = phaser.time.now + 200;       
        }      
    };
    
    var enablePhysics = function() {  
        phaser.physics.arcade.enable(mWeapon);
        weapon.body.outOfBoundsKill = true;
        weapon.body.velocity.x = 700;
        weapon.checkWorldBounds = true;
    };
    
     var enablePhysics2 = function() {  
        phaser.physics.arcade.enable(mWeapon2);
        weapon2.body.outOfBoundsKill = true;
        weapon2.body.velocity.x = 700;
        weapon2.checkWorldBounds = true;
    };
     
    (function() {
       mWeaponGroup = phaser.add.group();
       mWeaponGroup.enableBody = true;
       
       if(mode == 1)
       {
           mWeaponGroup2 = phaser.add.group();
           mWeaponGroup2.enableBody = true;
       }
    })();
};