import { useFrame, useThree } from '@react-three/fiber';
import { 
  Sparkles, 
  useScroll, 
  Environment, 
  Float, 
  MeshTransmissionMaterial,
  Text,
  Sphere,
  Box
} from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Advanced AR Glasses Model
const ARGlasses = () => {
  const glassesRef = useRef();
  const scroll = useScroll();
  
  useFrame((state, delta) => {
    if (glassesRef.current) {
      const r1 = scroll.range(0, 1/8);
      const r2 = scroll.range(1/8, 2/8);
      const r3 = scroll.range(2/8, 4/8);
      
      // Complex rotation animations
      glassesRef.current.rotation.y = THREE.MathUtils.damp(
        glassesRef.current.rotation.y,
        Math.PI * 2 * r1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1,
        4,
        delta
      );
      
      glassesRef.current.rotation.x = THREE.MathUtils.damp(
        glassesRef.current.rotation.x,
        Math.cos(state.clock.elapsedTime * 0.3) * 0.2 + r2 * 0.5,
        3,
        delta
      );
      
      // Dynamic scaling
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1 + r3 * 0.3;
      glassesRef.current.scale.setScalar(scale);
      
      // Position animation
      glassesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
      glassesRef.current.position.z = -2 + r1 * 4 - r3 * 2;
    }
  });

  return (
    <group ref={glassesRef}>
      {/* Main Frame */}
      <group>
        <Box args={[2.5, 0.15, 0.15]} position={[0, 0.3, 0]}>
          <meshStandardMaterial 
            color="#2a2a2a" 
            roughness={0.2} 
            metalness={0.8}
            envMapIntensity={1}
          />
        </Box>
        
        {/* Bridge */}
        <Box args={[0.3, 0.1, 0.1]} position={[0, 0.2, 0]}>
          <meshStandardMaterial color="#2a2a2a" roughness={0.2} metalness={0.8} />
        </Box>
        
        {/* Temples */}
        <Box args={[0.1, 0.1, 2]} position={[-1.3, 0.3, -1]} rotation={[0, 0.2, 0]}>
          <meshStandardMaterial color="#2a2a2a" roughness={0.2} metalness={0.8} />
        </Box>
        <Box args={[0.1, 0.1, 2]} position={[1.3, 0.3, -1]} rotation={[0, -0.2, 0]}>
          <meshStandardMaterial color="#2a2a2a" roughness={0.2} metalness={0.8} />
        </Box>
      </group>

      {/* Advanced Lenses */}
      <group>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
          <Sphere args={[0.8]} position={[-0.9, 0, 0.1]}>
            <MeshTransmissionMaterial
              transmission={0.95}
              thickness={0.2}
              roughness={0.05}
              chromaticAberration={0.03}
              anisotropy={0.3}
              distortion={0.2}
              distortionScale={0.1}
              temporalDistortion={0.2}
              clearcoat={1}
              clearcoatRoughness={0.1}
              color="#4080ff"
            />
          </Sphere>
          <Sphere args={[0.8]} position={[0.9, 0, 0.1]}>
            <MeshTransmissionMaterial
              transmission={0.95}
              thickness={0.2}
              roughness={0.05}
              chromaticAberration={0.03}
              anisotropy={0.3}
              distortion={0.2}
              distortionScale={0.1}
              temporalDistortion={0.2}
              clearcoat={1}
              clearcoatRoughness={0.1}
              color="#4080ff"
            />
          </Sphere>
        </Float>
      </group>

      {/* Holographic Elements */}
      <group>
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="#00ffff"
          anchorX="center"
          anchorY="middle"
        >
          AR VISION
        </Text>
        <Sparkles 
          count={200} 
          scale={3} 
          size={8} 
          speed={1.2} 
          color="#00ffff"
          opacity={0.6}
        />
      </group>
    </group>
  );
};

