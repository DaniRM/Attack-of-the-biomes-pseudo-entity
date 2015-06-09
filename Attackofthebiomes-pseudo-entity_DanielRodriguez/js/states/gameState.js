//State for create all the game (World, Player, Weapons, Coins...)
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
    this.init = function(playerParameters, playerParameters2, mode) {
        onePlayer = [playerParameters];
        twoPlayer = [playerParameters, playerParameters2];
        modeGame = mode;
    };
    
    //Function for update the window size
    this.shutdown  = function() {
        phaser.world.setBounds(0,0,800,600);
    };
    
    this.create = function() {
        //Physics
        enablePhysics();
        
        //Music for the game
        music = phaser.add.audio('fondo');
        music.loop = true;
        music.play();
        
        //If one player is selected else if two players is selected
        if(modeGame == 0)
        {
            //Create game
            mWorld = new World(); 
            mScore = new Score();
            mPlayer = new Player(mWorld.getPhysicsReference(), onePlayer, mScore.getPhysicsReference(), modeGame);
            mCoin = new Coins(mWorld.getPhysicsReference(), mPlayer.getPhysicsReferenceOnePlayer(), mScore.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mEnemies = new NormalEnemy(mWorld.getPhysicsReference(), mPlayer.getPhysicsReferenceOnePlayer(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mBigEnemy = new bigEnemy(mWorld.getPhysicsReference(), mPlayer.getPhysicsReferenceOnePlayer(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mEnemyWeapon = new EnemyWeapon(mPlayer.getPhysicsReferenceOnePlayer(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mBigEnemieWeapon = new bigEnemyWeapon(mPlayer.getPhysicsReferenceOnePlayer(), mWorld.getPhysicsReference(), mBigEnemy.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mWeapon = new Weapon(mPlayer.getPhysicsReferenceOnePlayer(), mPlayer.getPhysicsReferenceTwoPlayer(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mBigEnemy.getPhysicsReference(), mScore.getPhysicsReference(), onePlayer, modeGame);
            mLifePotion = new LifePotion(mWorld.getPhysicsReference(),mPlayer.getPhysicsReferenceOnePlayer(), mScore.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mManaPotion = new ManaPotion(mWorld.getPhysicsReference(),mPlayer.getPhysicsReferenceOnePlayer(), mScore.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mSuperHability = new SuperHability(mPlayer.getPhysicsReferenceOnePlayer(), mPlayer.getPhysicsReferenceTwoPlayer(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mBigEnemy.getPhysicsReference(), mScore.getPhysicsReference(), modeGame);
            mPlatform = new Platform(mWorld.getPhysicsReference(), mPlayer.getPhysicsReferenceOnePlayer());
        }else if(modeGame == 1)
        {
             //Create game
            mWorld = new World(); 
            mScore = new Score();
            mPlayer = new Player(mWorld.getPhysicsReference(), twoPlayer, mScore.getPhysicsReference(), modeGame);
            mCoin = new Coins(mWorld.getPhysicsReference(), mPlayer.getPhysicsReferenceOnePlayer(), mScore.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mEnemies = new NormalEnemy(mWorld.getPhysicsReference(), mPlayer.getPhysicsReferenceOnePlayer(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mBigEnemy = new bigEnemy(mWorld.getPhysicsReference(), mPlayer.getPhysicsReferenceOnePlayer(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mEnemyWeapon = new EnemyWeapon(mPlayer.getPhysicsReferenceOnePlayer(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mBigEnemieWeapon = new bigEnemyWeapon(mPlayer.getPhysicsReferenceOnePlayer(), mWorld.getPhysicsReference(), mBigEnemy.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mWeapon = new Weapon(mPlayer.getPhysicsReferenceOnePlayer(), mPlayer.getPhysicsReferenceTwoPlayer(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mBigEnemy.getPhysicsReference(), mScore.getPhysicsReference(), twoPlayer, modeGame);
            mLifePotion = new LifePotion(mWorld.getPhysicsReference(),mPlayer.getPhysicsReferenceOnePlayer(), mScore.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mManaPotion = new ManaPotion(mWorld.getPhysicsReference(),mPlayer.getPhysicsReferenceOnePlayer(), mScore.getPhysicsReference(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
            mSuperHability = new SuperHability(mPlayer.getPhysicsReferenceOnePlayer(), mPlayer.getPhysicsReferenceTwoPlayer(), mWorld.getPhysicsReference(), mEnemies.getPhysicsReference(), mBigEnemy.getPhysicsReference(), mScore.getPhysicsReference(), modeGame);
            mPlatform = new Platform(mWorld.getPhysicsReference(), mPlayer.getPhysicsReferenceOnePlayer(), mPlayer.getPhysicsReferenceTwoPlayer(), modeGame);
        }
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