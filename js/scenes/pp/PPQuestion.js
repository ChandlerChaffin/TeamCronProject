"use strict";

var PPQuestionState = {
  preload: function () {},
  create: function () {
    var level = PPGameData.levels[PPGame.levelId];
    var question = level[PPGame.questionId];
    var options = question.options;
    
    

    // Randomize options
    if (PPGame.optionOrder.length == 0) {
      var randomOptions = [];
      for (var i = 0; i < options.length; ++i) {
        randomOptions.push({
          id: i,
          obj: options[i],
          audio: options[i].audio,
        });
      }
      shuffleArray(randomOptions);
      PPGame.optionOrder = randomOptions;
    }

    // Background
    this.backgroundSprite = this.add.sprite(0, 0, "background_2");

    // Question Text Sprite
    this.questionTextSprite = this.add.sprite(
      0.45 * WIDTH,
      0.1 * HEIGHT,
      "pp_question_text"
    );

    // Question Image Sprite
    this.questionImageSprite = this.add.sprite(0, 0, question.name);
    //Play Question Narration
	if (narrator) {
		this.currentsound = AudioManager.playSound(question.qaudio,this);
	}
    // Mute button
    createMuteButton(this);

    // Pause Button
    var onPause = function () {
      AudioManager.playSound("bloop_sfx", this);
      LastState = "PPQuestionState";
      this.state.start("PauseState");
    };
    this.pauseButton = this.add.button(
      0.892 * WIDTH,
      0.185 * HEIGHT,
      "button_pause",
      onPause,
      this,
      0,
      0,
      1
    );
    this.pauseButton.scale.setTo(0.75);
	this.pauseButton.inputEnabled = true;
	//Press P for pause
	this.keyP = this.input.keyboard.addKey(Phaser.Keyboard.P).onDown.add(onPause,this);
    // Choice Buttons
    var buttonWidth = WIDTH * (options.length == 3 ? 0.33 : 0.42);
    for (let i = 0; i < PPGame.optionOrder.length; ++i) {
      const optEntry = PPGame.optionOrder[i];
      const  onClick = function () {
        PPGame.chosenOptionId = optEntry.id;
        PPGame.scoreLock = false;
        PPGame.optionOrder = [];
        AudioManager.playSound("bloop_sfx", this);
        this.state.start("PPRainState");
      };
      const xOffset =
        0.5 * WIDTH -
        buttonWidth * (PPGame.optionOrder.length - 1) * 0.5 +
        buttonWidth * i;
      const optionButton = this.add.button(
        xOffset,
        0.68 * HEIGHT,
        optEntry.obj.name,
        onClick,
        this,
        0,
        0,
        0
      );
	  optionButton.inputEnabled = true;
      optionButton.anchor.setTo(0.5, 0.5);
      optionButton.optionIndex = PPGame.optionOrder[i].id;
      this.add
        .tween(optionButton.scale)
        .to({ x: 0.95, y: 0.95 }, 600, "Linear", true)
        .yoyo(true, 0)
        .loop(true);
	  optEntry.button = optionButton;
	  optionButton.cb = onClick;
    optionButton.audio = optEntry.audio
    }

    // Play music
    AudioManager.playSong("pp_music", this);

	//Keyboard input tab/enter
	this.keyEnter = this.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	this.keyTab = this.input.keyboard.addKey(Phaser.Keyboard.TAB);
	// block default 
	this.input.keyboard.addKeyCapture(Phaser.Keyboard.TAB);
	this.input.keyboard.addKeyCapture(Phaser.Keyboard.ENTER);
	//tracking focus
	this.focusIndex = 0;
	// actions for keytab and keyenter
	this.keyTab.onDown.add(() => {
		this.highlightOption(this.focusIndex);
    this.focusIndex = (this.focusIndex + 1) % PPGame.optionOrder.length;}, this);
	this.keyEnter.onDown.add(() => {
		const entry = PPGame.optionOrder[(this.focusIndex == 0) ? ((PPGame.optionOrder.length == 3) ? 2 : 1 ): this.focusIndex-1];
		entry.button.cb.call(this);
		}, this);

  },
  update: function () {},
  highlightOption: function(index) {
  	PPGame.optionOrder.forEach(entry => { 
		if (entry.button) {
			entry.button.tint = 0xffffff;
		}});
	  var focus = PPGame.optionOrder[index];
	  if (focus && focus.button){
		  focus.button.tint = 0x128228;
		  if (narrator) {
			  this.currentsound.stop();
			  this.currentsound = AudioManager.playSound(focus.audio,this);
		  }
	  }
  },
};
