"use strict";

var AudioManager = {
  init: function () {
    this.indexAB = 0;
    this.indexC = 1;
  },

  toggleMusic: function (screen) {
    Game.sound.mute = !Game.sound.mute;
    if (Game.sound.mute) {
      // muted, show canceled sound button
      screen.muteButton.setFrames(2, 2, 3);
      this.indexAB = 2;
      this.indexC = 3;
    } else {
      // unmuted, show mute sound button
      screen.muteButton.setFrames(0, 0, 1);
      this.indexAB = 0;
      this.indexC = 1;
    }
  },

  playSong: function (title, state) {
    // Make sure to not replay same song
    if (!this.currentTitle || this.currentTitle != title) {
      this.currentTitle = title;
      if (this.currentSong != null) this.currentSong.stop();
      this.currentSong = state.add.audio(title, 0.3);
      this.currentSong.volume = .10;
      this.currentSong.loopFull();
    }
  },

  playSound: function (title, state) {
    this.sound = state.add.audio(title, 0.25);
    this.sound.play();
  },

  toggleNarrator: function (screen) {
  	narrator = !narrator;
	if (narrator) {
      screen.narratorButton.setFrames(0, 0, 1);
      this.indexAB = 0;
      this.indexC = 1;
	}
	else {
	  screen.narratorButton.setFrames(2,2,3);
      this.indexAB = 2;
      this.indexC = 3;
	}
  },
};

var narratorButtonActions = {
	onClick: function() {
		AudioManager.toggleNarrator(this);
	},
};
var muteButtonActions = {
  onClick: function () {
    AudioManager.toggleMusic(this);
  },
};

function createNarratorButton(scene) {
  var indexAB = AudioManager.indexAB;
  var indexC = AudioManager.indexC;
  scene.narratorButtonActions = narratorButtonActions;
  
  scene.narratorButton = scene.add.button(
    0.892 * WIDTH,
    0.22 * HEIGHT,
    "button_sound",
    scene.narratorButtonActions.onClick,
    scene,
    indexAB,
    indexAB,
    indexC
  );
  scene.narratorButton.scale.setTo(0.75);
  scene.input.keyboard.addKey(Phaser.Keyboard.N).onDown.add(scene.narratorButtonActions.onClick, scene);
  return scene.narratorButton;
}

function createNarratorButtonPos(scene, x, y,scale) {
  var indexAB = AudioManager.indexAB;
  var indexC = AudioManager.indexC;
  scene.narratorButtonActions = narratorButtonActions;
  
  scene.narratorButton = scene.add.button(
    x * WIDTH,
    y * HEIGHT,
    "button_sound", // change to narrator button when created
    scene.narratorButtonActions.onClick,
    scene,
    indexAB,
    indexAB,
    indexC
  );
  scene.narratorButton.scale.setTo(scale);
  scene.input.keyboard.addKey(Phaser.Keyboard.N).onDown.add(scene.narratorButtonActions.onClick, scene);
  return scene.narratorButton;
}

function createMuteButton(scene) {
  var indexAB = AudioManager.indexAB;
  var indexC = AudioManager.indexC;
  // Attaching muteButtonActions to scene
  scene.muteButtonActions = muteButtonActions;
  
  scene.muteButton = scene.add.button(
    0.892 * WIDTH,
    0.02 * HEIGHT,
    "button_sound",
    // ADDED SCENE below 
    scene.muteButtonActions.onClick,
    scene,
    indexAB,
    indexAB,
    indexC
  );
  scene.muteButton.scale.setTo(0.75);
  scene.input.keyboard.addKey(Phaser.Keyboard.M).onDown.add(scene.muteButtonActions.onClick, scene);
  return scene.muteButton;
}

function createMuteButtonPos(scene, x, y) {
  var indexAB = AudioManager.indexAB;
  var indexC = AudioManager.indexC;
  // attaching muteButtonActions to scene 
  scene.muteButtonActions = muteButtonActions;
  scene.muteButton = scene.add.button(
    x * WIDTH,
    y * HEIGHT,
    "button_sound",
    // added scene below
    scene.muteButtonActions.onClick,
    scene,
    indexAB,
    indexAB,
    indexC
  );
  scene.muteButton.scale.setTo(0.75);
  scene.input.keyboard.addKey(Phaser.Keyboard.M).onDown.add(scene.muteButtonActions.onClick, scene);
  return scene.muteButton;
}
