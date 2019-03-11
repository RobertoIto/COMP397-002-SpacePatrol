(function (window) {
    window.game = window.game || {}

    function Meteor() {
        this.initialize();
    }

    var p = Meteor.prototype = new createjs.Sprite();

    p.Sprite_initialize = p.initialize;

    p.type = null;
    p.HP = null;
    p.points = null;

    p.speed = 300;
    p.nextY = 0;
    p.shouldDie = false;

    p.initialize = function () {
        this.type = Utils.getRandomNumber(0, 2) + 1;
        
        this.HP = this.type;
        
        this.points = this.type * 10;
        this.Sprite_initialize(spritesheet, "asteroid" + this.type);
        this.regX = this.getBounds().width / 2;
        this.regY = this.getBounds().height / 2;

    }
    p.takeDamage = function (damage) {
        //this.gotoAndPlay("asteroid" + this.type + "Hit");
        this.gotoAndPlay("asteroid" + this.type);
        this.HP = this.HP - damage;
        if (this.HP <= 0) {
            this.shouldDie = true;
        }
    }
    p.reset = function () {
        this.type = Utils.getRandomNumber(0, 2) + 1;
        this.shouldDie = false;
        
        this.HP = this.type;

        this.points = this.type * 10;
        this.gotoAndPlay("asteroid" + this.type);
    }

    window.game.Meteor = Meteor;

}(window));