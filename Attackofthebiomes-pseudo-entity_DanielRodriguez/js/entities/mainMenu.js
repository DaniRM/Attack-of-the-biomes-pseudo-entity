var MainMenu = function() {   
    var playerTileset = null;
  
    var addBackground = function() {
        var backgroundImage = phaser.add.image(0, 0, 'menuBackground');  
    };
    
    var createIntroText = function() {
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Attack of the biomes', { font: '70px Geo', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    };
    
    var addButtons = function(){
        phaser.add.button(phaser.world.centerX - 95, 200, 'botonElegirJugador', unJugador, this); 
    };
    
    var unJugador = function(){
        addBackground(); 
        phaser.add.button(50, 250, 'botonElegirJugador', aldinElegido, this); 
        phaser.add.button(220, 250, 'botonElegirJugador', arqueroElegido, this); 
    };
    
    var aldinElegido = function(){
        var parametersToSend = {
            'health': 100,
            'mana': 100,
            'icon': 'player'
        };
        phaser.state.start('game',true, false, parametersToSend);
    };
    
    var arqueroElegido = function(){
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
        
        addButtons();
    })();
};