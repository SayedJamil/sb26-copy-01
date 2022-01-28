const imgUrl = "/internal/images/"
const soundUrl = "/internal/audio/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const icons = "internal/icons/ICON_CI_01/"
// public\internal\audio\SB_26_Audio_07.mp3
const CharacterSceneMap = {
    armyMan: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_06.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_armyman01.svg`

        ],
        sounds: [
            `${soundUrl}SB_26_Audio_07.mp3`
        ],
        lottie: [
            `${lottieUrl}Scene_07/SB_26_Scene_07.json`,
        ]
    },
    dentist: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_13.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_dentist.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_29.mp3`],
        lottie: [
            `${lottieUrl}Scene_30/SB_26_Scene_30.json`,
        ]
    },
    doctor: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_02.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_docter1.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_03.mp3`],
        lottie: [
            `${lottieUrl}Scene_03/SB_26_Scene_03.json`,
        ]
    },
    fireFighter: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_10.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_firefighter.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_27.mp3`],
        lottie: [
            `${lottieUrl}Scene_27/SB_26_Scene_27.json`,
        ]
    },
    floorCleaner: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_11.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_florecleaner01.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_28.mp3`],
        lottie: [
            `${lottieUrl}Scene_28/SB_26_Scene_28.json`,
        ]
    },
    garbageCollector: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_14.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_garbage collector.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_31.mp3`],
        lottie: [
            `${lottieUrl}Scene_31/SB_26_Scene_31.json`,
        ]
    },
    gardener: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_04.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_gardener.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_05.mp3`],
        lottie: [
            `${lottieUrl}Scene_05/SB_26_Scene_05.json`,
        ]
    },
    guard: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_12.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_guard.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_30.mp3`],
        lottie: [
            `${lottieUrl}Scene_29/SB_26_Scene_29.json`,
        ]
    },
    police: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_05.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_police.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_06.mp3`],
        lottie: [
            `${lottieUrl}Scene_06/SB_26_Scene_06.json`,
        ]
    },
    teacher: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_03.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_teacher.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_04.mp3`],
        lottie: [
            `${lottieUrl}Scene_04/SB_26_Scene_04.json`,
        ]
    },

}

export default CharacterSceneMap;
