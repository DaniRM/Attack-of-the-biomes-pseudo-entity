var GameState = function() {
    var mSelf = this;
    var mSelf2 = this;
    var mWorld = null;   
    var mMenu = null;
    var mPlayer = null;
    var mEnemies = null;
    var mWeapon = null;
    var mEnemieWeapon = null;
    var mBigEnemy = null;
    var mBigEnemieWeapon = null;
    
    this.init = function(playerParameters) {
        return player = playerParameters;
    };
    
    this.create = function() {
        enablePhysics();

        mWorld = new World(); 
        mPlayer = new Player(mWorld.getPhysicsReference(), player);
        mEnemies = new NormalEnemies(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mBigEnemy = new bigEnemy(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mEnemieWeapon = new EnemieWeapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference());
        mBigEnemieWeapon = new bigEnemyWeapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mBigEnemy.getPhysicsReference());
        mWeapon = new Weapon(mPlayer.getPhysicsReference(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mBigEnemy.getPhysicsReference());
        
      

        mPlayer.registerListener(mSelf);
        mWeapon.registerListener(mSelf2);
    };
    
    this.update = function() {               
        mEnemies.update();
        mBigEnemy.update();
        mPlayer.update();
        mWeapon.update();
        mEnemieWeapon.update();
        mBigEnemieWeapon.update();
    };
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);  
    };
};