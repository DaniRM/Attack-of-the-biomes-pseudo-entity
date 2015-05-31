var GameState = function() {
    var mSelf = this;
    var mWorld = null;   
    var mMenu = null;
    var mPlayer = null;
    var mEnemies = null;
    var mWeapon = null;
    
    this.create = function() {
        enablePhysics();

        mWorld = new World(); 
        mPlayer = new Player(mWorld.getPhysicsReference());
        mEnemies = new SimpleEnemies(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mWeapon = new Weapon(mEnemies.getPhysicsReference(), mPlayer.getPhysicsReference());
        
        mPlayer.registerListener(mSelf);
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