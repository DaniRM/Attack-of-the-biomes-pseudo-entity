var NormalEnemy = function(worldReference, playerReference) {
    //Reference
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    
    //Enemy variables
    var mEnemyGroup = null;
    var mEnemy = [];
    var enemy = null;
    var totalEnemies = 14;
    var posX = [560,830,1212,1550,1700,2115,2540,2685,2835,3150,3300,3450,3600,4062];
    
    
    this.getPhysicsReference = function() {
        return mEnemyGroup;  
    };
    
    this.update = function() {
        //Physics
        mEnemyGroup.forEachAlive(function(enemy){
            enemy.healthbar.x = enemy.x-40;
            enemy.healthbar.y = enemy.y-80;
            enemy.healthbar.width = (enemy.health / enemy.maxHealth) * 100;
        },this);  
        phaser.physics.arcade.collide(mEnemyGroup, mWorldReference);
        phaser.physics.arcade.collide(mSprite, mEnemy, killPlayer, null, this);
    };
    
    
    var killPlayer = function()
    {
    };
    
    //Function for create enemies
    var createEnemies = function(){  
         for (var i = 0; i < totalEnemies; i++) {
             
            enemy = mEnemyGroup.create(posX[i],450,'enemy');
             
            enemy.healthbar = phaser.add.sprite(enemy.x,enemy.y,'enemyHealthbar');
            enemy.maxHealth = 8;
            enemy.health = 8;
             
            enablePhysics();
            
            mEnemy.push(enemy);
         }
    };
    
    //Physics
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(mEnemy);
        enemy.body.bounce.x = 1;
        enemy.body.gravity.y = 300;
        enemy.body.collideWorldBounds = true;
        enemy.body.velocity.x = 50;
        enemy.body.velocity.y = 100;
        enemy.scale.setTo(1,1);
        enemy.anchor.setTo(0.5, 1);
    };
    
    (function() {
        //Enemy
       mEnemyGroup = phaser.add.group();
       mEnemyGroup.enableBody = true;
        
       createEnemies();
    })();
};