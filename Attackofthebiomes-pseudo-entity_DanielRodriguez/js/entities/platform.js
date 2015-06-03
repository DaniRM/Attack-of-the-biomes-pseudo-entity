var Platform = function(worldReference, playerReference) {
    //References
    var mWorldReference = worldReference;
    var mPlayerReference = playerReference;
    
    //Life Potion Variables
    var mPlatformGroup = null;
    var mPlatform = [];
    var platform = null;
    var totalPlatforms = 6;
    var posX = [480,930,1660,2350,3100,3590];
    var posY = [450,450,450,390,450,450];
    
    this.update = function() {
        //Physics
        phaser.physics.arcade.collide(mPlatformGroup, mWorldReference);
        phaser.physics.arcade.overlap(mPlayerReference, mPlatform, playerUP, null, this);
    };
    
    //Function for when player take potion
    var playerUP = function(player, platform){
        mPlayerReference.body.velocity.y = -350; 
    };
    
    //Function for create manaPotions
    var createPlatforms = function(){  
         for (var i = 0; i < totalPlatforms; i++) {
            platform = mPlatformGroup.create(posX[i],posY[i],'desertplatform');
             
            mPlatform.push(platform);
             
            enablePhysics();
         }
    };
    
    //Physics
    var enablePhysics = function() { 
         phaser.physics.arcade.enable(mPlatform);
         platform.body.gravity.y = 300;
         platform.scale.setTo(0.5,0.5);
    };
    
    (function() {
        //Mana Potion
        mPlatformGroup = phaser.add.group();
        
        createPlatforms();
    })();
};