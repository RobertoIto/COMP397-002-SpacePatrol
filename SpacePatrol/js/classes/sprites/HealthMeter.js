(function (window) {

    window.game = window.game || {}

    function HealthMeter() {
        this.initialize();
    }

    var p = HealthMeter.prototype = new createjs.Container();

    p.width = 100;
    p.height = 30;
    p.fillColor = '#66ff66';
    p.strokeColor = '#FFF';
    p.bar;
    p.damage = 1;
    p.empty = false;

    p.Container_initialize = p.initialize;

    p.initialize = function () {
        this.Container_initialize();
        this.buildMeter();
    }
    p.buildMeter = function () {
        var outline = new createjs.Shape();
        outline.graphics.beginStroke(this.strokeColor);
        outline.graphics.drawRect(0, 0, this.width, this.height);
        this.bar = new createjs.Shape();
        this.bar.graphics.beginFill(this.fillColor);
        this.bar.graphics.drawRect(0, 0, this.width, this.height);
        this.bar.scaleX = 1;
        this.addChild(this.bar, outline);
    }
    p.takeDamage = function (dam) {
        this.damage -= (dam / 100)
        this.bar.scaleX = this.damage;
        this.checkHealth();
    }
    p.checkHealth = function (e) {
        if (this.damage <= 0.1) {
            this.empty = true;
        }
    }
    p.reset = function (e) {
        this.damage = 1;
        this.bar.scaleX = 1;
        this.empty = false;
    }
    p.getDamageValue = function () {
        return this.damage;
    }

    window.game.HealthMeter = HealthMeter;

}(window));