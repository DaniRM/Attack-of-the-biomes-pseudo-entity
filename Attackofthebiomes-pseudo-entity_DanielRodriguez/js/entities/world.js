var World = function() {
    var mMap = null;
    var mLayer = null;
     
    this.getPhysicsReference = function() {
        return mLayer;  
    };
    
    var addBackground = function() {
        phaser.add.sprite(0, 0, 'desert1');
       
    };
    
    var addTilemap = function() {
         mMap = phaser.add.tilemap('desierto');
    };
    
    var addTilesets = function() {
        mMap.addTilesetImage('desert');
        mMap.addTilesetImage('desert2');
    };
    
    var createLayer = function() {
         mLayer = mMap.createLayer('desierto');
         mLayer.resizeWorld();
         mMap.setCollisionBetween(7,2000);  
    };
    
    var enablePhysics = function() {
       phaser.physics.arcade.enable(mLayer);
       
    };
    
    // Constructor
    (function() {    
        //Add background
        addBackground();  
        
        //Create tilesets and tilemap
        addTilemap();
        addTilesets(); 
        createLayer();
    })();
};