(function (window) {

    window.game = window.game || {}

    function FinalExplosion() {
        this.initialize();
    }

    var p = FinalExplosion.prototype = new createjs.Container();

    p.Container_initialize = p.initialize;

    p.initialize = function () {
        this.Container_initialize();
        this.animation();
    }
    p.animation = function () {
        var explosion = new createjs.Sprite(spritesheet, 'explosionFinal');
        explosion.x = 0;
        explosion.y = 0;
        this.addChild(explosion);
        explosion.on('animationend', this.explosionComplete, this, true);
        explosion.play();
        createjs.Sound.play(game.assets.EXPLOSION);
    }

    p.explosionComplete = function(e) {
        var explosion = e.target;
        this.removeChild(explosion);
    }

    window.game.FinalExplosion = FinalExplosion;

}(window));