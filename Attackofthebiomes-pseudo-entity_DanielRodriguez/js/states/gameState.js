var GameState = function() {
    
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
    var mSuperHability = null;
    var mPlatform = null;
    var mScore = null;
    var mCoin = null;
    
    //Init for get parameters from menu
    this.init = function(playerParameters) {
        return player = playerParameters;
    };
    
    this.create = function() {
        enablePhysics();
        
        //Create game
        mWorld = new World(); 
        mScore = new Score();
        mPlayer = new Player(mWorld.getPhysicsReference(), player, mScore.getPhysicsReference());
        mCoin = new Coins(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(), mScore.getPhysicsReference());
        mEnemies = new NormalEnemy(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mBigEnemy = new bigEnemy(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mEnemyWeapon = new EnemyWeapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference());
        mBigEnemieWeapon = new bigEnemyWeapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mBigEnemy.getPhysicsReference());
        mWeapon = new Weapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mBigEnemy.getPhysicsReference(), mScore.getPhysicsReference());
        mLifePotion = new LifePotion(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(), mScore.getPhysicsReference());
        mManaPotion = new ManaPotion(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(), mScore.getPhysicsReference());
        mSuperHability = new SuperHability(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mBigEnemy.getPhysicsReference(),  mScore.getPhysicsReference());
        mPlatform = new Platform(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
    };
    
    this.update = function() {
        mScore.update();
        mPlayer.update();
        mEnemies.update();
        mBigEnemy.update();
        mWeapon.update();
        mEnemyWeapon.update();
        mBigEnemieWeapon.update();
        mLifePotion.update();
        mManaPotion.update();
        mSuperHability.update();
        mPlatform.update();
        mCoin.update();
    };
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);  
    };
};