import React, { useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Text, Grid, OrbitControls } from "@react-three/drei";

function Axes({ length = 2, cubeSize }) {
  return (
    <group>
      {/* X axis - red */}
      <mesh position={[length / 2, 0, 0]}>
        <boxGeometry args={[length, 0.02, 0.02]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <Text
        position={[length + 0.15, 0, 0.2]}
        fontSize={0.2}
        color="red"
        anchorX="center"
        anchorY="middle"
      >
        X ({cubeSize})
      </Text>

      {/* Y axis - green */}
      <mesh position={[0, length / 2, 0]}>
        <boxGeometry args={[0.02, length, 0.02]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <Text
        position={[0, length + 0.15, 0]}
        fontSize={0.2}
        color="green"
        anchorX="center"
        anchorY="middle"
      >
        Y ({cubeSize})
      </Text>

      {/* Z axis - blue */}
      <mesh position={[0, 0, length / 2]}>
        <boxGeometry args={[0.02, 0.02, length]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <Text
        position={[0, 0, length + 0.15]}
        fontSize={0.2}
        color="blue"
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI / 2, 0, 0]} // tilt back to face up
      >
        Z ({cubeSize})
      </Text>
    </group>
  );
}

function Cube({ size }) {
  return (
    <mesh position={[size / 2, size / 2, size / 2]} castShadow receiveShadow>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color="white" roughness={0.5} metalness={0.1} />
    </mesh>
  );
}


function CameraController({ cameraPosition }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...cameraPosition);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, cameraPosition]);

  return null;
}

export default function CubeWithAxes({ height: size }) {
  const cameraPosition = [3, 3, 3];

  return (
    <div className="relative w-full h-[80vh] sm:h-[calc(100vh-100px)] overflow-hidden">
      <Canvas className="block w-full h-full" shadows>
        {/* Ambient light for soft global illumination */}
        <ambientLight intensity={0.3} />

        {/* Directional light for sharp shadows */}
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={4}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={20}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />

        {/* Fill light for extra brightness */}
        <pointLight position={[-5, -5, 5]} intensity={0.1} color="lightblue" />

        <Cube size={size / 2}/>
        <Axes length={size / 2 + 1} cubeSize={size} />

        <Grid
            args={[10, 10]} // size of grid
            sectionSize={1}
            cellSize={0.25}
            cellThickness={0.5}
            sectionThickness={1}
            fadeDistance={20}
            infiniteGrid
            position={[5, 0, 5]}
            cellColor={"white"}
            sectionColor={"white"}
        />
        <CameraController cameraPosition={cameraPosition} />
        <OrbitControls />
      </Canvas>

      <div className="absolute top-4 left-0 w-full text-center pointer-events-none select-none text-white font-semibold text-base sm:text-lg text-shadow-md">
        Cube with 3D X, Y, Z Axes
      </div>
    </div>
  );
}
