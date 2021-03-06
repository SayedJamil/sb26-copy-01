import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/activity.css'
import Scenes from '../../utils/Scenes';
import '../../styles/explain.css'
import '../../styles/characterscene.css'
import Image from '../../utils/elements/Image';
import { SoundContext } from '../../contexts/SoundContext';
import { Howl, Howler } from 'howler';
import lottie from 'lottie-web';
import AssetsMap from '../../Assets';
function Activity02End() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity01end)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, setStars, setCharNum, setCharacter, setToolNum, setNum, BG_sound } = useContext(SceneContext);
    const { activityend } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const Ref30 = useRef(null);
    const [enableButton, setEnableButton] = useState(true)
    const [buttonClicked, setButtonClicked] = useState(false)
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_48.mp3`],
    });
    const sound02 = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_49.mp3`],
    });
    const sound03 = new Howl({
        src: [`ee01_ow_thss_pl1/audio/replayAudio.mp3`],
    });
    const sound04 = new Howl({
        src: [`ee01_ow_thss_pl1/audio/children_clapping.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)
    const [play02Sound, setPlay02Sound] = useState(sound02)
    const [play03Sound, setPlay03Sound] = useState(sound03)
    const [play04Sound, setPlay04Sound] = useState(sound04)
    useEffect(() => {

        playSound.play()
        playSound.on('end', () => {
            play02Sound.play()
        })
        play02Sound.on('end', () => {
            play04Sound.play()
            lottie.stop()
        })
        play04Sound.on('end', () => {
            play03Sound.play()
            lottie.play()
        })
        play03Sound.on('start', () => {
            setEnableButton(true)
        })
        play03Sound.on('end', () => {
            lottie.stop()

        })
    }, [])
    useEffect(() => {
        if (activityend?.lottie && Ref30.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "explaingirl",
                    container: Ref30.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: activityend?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
    }, [Assets, Loading])

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>


                    <Image src={activityend?.sprites[6]} alt="txt" className="replay_btn" onClick={() => {
                        if (enableButton) {
                            playSound.stop()
                            setisLoading(true)
                            setSceneId('/')
                            setStars(0)
                            setCharacter('doctor')
                            setCharNum(8)
                            setNum('09')
                            setToolNum(15)

                        }
                    }} />
                    <div ref={Ref30} className="activityEndGirlIcon" id="explaingirl"></div>
                </>
            }
        />
    );
}

export default Activity02End;
