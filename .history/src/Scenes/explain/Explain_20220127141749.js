import { useContext, useRef, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import ExplainMap from './ExplainAssetMap';
import lottie from "lottie-web"
import "../../styles/explain.css"
import Image from '../../utils/elements/Image';


export default function Explain() {
  const { Bg, Loading } = useLoadAsset(ExplainMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { explain } = Assets;
  const Ref = useRef(null);

  useEffect(() => {
    if (characterscene && Ref01.current && !Loading) {
      try {
        lottie.loadAnimation({
          name: "armyman",
          container: Ref01.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: characterscene?.lottie[0],
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
          <div onClick={() => setSceneId('/armyman')}>
            <Image src={explain?.sprites[0]} alt="" id="" className="helperIcon armymanIcon" />
          </div>
          <div onClick={() => setSceneId('/dentist')}>
            <Image src={explain?.sprites[1]} alt="" className="helperIcon dentistIcon" />
          </div>
          <div onClick={() => setSceneId('/doctor')}>
            <Image src={explain?.sprites[2]} alt="" className="helperIcon doctorIcon" />
          </div>
          <div onClick={() => setSceneId('/firefighter')}>
            <Image src={explain?.sprites[3]} alt="" className="helperIcon fireFighterIcon" />
          </div>
          <div onClick={() => setSceneId('/floorcleaner')}>
            <Image src={explain?.sprites[4]} alt="" className="helperIcon floorCleanerIcon" />
          </div>
          <div onClick={() => setSceneId('/garbagecollector')}>
            <Image src={explain?.sprites[5]} alt="" className="helperIcon garbageCollectorIcon" />
          </div>
          <div onClick={() => setSceneId('/gardener')}>
            <Image src={explain?.sprites[6]} alt="t" className="helperIcon gardenerIcon" />
          </div>
          <div onClick={() => setSceneId('/police')}>
            <Image src={explain?.sprites[7]} alt="" className="helperIcon policeIcon" />
          </div>
          <div onClick={() => setSceneId('/guard')}>
            <Image src={explain?.sprites[8]} alt="" className="helperIcon guardIcon" />
          </div>
          <div onClick={() => setSceneId('/teacher')}>
            <Image src={explain?.sprites[9]} alt="" className="helperIcon teacherIcon" />
          </div>

          {/* <Image src={explain?.sprites[10]} alt="" className="girlIcon" /> */}
          <div ref={Ref1} className="armyManSceneIcon" id="armyman"></div>
        </>
      }
    />
  )
}
