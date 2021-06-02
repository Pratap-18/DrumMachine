
const drums = new Howl(
    {
        "src": [
            "./mydrums/mydrums.webm",
            "./mydrums/mydrums.mp3"
        ],
        "sprite": {
            "clap": [
                0,
                356.077097505669
            ],
            "crash": [
                2000,
                1803.2199546485258
            ],
            "ghostsnare": [
                5000,
                1236.235827664399
            ],
            "hihat": [
                8000,
                702.9931972789108
            ],
            "kick": [
                10000,
                474.6031746031747
            ],
            "openhat": [
                12000,
                962.7664399092968
            ],
            "snare": [
                14000,
                1168.616780045351
            ]
        }
    }

)
// drums.play('snare')
const drumkit = document.querySelector('.drumkit');
function playDrum(e) {
    if (e.target.classList.contains('pad')) {
        e.preventDefault()
        let soundToPlay = e.target.dataset.sound
        drums.play(soundToPlay)
    }
}

drumkit.addEventListener('click', playDrum)
drumkit.addEventListener('touchstart', playDrum)

// drums.play('snare')