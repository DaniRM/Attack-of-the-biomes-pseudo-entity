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
    };
    
    //Mode selection
    var onePlayer = function(){
        addBackground(); 
        phaser.add.button(50, 250, 'buttonAldin', aldinSelected, this); 
        phaser.add.button(220, 250, 'buttonMage', mageSelected, this); 
    };
    
    //Player selection
    var aldinSelected = function(){
        var parametersToSend = {
            'health': 100,
            'mana': 100,
            'icon': 'player'
        };
        phaser.state.start('game',true, false, parametersToSend);
    };
    
    var mageSelected = function(){
        var parametersToSend = {
            'health': 80,
            'mana': 80,
            'icon': 'player1'
        };
        phaser.state.start('game',true, false, parametersToSend);
    };
    
    
    (function() {
        addBackground();
        createIntroText();
        
        selectMode();
    })();
};