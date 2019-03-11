(function() {

    window.game = window.game || {};

    var GameStates = {
        MAIN_MENU: 0,
        RUN_SCENE: 1,
        GAME: 10,
        GAME_OVER: 20,
        LEVEL_2: 30,
        LEVEL_3: 40
    }

    var GameStateEvents = {
        MAIN_MENU: 'main menu event',
        GAME_OVER: 'game over event',
        MAIN_MENU_SELECT: 'game menu select event',
        GAME: 'level 1 event',
        LEVEL_2: 'level 2 event',
        LEVEL_3: 'level 3 event'
    }

    window.game.GameStates = GameStates;
    window.game.GameStateEvents = GameStateEvents;

}());