// Defining Game Object

var game = {
    // Start initializing objects, preloading assets, and display start screen
    init: function () {
        // Initialize game objects
        loader.init();

        // Display main game menu
        game.hideScreens();
        game.showScreen("gamestartscreen");
    },

    hideScreens: function () {
        var screens = document.getElementsByClassName("gamelayer");

        // Iterate through all game layers and set their displays to none
        for (let i = screens.length - 1; i >= 0; i--) {
            let screen = screens[i];

            screen.style.display = "none";
        }
    },

    hideScreen: function (id) {
        var screen = document.getElementById(id);

        screen.style.display = "none";
    },

    showScreen: function (id) {
        var screen = document.getElementById(id);

        screen.style.display = "block";
    },

    scale: 1,
    // Calculates scale and maximum possible width for our game and sets the gamecontainer style accordingly
    resize: function () {
        var maxWidth = window.innerWidth;
        var maxHeight = window.innerHeight;

        var scale = Math.min(maxWidth / 640, maxHeight / 480);

        var gameContainer = document.getElementById("gamecontainer");

        gameContainer.style.transform = "translate(-50%, -50%) " + "scale(" + scale + ")";

        game.scale = scale;

        // What is the maximum width we can set based on the current scale?
        // Clamp the value between 640 and 1024 
        var width = Math.max(640, Math.min(1024, maxWidth / scale));

        // Apply this new width to game container and game canvas
        gameContainer.style.width = width + "px";
    },
    loadLevelData: function (level) {
        game.currentLevel = level;
        game.currentMap = maps[level.mapName];

        // Load all the assets for the level starting with the map image
        game.currentMapImage = loader.loadImage("images/maps/" + maps[level.mapName].mapImage);
    },
};

/* set up initial window event listeners */
// Initialize and resize the game once page has fully loadedCount
window.addEventListener("load", function () {
    game.resize();
    game.init();
}, false);

// Resize the game any time the window is resized
window.addEventListener("resize", function () {
    game.resize();
})