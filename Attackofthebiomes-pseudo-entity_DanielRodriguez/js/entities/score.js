var Score = function() {
    var mText = null;
    var mScore = null;
    var score = null;
    
    this.getPhysicsReference = function(){
        return mScore;
    };
    
    this.update = function() {
        //Physics
        console.log("SCORE: "+mScore.score);
        mScore.mText.text = 'Score: '+mScore.score;
    };
    
    // Constructor
    (function() {
        mScore = phaser.add.sprite(650, 25, 'score');
        mScore.score = 0;
        mScore.mText =  phaser.add.text(670, 25, 'Score: ' + mScore.score, { font: '30px Geo', fill: '#000000' });
        mScore.mText.fixedToCamera = true;
    })();
};