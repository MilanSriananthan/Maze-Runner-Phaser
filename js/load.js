class Load {
  preload() {
    this.load.image("background", "assets/background.png");
    this.load.spritesheet("player", "assets/player2.png", {
      frameWidth: 20,
      frameHeight: 20,
    });
    this.load.image("tileset", "assets/tileset.png");
    this.load.tilemapTiledJSON("map", "assets/map.json");
    this.load.tilemapTiledJSON("map2", "assets/map2.json");
    this.load.image("coin", "assets/coin.png");
    this.load.audio("coin", ["assets/coin.ogg", "assets/coin.mp3"]);

    let loadLabel = this.add.text(250, 170, "loading", {
      font: "30px Arial",
      fill: "#fff",
    });

    loadLabel.setOrigin(0.5, 0.5);
  }

  create() {
    this.scene.start("menu");
  }
}
