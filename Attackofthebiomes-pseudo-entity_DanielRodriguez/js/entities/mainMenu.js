var MainMenu = function() {   
    //Background
    var addBackground = function() {
        var backgroundImage = phaser.add.image(0, 0, 'menuBackground');  
    };
    
    //Intro text
    var createIntroText = function() {
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Attack of the biomes', { font: '70px Geo', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    };
    
    var selectMode = function(){
        phaser.add.button(phaser.world.centerX - 95, 200, 'buttonSelectPlayers', onePlayer, this); 
        phaser.add.button(phaser.world.centerX - 95, 400, 'buttonSelectPlayers', twoPlayer, this); 
    };
    
    
    //Mode selection
    var onePlayer = function(){
        addBackground(); 
        phaser.add.button(50, 250, 'buttonAldin', aldinSelected1, this); 
        phaser.add.button(220, 250, 'buttonMage', mageSelected1, this); 
    };
    
    var twoPlayer = function(){
        addBackground(); 
        phaser.add.button(50, 250, 'buttonAldin', aldinSelected, this); 
        phaser.add.button(220, 250, 'buttonMage', mageSelected, this); 
    };
    
    //Player selection
     var aldinSelected1 = function(){
        parametersToSend = {
            'health': 100,
            'mana': 100,
            'icon': 'player',
            'weapon': 'weapon'
        };
        
        mode = 0;
        phaser.state.start('game',true, false, parametersToSend, null, mode);
    };
    
    var mageSelected1 = function(){
        parametersToSend = {
            'health': 80,
            'mana': 80,
            'icon': 'player1',
            'weapon': 'bulletmage'
        };
        mode = 0;
        phaser.state.start('game',true, false, parametersToSend, null, mode);
    };
    
    var aldinSelected = function(){
        parametersToSend = {
            'health': 100,
            'mana': 100,
            'icon': 'player',
            'weapon': 'weapon'
        };
        onePlayer2();
    };
    
    var mageSelected = function(){
        parametersToSend = {
            'health': 80,
            'mana': 80,
            'icon': 'player1',
            'weapon': 'bulletmage'
        };
        onePlayer2();
    };
    
    var onePlayer2 = function(){
        addBackground(); 
        phaser.add.button(50, 250, 'buttonAldin', aldinSelected2, this); 
        phaser.add.button(220, 250, 'buttonMage', mageSelected2, this); 
    };
    
    //Player selection
    var aldinSelected2 = function(){
        parametersToSend2 = {
            'health': 100,
            'mana': 100,
            'icon': 'player',
            'weapon': 'weapon'
        };
        mode = 1;
        phaser.state.start('game',true, false, parametersToSend, parametersToSend2, mode);
    };
    
    var mageSelected2 = function(){
        parametersToSend2 = {
            'health': 80,
            'mana': 80,
            'icon': 'player1',
            'weapon': 'bulletmage'
        };
        mode = 1;
        phaser.state.start('game',true, false, parametersToSend, parametersToSend2, mode);
    };
    
    
    (function() {
        addBackground();
        createIntroText();
        
        selectMode();
    })();
};