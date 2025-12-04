"use strict";

var InstructionState = {
    preload: function () {},
    create: function () {
        //Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_1");
        //Clouds
        this.cloudSprites = createCloudSprites(this);
        this.professorSprite = this.add.sprite(
            0.13 * WIDTH,
            0.65 * HEIGHT,
            "professor_1"
        );
        this.professorSprite.anchor.setTo(0.5,0.5);
        //Question box 
        this.instructionBackground = this.add.sprite(
            0.55 * WIDTH,
            0.35 * HEIGHT,
            "ff_question_box"
        );
        this.instructionBackground.anchor.setTo(0.5,0.5);
        this.instructionBackground.scale.setTo(.85,.85);
        this.instructionText = this.add.text(
            0.35 * WIDTH, 
            0.2 * HEIGHT,
            "Press N to toggle narration \nPress P to access pause menu \nPress TAB to cycle through options \nPress ENTER to progress/select options \nPress M to mute audio",
            TextStyle.centeredLarge
        );
        this.nextButton = this.add.button(
            0.55 * WIDTH,
            0.70 * HEIGHT,
            "button_play",
            this.playButtonActions.onClick,
            this,
            0,
            0,
            1
        );
        this.nextButton.anchor.setTo(0.5,0.5);
        
        // Keyboard enter progression
        this.keyEnter = this.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.keyEnter.onDown.add(this.playButtonActions.onClick,this);
        //narration 
        if (narrator) {
            this.currentsound = AudioManager.playSound("Game_Intro",this);
        }
    },
    update: function () {
        updateCloudSprites(this);
    },
    playButtonActions: {
        onClick: function() {
            AudioManager.playSound("bloop_sfx",this);
            this.state.start("IntroState");
        }
    },
};
