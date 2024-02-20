import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();

  // Esta funcion nos permite memorizar el contenido de la llamada a la api para evitar re fetching
  const memoized = useCallback(()=>{
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (e) {
      throw new Error("Error con conexion a la api")
    }
  },[url])

  useEffect(() => {
    memoized()
  }, [memoized]);


  return {data}

};


export default useFetch
