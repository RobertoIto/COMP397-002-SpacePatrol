(function(window) {
    window.game = window.game || {}

    function EnemyShip(startX) {
        this.initialize(startX);
    }

    var p = EnemyShip.prototype = new createjs.Sprite();

    p.Sprite_initialize = p.initialize;

    p.type = null;
    p.HP = null;
    p.points = null;

    p.lastFired = 0;
    p.fireDelay = 2000;

    p.speed = 150;
    p.nextY = null;
    p.nextX = null;
    p.shouldDie = false;

    p.initialize = function(startX) {
        this.type = Utils.getRandomNumber(0, 4) + 1;

        //this.HP = this.type * 3;
        this.HP = this.type;

        //this.points = this.type * 10;
        this.points = 200;
        this.Sprite_initialize(spritesheet, "enemy" + this.type + "Idle");
        this.regX = this.getBounds().width / 2;
        this.regY = this.getBounds().height / 2;

    }
    p.takeDamage = function(damage) {
        this.gotoAndPlay("enemy" + this.type + "Hit");
        this.HP = this.HP - damage;
        if (this.HP <= 0) {
            this.shouldDie = true;
        }
    }
    p.reset = function() {
        this.type = Utils.getRandomNumber(0, 4) + 1;
        this.shouldDie = false;

        //this.HP = this.type * 3;
        this.HP = this.type;

        this.points = this.type * 10;
        this.gotoAndPlay("enemy" + this.type + "Idle");
    }

    window.game.EnemyShip = EnemyShip;

}(window));