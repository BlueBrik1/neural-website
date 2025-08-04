import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// Define all shape components using function declarations for proper hoisting
function NeuralSphere({ position, scale = 1, color = '#ff6b35' }) {
  const meshRef = useRef();
  const time = useRef(0);
  useFrame(() => {
    time.current += 0.008;
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.x = position[0] + Math.sin(time.current) * 0.3;
      meshRef.current.position.z = position[2] + Math.cos(time.current) * 0.3;
    }
  });
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        roughness={0.1}
        metalness={0.9}
        wireframe={true}
      />
    </mesh>
  );
}

function FloatingBrain({ position, scale = 1, color = '#ff6b35' }) {
  const meshRef = useRef();
  const time = useRef(0);
  useFrame(() => {
    time.current += 0.01;
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(time.current) * 0.2;
    }
  });
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.1}
        roughness={0.3}
        metalness={0.7}
        wireframe={true}
      />
    </mesh>
  );
}

function AINode({ position, scale = 1, color = '#ff6b35' }) {
  const meshRef = useRef();
  const time = useRef(0);
  useFrame(() => {
    time.current += 0.012;
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.z += 0.006;
      meshRef.current.position.x = position[0] + Math.cos(time.current) * 0.25;
      meshRef.current.position.z = position[2] + Math.sin(time.current) * 0.25;
    }
  });
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.12}
        roughness={0.4}
        metalness={0.6}
        wireframe={true}
      />
    </mesh>
  );
}

// Memoize the components
const MemoizedNeuralSphere = React.memo(NeuralSphere);
const MemoizedFloatingBrain = React.memo(FloatingBrain);
const MemoizedAINode = React.memo(AINode);

// Export the components to ensure they are available
export { MemoizedNeuralSphere as NeuralSphere, MemoizedFloatingBrain as FloatingBrain, MemoizedAINode as AINode };

const MAX_SHAPES = 15;

const ThreeScene = React.memo(({ shapes = 'mixed', count = 5, color = '#ff6b35' }) => {
  // Limit the number of shapes to avoid CPU spikes
  const safeCount = Math.min(count, MAX_SHAPES);
  const positions = useMemo(() => {
    return Array.from({ length: safeCount }, () => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ]);
  }, [safeCount]);

  const scales = useMemo(() => {
    return Array.from({ length: safeCount }, () => Math.random() * 0.5 + 0.5);
  }, [safeCount]);

  const renderShape = useCallback((index) => {
    const position = positions[index];
    const scale = scales[index];
    
    // Use if-else instead of switch to avoid potential hoisting issues
    if (shapes === 'brains') {
      return <MemoizedFloatingBrain key={index} position={position} scale={scale} color={color} />;
    } else if (shapes === 'cubes') {
      return <MemoizedAINode key={index} position={position} scale={scale} color={color} />;
    } else if (shapes === 'nodes') {
      return <MemoizedAINode key={index} position={position} scale={scale} color={color} />;
    } else if (shapes === 'spheres') {
      return <MemoizedNeuralSphere key={index} position={position} scale={scale} color={color} />;
    } else {
      // Default case - use NeuralSphere
      return <MemoizedNeuralSphere key={index} position={position} scale={scale} color={color} />;
    }
  }, [positions, scales, shapes, color]);

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color={color} />
      {Array.from({ length: safeCount }, (_, index) => renderShape(index))}
    </Canvas>
  );
});

export default ThreeScene;