(function (window) {

    window.game = window.game || {}

    function Boss1Explosion() {
        this.initialize();
    }

    var p = Boss1Explosion.prototype = new createjs.Container();

    p.Container_initialize = p.initialize;

    p.initialize = function () {
        this.Container_initialize();
        this.animation();
    }
    p.animation = function () {
        var explosion = new createjs.Sprite(spritesheet, 'boss1Explosion');
        explosion.x = 0;
        explosion.y = 0;
        this.addChild(explosion);
        explosion.on('animationend', this.explosionComplete, this, true);
        explosion.play();
        
        //var props = new createjs.PlayPropsConfig().set({delay: 2000, duration: 2000});
        //createjs.Sound.play(game.assets.EXPLOSION, props);
        createjs.Sound.play(game.assets.EXPLOSION);
    }

    p.explosionComplete = function(e) {
        var explosion = e.target;
        this.removeChild(explosion);
    }

    window.game.Boss1Explosion = Boss1Explosion;

}(window));