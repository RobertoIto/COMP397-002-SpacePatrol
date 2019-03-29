(function (window) {

    window.game = window.game || {}

    function Scoreboard(gScore) {
        this.initialize(gScore);
    }

    var p = Scoreboard.prototype = new createjs.Container();

    p.scoreTxt;
    p.score = 0;

    p.Container_initialize = p.initialize;

    p.initialize = function (gScore) {
        this.Container_initialize();
        this.x = screen_width - 165;
        this.y = 5;
        if (gScore != null){
            this.updateScore(gScore);
        }else{
            this.updateScore(0);
        }
    }
    p.updateScore = function (points) {
        var formattedScore;
        this.removeAllChildren();
        this.score += points;
        formattedScore = this.addLeadingZeros(this.score, 7);
        this.scoreTxt = new createjs.BitmapText(formattedScore, spritesheet);
        this.addChild(this.scoreTxt);
    }
    p.addLeadingZeros = function (score, width) {
        score = score + '';
        return score.length >= width ? score : new Array(width - score.length + 1).join(0) + score;
    }
    p.getScore = function () {
        return this.addLeadingZeros(this.score, 7);
    }
    p.getScoreValue = function () {
        return this.score;
    }
    window.game.Scoreboard = Scoreboard;

}(window));