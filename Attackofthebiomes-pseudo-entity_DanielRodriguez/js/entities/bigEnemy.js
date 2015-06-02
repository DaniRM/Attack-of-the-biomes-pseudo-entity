var bigEnemy = function(worldReference, playerReference) {
    //References
    var mWorldReference = worldReference;
    var mPlayerReference = playerReference;
    
    //Big Enemy Variables
    var bigEnemy = null;
    var maxHealth = null;
    var health = null;
    
    
    this.getPhysicsReference = function() {
        return bigEnemy;  
    };
    
    this.update = function() {
       //Physics
        bigEnemy.healthbar.x = bigEnemy.x-50;
        bigEnemy.healthbar.y = bigEnemy.y-120;
        bigEnemy.healthbar.width = (bigEnemy.health / bigEnemy.maxHealth) * 100;
   
        phaser.physics.arcade.collide(bigEnemy, mWorldReference);
        phaser.physics.arcade.collide(mPlayerReference, bigEnemy, killPlayer, null, this);
    };
    
    //Function when big enemy collide with player
    var killPlayer = function()
    {
    };
    
    //Physics
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(bigEnemy);
        bigEnemy.body.bounce.x = 1;
        bigEnemy.body.gravity.y = 300;
        bigEnemy.body.collideWorldBounds = true;
        bigEnemy.body.velocity.x = 50;
        bigEnemy.body.velocity.y = 100;
        bigEnemy.anchor.setTo(0.5, 1);
    };
    
    (function() {
        bigEnemy = phaser.add.sprite(4677, phaser.world.height - 150, 'desertBigEnemy');
        bigEnemy.healthbar = phaser.add.sprite(bigEnemy.x-50,bigEnemy.y-120,'enemyHealthbar');
        bigEnemy.maxHealth = 80;
        bigEnemy.health = 80;
        
        enablePhysics();
    })();
};