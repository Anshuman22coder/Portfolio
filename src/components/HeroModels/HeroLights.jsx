import * as THREE from "three";  //npm install @react-three/drei ,, in terminal

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight  //cone of light are spotlight...
      position={[0, 1, 6]}
      angle={0.15}
      penumbra={0.6}  //softnesss of light edges..
      intensity={150}    //intensity of light..
      color="amber"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[1, 9, 4]}
      angle={0.3}
      penumbra={0.9}
      intensity={60}
      color="#4cc9f0"
    />
    {/* purplish side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={40}
      color="#9d4edd"
    />
    {/* area light for soft moody fill */}
    <primitive  //this gives light from rectangular surfaces..
      object={new THREE.RectAreaLight("#a259ff",2,10,0)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]} //x-direction rotation is -ve ie,clockwise and in y it is anticlockwise...
      intensity={15}
    />
    {/* subtle point light that emits light from all direction from a point source providing atmospheric tone */}
    
    <pointLight position={[0, 1, 0]} intensity={80} color="#7209b7" /> 
    <pointLight position={[1, 2,-2]} intensity={10} color="#0d00a4" />
  </>
);

export default HeroLights;