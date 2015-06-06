var Final = function(score) {   
    //Background
    var addBackground = function() {
        var backgroundImage = phaser.add.image(0, 0, 'menuBackground');  
    };
    
    //Intro text
    var createIntroText = function() {
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'GAME OVER!', { font: '50px Charlemagne Std', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    };
    
    var finalText = function() {
        var scoreLabel = phaser.add.text(phaser.world.centerX, 300, 'Score: '+score, { font: '30px Charlemagne Std', fill: '#ffffff' });
		scoreLabel.anchor.setTo(0.5, 0.5);
    };
    
    var returnButton = function(){
        phaser.add.button(phaser.world.centerX - 95, 450, 'goback', returnMenu, this); 
    };
    
    var returnMenu = function(){
        phaser.state.start('load');  
    };
    
    (function() {
        addBackground();
        createIntroText();
        finalText();
        returnButton();
    })();
};