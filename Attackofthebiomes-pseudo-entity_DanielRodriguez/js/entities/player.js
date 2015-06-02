var Player = function(worldReference, playerParameters) {
    //References
    var mWorldReference = worldReference;
    
    //Variables for player
    var mSprite = null;
    //health
    var healthbar = null;
    var health = null;
    var maxHealth = null;
    var healthLabel = null; 
    //mana
    var manabar = null;
    var mana = null;
    var maxMana = null;
    var manaLabel = null;
    
    //Cursor
    var mCursor = null;
    
    //Listenere
    var mListeners = [];
    
    
    this.getPhysicsReference = function() {
        return mSprite; 
    };
    
    this.update = function() {
        //Physics player
        phaser.physics.arcade.collide(mSprite, mWorldReference);
        mSprite.body.velocity.x = 0;
        
        //Health
        mSprite.healthbar.x = mSprite.x-25;
        mSprite.healthbar.y = mSprite.y-50;
        mSprite.healthLabel.x = mSprite.x+25;
        mSprite.healthLabel.y = mSprite.y-33;
        mSprite.healthLabel.text = mSprite.health +'/'+ mSprite.maxHealth;
        mSprite.healthbar.width = (mSprite.health / mSprite.maxHealth) * 100;
        
        //Mana
        mSprite.manabar.x = mSprite.x-25;
        mSprite.manabar.y = mSprite.y-30;
        mSprite.manaLabel.x = mSprite.x+25;
        mSprite.manaLabel.y = mSprite.y-12.5;
        mSprite.manaLabel.text = mSprite.mana +'/'+ mSprite.maxMana;
        mSprite.manabar.width = (mSprite.mana / mSprite.maxMana) * 100;
        
        if(mSprite.health <= 0)
        {
            mSprite.kill();
            mSprite.healthbar.kill();
            mSprite.manabar.kill();
            phaser.world.remove(mSprite.healthLabel);
            phaser.world.remove(mSprite.manaLabel);
        }
        
        //Cursors
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
    
    //Listener
    this.registerListener = function(listener) {
        mListeners.push(listener);
    }
    
    //Functions for cursors
    var onPressLeft = function() {        
        mSprite.body.velocity.x = -150;
        mSprite.animations.play('left');
    };
    
    var onPressRight = function() {
        mSprite.body.velocity.x = 150;
        mSprite.animations.play('right');
    };
    
    var onPressUp = function() {
        mSprite.body.velocity.y = -100;   
    };
        
    var onNoDirectionPressed = function() {
        mSprite.animations.stop();
        mSprite.frame = 0;         
    };
    
    //Physics
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(mSprite);
        mSprite.body.bounce.y = 0.2;
        mSprite.body.gravity.y = 300;
        mSprite.body.collideWorldBounds = true;    
    };
    
    (function() {
        //Player
        mSprite = phaser.add.sprite(32, phaser.world.height - 150, playerParameters.icon);
        
        //Player health
        mSprite.healthbar = phaser.add.sprite(mSprite.x-25,mSprite.y-50,'healthbarPlayer');
        mSprite.maxHealth = playerParameters.health;
        mSprite.health = playerParameters.health;
        mSprite.healthLabel = phaser.add.text(mSprite.x-20, mSprite.y-40,  mSprite.health +'/'+ mSprite.maxHealth, { font: '10px Geo', fill: '#ffffff' });
        mSprite.healthLabel.anchor.setTo(0.5, 0.5);
        
        //Player mana
        mSprite.manabar = phaser.add.sprite(mSprite.x-25,mSprite.y-30,'manabarPlayer');
        mSprite.maxMana = playerParameters.mana;
        mSprite.mana = playerParameters.mana;
        mSprite.manaLabel = phaser.add.text(mSprite.x-25, mSprite.y-20,  mSprite.mana +'/'+ mSprite.maxMana, { font: '10px Geo', fill: '#ffffff' });
        mSprite.manaLabel.anchor.setTo(0.5, 0.5);
        
        //Animations
        mSprite.animations.add('right', [1, 2], 10, true);
        mSprite.animations.add('left', [3,4], 10, true);
        
        //Cameras
        phaser.camera.follow(mSprite);
        
        //Cursor
        mCursor = phaser.input.keyboard.createCursorKeys();
        
        enablePhysics();
    })();
};