var GameState = function() {
    //Listeners
    var mSelfPlayer = this;
    var mSelfWeapon = this;
    var mSelfLifePotion = this;
    var mSelfManaPotion = this;
    
    //Variables for create game
    var mWorld = null;   
    var mPlayer = null;
    var mEnemies = null;
    var mWeapon = null;
    var mEnemyWeapon = null;
    var mBigEnemy = null;
    var mBigEnemieWeapon = null;
    var mLifePotion = null;
    var mManaPotion = null;
    
    //Init for get parameters from menu
    this.init = function(playerParameters) {
        return player = playerParameters;
    };
    
    this.create = function() {
        enablePhysics();
        
        //Create game
        mWorld = new World(); 
        mPlayer = new Player(mWorld.getPhysicsReference(), player);
        mEnemies = new NormalEnemy(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mBigEnemy = new bigEnemy(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mEnemyWeapon = new EnemyWeapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference());
        mBigEnemieWeapon = new bigEnemyWeapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mBigEnemy.getPhysicsReference());
        mWeapon = new Weapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mBigEnemy.getPhysicsReference());
        mLifePotion = new LifePotion(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mManaPotion = new ManaPotion(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        
        //Listeners
        mPlayer.registerListener(mSelfPlayer);
        mWeapon.registerListener(mSelfWeapon);
        mLifePotion.registerListener(mSelfLifePotion);
        mManaPotion.registerListener(mSelfManaPotion);
    };
    
    this.update = function() {
        mPlayer.update();
        mEnemies.update();
        mBigEnemy.update();
        mWeapon.update();
        mEnemyWeapon.update();
        mBigEnemieWeapon.update();
        mLifePotion.update();
        mManaPotion.update();
    };
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);  
    };
};