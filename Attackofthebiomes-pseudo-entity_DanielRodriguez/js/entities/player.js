var Player = function(worldReference) {
    var mSprite = null;
    var mWorldReference = worldReference;
    var mCursor = null;
    var mListeners = [];
    
    this.getPhysicsReference = function() {
        return mSprite;  
    };
    
    this.update = function() {
        phaser.physics.arcade.collide(mSprite, mWorldReference);
        
        mSprite.body.velocity.x = 0;

        if (mCursor.left.isDown)
        {
            onPressLeft();
        }
        else if (mCursor.right.isDown)
        {
            onPressRight();
        }
        else
        {
            onNoDirectionPressed();
        }

        if (mCursor.up.isDown)
        {
            onPressUp();
        }
    };
    
    this.registerListener = function(listener) {
        mListeners.push(listener);
    }
    
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(mSprite);
        mSprite.body.bounce.y = 0.2;
        mSprite.body.gravity.y = 300;
        mSprite.body.collideWorldBounds = true;    
    };
    
    var onPressLeft = function() {        
        mSprite.body.velocity.x = -150;
        mSprite.animations.play('left');
    };
    
    var onPressRight = function() {
        mSprite.body.velocity.x = 500;
        mSprite.animations.play('right');
    };
    
    var onPressUp = function() {
        mSprite.body.velocity.y = -100;   
    };
        
    var onNoDirectionPressed = function() {
        mSprite.animations.stop();
        mSprite.frame = 4;         
    };
    
    (function() {
        mSprite = phaser.add.sprite(32, phaser.world.height - 150, 'player');    
        mSprite.animations.add('right', [1, 2], 10, true);
        mSprite.animations.add('left', [3,4], 10, true);
        phaser.camera.follow(mSprite);
        mCursor = phaser.input.keyboard.createCursorKeys();
        
        enablePhysics();
    })();
};