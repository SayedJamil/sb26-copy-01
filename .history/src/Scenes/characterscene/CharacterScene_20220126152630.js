import lottie from "lottie-web"
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneAssetmap from './CharacterSceneAssetMap';
// bg sound charac class
function CharacterScene({ }) {
  const { Bg, Loading } = useLoadAsset(CharacterSceneAssetmap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { characterscene } = Assets;
  console.log(Assets)
  const Ref = useRef(null);

  useEffect(() => {
    if (Assets.explain && Ref.current && !Loading) {
      const ch = Lottie.loadAnimation({
        name: "placeholder",
        container: Ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: characterscene?.lottie[0],
      })
    }
  }, [Assets, Loading])
    return <div>
      
  </div>;
}

export default CharacterScene;
