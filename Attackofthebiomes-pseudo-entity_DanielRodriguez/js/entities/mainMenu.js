var MainMenu = function() {   
    //Background
    var addBackground = function() {
        var backgroundImage = phaser.add.image(0, 0, 'menuBackground');  
         //boton sonido
        muteButton = phaser.add.button(20, 20, 'mute', toggleSound, this);
        muteButton.input.useHandCursor = true;
    };
    
    var toggleSound = function(){
        phaser.sound.mute = !phaser.sound.mute;
        
        muteButton.frame = phaser.sound.mute ?1 : 0;
        
        if(phaser.sound.mute) {
            muteButton.frame = 1;   
        }
    };
    
    //Intro text
    var createIntroText = function() {
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Attack of the biomes', { font: '40px Charlemagne Std', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    };
    
    var selectMode = function(){
        addBackground();
        createIntroText();
        phaser.add.button(phaser.world.centerX - 95, 150, 'buttonSelectPlayers', onePlayer, this); 
        phaser.add.button(phaser.world.centerX - 95, 250, 'buttonSelectTwoPlayers', twoPlayer, this); 
        phaser.add.button(phaser.world.centerX - 95, 350, 'buttonControles', controls, this); 
    };
    
    
    //Mode selection
    var onePlayer = function(){
        addBackground(); 
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Select player', { font: '40px Charlemagne Std', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
        phaser.add.button(50, 220, 'buttonAldin', aldinSelected1, this); 
        phaser.add.button(220, 220, 'buttonMage', mageSelected1, this);
        phaser.add.button(390, 220, 'buttonArcher', archerSelected1, this); 
        phaser.add.button(560, 220, 'buttonWarrior', warriorSelected1, this); 
    };
    
    var twoPlayer = function(){
        addBackground(); 
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Select player 1', { font: '40px Charlemagne Std', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
        phaser.add.button(50, 220, 'buttonAldin', aldinSelected, this); 
        phaser.add.button(220, 220, 'buttonMage', mageSelected, this); 
        phaser.add.button(390, 220, 'buttonArcher', archerSelected, this); 
        phaser.add.button(560, 220, 'buttonWarrior', warriorSelected, this); 
    };
    
    var controls = function(){
        addBackground(); 
        phaser.add.sprite(50, 20, 'controls');
        phaser.add.button(phaser.world.centerX - 95, 515, 'goback', selectMode, this); 
    };
    
    //Player selection
     var aldinSelected1 = function(){
        parametersToSend = {
            'health': 110,
            'mana': 80,
            'icon': 'player',
            'weapon': 'weapon'
        };
        
        mode = 0;
        phaser.state.start('game',true, false, parametersToSend, null, mode);
    };
    
    var mageSelected1 = function(){
        parametersToSend = {
            'health': 80,
            'mana': 110,
            'icon': 'player1',
            'weapon': 'bulletmage'
        };
        mode = 0;
        phaser.state.start('game',true, false, parametersToSend, null, mode);
    };
    
    var archerSelected1 = function(){
        parametersToSend = {
            'health': 100,
            'mana': 100,
            'icon': 'archer',
            'weapon': 'bulletarcher'
        };
        mode = 0;
        phaser.state.start('game',true, false, parametersToSend, null, mode);
    };
    
     var warriorSelected1 = function(){
        parametersToSend = {
            'health': 100,
            'mana': 100,
            'icon': 'warrior',
            'weapon': 'bulletwarrior'
        };
        mode = 0;
        phaser.state.start('game',true, false, parametersToSend, null, mode);
    };
    
    
    var aldinSelected = function(){
        parametersToSend = {
            'health': 110,
            'mana': 80,
            'icon': 'player',
            'weapon': 'weapon'
        };
        onePlayer2();
    };
    
    var mageSelected = function(){
        parametersToSend = {
            'health': 80,
            'mana': 110,
            'icon': 'player1',
            'weapon': 'bulletmage'
        };
        onePlayer2();
    };
    
    var archerSelected = function(){
        parametersToSend = {
            'health': 100,
            'mana': 100,
            'icon': 'archer',
            'weapon': 'bulletarcher'
        };
        onePlayer2();
    };
    
    var warriorSelected = function(){
        parametersToSend = {
            'health': 100,
            'mana': 100,
            'icon': 'warrior',
            'weapon': 'bulletwarrior'
        };
        onePlayer2();
    };
    
    var onePlayer2 = function(){
        addBackground(); 
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Select player 2', { font: '40px Charlemagne Std', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
        phaser.add.button(50, 220, 'buttonAldin', aldinSelected2, this); 
        phaser.add.button(220, 220, 'buttonMage', mageSelected2, this); 
        phaser.add.button(390, 220, 'buttonArcher', archerSelected2, this); 
        phaser.add.button(560, 220, 'buttonWarrior', warriorSelected2, this); 
    };
    
    //Player selection
    var aldinSelected2 = function(){
        parametersToSend2 = {
            'health': 110,
            'mana': 80,
            'icon': 'player',
            'weapon': 'weapon'
        };
        mode = 1;
        phaser.state.start('game',true, false, parametersToSend, parametersToSend2, mode);
    };
    
    var mageSelected2 = function(){
        parametersToSend2 = {
            'health': 80,
            'mana': 110,
            'icon': 'player1',
            'weapon': 'bulletmage'
        };
        mode = 1;
        phaser.state.start('game',true, false, parametersToSend, parametersToSend2, mode);
    };
    
    var archerSelected2 = function(){
        parametersToSend2 = {
            'health': 100,
            'mana': 100,
            'icon': 'archer',
            'weapon': 'bulletarcher'
        };
        mode = 1;
        phaser.state.start('game',true, false, parametersToSend, parametersToSend2, mode);
    };
    
    var warriorSelected2 = function(){
        parametersToSend2 = {
            'health': 100,
            'mana': 100,
            'icon': 'warrior',
            'weapon': 'bulletwarrior'
        };
        mode = 1;
        phaser.state.start('game',true, false, parametersToSend, parametersToSend2, mode);
    };
    
    (function() {
        selectMode();
    })();
};