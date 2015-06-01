var GameState = function() {
    var mSelf = this;
    var mSelf2 = this;
    var mWorld = null;   
    var mMenu = null;
    var mPlayer = null;
    var mEnemies = null;
    var mWeapon = null;
    
    this.init = function(playerParameters) {
        return player = playerParameters;
    };
    
    this.create = function() {
        enablePhysics();

        mWorld = new World(); 
        mPlayer = new Player(mWorld.getPhysicsReference(), player);
        mEnemies = new Enemies(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mWeapon = new Weapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference());

        mPlayer.registerListener(mSelf);
        mWeapon.registerListener(mSelf2);
    };
    
    this.update = function() {               
        mEnemies.update();
        mPlayer.update();
        mWeapon.update();
    };
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);  
    };
};