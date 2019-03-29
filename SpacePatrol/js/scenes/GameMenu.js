(function(window) {
    window.game = window.game || {}

    function GameMenu() {
        this.initialize();
    }

    var p = GameMenu.prototype = new createjs.Container();
    p.playBtn;
    p.text;
    p.Container_initialize = p.initialize;
    p.initialize = function() {
        this.Container_initialize();
        this.addTitle();
        this.addButton();
        this.addTutorial();
    }
    p.addTitle = function() {
        var titleYPos = 200;
        var title = new createjs.Sprite(spritesheet, 'title');
        title.regX = title.getBounds().width / 2;
        title.x = screen_width / 2;
        title.y = -50;
        createjs.Tween.get(title).to({ y: titleYPos }, 1500)
            .call(this.bringTitle, null, this);
        this.addChild(title);
    }
    p.addButton = function() {
        this.playBtn = new ui.SimpleButton('Play Game');
        this.playBtn.on('click', this.playGame, this);
        this.playBtn.regX = this.playBtn.width / 2;
        this.playBtn.x = canvas.width / 2;
        this.playBtn.y = 400;
        this.playBtn.alpha = 0;
        this.playBtn.setButton({ upColor: '#66ff66', color: '#FFF', borderColor: '#FFF', overColor: '#009933' });
        this.addChild(this.playBtn);
    }
    p.addTutorial = function() {
        this.text = new createjs.Text("\n Tutorial \n\n\n Arrow keys move the player \n\n Space bar shoots", "40px Showcard Gothic", "#ff7700");
        this.text.textBaseline = "middle";
        this.text.textAlign = "center";
        this.text.x = stage.canvas.width / 2;
        this.text.y = (stage.canvas.height / 3) * 2;
        this.text.alpha = 0;
        this.addChild(this.text);
    }
    p.bringTitle = function(e) {
        createjs.Tween.get(this.playBtn).to({ alpha: 1 }, 1000);
        createjs.Tween.get(this.text).to({ alpha: 1 }, 1000);
    }
    p.playGame = function(e) {
        game.gScore = 0;
        game.gNextBossShip = 0;
        game.gNumLives = 5;
        game.gLevel = 1;
        createjs.Sound.play(game.assets.EXPLOSION);
        this.dispatchEvent(game.GameStateEvents.GAME);
    }
    window.game.GameMenu = GameMenu;
}(window));