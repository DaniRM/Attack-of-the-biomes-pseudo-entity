var Enemies = function(worldReference, playerReference) {
    var mEnemyGroup = null;
    var mEnemy = [];
    var enemy = null;
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var totalEnemies = 15;
    var posX = [560,830,1212,1550,1700,2115,2540,2685,2835,3150,3300,3450,3600,4062,4677];
    
    this.getPhysicsReference = function() {
        return mEnemyGroup;  
    };
    
    
    this.update = function() {
        phaser.physics.arcade.collide(mEnemyGroup, mWorldReference);
        phaser.physics.arcade.collide(mSprite, mEnemy, killPlayer, null, this);
    };
    
    var createEnemies = function(){  
         for (var i = 0; i < totalEnemies; i++) {
            var x = phaser.world.randomX;
            enemy = mEnemyGroup.create(posX[i],450,'enemy');
            enablePhysics();
            
            mEnemy.push(enemy);
         }
    };
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(mEnemy);
        enemy.body.bounce.x = 1;
        enemy.body.gravity.y = 300;
        enemy.body.collideWorldBounds = true;
        enemy.body.velocity.x = 100;
        enemy.body.velocity.y = 100;
        enemy.scale.setTo(1,1.5);
        enemy.anchor.setTo(0.5, 1);
    };
    
    var killPlayer = function()
    {
        playerReference.health=playerReference.health-3;
    };
    
    (function() {
       mEnemyGroup = phaser.add.group();
       mEnemyGroup.enableBody = true;
       createEnemies();
    })();
};