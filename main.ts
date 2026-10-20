input.onButtonPressed(Button.A, function () {
    basic.showString("Physic is the best")
    music.play(music.stringPlayable("B C G B E A D - ", 1599), music.PlaybackMode.UntilDone)
})
music.play(music.createSoundExpression(WaveShape.Triangle, 2311, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
