import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
