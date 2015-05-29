var SimpleEnemies = function(worldReference, playerReference) {
    var mEnemyGroup = null;
    var mEnemy = [];
    var enemy = null;
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var totalEnemies = 10;
    
    
    var minSpeed = -75;
    var maxSpeed = 75;
    var vx = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    var vy = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    
    this.update = function() {
        phaser.physics.arcade.collide(mEnemyGroup, mWorldReference);
        phaser.physics.arcade.collide(mSprite, mEnemy, killPlayer, null, this);
    };
    
    var createEnemies = function(){  
         for (var i = 0; i < totalEnemies; i++) {
            var x = phaser.world.randomX;
            enemy = mEnemyGroup.create(x,400,'enemy');
            enablePhysics();
            
            mEnemy.push(enemy);
         }
    };
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(mEnemy);
        enemy.body.bounce.x = 1;
        enemy.body.gravity.y = 300;
        enemy.body.collideWorldBounds = true;
        enemy.body.velocity.x = vx;
        enemy.body.velocity.y = vy;
        enemy.scale.setTo(1,1.5);
        enemy.anchor.setTo(0.5, 1);
        enemy.checkWorldBounds = true;
    };
    
    var killPlayer = function()
    {
        console.log("PLAYER DIE");  
    };
    
    (function() {
       mEnemyGroup = phaser.add.group();
       mEnemyGroup.enableBody = true;
       createEnemies();
    })();
};