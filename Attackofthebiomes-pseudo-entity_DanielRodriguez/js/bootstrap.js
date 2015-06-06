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
            
            //Load
            phaser.load.image('progressBar', 'assets/progressBar.png');
            
            //Player
            phaser.load.spritesheet('player', 'assets/player2.png', 50, 50);
            phaser.load.spritesheet('player1', 'assets/player3.png', 50, 50);
            phaser.load.spritesheet('archer', 'assets/archer.png', 51, 50);
            phaser.load.spritesheet('warrior', 'assets/warrior.png', 50, 50);
            phaser.load.image('healthbarPlayer','assets/healthbar.png');
            phaser.load.image('manabarPlayer','assets/manabar.png');
            
            //Enemy
            phaser.load.image('enemy', 'assets/desert_scorpion.png');
            phaser.load.image('enemyHealthbar','assets/enemy_healthbar.png');
            phaser.load.image('desertBigEnemy', 'assets/desertBigEnemy.png');
            
            //Menu
            phaser.load.image('menuBackground', 'assets/fondo_mainmenu.jpg');
            phaser.load.image('buttonSelectPlayers','assets/botonElegirJugador.png');
            phaser.load.image('buttonSelectTwoPlayers','assets/botonElegirDosJugadores.png');
            phaser.load.image('buttonMage','assets/mageButton.png');
            phaser.load.image('buttonAldin','assets/aldinButton.png');
            phaser.load.image('buttonArcher','assets/archerButton.png');
            phaser.load.image('buttonWarrior','assets/warriorButton.png');
            phaser.load.image('buttonControles','assets/controlesButton.png');
            phaser.load.image('controls','assets/controls.png');
            phaser.load.image('goback','assets/goback.png');
            
            //Weapons
            phaser.load.image('bullet','assets/bullet1.png');
            phaser.load.image('weapon','assets/axe.png');
            phaser.load.image('bulletmage','assets/bulletmage.png');
            phaser.load.image('bulletarcher','assets/bulletArcher.png');
            phaser.load.image('bulletwarrior','assets/bulletWarrior.png');
            
            //Health Potions
            phaser.load.image('lifepotion', 'assets/lifepotion.png');
            
            //Mana Potions
            phaser.load.image('manapotion', 'assets/manaPotion.png');
            
            //Super Hability
            phaser.load.image('superHability1', 'assets/superHability1.png');
            
            //Platform
            phaser.load.image('desertplatform', 'assets/desertplatform.png');
            
            //Score
            phaser.load.image('score', 'assets/score.png');
            
            //Coin
            phaser.load.image('coin', 'assets/coin.png');
            
            //Sounds
            phaser.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
            phaser.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);
            phaser.load.audio('drinkpotion', ['assets/drinkpotion.ogg', 'assets/drinkpotion.mp3']);
            phaser.load.audio('takepotion', ['assets/takepotion.ogg', 'assets/takepotion.mp3']);
            phaser.load.audio('takecoin', ['assets/takecoin.ogg', 'assets/takecoin.mp3']);
            phaser.load.audio('playerdie', ['assets/playerdie.ogg', 'assets/playerdie.mp3']);
            phaser.load.audio('attack', ['assets/attack.ogg', 'assets/attack.mp3']);
            phaser.load.audio('enemydie', ['assets/enemydie.ogg', 'assets/enemydie.mp3']);
            phaser.load.audio('hability', ['assets/hability.ogg', 'assets/hability.mp3']);
            phaser.load.audio('win', ['assets/win.ogg', 'assets/win.mp3']);
            phaser.load.audio('fondo', ['assets/fondo.ogg', 'assets/fondo.mp3']);
        }, 
        create: function() {
            phaser.state.add('load', LoadState);
            phaser.state.add('menu', MenuState);            
            phaser.state.add('game', GameState);
            phaser.state.add('final', FinalState);
            phaser.state.start('load');
        }
    }
);