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

function Teacher() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.teacher)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { teacherScene } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref10 = useRef(null);

    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_04.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        playSound.on('end', () => {
            setisLoading(true)
            setSceneId('/police')
        })
    }, [])

    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (teacherScene?.lottie && Ref10.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "teacher",
                    container: Ref10.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: teacherScene?.lottie[0],
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
                        setSceneId("/police")
                    }}>
                        <Image src={teacherScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        playSound.stop()
                        setisLoading(true)
                        setSceneId("/gardener")
                    }}>
                        <Image src={teacherScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>
                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={teacherScene?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={teacherScene?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }
                    <Image src={teacherScene?.sprites[0]} alt="txt" className="iconGirl" />
                   
                    <div ref={Ref10} className="teacherSceneIcon" id="teacher"></div>
                </>
            }
        />
    );
}

export default Teacher;
