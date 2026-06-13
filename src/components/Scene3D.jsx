import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Sparkles } from "@react-three/drei";

const FloatingObjects = () => {
  const group = useRef();
  
  // Rotate the entire group slowly based on mouse position or time
  useFrame((state) => {
    group.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.3;
    
    // Add stronger parallax effect based on mouse
    const mouseX = (state.pointer.x * Math.PI) / 8;
    const mouseY = (state.pointer.y * Math.PI) / 8;
    group.current.position.x = mouseX;
    group.current.position.y = mouseY;
  });

  return (
    <group ref={group}>
      <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[4, 1, -2]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#34d399" wireframe opacity={0.6} transparent />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={2.5} floatIntensity={2}>
        <mesh position={[-4, -1, -3]}>
          <torusGeometry args={[0.8, 0.3, 16, 32]} />
          <meshStandardMaterial color="#22d3ee" wireframe opacity={0.6} transparent />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={3}>
        <mesh position={[2, -4, -5]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#10b981" wireframe opacity={0.6} transparent />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={2.5} floatIntensity={2}>
        <mesh position={[-5, 3, -4]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color="#06b6d4" wireframe opacity={0.6} transparent />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
        <mesh position={[0, 3, -6]}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial color="#0ea5e9" wireframe opacity={0.4} transparent />
        </mesh>
      </Float>
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020617] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        {/* Stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Sparkles for extra effect */}
        <Sparkles count={150} scale={15} size={2} speed={0.4} opacity={0.5} color="#34d399" />
        
        <FloatingObjects />
        
      </Canvas>
    </div>
  );
};

export default Scene3D;
