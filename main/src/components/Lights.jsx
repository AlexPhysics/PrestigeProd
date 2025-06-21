import { Environment, Lightformer } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Lights = () => {
  const groupRef = useRef();

  useFrame(({ mouse }) => {
    if (groupRef.current) {
      // Parallax rotation en fonction de la souris (x, y entre -1 et 1)
      groupRef.current.rotation.y = mouse.x * 0.5;
      groupRef.current.rotation.x = mouse.y * 0.3;
    }
  });

  return (
    <group ref={groupRef} name='lights'>
      <Environment resolution={256}>
        <group>
          <Lightformer
            form='rect'
            intensity={10}
            position={[-1, 0, -10]}
            scale={10}
            color={'#495057'}
          />
          <Lightformer
            form='rect'
            intensity={10}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form='rect'
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={'#f8f9fa'}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={'#f8f9fa'}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 3}
      />
    </group>
  );
};

export default Lights;
