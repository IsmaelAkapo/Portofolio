"use client";

import { createContext, useContext, useState } from "react";
  // es para importar los archivos de traducción de cada idioma
  import es from "@/locales/es.json";
  import en from "@/locales/en.json";
  import fr from "@/locales/fr.json";

    // es para agrupar todos los idiomas en un objeto

    const translation={es,fr,en};

    // es para crear el contexto que compartirá el idioma actual con toda la app
      const LanguageContext=createContext();
    // es el Provider — envuelve la app y da acceso al idioma desde cualquier componente

    export function LanguageProvider({children}){
      const [lang, setLang] = useState("es"); // es para mantener el estado del idioma actual, por defecto es español

      // es la función t() — recibe una clave y devuelve el texto en el idioma actual
      function t(key){
        return translation[lang][key]||key; // es para buscar la clave en el objeto de traducción del idioma actual,
        //  y si no se encuentra, devuelve la clave misma como fallback
      }
      return(
        <LanguageContext.Provider value={{lang,setLang,t}}>
          {children} {/* es para renderizar los componentes hijos dentro del Provider, lo que les da acceso al contexto */}
        </LanguageContext.Provider>
      );
    }
    // es el hook useLanguage() — devuelve el idioma actual y la función setLang()
    export function useLanguage(){
      return(
        useContext(LanguageContext) // es para usar el hook useContext para acceder al valor del contexto de idioma, que incluye el idioma actual y la función para cambiarlo
      )
    }