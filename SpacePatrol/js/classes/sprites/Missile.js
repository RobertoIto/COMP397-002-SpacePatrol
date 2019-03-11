(function (window) {

    window.game = window.game || {}

    function Missile() {
        this.initialize();
    }

    var p = Missile.prototype = new createjs.Sprite();

    p.Sprite_initialize = p.initialize;

    p.speed = 300;
    p.nextY = null;
    p.shouldDie = false;

    p.initialize = function () {
        this.Sprite_initialize(spritesheet, "Missile");
        this.paused = true;
    }
    p.reset = function () {
        this.shouldDie = false;
    }

    window.game.Missile = Missile;

}(window));