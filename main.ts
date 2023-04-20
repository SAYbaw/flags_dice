function sixSidedDie () {
    basic.clearScreen()
    roll = randint(1, 6)
    if (roll == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (roll == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (roll == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (roll == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (roll == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (dieFlag == 0) {
        dieFlag = 1
        basic.showString("twenty")
    } else {
        dieFlag = 0
        basic.showString("six")
    }
})
input.onButtonPressed(Button.B, function () {
    if (flag == 0) {
        flag = 1
    } else {
        flag = 0
    }
    if (flag == 0) {
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (dieFlag == 0) {
        sixSidedDie()
    } else {
        twentySidedDie()
    }
})
function twentySidedDie () {
    basic.clearScreen()
    basic.showNumber(randint(1, 20))
}
let roll = 0
let dieFlag = 0
let flag = 0
let polyFlag = 0
flag = 0
dieFlag = 0
