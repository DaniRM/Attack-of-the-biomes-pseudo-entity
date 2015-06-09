//Load State
var LoadState = function() {    
    this.preload = function() {    
        var loadingLabel = phaser.add.text(phaser.world.centerX, 150, 'loading...', { font: '30px Geo', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);
        
        var progressBar = phaser.add.sprite(phaser.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		phaser.load.setPreloadSprite(progressBar);
    },   
    
    this.create = function(){
        phaser.add.image(0, 0, 'menuBackground');  
        phaser.state.start('menu');
    }
};