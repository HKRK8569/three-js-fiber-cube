import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [-3, 0.5, 3] }}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <CameraControls makeDefault />
      </Canvas>
    </div>
  );
}

export default App;
