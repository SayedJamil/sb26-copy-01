import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';
import { Howl, Howler } from 'howler';
import { SoundContext } from '../../contexts/SoundContext';
import AssetsMap from '../../Assets';

function GarbageCollector() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.garbageCollector)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, BG_sound } = useContext(SceneContext);
    const { garbageCollectorScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const Ref6 = useRef(null);
    const Ref601 = useRef(null);

    const [buttonClicked, setButtonClicked] = useState(false)
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_31.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {

        playSound.play()
        playSound.on('end', () => {

            if (!buttonClicked) {
                setisLoading(true)
            }
            setSceneId('/activity02')
        })
    }, [])



    useEffect(() => {
        if (garbageCollectorScene?.lottie && Ref6.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "garbagecollector",
                    container: Ref6.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: garbageCollectorScene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
        if (garbageCollectorScene?.lottie && Ref601.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "circleGirl",
                    container: Ref601.current,
                    renderer: "svg",
                    loop: false,
                    autoplay: true,
                    animationData: garbageCollectorScene?.lottie[1],
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

                    <div onClick={() => {
                        playSound.stop()
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/activity02")
                    }}>
                        <Image src={garbageCollectorScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        playSound.stop()
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/guard")
                    }}>
                        <Image src={garbageCollectorScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>


                    <Image src={garbageCollectorScene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="garbageCollectorSceneIcon" /> */}
                    <div ref={Ref601} className="iconGirlEyes" id="circleGirl"></div>
                    <div ref={Ref6} className="garbageCollectorSceneIcon" id="garbagecollector"></div>
                </>
            }
        />
    );
}

export default GarbageCollector;
