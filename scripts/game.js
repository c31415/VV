/* global Quintus */
window.addEventListener("load",function() {
  var Q = window.Q = Quintus({development: true})
    .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio, Anim")
	.include("ActionPlatformerPlayer, ActionPlatformerEnemy, ActionPlatformerFriend")
    .setup({
      width: 320,   //to fit devices with a screne resolution of 1280 x 720
      height: 180,
      scaleToFit: true
    }).controls().touch();

	Q.enableSound();
    Q.setImageSmoothing(false);

    //define scene
    Q.scene("level", function(stage){
      var player;
      Q.stageTMX("veg_level.tmx", stage);
	  player = Q("Player").first();
	  stage.add("viewport").follow(player, {x: true, y: true});
    });

    //load assets
    Q.loadTMX("veg_level.tmx, sprites.json, friends.json, kill-enemy.mp3, jump.mp3, apricotjumpbounce-jump.mp3", function(){
	  Q.compileSheets("open_tileset_0.png","sprites.json");
	  Q.compileSheets("spritesheet.png","friends.json")
      Q.stageScene("level");
    });
    
});
        
        
        
        
        
        