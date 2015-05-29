var Menu = function() {
    
    this.resultado = 0;
     
    var addBackground = function(){
         phaser.add.sprite(0, 0, 'desert');
    };
    
    var addButtons = function(){
        phaser.add.button(phaser.world.centerX - 95, 400, 'botonElegirJugador', actionOnClick, this); 
    };
    
    var actionOnClick = function(){
        addBackground(); 
        phaser.add.button(phaser.world.centerX - 95, 400, 'desert1', actionOnClick2, this);  
        
    };
    
    var actionOnClick2 = function(){
        return resultado = 1;
    };
    
    // Constructor
    (function() {    
        //Add background
        addBackground();  
        addButtons();
    })();
};