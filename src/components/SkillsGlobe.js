"use client";

import {Canvas,useFrame} from "@react-three/fiber";
import{Text,OrbitControls} from "@react-three/drei";// es para importar el componente de texto 3D y los controles de órbita 
// para permitir la interacción con la escena 3D
import{useRef,useMemo} from "react";
import * as THREE from "three";// es para importar la biblioteca de gráficos 3D Three.js


 // es cada skill individual flotando en el espacio 3D
 function  SkillTag({position,name,color}){
   const ref = useRef(); // es para crear una referencia mutable que se puede asignar al objeto de texto 3D,
   // lo que permite acceder a él y modificarlo directamente en el ciclo de animación
   // es para que el texto siempre mire hacia la cámara
   useFrame(({camera})=>{
    ref.current.lookAt(camera.position);
    });
    return(
        <Text
        ref={ref}
        position={position}
        fontSize={0.18}
        color={color}
        anchorX="center"
        anchorY="middle"

    >
        {name}
    </Text>
   );
 }

   // es el componente principal que distribuye los skills en la esfera
   function SkillsSphere({skills}){
     const groupRef = useRef(); // es para crear una referencia mutable que se puede asignar al grupo de habilidades,
     // es para rotar la esfera lentamente
     useFrame(() => {
       groupRef.current.rotation.y += 0.003; // es para rotar la esfera en el eje y a una velocidad constante
     });
     // es para calcular posiciones en la esfera usando coordenadas esféricas
     const positions=useMemo(()=>{
        return skills.map((_,i)=>{
            const phi=Math.acos(-1 + (2*i)/skills.length); // es para calcular el ángulo polar phi en función del índice de la 
            // habilidad y el número total de habilidades
            const theta=Math.sqrt(skills.length*Math.PI)*phi; // es para calcular el ángulo azimutal 
            // theta utilizando la raíz cuadrada del número total de habilidades multiplicada por pi y el ángulo polar phi
            return[
          3 * Math.sin(phi) * Math.cos(theta), // x
          3 * Math.cos(phi),                    // y
          3 * Math.sin(phi) * Math.sin(theta),  // z
            ];
        });
    
   }, [skills]); // es para indicar que las posiciones dependen de la lista de habilidades

   return(
    <group ref={groupRef}>
        {skills.map((skill,i)=>(
            <SkillTag
            key={skill.name}
            name={skill.name}
            position={positions[i]}
            color={skill.color}
            />
        ))}
    </group>
   );
 }

export default function SkillsGlobe({skills}){
    return (
      // es el lienzo 3D con altura fija para la sección skills
      <Canvas
        style={{ height: "500px", background: "transparent" }}
        camera={{ position: [0, 0, 7], fov: 60 }}
      >
        <ambientLight intensity={1} />
        <SkillsSphere skills={skills} />
        {/* es para permitir rotar el globo con el mouse */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    );
}