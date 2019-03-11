(function (window) {

    window.game = window.game || {}

    function BossShip(type) {
        this.initialize(type);
    }

    var p = BossShip.prototype = new createjs.Sprite();

    p.Sprite_initialize = p.initialize;

    p.EXPLOSION_COMPLETE = 'explosion complete';
    p.EXPLOSION_OFFSET = 55;
    
    p.HP = null;
    p.points = null;
    p.lastFired = 0;
    p.fireDelay = 1000;
    p.type = 0;
    
    p.shouldDie = false;

    p.nextX = null;
    p.nextY = null;

    p.velx = 2;
    p.vely = 2;

    p.initialize = function (type) {
        this.type = type;
        this.HP = 20 * this.type;        
        //this.points = 1000 * this.type;
        this.points = 100 * this.type;
        this.velx = 2 + this.type;
        this.vely = 2 + this.type;

        this.Sprite_initialize(spritesheet, "boss" + this.type + "Idle");
        this.regX = this.getBounds().width / 2;
        this.regY = this.getBounds().height / 2;
    }
    p.takeDamage = function (damage) {
        this.gotoAndPlay("boss" + this.type + "Hit");
        this.HP = this.HP - damage;
        if (this.HP <= 0) {
            this.shouldDie = true;
        }
    }
    p.explode = function () {
        this.gotoAndPlay('explosion');
        this.regX = this.regY = this.EXPLOSION_OFFSET;
        this.on('animationend', this.explosionComplete, this, true);
        createjs.Sound.play(game.assets.EXPLOSION);
    }
    p.explosionComplete = function (e) {
        this.stop();
        this.dispatchEvent(this.EXPLOSION_COMPLETE);
    }
    p.reset = function () {
        this.type = 0;
        this.shouldDie = false;
    }
    
    window.game.BossShip = BossShip;

}(window));