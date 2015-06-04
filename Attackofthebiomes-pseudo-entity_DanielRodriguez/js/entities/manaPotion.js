var ManaPotion = function(worldReference, playerReference, scoreReference) {
    //References
    var mWorldReference = worldReference;
    var mPlayerReference = playerReference;
    var mScoreReference = scoreReference;
    
    //Life Potion Variables
    var mManaPotionGroup = null;
    var mManaPotion = [];
    var manapotion = null;
    var mManaPotionButton = null;
    var manaTime = 2000;
    var quantityPotions = 0;
    var labelPotions = null;
    var totalPotions = 3;
    var posX = [712,1870,3247];
    var posY = [450,450,450];
    
    //Cursor
    var mCursor = phaser.input.keyboard.addKey(Phaser.Keyboard.B);
    
    this.update = function() {
        //Update label
        labelPotions.text = quantityPotions;
        
        //Cursor
        if(mCursor.isDown)
        {
            if(phaser.time.now > manaTime)
            {
                useManaPotion();
            }
        }
        
        //Physics
        phaser.physics.arcade.collide(mManaPotionGroup, mWorldReference);
        phaser.physics.arcade.overlap(mPlayerReference, mManaPotion, addPotion, null, this);
    };
    
    //Function for when player take potion
    var addPotion = function(player, manapotion){
         quantityPotions++;
         manapotion.kill();
         mScoreReference.score+=5;
    };
    
    //Function for when player want use one mana potion
    var useManaPotion = function(){
        if(mPlayerReference.mana<=100 && quantityPotions>0)
        {
             mPlayerReference.mana+=50;
            
            if(mPlayerReference.mana>mPlayerReference.maxMana)
            {
                mPlayerReference.mana = mPlayerReference.maxMana; 
            }
            quantityPotions--;
            labelPotions.text = quantityPotions;
            manaTime = phaser.time.now + 2000; 
        }  
    };
    
    //Function for create manaPotions
    var createLifePotions = function(){  
         for (var i = 0; i < totalPotions; i++) {
            manapotion = mManaPotionGroup.create(posX[i],posY[i],'manapotion');
             
            mManaPotion.push(manapotion);
             
            enablePhysics();
         }
    };
    
    //Physics
    var enablePhysics = function() { 
         phaser.physics.arcade.enable(mManaPotion);
         manapotion.scale.setTo(0.5,0.5);
         manapotion.body.gravity.y = 300;
    };
    
    (function() {
        //Mana Potion
        mManaPotionGroup = phaser.add.group();
        
        //Button mana potion
        mManaPotionButton = phaser.add.button(80, 20, 'manapotion');
        mManaPotionButton.fixedToCamera = true;
        
        //Label mana potion
        labelPotions = phaser.add.text(17, 25, quantityPotions, { font: '30px Geo', fill: '#000000' });
        mManaPotionButton.addChild(labelPotions);
        
        createLifePotions();
    })();
};