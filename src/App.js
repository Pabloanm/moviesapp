import logo from "./logo.svg";
import "./App.css";
import Movie from "./movie";
import moviesJson from "./movies.json";
import PageWrapper from "./pagewrapper";
import Pagination from "./pagination";
import { useState } from 'react';

function App() {

  //[var paginaActual, function setPaginaActual to modify paginaActual]	
  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;

  let peliculas = moviesJson; //import Json with movies

  const buscarPelicula = async () => {

	//attention to CORS problem - use --> "mode":'no-cors'
	let url = 'https://github.com/Pabloanm/moviesapp/blob/master/src/movies.json'; 

	//request to server
	let respuesta = await fetch(url,{
		"method": 'GET',
		"mode":'no-cors',
		"headers": {
			"Accept": 'application/json',
			"Content-Type": 'application/json'
		}
	});
	
	//paso el objeto del fetch a formato json
    let json = await respuesta.json();

	alert(json);
  }

  buscarPelicula();

  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = moviesJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  cargarPeliculas();

  return (
    <PageWrapper>
      {peliculas.map((pelicula) => (
        <Movie
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          mmpa={pelicula.mmpa}
          runtime={pelicula.runtime}
          director={pelicula.director}
          actores={pelicula.actores}
          release={pelicula.release}
          urltitle={pelicula.urltitle}
          img={pelicula.img}
          description={pelicula.description}>
        </Movie>
      ))}

      {/* Pagina actual / cantidad de paginas / acción o evento al cambiar de pagina */}

      <Pagination
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
			setPaginaActual(pagina)
		  }}
      />
    </PageWrapper>
  );
}
export default App;
