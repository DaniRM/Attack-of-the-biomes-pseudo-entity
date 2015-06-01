var gameFacade = null;
var phaser = new Phaser.Game(
    800, 
    600, 
    Phaser.AUTO, 
    'mainContent', 
    { 
        preload: function() {
            //Tilemap and Tilesets for the map
            phaser.load.tilemap('desierto', 'assets/desert2.json', null, Phaser.Tilemap.TILED_JSON);
            phaser.load.image('menuBackground', 'assets/fondo_mainmenu.jpg');
            phaser.load.image('desert', 'assets/desert.png');
            phaser.load.image('desert1', 'assets/desert1.png');
            phaser.load.image('desert2', 'assets/desert2.png');
            phaser.load.spritesheet('player', 'assets/player2.png', 20, 20);
            phaser.load.spritesheet('player1', 'assets/player3.png', 20, 20);
            phaser.load.image('enemy', 'assets/enemy.png');
            phaser.load.image('botonElegirJugador','assets/botonElegirJugador.png');
            phaser.load.image('bullet','assets/bullet1.png');
            phaser.load.image('healthbar','assets/healthbar.png');
            phaser.load.image('manabar','assets/manabar.png');
           
        }, 
        create: function() {
            phaser.state.add('menu', MenuState);            
            phaser.state.add('game', GameState);
            phaser.state.start('menu');
        }
    }
);