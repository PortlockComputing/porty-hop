controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MrPorty.y >= 80) {
        MrPorty.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.blizzard)
})
let projectile: Sprite = null
let speed = 0
let MrPorty: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen))
MrPorty = sprites.create(img`
    . . . . . . . . f f f . . . . . 
    . . . . . . f f f 9 9 f . . . . 
    . . . . . f 8 8 8 f 9 9 f . . . 
    . . . . f 8 8 8 8 8 f f f f . . 
    . . . . f 8 8 8 8 8 f 9 9 8 f . 
    . . . f 9 8 8 8 8 8 8 f f 8 f . 
    . . . f 9 8 8 d d d d 8 8 d f . 
    . . . f 9 8 d d d f f d f d f . 
    . . . . f 8 d d d f f d f d f . 
    . . . f f 8 d d d d d d d d f . 
    . f f 9 9 f 8 d f f f f d f f f 
    f 8 9 9 9 9 f d d d d d f 9 9 8 
    f 8 8 9 9 9 9 f f f f f 9 9 8 8 
    f 8 8 9 f 9 9 9 9 9 9 9 f 9 8 8 
    f 8 f f f 9 9 9 9 9 9 9 f f f 8 
    . f f f f 9 9 9 9 9 9 9 f f 8 8 
    `, SpriteKind.Player)
MrPorty.setPosition(10, 80)
game.onUpdate(function () {
    if (MrPorty.y < 80) {
        MrPorty.ay = 200
    } else {
        MrPorty.ay = 0
        MrPorty.vy = 0
    }
})
game.onUpdateInterval(2000, function () {
    speed = -100 - game.runtime() / 250
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
        . d 2 2 4 c b e e e e e e e 2 c 
        . 2 2 2 4 b e e b b b e b b e 2 
        . 2 2 2 2 2 e b b b b e b b b e 
        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
        . 2 d d 2 e f e e e f e e e e e 
        . d d 2 e e e f e e f e e e e e 
        . e e e e e e e f f f e e e e e 
        . e e e e f f f e e e e f f f f 
        . . . e f f f f f e e f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, speed, 0)
    projectile.y = 80
    info.changeScoreBy(10)
})
