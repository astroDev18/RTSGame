let singleplayer = {
    // Begin single-player Campain
    start: function () {
        // Hide the starting menu screens
        game.hideScreens();

        // Begin with the first level
        singleplayer.currentLevel = 0;

        // Start initializing the level
        singleplayer.initLevel();
    },
    currentLevel: 0,
    initLevel: function () {
        game.type = "singleplayer";
        game.team = "blue";

        // Don't allow the player to enter mission until all assets for the level are loaded
        let enterMissionButton = document.getElementById("entermission");

        enterMissionButton.disabled = true;

        // Load all the items for the level
        let level = levels.singleplayer[singleplayer.currentLevel];

        game.loadLevelData(level);

        // Enable the Enter Mission button once all assets are loaded
        loader.onload = function () {
            enterMissionButton.disabled = false;
        };
        // Update the mission briefing text and show briefing screen
        this.showMissionBriefing(level.briefing);

        // 
    },
    showMissionBriefing: function (briefing) {
        var missionBriefingText = document.getElementById("missionbriefing");

        // Replace \n in briefing text with two <br> to create next paragraph
        missionBriefingText.innerHTML = briefing.replace(/\n/g, "<br><br>");

        // Display the mission club briefing screen
        game.showScreen("missionbriefingscreen")
    },
    exit: function () {
        // Display the main game Menu
        game.hideScreens();
        game.showScreen("gamestartscreen");
    },
};