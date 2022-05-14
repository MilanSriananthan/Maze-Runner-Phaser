let game = new Phaser.Game({
  width: 1000,
  height: 1000,
  backgroundColor: "#3498db",
  physics: { default: "arcade" },
  parent: "game",
  autoCenter: true,
});

game.scene.add("load", Load);
game.scene.add("menu", Menu);
game.scene.add("play", Play);
game.scene.add("play2", Play2);

game.scene.start("load");
