import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import {Room} from "./Room"
import HeroLights from "./HeroLights.jsx"
 //this is used by Hero.jsx for 3-d modelling ..

//glb model--file format to render 3d models
//a canvas is to be set in 3 js
export const HeroExperience = () => {
  const isTablet=useMediaQuery({query:'(max-width:1024px)'});
   const isMobile=useMediaQuery({query:'(max-width:768px)'});
  return (
    <Canvas camera={{position:[0,0,14],fov:45}}>


      <OrbitControls
      enablePan={false}
      enableZoom={!isTablet }
      maxDistance={40}
      minDistance={20}
      minPolarAngle={Math.PI/5}
      maxPolarAngle={Math.PI/2}
    

     
      />
       <HeroLights/>
      <group
      scale={isMobile || isTablet?0.6 :0.9}
      position={[0,-1.7,0]}
      rotation={[1,-Math.PI/3,0]}
      >
         <Room/>
      </group>
     
      {/*for normal usage just creating a box..
       <mesh>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color="teal"/>
      </mesh>*/}
    </Canvas>
    
  )
}
