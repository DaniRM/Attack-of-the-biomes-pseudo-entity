var Platform = function(worldReference, playerReference, playerReference2, mode) {
    //References
    var mWorldReference = worldReference;
    var mPlayerReference = playerReference;
    var mPlayerReference2 = playerReference2;
    
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
        
        //if the two players mode is selected
        if(mode == 1){
            phaser.physics.arcade.overlap(mPlayerReference2, mPlatform, playerUP2, null, this);
        }
    };
    
    //Function for when player take potion
    var playerUP = function(player, platform){
        mPlayerReference.body.velocity.y = -350; 
    };
    
    //Function for when the second player take potion
    var playerUP2 = function(player, platform){
        mPlayerReference2.body.velocity.y = -350; 
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
    
    //Constructor
    (function() {
        //Mana Potion
        mPlatformGroup = phaser.add.group();
        
        createPlatforms();
    })();
};