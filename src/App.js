import logo from "./logo.svg";
import "./App.css";
import Movie from "./movie";
import moviesJson from "./movies.json";
import PageWrapper from "./pagewrapper";
import Pagination from "./pagination";

function App() {

  let peliculas = moviesJson; //import Json with movies

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
        pagina={1}
        total={4}
        onChange={(pagina) => {
          alert(pagina)
        }}
      />
    </PageWrapper>
  );
}
export default App;
