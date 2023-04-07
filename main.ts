namespace SpriteKind {
    export const Laser = SpriteKind.create()
    export const G = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Booth = SpriteKind.create()
    export const Mouse = SpriteKind.create()
    export const Crosshair = SpriteKind.create()
    export const Moon = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.allOfKind(SpriteKind.Enemy).length > 0) {
        projectile6 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . d 
            . . . . . . . d d d 
            2 d d d d d d d d d 
            . . . . . . . d d d 
            . . . . . . . . . d 
            `, Ship, 0, 0)
        projectile6.follow(sprites.allOfKind(SpriteKind.Enemy)._pickRandom())
        projectile6.startEffect(effects.fire)
        info.changeScoreBy(-1)
    }
})
function Pewpew () {
    if (Math.percentChance(Laseroffset)) {
        Enemy1 = sprites.allOfKind(SpriteKind.Enemy)._pickRandom()
        if (Enemy1 == myEnemy) {
            Img = img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `
        } else {
            Img = img`
                2 2 
                2 2 
                `
        }
        projectile3 = sprites.createProjectileFromSprite(Img, Enemy1, 100, 0)
        projectile3.setKind(SpriteKind.Laser)
        music.zapped.play()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        7 7 
        7 7 
        `, Ship, -100, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Laser, function (sprite, otherSprite) {
    music.bigCrash.play()
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.startEffect(effects.bubbles, 500)
    scene.cameraShake(8, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Laser, effects.starField, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.starField, 500)
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.warmRadial, 500)
    otherSprite.destroy(effects.coolRadial, 500)
})
info.onLifeZero(function () {
    pause(500)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        2 . . . . . . . . . . . . . . 
        2 2 . . . . . . . . . . . . . 
        2 2 2 2 2 . . . . . . . . . . 
        2 2 2 2 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 2 2 . . 
        . . . 4 4 2 2 2 2 2 f f 2 2 2 
        . . . . . . 2 2 2 2 2 2 2 . . 
        . . . . . . 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 . . . . . . 
        2 2 2 2 2 2 2 . . . . . . . . 
        2 2 2 2 2 . . . . . . . . . . 
        2 2 . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(10)
    } else {
        info.changeScoreBy(50)
    }
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate, 500)
    Laseroffset += 1
    Enemyoffset += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.bigCrash.play()
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.startEffect(effects.bubbles, 500)
    scene.cameraShake(8, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.starField, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Laser, effects.starField, 500)
})
let projectile2: Sprite = null
let projectile4: Sprite = null
let projectile5: Sprite = null
let Enemy2: Sprite = null
let projectile: Sprite = null
let projectile3: Sprite = null
let Img: Image = null
let myEnemy: Sprite = null
let Enemy1: Sprite = null
let projectile6: Sprite = null
let Laseroffset = 0
let Ship: Sprite = null
game.setGameOverScoringType(game.ScoringType.HighScore)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
scroller.scrollBackgroundWithSpeed(10, 0, scroller.BackgroundLayer.Layer0)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................................................................................................................1............................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..........................................................1.....................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................................1.................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .....................1..........................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..................................................................................................................1.............................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................1...............................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .................................................................................................................................1..............................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................................................................................1.........................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
scroller.scrollBackgroundWithSpeed(20, 0, scroller.BackgroundLayer.Layer1)
Ship = sprites.create(img`
    . . . . . . . . . . . . . . 8 8 
    . . . . . . . . . . . . . 8 8 8 
    . . . . . . . . . . . . 8 8 6 6 
    . . . . . . . . . . . . 8 6 6 9 
    . . . . . . . . . . . 8 f 9 9 6 
    . . . . . . . . . . 8 8 f 6 6 6 
    . . . . . . . . 8 8 8 9 e 6 6 6 
    d d d b f 6 f 6 9 9 8 6 e 6 6 6 
    c c c c f c f 8 8 6 c 6 c 6 8 8 
    . . . . . . . . 8 8 c 6 c 8 8 8 
    . . . . . . . . . . c 8 f 8 8 8 
    . . . . . . . . . . . 8 f 8 8 8 
    . . . . . . . . . . . . f 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . . 8 8 8 
    . . . . . . . . . . . . . . 8 8 
    `, SpriteKind.Player)
Ship.setStayInScreen(true)
Ship.setPosition(145, 60)
controller.moveSprite(Ship, 0, 50)
info.setScore(0)
Laseroffset = 10
let Enemyoffset = 10
info.setLife(5)
game.onUpdate(function () {
    if (sprites.allOfKind(SpriteKind.Player).length > 2) {
        Enemy2 = sprites.allOfKind(SpriteKind.Enemy)._pickRandom()
        if (Enemy2.image == img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 . . . . . . . 
            . . . . 2 2 . 2 2 . . . . . . 
            . . . 2 2 . . . 2 2 c c . . . 
            . . 2 2 . . . . . . . . . . . 
            4 2 2 2 2 2 7 7 . . . . . . . 
            4 2 2 2 2 2 7 7 . . . . . . . 
            . . 2 2 . . . . . . . . . . . 
            . . . 2 2 . . . 2 2 c c . . . 
            . . . . 2 2 . 2 2 . . . . . . 
            . . . . . 2 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `) {
            projectile5 = sprites.createProjectileFromSprite(img`
                88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                ........................................................................................................................................................................................................
                ........................................................................................................................................................................................................
                ........................................................................................................................................................................................................
                ........................................................................................................................................................................................................
                88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                `, Enemy2, 0, 0)
            projectile5.setFlag(SpriteFlag.Invisible, true)
            projectile5.setKind(SpriteKind.G)
            if (projectile5.overlapsWith(Ship)) {
                projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Enemy2, 100, 0)
                projectile4.setKind(SpriteKind.Laser)
                music.zapped.play()
            }
            projectile5.destroy()
        }
    }
})
game.onUpdate(function () {
    if (sprites.allOfKind(SpriteKind.Player).length > 2) {
        Enemy2 = sprites.allOfKind(SpriteKind.Enemy)._pickRandom()
        if (Enemy2.image == img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 . . . . . . . 
            . . . . 2 2 . 2 2 . . . . . . 
            . . . 2 2 . . . 2 2 c c . . . 
            . . 2 2 . . . . . . . . . . . 
            4 2 2 2 2 2 7 7 . . . . . . . 
            4 2 2 2 2 2 7 7 . . . . . . . 
            . . 2 2 . . . . . . . . . . . 
            . . . 2 2 . . . 2 2 c c . . . 
            . . . . 2 2 . 2 2 . . . . . . 
            . . . . . 2 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `) {
            if (Enemy2.top < Ship.top && Enemy2.bottom > Ship.bottom) {
                projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Enemy2, 100, 0)
                projectile4.setKind(SpriteKind.Laser)
                music.zapped.play()
            }
            projectile5.destroy()
        }
    }
})
game.onUpdateInterval(100, function () {
    Pewpew()
})
game.onUpdateInterval(200, function () {
    if (Math.percentChance(Enemyoffset)) {
        projectile2 = sprites.createProjectileFromSide(img`
            2 . . . . . . . . . . . . . . 
            2 2 . . . . . . . . . . . . . 
            2 2 2 2 2 . . . . . . . . . . 
            2 2 2 2 2 2 2 . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 2 2 . . 
            . . . 4 4 2 2 2 2 2 f f 2 2 2 
            . . . . . . 2 2 2 2 2 2 2 . . 
            . . . . . . 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 . . . . . . 
            2 2 2 2 2 2 2 . . . . . . . . 
            2 2 2 2 2 . . . . . . . . . . 
            2 2 . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . 
            `, 50, 0)
        projectile2.setKind(SpriteKind.Enemy)
        projectile2.y = randint(10, 110)
        if (Math.percentChance(20)) {
            myEnemy = projectile2
            myEnemy.follow(Ship, 70)
            myEnemy.setImage(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 . . . . . . . 
                . . . . 2 2 . 2 2 . . . . . . 
                . . . 2 2 . . . 2 2 c c . . . 
                . . 2 2 . . . . . . . . . . . 
                4 2 2 2 2 2 7 7 . . . . . . . 
                4 2 2 2 2 2 7 7 . . . . . . . 
                . . 2 2 . . . . . . . . . . . 
                . . . 2 2 . . . 2 2 c c . . . 
                . . . . 2 2 . 2 2 . . . . . . 
                . . . . . 2 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `)
        }
    }
})
