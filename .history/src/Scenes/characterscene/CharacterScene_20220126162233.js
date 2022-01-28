import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import PlayAudio from "../../utils/playAudio"
import '../../styles/characterscene.css'
import Scenes from '../../utils/Scenes';
import Image from '../../utils/elements/Image';


function CharacterScene() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;
    const Ref = useRef(null);

    useEffect(() => {
        if (Assets.characterscene && Ref.current && !Loading) {
            const ch = lottie.loadAnimation({
                name: "placeholder",
                container: Ref.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: characterscene?.lottie[0],
            })
        }
    }, [Assets, Loading])

    return (
        <Scenes
            Bg={characterscene?.armyMan.}
            sprites={
                <>
                    {console.log(characterscene?.armyMan.Bg)}
                    <Image src={characterscene?.armyMan.sceneChara} alt="" className="armyManSceneIcon" />
                    <Image src={characterscene?.sprites[0]} alt="" className="iconGirl" />
                </>
            }
        />
    )
}

export default CharacterScene;
