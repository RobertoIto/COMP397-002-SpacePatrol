(function (window) {

    window.game = window.game || {}

    function Boss2Explosion() {
        this.initialize();
    }

    var p = Boss2Explosion.prototype = new createjs.Container();

    p.Container_initialize = p.initialize;

    p.initialize = function () {
        this.Container_initialize();
        this.animation();
    }
    p.animation = function () {
        var explosion = new createjs.Sprite(spritesheet, 'boss2Explosion');
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

    window.game.Boss2Explosion = Boss2Explosion;

}(window));