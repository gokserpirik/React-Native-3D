import { Canvas, useFrame, useLoader } from '@react-three/fiber/native'
import React, { Suspense} from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';





function Phone(){

  const myMesh = React.useRef();
  /* one circle on start on x axis */
  useFrame(({ clock }) => {
   if(myMesh.current){
    myMesh.current.rotation.y += 0.01;
    
   }

  })



  const phone = useLoader(OBJLoader, require('./phone/ip.obj'));
  return (
    <mesh ref={myMesh} rotation={[0,1,0]} > 
      <primitive object={phone} scale={0.01}  />
 
    </mesh>
  )
}




export default function App() {


  return (
    <Canvas >

    <pointLight position={[10, 10, 10]} />

    <Suspense fallback={null}>
    <Phone />

    </Suspense>
    <mesh position={[0,-0.2,-0.1]} >

      <cylinderGeometry args={[0.9,1.2,0.5,64]} />
      <meshStandardMaterial  />
    </mesh>

    
   
  </Canvas>
  );
}