"use strict";

var LoadState = {
  preload: function () {
    // Background
    this.background = this.add.sprite(0, 0, "background_1");

    // Progress Bar
    this.progressBarBgSprite = this.add.sprite(
      0.5 * WIDTH,
      0.3 * HEIGHT,
      "progress_bar_bg"
    );
    this.progressBarBgSprite.anchor.setTo(0.5, 0.5);

    this.progressBarSprite = this.add.sprite(
      0.5 * WIDTH - 240,
      0.3 * HEIGHT,
      "progress_bar"
    );
    this.progressBarSprite.anchor.setTo(0.0, 0.5);
    this.load.setPreloadSprite(this.progressBarSprite);

    // Load Assets
    // Backgrounds
    this.load.image("background_1_1", "assets/background/1_1.png");
    this.load.image("background_2", "assets/background/2.png");
    this.load.image("background_3", "assets/background/3.png");
    this.load.image("background_4", "assets/background/4.png");

    // Clouds
    this.load.image("cloud_1", "assets/cloud/1.png");
    this.load.image("cloud_2", "assets/cloud/2.png");
    this.load.image("cloud_3", "assets/cloud/3.png");
    this.load.image("cloud_4", "assets/cloud/4.png");

    // Titles
    this.load.image("title_prevents", "assets/title/prevents.png");
    this.load.image("title_professor", "assets/title/professor.png");

    // Characters
    this.load.image("professor_1", "assets/professor/1.png");
    this.load.image("professor_2", "assets/professor/2.png");
    this.load.image("professor_3", "assets/professor/3.png");
    this.load.image("professor_4", "assets/professor/4.png");
    this.load.image("professor_5", "assets/professor/5.png");
    this.load.image("professor_6", "assets/professor/6.png");
    this.load.image("professor_7", "assets/professor/7.png");

    // Speech Boxes
    this.load.image("speechbox_1", "assets/speechbox/1.png");
    this.load.image("speechbox_2", "assets/speechbox/2.png");
    this.load.image("speechbox_3", "assets/speechbox/3.png");
    this.load.image("speechbox_4", "assets/speechbox/4.png");
    this.load.image("speechbox_5", "assets/speechbox/5.png");

    // Info Boxes
    this.load.image("infobox_intro3", "assets/infobox_intro/3.png");
    this.load.image("infobox_intro4", "assets/infobox_intro/4.png");

    // Buttons
    this.load.spritesheet("button_play", "assets/button/play.png", 116, 116);
    this.load.spritesheet("button_pause", "assets/button/pause.png", 116, 116);
    this.load.spritesheet("button_home", "assets/button/home.png", 116, 116);
    this.load.spritesheet(
      "button_replay",
      "assets/button/replay.png",
      116,
      116
    );
    this.load.spritesheet("button_sound", "assets/button/sound.png", 116, 116);
    this.load.spritesheet("button_next", "assets/button/next.png", 152, 58);
    this.load.spritesheet("button_ff", "assets/button/ff.png", 212, 212);
    this.load.spritesheet("button_pp", "assets/button/pp.png", 212, 212);
    this.load.spritesheet(
      "button_pp_lvl1",
      "assets/pp/button_level1.png",
      152,
      58
    );
    this.load.spritesheet(
      "button_pp_lvl2",
      "assets/pp/button_level2.png",
      152,
      58
    );
    this.load.spritesheet(
      "button_pp_lvl3",
      "assets/pp/button_level3.png",
      152,
      58
    );
	//Narrator button
	this.load.spritesheet("button_narrator", "assets/button/Narrator_Button_1.png",115,115);

    // Audio
    this.load.audio("title_music", "audio/JoyInTheWorldNew.mp3");
    this.load.audio("pp_music", "audio/matchingMusic.mp3");
    this.load.audio("ff_music", "audio/bgMusic.mp3");
    this.load.audio("results_music", "audio/CoffeeBreakNew.mp3");

    // SFX
    this.load.audio("rain_sfx", "audio/rain.mp3");
    this.load.audio("correct_sfx", "audio/ding.mp3");
    this.load.audio("wrong_sfx", "audio/Sludge.mp3");
    this.load.audio("bloop_sfx", "audio/Bloop.mp3");

    //Intro Narration
    this.load.audio("intro1","audio/Intro1.mp3");
    this.load.audio("intro2","audio/Intro2.mp3");
    this.load.audio("intro3","audio/Intro3.mp3");
    this.load.audio("intro4","audio/Intro4.mp3");
    this.load.audio("intro5","audio/Intro5.mp3");
    this.load.audio("Choose","audio/ChooseGame.mp3");
    this.load.audio("Title_PP","audio/PPTitle.mp3");
    this.load.audio("Title_FF","audio/FFTitle.mp3");
	
	//Misc PP audio
	this.load.audio("ChooseLevelPP","audio/ChooseLevel.mp3");
	this.load.audio("Correct_PP","audio/Correct_PP.mp3");
	this.load.audio("PPFinal_0","audio/PPFinal_0.mp3");
	this.load.audio("PPFinal_1","audio/PPFinal_1.mp3");
	this.load.audio("PPFinal_2","audio/PPFinal_2.mp3");
	this.load.audio("PPFinal_3","audio/PPFinal_3.mp3");
	this.load.audio("PPFinal_4","audio/PPFinal_4.mp3");
	this.load.audio("PPFinal_5","audio/PPFinal_5.mp3");
	this.load.audio("PPRain_Scene","audio/RainScene.mp3");
	this.load.audio("Oops","audio/Oops.mp3");
	this.load.audio("PPLevel1","audio/PPLevel1.mp3");
	this.load.audio("PPLevel2","audio/PPLevel2.mp3");
	this.load.audio("PPLevel3","audio/PPLevel3.mp3");
	
    
     //PP Narration 
    this.load.audio("PPintro_1","audio/PPIntro1.mp3"); // done
    this.load.audio("PPintro_2","audio/PPIntro2.mp3"); // done
    this.load.audio("PPintro_3","audio/PPIntro3.mp3"); // done

    //PP Level 1 narration
    this.load.audio("PPquestion1_1","audio/Level1/PPQuestion1_1.mp3");
    this.load.audio("PPquestion1_1_a","audio/Level1/PPQuestion1_1_a.mp3");
    this.load.audio("PPquestion1_1_b","audio/Level1/PPQuestion1_1_b.mp3");
    this.load.audio("PPquestion1_1_c","audio/Level1/PPQuestion1_1_c.mp3");
    this.load.audio("PPquestion1_2","audio/Level1/PPQuestion1_2.mp3");
    this.load.audio("PPquestion1_2_a","audio/Level1/PPQuestion1_2_a.mp3");
    this.load.audio("PPquestion1_2_b","audio/Level1/PPQuestion1_2_b.mp3");
    this.load.audio("PPquestion1_3","audio/Level1/PPQuestion1_3.mp3");
    this.load.audio("PPquestion1_3_a","audio/Level1/PPQuestion1_3_a.mp3");
    this.load.audio("PPquestion1_3_b","audio/Level1/PPQuestion1_3_b.mp3");
    this.load.audio("PPquestion1_3_c","audio/Level1/PPQuestion1_3_c.mp3");
    this.load.audio("PPquestion1_4","audio/Level1/PPQuestion1_4.mp3");
    this.load.audio("PPquestion1_4_a","audio/Level1/PPQuestion1_4_a.mp3");
    this.load.audio("PPquestion1_4_b","audio/Level1/PPQuestion1_4_b.mp3");
    this.load.audio("PPquestion1_5","audio/Level1/PPQuestion1_5.mp3");
    this.load.audio("PPquestion1_5_a","audio/Level1/PPQuestion1_5_a.mp3");
    this.load.audio("PPquestion1_5_b","audio/Level1/PPQuestion1_5_b.mp3");
	//Level 1 result narration
	this.load.audio("PPresult1_1a","audio/Level1/PPResult1_1a.mp3");
	this.load.audio("PPresult1_1b","audio/Level1/PPResult1_1b.mp3");
	this.load.audio("PPresult1_1c","audio/Level1/PPResult1_1c.mp3");
	this.load.audio("PPresult1_2a","audio/Level1/PPResult1_2a.mp3");
	this.load.audio("PPresult1_2b","audio/Level1/PPResult1_2b.mp3");
	this.load.audio("PPresult1_3a","audio/Level1/PPResult1_3a.mp3");
	this.load.audio("PPresult1_3b","audio/Level1/PPResult1_3b.mp3");
	this.load.audio("PPresult1_3c","audio/Level1/PPResult1_3c.mp3");
	this.load.audio("PPresult1_4a","audio/Level1/PPResult1_4a.mp3");
	this.load.audio("PPresult1_4b","audio/Level1/PPResult1_4b.mp3");
	this.load.audio("PPresult1_5a","audio/Level1/PPResult1_5a.mp3");
	this.load.audio("PPresult1_5b","audio/Level1/PPResult1_5b.mp3");


    //PP Level 2 narration
    this.load.audio("PPquestion2_1","audio/Level2/PPQuestion2_1.mp3");
    this.load.audio("PPquestion2_1_a","audio/Level2/PPQuestion2_1_a.mp3");
    this.load.audio("PPquestion2_1_b","audio/Level2/PPQuestion2_1_b.mp3");
    this.load.audio("PPquestion2_1_c","audio/Level2/PPQuestion2_1_c.mp3");
    this.load.audio("PPquestion2_2","audio/Level2/PPQuestion2_2.mp3");
    this.load.audio("PPquestion2_2_a","audio/Level2/PPQuestion2_2_a.mp3");
    this.load.audio("PPquestion2_2_b","audio/Level2/PPQuestion2_2_b.mp3");
    this.load.audio("PPquestion2_3","audio/Level2/PPQuestion2_3.mp3");
    this.load.audio("PPquestion2_3_a","audio/Level2/PPQuestion2_3_a.mp3");
    this.load.audio("PPquestion2_3_b","audio/Level2/PPQuestion2_3_b.mp3");
    this.load.audio("PPquestion2_4","audio/Level2/PPQuestion2_4.mp3");
    this.load.audio("PPquestion2_4_a","audio/Level2/PPQuestion2_4_a.mp3");
    this.load.audio("PPquestion2_4_b","audio/Level2/PPQuestion2_4_b.mp3");
    this.load.audio("PPquestion2_4_c","audio/Level2/PPQuestion2_4_c.mp3");
    this.load.audio("PPquestion2_5","audio/Level2/PPQuestion2_5.mp3");
    this.load.audio("PPquestion2_5_a","audio/Level2/PPQuestion2_5_a.mp3");
    this.load.audio("PPquestion2_5_b","audio/Level2/PPQuestion2_5_b.mp3");
    this.load.audio("PPquestion2_5_c","audio/Level2/PPQuestion2_5_c.mp3");
	//PP Level 2 result narration
	this.load.audio("PPresult2_1a","audio/Level2/PPResult2_1a.mp3");
	this.load.audio("PPresult2_1b","audio/Level2/PPResult2_1b.mp3");
	this.load.audio("PPresult2_1c","audio/Level2/PPResult2_1c.mp3");
	this.load.audio("PPresult2_2a","audio/Level2/PPResult2_2a.mp3");
	this.load.audio("PPresult2_2b","audio/Level2/PPResult2_2b.mp3");
	this.load.audio("PPresult2_3a","audio/Level2/PPResult2_3a.mp3");
	this.load.audio("PPresult2_3b","audio/Level2/PPResult2_3b.mp3");
	this.load.audio("PPresult2_4a","audio/Level2/PPResult2_4a.mp3");
	this.load.audio("PPresult2_4b","audio/Level2/PPResult2_4b.mp3");
	this.load.audio("PPresult2_4c","audio/Level2/PPResult2_4c.mp3");
	this.load.audio("PPresult2_5a","audio/Level2/PPResult2_5a.mp3");
	this.load.audio("PPresult2_5b","audio/Level2/PPResult2_5b.mp3");
	this.load.audio("PPresult2_5c","audio/Level2/PPResult2_5c.mp3");

    //PP level 3 narration 
    this.load.audio("PPquestion3_1","audio/Level3/PPQuestion3_1.mp3");
    this.load.audio("PPquestion3_1_a","audio/Level3/PPQuestion3_1_a.mp3");
    this.load.audio("PPquestion3_1_b","audio/Level3/PPQuestion3_1_b.mp3");
    this.load.audio("PPquestion3_2","audio/Level3/PPQuestion3_2.mp3");
    this.load.audio("PPquestion3_2_a","audio/Level3/PPQuestion3_2_a.mp3");
    this.load.audio("PPquestion3_2_b","audio/Level3/PPQuestion3_2_b.mp3");
    this.load.audio("PPquestion3_3","audio/Level3/PPQuestion3_3.mp3");
    this.load.audio("PPquestion3_3_a","audio/Level3/PPQuestion3_3_a.mp3");
    this.load.audio("PPquestion3_3_b","audio/Level3/PPQuestion3_3_b.mp3");
    this.load.audio("PPquestion3_4","audio/Level3/PPQuestion3_4.mp3");
    this.load.audio("PPquestion3_4_a","audio/Level3/PPQuestion3_4_a.mp3");
    this.load.audio("PPquestion3_4_b","audio/Level3/PPQuestion3_4_b.mp3");
    this.load.audio("PPquestion3_5","audio/Level3/PPQuestion3_5.mp3");
    this.load.audio("PPquestion3_5_a","audio/Level3/PPQuestion3_5_a.mp3");
    this.load.audio("PPquestion3_5_b","audio/Level3/PPQuestion3_5_b.mp3");
    this.load.audio("PPquestion3_5_c","audio/Level3/PPQuestion3_5_c.mp3");
	// PP level 3 result narration
	this.load.audio("PPresult3_1a","audio/Level3/PPResult3_1a.mp3");
	this.load.audio("PPresult3_1b","audio/Level3/PPResult3_1b.mp3");
	this.load.audio("PPresult3_2a","audio/Level3/PPResult3_2a.mp3");
	this.load.audio("PPresult3_2b","audio/Level3/PPResult3_2b.mp3");
	this.load.audio("PPresult3_3a","audio/Level3/PPResult3_3a.mp3");
	this.load.audio("PPresult3_3b","audio/Level3/PPResult3_3b.mp3");
	this.load.audio("PPresult3_4a","audio/Level3/PPResult3_4a.mp3");
	this.load.audio("PPresult3_4b","audio/Level3/PPResult3_4b.mp3");
	this.load.audio("PPresult3_5a","audio/Level3/PPResult3_5a.mp3");
	this.load.audio("PPresult3_5b","audio/Level3/PPResult3_5b.mp3");
	this.load.audio("PPresult3_5c","audio/Level3/PPResult3_5c.mp3");

	// Find it or Fix it intro + misc
	this.load.audio("FFintro1","audio/FF/FFIntro_1.mp3");
	this.load.audio("FFintro2","audio/FF/FFIntro_2.mp3");
	this.load.audio("FFintro3","audio/FF/FFIntro_3.mp3");
	this.load.audio("FFintro4","audio/FF/FFIntro_4.mp3");
	this.load.audio("FF_FixIt","audio/FF/FF_Fixit.mp3");
	this.load.audio("FF_ItsOk","audio/FF/FF_ItsOk.mp3");
	// FF Option Sprites narration
	
	this.load.audio("FF_dirt","audio/FF/FF_dirt.mp3");
	this.load.audio("FF_downspout","audio/FF/FF_downspout.mp3");
	this.load.audio("FF_oil","audio/FF/FF_oil.mp3");
	this.load.audio("FF_trash","audio/FF/FF_trash.mp3");
	this.load.audio("FF_trashbin","audio/FF/FF_trashbin.mp3");
	this.load.audio("FF_washingcar","audio/FF/FF_washingcar.mp3");
	this.load.audio("FF_washingdog","audio/FF/FF_washingdog.mp3");
	this.load.audio("FF_dogwaste","audio/FF/FF_dogwaste.mp3");
	//this.load.audio("FF_sprinkler","audio/FF/FF_sprinkler.mp3");

	//FF results narration
	this.load.audio("FF_sprinklerQC","audio/FF/FF_sprinklerQC.mp3");
	this.load.audio("FF_sprinklerQF","audio/FF/FF_sprinklerQF.mp3");
	this.load.audio("FF_sprinklerCC","audio/FF/FF_sprinklerCC.mp3");
	this.load.audio("FF_sprinklerCF","audio/FF/FF_sprinklerCF.mp3");
	this.load.audio("FF_sprinklerFC","audio/FF/FF_sprinklerFC.mp3");
	this.load.audio("FF_sprinklerFF","audio/FF/FF_sprinklerFF.mp3");

	this.load.audio("FF_oilFF","audio/FF/FF_oilFF.mp3");
	this.load.audio("FF_oilFC","audio/FF/FF_oilFC.mp3");
	this.load.audio("FF_oilQF","audio/FF/FF_oilQF.mp3");

	this.load.audio("FF_dirtFF","audio/FF/FF_dirtFF.mp3");
	this.load.audio("FF_dirtFC","audio/FF/FF_dirtFC.mp3");
	this.load.audio("FF_dirtQF","audio/FF/FF_dirtQF.mp3");


	this.load.audio("FF_washingcarQC","audio/FF/FF_washingcarQC.mp3");
	this.load.audio("FF_washingcarQF","audio/FF/FF_washingcarQF.mp3");
	this.load.audio("FF_washingcarBF","audio/FF/FF_washingcarBF.mp3");
	this.load.audio("FF_washingcarFC","audio/FF/FF_washingcarFC.mp3");
	this.load.audio("FF_washingcarCC","audio/FF/FF_washingcarCC.mp3");

	this.load.audio("FF_washingdogBF","audio/FF/FF_washingdogBF.mp3");
	this.load.audio("FF_washingdogQF","audio/FF/FF_washingdogQF.mp3");
	this.load.audio("FF_washingdogQC","audio/FF/FF_washingdogQC.mp3");
	this.load.audio("FF_washingdogFC","audio/FF/FF_washingdogFC.mp3");
	this.load.audio("FF_washingdogCC","audio/FF/FF_washingdogCC.mp3");

	this.load.audio("FF_trashFF","audio/FF/FF_trashFF.mp3");
	this.load.audio("FF_trashFC","audio/FF/FF_trashFC.mp3");
	this.load.audio("FF_trashQF","audio/FF/FF_trashQF.mp3");

	this.load.audio("FF_petwasteBF","audio/FF/FF_petwasteBF.mp3");
	this.load.audio("FF_petwasteQF","audio/FF/FF_petwasteQF.mp3");
	this.load.audio("FF_petwasteQC","audio/FF/FF_petwasteQC.mp3");
	this.load.audio("FF_petwasteFC","audio/FF/FF_petwasteFC.mp3");
	this.load.audio("FF_petwasteCC","audio/FF/FF_petwasteCC.mp3");

	this.load.audio("FF_trashbinQF","audio/FF/FF_trashbinQF.mp3");
	this.load.audio("FF_trashbinQC","audio/FF/FF_trashbinQC.mp3");
	this.load.audio("FF_trashbinBF","audio/FF/FF_trashbinBF.mp3");
	this.load.audio("FF_trashbinBC","audio/FF/FF_trashbinBC.mp3");

	this.load.audio("FF_downspoutQF","audio/FF/FF_downspoutQF.mp3");
	this.load.audio("FF_downspoutQC","audio/FF/FF_downspoutQC.mp3");
	this.load.audio("FF_downspoutBF","audio/FF/FF_downspoutBF.mp3");
	this.load.audio("FF_downspoutBC","audio/FF/FF_downspoutBC.mp3");
    // Protect or Pollute
    this.load.image("pp_question_text", "assets/pp/pp_question_text.png");
    this.load.image("pp_score_title", "assets/pp/pp_score_title.png");
    this.load.image("pp_trashcan", "assets/pp/pp_trashcan.png");
    this.load.image("pp_dirt", "assets/pp/pp_dirt.png");
    this.load.image("pp_dog", "assets/pp/pp_dog.png");
    this.load.image("pp_wetlands", "assets/pp/pp_wetlands.png");
    this.load.image("pp_house", "assets/pp/pp_house.png");
    this.load.image("pp_raindrop", "assets/pp/pp_raindrop.png");

    // Wetlands
    this.load.image(
      "pp_wetlands_background",
      "assets/pp/result/pp_wetlands_background.png"
    );
    this.load.image(
      "pp_wetlands_foreground",
      "assets/pp/result/pp_wetlands_foreground.png"
    );
    this.load.image(
      "pp_wetlands_water",
      "assets/pp/result/pp_wetlands_water.png"
    );
    this.load.image(
      "pp_wetlands_overlay_fertilizer",
      "assets/pp/result/pp_wetlands_overlay_fertilizer.png"
    );
    this.load.image(
      "pp_wetlands_overlay_mud",
      "assets/pp/result/pp_wetlands_overlay_mud.png"
    );
    this.load.image(
      "pp_wetlands_overlay_oil",
      "assets/pp/result/pp_wetlands_overlay_oil.png"
    );
    this.load.image(
      "pp_wetlands_overlay_paint",
      "assets/pp/result/pp_wetlands_overlay_paint.png"
    );
    this.load.image(
      "pp_wetlands_cloud1",
      "assets/pp/result/pp_wetlands_cloud1.png"
    );
    this.load.image(
      "pp_wetlands_cloud2",
      "assets/pp/result/pp_wetlands_cloud2.png"
    );
    this.load.image(
      "pp_wetlands_fish",
      "assets/pp/result/pp_wetlands_fish.png"
    );
    this.load.image(
      "pp_wetlands_lilypads",
      "assets/pp/result/pp_wetlands_lilypads.png"
    );
    this.load.image(
      "pp_wetlands_bottle",
      "assets/pp/result/pp_wetlands_bottle.png"
    );
    this.load.image(
      "pp_wetlands_deadfish",
      "assets/pp/result/pp_wetlands_deadfish.png"
    );
    this.load.image(
      "pp_wetlands_trash",
      "assets/pp/result/pp_wetlands_trash.png"
    );
    this.load.image(
      "pp_wetlands_bubble",
      "assets/pp/result/pp_wetlands_bubble.png"
    );
    this.load.image(
      "pp_wetlands_leaves",
      "assets/pp/result/pp_wetlands_leaves.png"
    );
    this.load.image(
      "pp_wetlands_mulch",
      "assets/pp/result/pp_wetlands_mulch.png"
    );

    for (var i = 0; i < PPGameData.levels.length; ++i) {
      var level = PPGameData.levels[i];
      for (var j = 0; j < level.length; ++j) {
        var question = level[j];
        this.load.image(
          question.name,
          "assets/pp/level_" +
            (i + 1) +
            "/question_" +
            (j + 1) +
            "/" +
            question.name +
            ".png"
        );
        for (var k = 0; k < question.options.length; ++k) {
          var option = question.options[k];
          this.load.image(
            option.name,
            "assets/pp/level_" +
              (i + 1) +
              "/question_" +
              (j + 1) +
              "/" +
              option.name +
              ".png"
          );
        }
      }
    }

    // Find It & Fix It
    this.load.image("ff_background", "assets/ff/ff_background.png");
    this.load.image("ff_bush", "assets/ff/ff_bush.png");
    this.load.image("ff_house_1", "assets/ff/ff_house_1.png");
    this.load.image("ff_house_2", "assets/ff/ff_house_2.png");
    this.load.image("ff_score_title", "assets/ff/ff_score_title.png");

    this.load.image("ff_question_box", "assets/ff/ff_question_box.png");
    this.load.image("ff_oops_box", "assets/ff/ff_oops_box.png");
    this.load.image("ff_correct_box", "assets/ff/ff_correct_box.png");

    this.load.spritesheet(
      "ff_button_fix_it",
      "assets/ff/ff_button_fix_it.png",
      187,
      52
    );
    this.load.spritesheet(
      "ff_button_its_ok",
      "assets/ff/ff_button_its_ok.png",
      187,
      52
    );
    this.load.spritesheet(
      "ff_button_next",
      "assets/ff/ff_button_next.png",
      200,
      82
    );

    this.load.image("ff_image_car", "assets/ff/ff_image_car.png");
    this.load.image("ff_image_car_oil", "assets/ff/ff_image_car_oil.png");
    this.load.image(
      "ff_image_dirt_sidewalk",
      "assets/ff/ff_image_dirt_sidewalk.png"
    );
    this.load.image("ff_image_dirt_sweep", "assets/ff/ff_image_dirt_sweep.png");
    this.load.image("ff_image_dog_poop", "assets/ff/ff_image_dog_poop.png");
    this.load.image(
      "ff_image_pickup_poop",
      "assets/ff/ff_image_pickup_poop.png"
    );
    this.load.image(
      "ff_image_downspout_yard",
      "assets/ff/ff_image_downspout_yard.png"
    );
    this.load.image(
      "ff_image_downspout_concrete",
      "assets/ff/ff_image_downspout_concrete.png"
    );
    this.load.image(
      "ff_image_sprinkler_fixed",
      "assets/ff/ff_image_sprinkler_fixed.png"
    );
    this.load.image(
      "ff_image_sprinkler_sidewalk",
      "assets/ff/ff_image_sprinkler_sidewalk.png"
    );
    this.load.image("ff_image_trash", "assets/ff/ff_image_trash.png");
    this.load.image(
      "ff_image_trash_pickup",
      "assets/ff/ff_image_trash_pickup.png"
    );
    this.load.image(
      "ff_image_trashbin_open",
      "assets/ff/ff_image_trashbin_open.png"
    );
    this.load.image(
      "ff_image_trashbin_closed",
      "assets/ff/ff_image_trashbin_closed.png"
    );
    this.load.image(
      "ff_image_washing_car_carwash",
      "assets/ff/ff_image_washing_car_carwash.png"
    );
    this.load.image(
      "ff_image_washing_car_yard",
      "assets/ff/ff_image_washing_car_yard.png"
    );
    this.load.image(
      "ff_image_washing_car_driveway",
      "assets/ff/ff_image_washing_car_driveway.png"
    );
    this.load.image(
      "ff_image_washing_dog_driveway",
      "assets/ff/ff_image_washing_dog_driveway.png"
    );
    this.load.image(
      "ff_image_washing_dog_grass",
      "assets/ff/ff_image_washing_dog_grass.png"
    );

    this.load.image("ff_car", "assets/ff/ff_car.png");
    this.load.image("ff_car_outline", "assets/ff/ff_car_outline.png");
    this.load.image("ff_car_oil", "assets/ff/ff_car_oil.png");
    this.load.image("ff_car_oil_outline", "assets/ff/ff_car_oil_outline.png");

    this.load.image("ff_dirt", "assets/ff/ff_dirt.png");
    this.load.image("ff_dirt_outline", "assets/ff/ff_dirt_outline.png");

    this.load.image("ff_dog_poop", "assets/ff/ff_dog_poop.png");
    this.load.image("ff_dog_poop_outline", "assets/ff/ff_dog_poop_outline.png");
    this.load.image("ff_pickup_poop", "assets/ff/ff_pickup_poop.png");
    this.load.image(
      "ff_pickup_poop_outline",
      "assets/ff/ff_pickup_poop_outline.png"
    );

    this.load.image("ff_downspout", "assets/ff/ff_downspout.png");
    this.load.image(
      "ff_downspout_outline",
      "assets/ff/ff_downspout_outline.png"
    );
    this.load.image("ff_downspout_water", "assets/ff/ff_downspout_water.png");

    this.load.image("ff_sprinkler", "assets/ff/ff_sprinkler.png");
    this.load.image(
      "ff_sprinkler_outline",
      "assets/ff/ff_sprinkler_outline.png"
    );
    this.load.image("ff_sprinkler_fixed", "assets/ff/ff_sprinkler_fixed.png");
    this.load.image(
      "ff_sprinkler_fixed_outline",
      "assets/ff/ff_sprinkler_fixed_outline.png"
    );
    this.load.image("ff_sprinkler_water", "assets/ff/ff_sprinkler_water.png");

    this.load.image("ff_trash", "assets/ff/ff_trash.png");
    this.load.image("ff_trash_outline", "assets/ff/ff_trash_outline.png");

    this.load.image("ff_trashbin_closed", "assets/ff/ff_trashbin_closed.png");
    this.load.image(
      "ff_trashbin_closed_outline",
      "assets/ff/ff_trashbin_closed_outline.png"
    );
    this.load.image("ff_trashbin_open", "assets/ff/ff_trashbin_open.png");
    this.load.image(
      "ff_trashbin_open_outline",
      "assets/ff/ff_trashbin_open_outline.png"
    );

    this.load.image("ff_washing_car", "assets/ff/ff_washing_car.png");
    this.load.image(
      "ff_washing_car_outline",
      "assets/ff/ff_washing_car_outline.png"
    );
    this.load.image(
      "ff_washing_car_water",
      "assets/ff/ff_washing_car_water.png"
    );

    this.load.image("ff_washing_dog", "assets/ff/ff_washing_dog.png");
    this.load.image(
      "ff_washing_dog_outline",
      "assets/ff/ff_washing_dog_outline.png"
    );
    this.load.image(
      "ff_washing_dog_water",
      "assets/ff/ff_washing_dog_water.png"
    );
  },
  create: function () {
    this.state.start("TitleState");
  },
};
