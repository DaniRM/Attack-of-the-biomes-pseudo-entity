var Coins = function(worldReference, playerReference, scoreReference, playerReference2, mode) {
    //Reference
    var mWorldReference = worldReference;
    var mPlayerReference = playerReference;
    var mScoreReference = scoreReference;
    var mPlayerReference2 = playerReference2;
    
    //Enemy variables
    var mCoinGroup = null;
    var mCoin = [];
    var coin = null;
    var totalCoins = 14;
    var posX = [560,830,1212,1550,1700,2115,2540,2685,2835,3150,3300,3450,3600,4062];
    
    
    this.getPhysicsReference = function() {
        return mCoinGroup;  
    };
    
    this.update = function() {
        //Physics
        phaser.physics.arcade.collide(mCoinGroup, mWorldReference);
        phaser.physics.arcade.overlap(mPlayerReference, mCoin, upScore, null, this);
        
        //Physics for when two players mode is selected
        if(mode == 1){
            phaser.physics.arcade.overlap(mPlayerReference2, mCoin, upScore2, null, this);
        }
    };
    
    //Function fow up score when player take coin
    var upScore = function(player, coin){
        takecoin = phaser.add.audio('takecoin');
        takecoin.play();
        mScoreReference.score+=5;
        coin.kill();
    };
    
    //Function for up score when player two take coin
    var upScore2 = function(player, coin){
        takecoin = phaser.add.audio('takecoin');
        takecoin.play();
        mScoreReference.score+=5;
        coin.kill();
    };
    
    //Function for create enemies
    var createCoins = function(){  
         for (var i = 0; i < totalCoins; i++) {
             
            coin = mCoinGroup.create(posX[i],450,'coin');
             
            enablePhysics();
            
            mCoin.push(coin);
         }
    };
    
    //Physics
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(mCoin);
        coin.body.bounce.x = 1;
        coin.body.gravity.y = 300;
        coin.body.collideWorldBounds = true;
        coin.scale.setTo(1,1);
        coin.anchor.setTo(0.5, 1);
    };
    
    //Constructor
    (function() {
        //Enemy
       mCoinGroup = phaser.add.group();
       mCoinGroup.enableBody = true;
        
       createCoins();
    })();
};