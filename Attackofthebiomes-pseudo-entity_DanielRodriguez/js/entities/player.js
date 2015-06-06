var Player = function(worldReference, playerParameters, scoreReference, modeGame) {
    //References
    var mWorldReference = worldReference;
    var mScoreReference = scoreReference;
    
    //Variables for player
    var mSprite = [];
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
    var wasd = {
            up:phaser.input.keyboard.addKey(Phaser.Keyboard.W),
            left:phaser.input.keyboard.addKey(Phaser.Keyboard.A),
            right:phaser.input.keyboard.addKey(Phaser.Keyboard.D)
    };
    
    this.getPhysicsReferenceOnePlayer = function() {
        return mSprite[0]; 
    };
    
    this.getPhysicsReferenceTwoPlayer = function() {
        return mSprite[1]; 
    };
    
    this.update = function() {
        //Physics player
        for(var i=0; i<playerParameters.length; i++){
            phaser.physics.arcade.collide(mSprite[i], mWorldReference);
            mSprite[i].body.velocity.x = 0;

            //Health
            mSprite[i].healthbar.x = mSprite[i].x-25;
            mSprite[i].healthbar.y = mSprite[i].y-50;
            mSprite[i].healthLabel.x = mSprite[i].x+25;
            mSprite[i].healthLabel.y = mSprite[i].y-33;
            mSprite[i].healthLabel.text = mSprite[i].health +'/'+ mSprite[i].maxHealth;
            mSprite[i].healthbar.width = (mSprite[i].health / mSprite[i].maxHealth) * 100;

            //Mana
            mSprite[i].manabar.x = mSprite[i].x-25;
            mSprite[i].manabar.y = mSprite[i].y-30;
            mSprite[i].manaLabel.x = mSprite[i].x+25;
            mSprite[i].manaLabel.y = mSprite[i].y-12.5;
            mSprite[i].manaLabel.text = mSprite[i].mana +'/'+ mSprite[i].maxMana;
            mSprite[i].manabar.width = (mSprite[i].mana / mSprite[i].maxMana) * 100;
            
            if(modeGame == 0)
            {
                if(mSprite[i].health <= 0)
                {
                    music.stop();
                    playerdie = phaser.add.audio('playerdie');
                    playerdie.play();
                    mSprite[i].kill();
                    mSprite[i].healthbar.kill();
                    mSprite[i].manabar.kill();
                    phaser.world.remove(mSprite[i].healthLabel);
                    phaser.world.remove(mSprite[i].manaLabel);
                    var parametersToSend = mScoreReference.score;
                    phaser.state.start('final',true, false, parametersToSend);
                }
            }
            
            if(modeGame == 1)
            {
                if(mSprite[0].health <= 0)
                {
                    mSprite[0].kill();
                    mSprite[0].healthbar.kill();
                    mSprite[0].manabar.kill();
                    phaser.world.remove(mSprite[0].healthLabel);
                    phaser.world.remove(mSprite[0].manaLabel);
                    phaser.camera.follow(mSprite[1]);
                }
                
                if(mSprite[1].health <= 0)
                {
                    mSprite[1].kill();
                    mSprite[1].healthbar.kill();
                    mSprite[1].manabar.kill();
                    phaser.world.remove(mSprite[1].healthLabel);
                    phaser.world.remove(mSprite[1].manaLabel);
                }
                
                if(mSprite[0].health <= 0 && mSprite[1].health <= 0)
                {
                    music.stop();
                    playerdie = phaser.add.audio('playerdie');
                    playerdie.play();
                    var parametersToSend = mScoreReference.score;
                    phaser.state.start('final',true, false, parametersToSend);
                }
            }
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
            if(mSprite[0].body.blocked.down)
            {
                onPressUp();
            }
        }
        
        if(modeGame == 1)
        {
            if (wasd.left.isDown)
            {
                onPressLeft2();
            }
            else if (wasd.right.isDown)
            {
                onPressRight2();
            }
            else
            {
                onNoDirectionPressed2();
            }

            if (wasd.up.isDown)
            {
                if(mSprite[1].body.blocked.down)
                {
                    onPressUp2();
                }
            }
        }
    };
    
    //Functions for cursors
    var onPressLeft = function() {        
        mSprite[0].body.velocity.x = -150;
        mSprite[0].animations.play('left');
    };
    
    var onPressRight = function() {
        mSprite[0].body.velocity.x = 150;
        mSprite[0].animations.play('right');
    };
    
    var onPressUp = function() {
        jumpSound = phaser.add.audio('jump');
        jumpSound.play();
        mSprite[0].body.velocity.y = -200; 
        
    };
        
    var onNoDirectionPressed = function() {
        mSprite[0].animations.stop();
        mSprite[0].frame = 0;         
    };
    
    var onPressLeft2 = function() {        
        mSprite[1].body.velocity.x = -150;
        mSprite[1].animations.play('left');
    };
    
    var onPressRight2 = function() {
        mSprite[1].body.velocity.x = 150;
        mSprite[1].animations.play('right');
    };
    
    var onPressUp2 = function() {
        jumpSound = phaser.add.audio('jump');
        jumpSound.play();
        mSprite[1].body.velocity.y = -200; 
    };
        
    var onNoDirectionPressed2 = function() {
        mSprite[1].animations.stop();
        mSprite[1].frame = 0;         
    };
    
    //Physics
    var enablePhysics = function() { 
         for(var i=0; i<playerParameters.length; i++){
            phaser.physics.arcade.enable(mSprite[i]);
            mSprite[i].body.gravity.y = 200;
            mSprite[i].body.collideWorldBounds = true;    
         }
    };
    
    (function() {
        for(var i=0; i<playerParameters.length; i++){
            //Player
            mSprite[i] = phaser.add.sprite(32, phaser.world.height - 150, playerParameters[i].icon);

            //Player health
            mSprite[i].healthbar = phaser.add.sprite(mSprite[i].x-25,mSprite[i].y-50,'healthbarPlayer');
            mSprite[i].maxHealth = playerParameters[i].health;
            mSprite[i].health = playerParameters[i].health;
            mSprite[i].healthLabel = phaser.add.text(mSprite[i].x-20, mSprite[i].y-40,  mSprite[i].health +'/'+ mSprite[i].maxHealth, { font: '12px Charlemagne Std', fill: '#ffffff' });
            mSprite[i].healthLabel.anchor.setTo(0.5, 0.5);

            //Player mana
            mSprite[i].manabar = phaser.add.sprite(mSprite[i].x-25,mSprite[i].y-30,'manabarPlayer');
            mSprite[i].maxMana = playerParameters[i].mana;
            mSprite[i].mana = playerParameters[i].mana;
            mSprite[i].manaLabel = phaser.add.text(mSprite[i].x-25, mSprite[i].y-20,  mSprite[i].mana +'/'+ mSprite[i].maxMana, { font: '12px Charlemagne Std', fill: '#ffffff' });
            mSprite[i].manaLabel.anchor.setTo(0.5, 0.5);

            //Animations
            mSprite[i].animations.add('right', [1, 2], 10, true);
            mSprite[i].animations.add('left', [3,4], 10, true);
        }
        //Cameras
        phaser.camera.follow(mSprite[0]);
        
        //Cursor
        mCursor = phaser.input.keyboard.createCursorKeys();
        
        enablePhysics();
    })();
};