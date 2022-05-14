class Play2 {
  create() {
    this.player = this.physics.add.sprite(20, 215, "player");
    this.coin = this.physics.add.sprite(970, 950, "coin");
    //this.player.body.gravity.y = 500;
    this.arrow = this.input.keyboard.createCursorKeys();
    this.createWorld();

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { frames: [1, 2] }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { frames: [3, 4] }),
      frameRate: 8,
      repeat: -1,
    });

    this.coinSound = this.sound.add("coin");
  }

  update() {
    this.physics.collide(this.player, this.walls);
    if (!this.player.active) {
      return;
    }
    this.movePlayer();
    if (this.physics.overlap(this.player, this.coin)) {
      this.takeCoin();
    }
    //console.log(this.player.body.x);
    //console.log(this.player.body.y);
  }

  movePlayer() {
    if (this.arrow.left.isDown) {
      this.player.body.velocity.x = -300;
      this.player.anims.play("left", true);
    } else if (this.arrow.right.isDown) {
      this.player.body.velocity.x = 300;
      this.player.anims.play("right", true);
    } else if (this.arrow.up.isDown) {
      this.player.body.velocity.y = -300;
    } else if (this.arrow.down.isDown) {
      this.player.body.velocity.y = 300;
    } else {
      this.player.body.velocity.x = 0;
      this.player.body.velocity.y = 0;
      this.player.setFrame(0);
    }
  }

  createWorld() {
    let map = this.add.tilemap("map2");
    let tileset = map.addTilesetImage("tileset", "tileset");
    this.walls = map.createStaticLayer("Tile Layer 1", tileset);
    this.walls.setCollision(1);
  }

  takeCoin() {
    this.coinSound.play();
    this.coin.setScale(0);
    this.tweens.add({
      targets: this.coin,
      scale: 1,
      duration: 300,
    });

    this.tweens.add({
      targets: this.player,
      scale: 1.3,
      duration: 100,
      yoyo: true,
    });
  }
}
