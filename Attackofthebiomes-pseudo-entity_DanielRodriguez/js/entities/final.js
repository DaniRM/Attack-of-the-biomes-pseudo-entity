var Final = function() {   
    //Background
    var addBackground = function() {
        var backgroundImage = phaser.add.image(0, 0, 'menuBackground');  
    };
    
    //Intro text
    var createIntroText = function() {
        var nameLabel = phaser.add.text(phaser.world.centerX, phaser.world.centerY, 'GAME OVER!', { font: '70px Geo', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    };
    
    (function() {
        addBackground();
        createIntroText();
    })();
};