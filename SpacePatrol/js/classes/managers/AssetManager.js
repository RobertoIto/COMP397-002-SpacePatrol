(function() {

    window.game = window.game || {};

    var AssetManager = function() {
        this.initialize();
    }
    var p = AssetManager.prototype = new createjs.EventDispatcher();

    p.EventDispatcher_initialize = p.initialize;

    //sounds
    p.BULLET = 'bullet sound';
    p.EXPLOSION = 'explosion sound';
    p.SOUNDTRACK1 = 'level 1 soundtrack';
    p.SOUNDTRACK2 = 'level 2 soundtrack';
    p.SOUNDTRACK3 = 'level 3 soundtrack';
    p.MENU = 'game menu soundtrack';
    p.GAMEOVER = 'game over sound track';

    //graphics
    p.GAME_SPRITES = 'game sprites';

    //data
    p.GAME_SPRITES_DATA = 'game sprites data'

    //events
    p.ASSETS_PROGRESS = 'assets progress';
    p.ASSETS_COMPLETE = 'assets complete';

    p.assetsPath = 'assets/';

    p.loadManifest = null;
    p.queue = null;
    p.loadProgress = 0;


    p.initialize = function() {
        this.EventDispatcher_initialize();
        this.loadManifest = [
            { id: this.BULLET, src: this.assetsPath + 'bullet.wav' },
            { id: this.EXPLOSION, src: this.assetsPath + 'explosion.mp3' },
            { id: this.SOUNDTRACK1, src: this.assetsPath + 'level1.mp3' },
            { id: this.SOUNDTRACK2, src: this.assetsPath + 'level2.mp3' },
            { id: this.SOUNDTRACK3, src: this.assetsPath + 'level3.wav' },
            { id: this.MENU, src: this.assetsPath + 'menu.wav' },
            { id: this.GAMEOVER, src: this.assetsPath + 'gameover.wav' },
            { id: this.GAME_SPRITES_DATA, src: this.assetsPath + 'all.json' },
            { id: this.GAME_SPRITES, src: this.assetsPath + 'all.png' }
        ];
    }
    p.preloadAssets = function() {
            createjs.Sound.initializeDefaultPlugins();
            this.queue = new createjs.LoadQueue();
            this.queue.installPlugin(createjs.Sound);
            this.queue.on('complete', this.assetsLoaded, this);
            this.queue.on('progress', this.assetsProgress, this);
            createjs.Sound.alternateExtensions = ["ogg"];
            this.queue.loadManifest(this.loadManifest);
        }
        //    p.preloadAssets = function () {
        //        createjs.Sound.initializeDefaultPlugins();
        //        this.queue = new createjs.LoadQueue();
        //        this.queue.installPlugin(createjs.Sound);
        //        this.queue.on('complete', this.assetsProgress,this);
        //        this.queue.on('progress', this.assetsLoaded,this);
        //        createjs.Sound.alternateExtensions = ["ogg"];
        //        this.queue.loadManifest(this.loadManifest);
        //    }
    p.assetsProgress = function(e) {
        this.loadProgress = e.progress;
        var event = new createjs.Event(this.ASSETS_PROGRESS);
        this.dispatchEvent(event);
    }
    p.assetsLoaded = function(e) {
        var event = new createjs.Event(this.ASSETS_COMPLETE);
        this.dispatchEvent(event);
    }
    p.getAsset = function(asset) {
        return this.queue.getResult(asset);
    }

    window.game.AssetManager = AssetManager;

}());