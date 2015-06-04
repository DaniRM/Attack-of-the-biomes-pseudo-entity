var LifePotion = function(worldReference, playerReference, scoreReference) {
    //References
    var mWorldReference = worldReference;
    var mPlayerReference = playerReference;
    var mScoreReference = scoreReference;
    
    //Life Potion Variables
    var mLifePotionGroup = null;
    var mLifePotion = [];
    var lifepotion = null;
    var mLifePotionButton = null;
    var lifeTime = 2000;
    var quantityPotions = 0;
    var labelPotions = null;
    var totalPotions = 3;
    var posX = [712,1440,2460];
    var posY = [190,450,450];
    
    //Cursor
    var mCursor = phaser.input.keyboard.addKey(Phaser.Keyboard.N);
    
    this.update = function() {
        //Update label
        labelPotions.text = quantityPotions;
        
        //Cursor
        if(mCursor.isDown)
        {
            if(phaser.time.now > lifeTime)
            {
                useHealthPotion();
            }
        }
        
        //Physics
        phaser.physics.arcade.collide(mLifePotionGroup, mWorldReference);
        phaser.physics.arcade.overlap(mPlayerReference, mLifePotion, addPotion, null, this);
    };

    //Function for when player take potion
    var addPotion = function(player, lifepotion){
         quantityPotions++;
         lifepotion.kill();
         mScoreReference.score+=5;
    };
    
    //Function for when player want use one health potion
    var useHealthPotion = function(){
        if(mPlayerReference.health<=100 && quantityPotions>0)
        {
             mPlayerReference.health+=50;
            
            if(mPlayerReference.health>mPlayerReference.maxHealth)
            {
                mPlayerReference.health = mPlayerReference.maxHealth; 
            }
            quantityPotions--;
            labelPotions.text = quantityPotions;
            lifeTime = phaser.time.now + 2000; 
        }  
    };
    
    //Function for create lifePotions
    var createLifePotions = function(){  
         for (var i = 0; i < totalPotions; i++) {
            lifepotion = mLifePotionGroup.create(posX[i],posY[i],'lifepotion');
             
            mLifePotion.push(lifepotion);
             
            enablePhysics();
         }
    };
    
    //Physics
    var enablePhysics = function() { 
         phaser.physics.arcade.enable(mLifePotion);
         lifepotion.scale.setTo(0.5,0.5);
         lifepotion.body.gravity.y = 300;
    };
    
    (function() {
        //Life Potion
        mLifePotionGroup = phaser.add.group();
        
        //Button life potion
        mLifePotionButton = phaser.add.button(20, 20, 'lifepotion');
        mLifePotionButton.fixedToCamera = true;
        
        //Label life potion
        labelPotions = phaser.add.text(17, 25, quantityPotions, { font: '30px Geo', fill: '#000000' });
        mLifePotionButton.addChild(labelPotions);
        
        createLifePotions();
    })();
};