import Lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';

function CharacterScene() {
    const { Bg, Loading } = useLoadAssett(CharacterSceneMap)
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
            Bg={Bg}
            sprites={
                <>
                    
                    <Image src={characterscene?.sprites[4]} alt="" className="helperIcon floorCleanerIcon" />
                    
                </>
            }
        />
    )
}

export default CharacterScene;
