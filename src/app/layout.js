import  { Syne,Space_Mono} from 'next/font/google';/* es para importar las fuentes de google fonts */
import './globals.css';
import { LanguageProvider } from "@/context/LanguageContext";  

const syne=Syne({/* es para configurar la fuente syne 
  con los pesos 400 y 700 y el display swap para mejorar 
  el rendimiento de la carga de la fuente */
    subsets:['latin'],//es para especificar que solo se cargue la fuente para el alfabeto latino
    variable:"--font-syne",//es para definir una variable CSS personalizada que se puede usar en todo el proyecto para aplicar la fuente Syne
    weight:["400","500","600","700","800"],//es para especificar los pesos de la fuente que se van a cargar
});

const spaceMono= Space_Mono({//es para configurar la fuente Space Mono 
// con los pesos 400 y 700 y el display 
// swap para mejorar el rendimiento de la carga de la fuente
subsets:['latin'],//es para especificar que solo se cargue la fuente para el alfabeto latino
variable:"--font-space-mono",//es para definir una variable CSS personalizada que se puede usar en todo el proyecto para aplicar la fuente Space Mono
weight:["400","700"],//es para especificar los pesos de la fuente que se van a cargar
});

export const metadata={//es para definir los metadatos de la página, 
// como el título que se muestra en la pestaña del navegador
  title:"Nouhou Ismael Akapo-Fullstack Developper",
  description:"Portofolio de Nouhou Ismael Akapo,Fullstack Developer.",
};


export default function RootLayout({children}){//es para definir el componente de diseño raíz que envuelve toda la aplicación
  return(
    <html lang="es">
    <body className={`${syne.variable} ${spaceMono.variable} bg-black text-white antialiased`}>
      {/* es para aplicar las fuentes Syne y Space Mono a todo el cuerpo de la página */}
      <LanguageProvider>
        {children} {/* es para renderizar los componentes hijos dentro del diseño raíz */}
      </LanguageProvider>
    </body>
    </html>
  )
}
