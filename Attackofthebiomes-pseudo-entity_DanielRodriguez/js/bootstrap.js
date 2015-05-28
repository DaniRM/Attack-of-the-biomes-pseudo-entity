var gameFacade = null;
var phaser = new Phaser.Game(
    800, 
    600, 
    Phaser.AUTO, 
    'mainContent', 
    { 
        preload: function() {
            //Tilemap and Tilesets for the map
            phaser.load.tilemap('desierto', 'assets/desert.json', null, Phaser.Tilemap.TILED_JSON);
            phaser.load.image('desert', 'assets/desert.png');
            phaser.load.image('desert1', 'assets/desert1.png');
            phaser.load.image('desert2', 'assets/desert2.png');
            phaser.load.spritesheet('player', 'assets/player2.png', 20, 20);
           
        }, 
        create: function() {
            gameFacade = new GameFacade();
        }, 
        update: function() {
            if(gameFacade) {
                gameFacade.update();   
            }
        }
    }
);