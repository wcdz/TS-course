(() => {

    // Este tipo de dato solo existe en typescript
    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }

    let currentAudio = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);

})();