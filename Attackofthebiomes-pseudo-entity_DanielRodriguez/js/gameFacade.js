var GameFacade = function() {
    var mSelf = this;
    var mLoad = null;
    var mWorld = null;
    var mPlayer = null;    
    var mStars = null;
    var mScore = null;
    
    this.update = function() {   
        mPlayer.update();
    };
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);  
    };
        
    (function() {      
        enablePhysics();
        
        mWorld = new World();        
        mPlayer = new Player(mWorld.getPhysicsReference());
        
        mPlayer.registerListener(mSelf);
    })();
};