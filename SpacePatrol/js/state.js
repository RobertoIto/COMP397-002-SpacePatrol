(function() {

    window.game = window.game || {};

    var GameStates = {
        MAIN_MENU: 0,
        RUN_SCENE: 1,
        GAME: 10,
        GAME_OVER: 20,
        GAME_WIN: 30,
        GAME_TRANSITION_1: 40,
        GAME_TRANSITION_2: 50
    }

    var GameStateEvents = {
        MAIN_MENU: 'main menu event',
        GAME_OVER: 'game over event',
        GAME_WIN: 'game win event',
        MAIN_MENU_SELECT: 'game menu select event',
        GAME: 'game event',
        GAME_TRANSITION_1: 'transition between levels 1 and 2',
        GAME_TRANSITION_2: 'transition between levels 2 and 3'
    }

    window.game.GameStates = GameStates;
    window.game.GameStateEvents = GameStateEvents;

}());