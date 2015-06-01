var Player = function(worldReference, playerParameters) {
    var mSprite = null;
    var mWorldReference = worldReference;
    var mCursor = null;
    var mListeners = [];
    var healthbar = null;
    var health = null;
    var mana = null;
    var maxHealth = null;
    var maxMana = null;
    var healthLabel = null; 
    
    this.getPhysicsReference = function() {
        return mSprite; 
    };
    
    this.update = function() {
        phaser.physics.arcade.collide(mSprite, mWorldReference);
        mSprite.body.velocity.x = 0;
        mSprite.healthbar.x = mSprite.x-40;
        mSprite.healthbar.y = mSprite.y-50;
        mSprite.healthLabel.x = mSprite.x+10;
        mSprite.healthLabel.y = mSprite.y-33;
        mSprite.healthLabel.text = mSprite.health +'/'+ mSprite.maxHealth;
        mSprite.healthbar.width = (mSprite.health / mSprite.maxHealth) * 100;
        mSprite.manabar.x = mSprite.x-40;
        mSprite.manabar.y = mSprite.y-30;
        mSprite.manabar.width = (mSprite.mana / mSprite.maxMana) * 100;
        
        if(mSprite.health <= 0)
        {
            mSprite.kill();
            mSprite.healthbar.kill();
            mSprite.manabar.kill();
            phaser.world.remove(mSprite.healthLabel);
        }
        
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
        mSprite.body.velocity.x = 150;
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
        mSprite = phaser.add.sprite(32, phaser.world.height - 150, playerParameters.icon);
        mSprite.healthbar = phaser.add.sprite(mSprite.x-40,mSprite.y-80,'healthbar');
        mSprite.manabar = phaser.add.sprite(mSprite.x-40,mSprite.y-30,'manabar');
        mSprite.maxHealth = playerParameters.health;
        mSprite.health = playerParameters.health;
        mSprite.healthLabel = phaser.add.text(mSprite.x-20, mSprite.y-40,  mSprite.health +'/'+ mSprite.maxHealth, { font: '10px Geo', fill: '#ffffff' });
        mSprite.healthLabel.anchor.setTo(0.5, 0.5);
        mSprite.maxMana = playerParameters.mana;
        mSprite.mana = playerParameters.mana;
        
        mSprite.animations.add('right', [1, 2], 10, true);
        mSprite.animations.add('left', [3,4], 10, true);
        phaser.camera.follow(mSprite);
        mCursor = phaser.input.keyboard.createCursorKeys();
        
        enablePhysics();
    })();
};