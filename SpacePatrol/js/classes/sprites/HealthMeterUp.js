(function (window) {

    window.game = window.game || {}

    function HealthMeterUp() {
        this.initialize();
    }

    var p = HealthMeterUp.prototype = new createjs.Sprite();

    p.Sprite_initialize = p.initialize;

    p.shouldDie = false;

    p.initialize = function () {
        this.Sprite_initialize(spritesheet, "greenCross");
        this.paused = true;
    }
    p.reset = function () {
        this.shouldDie = false;
    }

    window.game.HealthMeterUp = HealthMeterUp;

}(window));