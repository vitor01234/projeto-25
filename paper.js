class Paper {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0,
      density: 1.2
    }
    this.body = Bodies.circle(x, y, (r - 20) / 2, options)
    this.image = loadImage('paper.png')
    this.r = r
    World.add(world, this.body)
  }
  display() {
    var paperposition = this.body.position
    push()
    translate(paperposition.x, paperposition.y)
    imageMode(CENTER)
    image(this.image, 0, 0, this.r, this.r)
    pop()
  }
}
