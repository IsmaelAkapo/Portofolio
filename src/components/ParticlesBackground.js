"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// es el componente que crea y anima las partículas
function Particles({ count = 3000 }) {
  const mesh = useRef(); /* es para crear una referencia mutable que se puede asignar al objeto de malla
  de partículas, lo que permite acceder a él y modificarlo directamente en el ciclo de animación */

  // es para generar posiciones aleatorias para las partículas utilizando useMemo para optimizar el rendimiento
  const positions = useMemo(() => {
    const arr = new Float32Array(
      count * 3,
    ); /* es para crear un arreglo de números de punto flotante de 32 bits con una longitud de count*3
        para almacenar las coordenadas x, y, z de cada partícula */
    for (let i = 0; i < count; i++) {
      arr[i * 3] =
        (Math.random() - 0.5) *
        20; /* es para asignar una posición x aleatoria a cada partícula, donde Math.random() genera un número entre 0 y 1, se resta 0.5 para centrarlo alrededor de 0, y se multiplica por 20 para ampliar el rango de posiciones */
      arr[i * 3 + 1] =
        (Math.random() - 0.5) *
        20; /* es para asignar una posición y aleatoria a cada partícula utilizando la misma lógica que para la posición x */
      arr[i * 3 + 2] =
        (Math.random() - 0.5) *
        20; /* es para asignar una posición z aleatoria a cada partícula utilizando la misma lógica que para las posiciones x e y */
    }
    return arr;
  }, [count]); // es para indicar que el arreglo de posiciones depende de la variable count

  // es para rotar lentamente las partículas en cada frame
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02; /* es para rotar la malla de partículas en el eje y en función del tiempo transcurrido */
    mesh.current.rotation.x = state.clock.elapsedTime * 0.01; /* es para rotar la malla de partículas en el eje x a una velocidad más lenta */
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#64FFDA"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ParticlesBackground() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0 }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      {/* es la luz ambiental para iluminar la escena */}
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
}
