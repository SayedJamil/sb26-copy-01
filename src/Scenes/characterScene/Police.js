import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';
import { SoundContext } from '../../contexts/SoundContext';
import { Howl, Howler } from 'howler';
import AssetsMap from '../../Assets';

function Police() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.police)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { policeScene } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref9 = useRef(null);

    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_06.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        playSound.on('end', () => {
            setisLoading(true)
            setSceneId('/activity01')
        })
    }, [])

    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (policeScene?.lottie && Ref9.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "police",
                    container: Ref9.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: policeScene?.lottie[0],
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
                        setisLoading(true)
                        setSceneId("/activity01")
                    }}>
                        <Image src={policeScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        playSound.stop()
                        setisLoading(true)
                        setSceneId("/teacher")
                    }}>
                        <Image src={policeScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>
                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={policeScene?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={policeScene?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }
                    <Image src={policeScene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="policeSceneIcon" /> */}

                    <div ref={Ref9} className="policeSceneIcon" id="police"></div>
                </>
            }
        />
    );
}

export default Police;
