var LifePotion = function(worldReference, playerReference, scoreReference, playerReference2, mode) {
    //References
    var mWorldReference = worldReference;
    var mPlayerReference = playerReference;
    var mScoreReference = scoreReference;
    var mPlayerReference2 = playerReference2;
    
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
    
    var mLifePotionButton2 = null;
    var quantityPotions2 = 0;
    var labelPotions2 = null;
    
    //Cursor
    var mCursor = phaser.input.keyboard.addKey(Phaser.Keyboard.N);
    var mCursor2 = phaser.input.keyboard.addKey(Phaser.Keyboard.F);
    
    this.update = function() {
        //Update label
        labelPotions.text = quantityPotions;
        
        if(mode == 1){
            labelPotions2.text = quantityPotions2;
        }
        
         //Physics
        phaser.physics.arcade.collide(mLifePotionGroup, mWorldReference);
        phaser.physics.arcade.overlap(mPlayerReference, mLifePotion, addPotion, null, this);
        
        if(mode == 1){
            phaser.physics.arcade.overlap(mPlayerReference2, mLifePotion, addPotion2, null, this);
        }
        
        //Cursor
        if(mCursor.isDown)
        {
            if(phaser.time.now > lifeTime)
            {
                useHealthPotion();
            }
        }
        
        if(mode == 1){
            if(mCursor2.isDown)
            {
                if(phaser.time.now > lifeTime)
                {
                    useHealthPotion2();
                }
            }
        }
    };

    //Function for when player take potion
    var addPotion = function(player, lifepotion){
         quantityPotions++;
         lifepotion.kill();
         mScoreReference.score+=5;
    };
    
    var addPotion2 = function(player, lifepotion){
         quantityPotions2++;
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
    
    var useHealthPotion2 = function(){
        if(mPlayerReference2.health<=100 && quantityPotions2>0)
        {
             mPlayerReference2.health+=50;
            
            if(mPlayerReference2.health>mPlayerReference2.maxHealth)
            {
                mPlayerReference2.health = mPlayerReference2.maxHealth; 
            }
            quantityPotions2--;
            labelPotions2.text = quantityPotions2;
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
        
        if(mode == 1){
            //Button life potion
            mLifePotionButton2 = phaser.add.button(190, 20, 'lifepotion');
            mLifePotionButton2.fixedToCamera = true;

            //Label life potion
            labelPotions2 = phaser.add.text(17, 25, quantityPotions2, { font: '30px Geo', fill: '#000000' });
            mLifePotionButton2.addChild(labelPotions2);
        }
        
        createLifePotions();
    })();
};