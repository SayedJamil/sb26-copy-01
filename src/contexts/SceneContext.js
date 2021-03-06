import { createContext, useState, useEffect } from "react"


export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/")
  const [isLoading, setisLoading] = useState(true)
  // state to manage sounds and images for each scene
  const [transition, setTransition] = useState(null);
  const [Assets, setAssets] = useState({})
  const [character, setCharacter] = useState('doctor')
  const [num, setNum] = useState('09')
  const [charNum, setCharNum] = useState(8)
  const [toolNum, setToolNum] = useState(15)
  const [stars, setStars] = useState(0)
  const [BG_sound, setBG_sound] = useState(null);
  // loading part
  // useEffect(() => {
  //   setTimeout(() => {
  //     setisLoading(false)
  //   }, 2500)
  // }, [isLoading])

  return (
    <SceneContext.Provider value={{ SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, num, setNum, charNum, setCharNum, toolNum, setToolNum, stars, setStars, transition, setTransition, BG_sound, setBG_sound }}>
      {children}
    </SceneContext.Provider>
  )
}
