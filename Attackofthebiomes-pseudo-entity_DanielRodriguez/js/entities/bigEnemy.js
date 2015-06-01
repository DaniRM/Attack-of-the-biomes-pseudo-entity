var bigEnemy = function(worldReference, playerReference) {
    var bigEnemy = null;
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var maxHealth = null;
    var health = null;
    var mSprite = playerReference;
    
    this.getPhysicsReference = function() {
        return bigEnemy;  
    };
    
    this.update = function() {
       
        bigEnemy.healthbar.x = bigEnemy.x-40;
        bigEnemy.healthbar.y = bigEnemy.y-80;
        bigEnemy.healthbar.width = (bigEnemy.health / bigEnemy.maxHealth) * 100;
   
        phaser.physics.arcade.collide(bigEnemy, mWorldReference);
        phaser.physics.arcade.collide(mSprite, bigEnemy, killPlayer, null, this);
    };
    
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(bigEnemy);
        bigEnemy.body.bounce.x = 1;
        bigEnemy.body.gravity.y = 300;
        bigEnemy.body.collideWorldBounds = true;
        bigEnemy.body.velocity.x = 50;
        bigEnemy.body.velocity.y = 100;
        bigEnemy.scale.setTo(1.5,1.5);
        bigEnemy.anchor.setTo(0.5, 1);
    };
    
    var killPlayer = function()
    {
        mSprite.health=mSprite.health-3;
    };
    
    (function() {
        bigEnemy = phaser.add.sprite(4677, phaser.world.height - 150, 'enemy');
        bigEnemy.healthbar = phaser.add.sprite(mSprite.x-40,mSprite.y-80,'enemyHealthbar');
        bigEnemy.maxHealth = 50;
        bigEnemy.health = 50;
        
        enablePhysics();
    })();
};