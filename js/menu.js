class Menu {
  create() {
    let nameLabel = this.add.text(500, -50, "Maze Runner", {
      font: "75px Arial",
      fill: "#fff",
    });
    nameLabel.setOrigin(0.5, 0.5);

    this.tweens.add({
      targets: nameLabel,
      y: 300,
      duration: 1000,
      ease: "bounce.out",
    });

    let startText = "press the up arrow key to start";
    let startLabel = this.add.text(500, 600, startText, {
      font: "50px Arial",
      fill: "#fff",
    });
    startLabel.setOrigin(0.5, 0.5);

    this.tweens.add({
      targets: startLabel,
      angle: { from: -2, to: 2 },
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });

    this.upKey = this.input.keyboard.addKey("up");
  }

  update() {
    if (this.upKey.isDown) {
      this.scene.start("play");
    }
  }
}
