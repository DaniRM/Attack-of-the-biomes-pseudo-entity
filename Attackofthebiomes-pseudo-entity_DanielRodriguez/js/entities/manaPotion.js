var ManaPotion = function(worldReference, playerReference, scoreReference, playerReference2, mode) {
    //References
    var mWorldReference = worldReference;
    var mPlayerReference = playerReference;
    var mScoreReference = scoreReference;
    var mPlayerReference2 = playerReference2;
    
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
    
    var mManaPotionButton2 = null;
    var quantityPotions2 = 0;
    var labelPotions2 = null;
    
    //Cursor
    var mCursor = phaser.input.keyboard.addKey(Phaser.Keyboard.B);
    var mCursor2 = phaser.input.keyboard.addKey(Phaser.Keyboard.R);
    
    this.update = function() {
        //Update label
        labelPotions.text = quantityPotions;
        if(mode == 1){
            labelPotions2.text = quantityPotions2;
        }
        
        //Cursor
        if(mCursor.isDown)
        {
            if(phaser.time.now > manaTime)
            {
                useManaPotion();
            }
        }
        
        if(mode == 1){
            if(mCursor2.isDown)
            {
                if(phaser.time.now > manaTime)
                {
                    useManaPotion2();
                }
            }
        }
        
        //Physics
        phaser.physics.arcade.collide(mManaPotionGroup, mWorldReference);
        phaser.physics.arcade.overlap(mPlayerReference, mManaPotion, addPotion, null, this);
        
        if(mode == 1)
        {
            phaser.physics.arcade.overlap(mPlayerReference2, mManaPotion, addPotion2, null, this);
        }
    };
    
    //Function for when player take potion
    var addPotion = function(player, manapotion){
         quantityPotions++;
         manapotion.kill();
         mScoreReference.score+=5;
    };
    
     var addPotion2 = function(player, manapotion){
         quantityPotions2++;
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
    
    var useManaPotion2 = function(){
        if(mPlayerReference2.mana<=100 && quantityPotions2>0)
        {
             mPlayerReference2.mana+=50;
            
            if(mPlayerReference2.mana>mPlayerReference2.maxMana)
            {
                mPlayerReference2.mana = mPlayerReference2.maxMana; 
            }
            quantityPotions2--;
            labelPotions2.text = quantityPotions2;
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
        
        if(mode == 1){
            mManaPotionButton2 = phaser.add.button(250, 20, 'manapotion');
            mManaPotionButton2.fixedToCamera = true;

            //Label mana potion
            labelPotions2 = phaser.add.text(17, 25, quantityPotions2, { font: '30px Geo', fill: '#000000' });
            mManaPotionButton2.addChild(labelPotions2);
        }
        
        createLifePotions();
    })();
};