// Advanced Particle System
const AdvancedParticles = ({ count = 2000 }) => {
  const particlesRef = useRef();
  const scroll = useScroll();

  const { positions, colors, scales, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Positions
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Colors with blue/cyan theme
      const hue = 0.5 + Math.random() * 0.2; // Blue to cyan range
      const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Scales
      scales[i] = Math.random() * 0.8 + 0.2;
      
      // Velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, colors, scales, velocities };
  }, [count]);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      const scrollOffset = scroll.offset;
      const positions = particlesRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Wave motion
        positions[i] += velocities[i] * delta * 60;
        positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i] * 0.01) * 0.002;
        positions[i + 2] += velocities[i + 2] * delta * 60;
        
        // Scroll-based movement
        positions[i + 1] += scrollOffset * 0.1;
        
        // Boundary wrapping
        if (positions[i] > 10) positions[i] = -10;
        if (positions[i] < -10) positions[i] = 10;
        if (positions[i + 2] > 10) positions[i + 2] = -10;
        if (positions[i + 2] < -10) positions[i + 2] = 10;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={count} 
          array={colors} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-scale" 
          count={count} 
          array={scales} 
          itemSize={1} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        vertexColors 
        sizeAttenuation 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Floating Holographic Elements
const HolographicElements = () => {
  const groupRef = useRef();
  const scroll = useScroll();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      const r4 = scroll.range(4/8, 6/8);
      const r5 = scroll.range(6/8, 1);
      
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x += delta * (0.5 + i * 0.1);
        child.rotation.z += delta * (0.3 + i * 0.05);
        child.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1);
        
        if (child.material) {
          child.material.opacity = 0.3 + r4 * 0.4 + r5 * 0.3;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.2} floatIntensity={0.3}>
          <Box 
            args={[0.2, 0.2, 0.2]} 
            position={[
              Math.cos(i * Math.PI * 0.25) * 5,
              Math.sin(i * Math.PI * 0.3) * 3,
              Math.sin(i * Math.PI * 0.25) * 4
            ]}
          >
            <meshStandardMaterial 
              color={`hsl(${180 + i * 15}, 80%, 60%)`}
              transparent
              opacity={0.4}
              emissive={`hsl(${180 + i * 15}, 80%, 30%)`}
              wireframe={i % 2 === 0}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
};

// Main Experience Component
export const Experience = () => {
  const scroll = useScroll();
  const { camera } = useThree();
  const sceneRef = useRef();

  useFrame((state, delta) => {
    const r1 = scroll.range(0, 1/8);
    const r2 = scroll.range(1/8, 2/8);
    const r3 = scroll.range(2/8, 4/8);
    const r4 = scroll.range(4/8, 6/8);
    const r5 = scroll.range(6/8, 1);

    // Dynamic camera movement
    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      Math.sin(r2 * Math.PI) * 2,
      3,
      delta
    );
    
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      r3 * 3 - r4 * 2 + r5 * 4,
      3,
      delta
    );
    
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      5 + r1 * 2 - r3 * 3 + r5 * 5,
      3,
      delta
    );

    // Scene rotation
    if (sceneRef.current) {
      sceneRef.current.rotation.y = THREE.MathUtils.damp(
        sceneRef.current.rotation.y,
        r2 * Math.PI * 0.5 - r4 * Math.PI * 0.3,
        4,
        delta
      );
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Lighting Setup */}
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#4080ff" />
      <spotLight 
        position={[0, 10, 0]} 
        intensity={1} 
        angle={0.3} 
        penumbra={1} 
        color="#00ffff"
      />
      
      {/* Environment */}
      <Environment preset="city" />
      
      {/* Main AR Glasses */}
      <ARGlasses />
      
      {/* Particle Systems */}
      <AdvancedParticles count={2000} />
      
      {/* Holographic Elements */}
      <HolographicElements />
      
      {/* Additional Effects */}
      <Sparkles 
        count={500} 
        scale={10} 
        size={15} 
        speed={0.5} 
        color="#ffffff"
        opacity={0.3}
      />
    </group>
  );
};

export default Experience;