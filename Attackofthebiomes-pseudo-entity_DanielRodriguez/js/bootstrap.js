var gameFacade = null;
//New phaser game
var phaser = new Phaser.Game(
    800, 
    600, 
    Phaser.AUTO, 
    'mainContent', 
    { 
        preload: function() {
            //Tilemap and Tilesets for the map (World)
            phaser.load.tilemap('desierto', 'assets/desert2.json', null, Phaser.Tilemap.TILED_JSON);
            phaser.load.image('desert', 'assets/desert.png');
            phaser.load.image('desert1', 'assets/desert1.png');
            phaser.load.image('desert2', 'assets/desert2.png');
            
            //Player
            phaser.load.spritesheet('player', 'assets/player2.png', 50, 50);
            phaser.load.spritesheet('player1', 'assets/player3.png', 50, 50);
            phaser.load.image('healthbarPlayer','assets/healthbar.png');
            phaser.load.image('manabarPlayer','assets/manabar.png');
            
            //Enemy
            phaser.load.image('enemy', 'assets/desert_scorpion.png');
            phaser.load.image('enemyHealthbar','assets/enemy_healthbar.png');
            
            //Menu
            phaser.load.image('menuBackground', 'assets/fondo_mainmenu.jpg');
            phaser.load.image('buttonSelectPlayers','assets/botonElegirJugador.png');
            phaser.load.image('buttonMage','assets/mageButton.png');
            phaser.load.image('buttonAldin','assets/aldinButton.png');
            
            //Weapons
            phaser.load.image('weapon','assets/bullet1.png');
            
            //Health Potions
            phaser.load.image('lifepotion', 'assets/lifepotion.png');
            
            //Mana Potions
            phaser.load.image('manapotion', 'assets/manaPotion.png');
           
           
        }, 
        create: function() {
            phaser.state.add('menu', MenuState);            
            phaser.state.add('game', GameState);
            phaser.state.start('menu');
        }
    }
);