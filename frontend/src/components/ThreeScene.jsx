import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingBrain = ({ position, scale = 1, color = '#ff6b35' }) => {
  const meshRef = useRef();
  const time = useRef(0);

  useFrame((state) => {
    time.current += 0.01;
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time.current) * 0.3;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.cos(time.current * 0.5) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(time.current) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

const SpinningCube = ({ position, scale = 1, color = '#ff6b35' }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.1}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
};

const AINode = ({ position, scale = 1, color = '#ff6b35' }) => {
  const meshRef = useRef();
  const time = useRef(0);

  useFrame(() => {
    time.current += 0.02;
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time.current) * 0.5;
      meshRef.current.rotation.y += 0.015;
      meshRef.current.scale.setScalar(scale + Math.sin(time.current * 2) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

const NeuralSphere = ({ position, scale = 1, color = '#ff6b35' }) => {
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
      <sphereGeometry args={[1, 32, 32]} />
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
};

const ThreeScene = ({ shapes = 'mixed', count = 5, color = '#ff6b35' }) => {
  const positions = useMemo(() => {
    return Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ]);
  }, [count]);

  const scales = useMemo(() => {
    return Array.from({ length: count }, () => Math.random() * 0.5 + 0.5);
  }, [count]);

  const renderShape = (index) => {
    const position = positions[index];
    const scale = scales[index];

    switch (shapes) {
      case 'brains':
        return <FloatingBrain key={index} position={position} scale={scale} color={color} />;
      case 'cubes':
        return <SpinningCube key={index} position={position} scale={scale} color={color} />;
      case 'nodes':
        return <AINode key={index} position={position} scale={scale} color={color} />;
      case 'spheres':
        return <NeuralSphere key={index} position={position} scale={scale} color={color} />;
      default:
        const shapeTypes = [FloatingBrain, SpinningCube, AINode, NeuralSphere];
        const ShapeComponent = shapeTypes[index % shapeTypes.length];
        return <ShapeComponent key={index} position={position} scale={scale} color={color} />;
    }
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color={color} />
      
      {Array.from({ length: count }, (_, index) => renderShape(index))}
    </Canvas>
  );
};

export default ThreeScene;