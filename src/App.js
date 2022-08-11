import logo from "./logo.svg";
import "./App.css";
import Movie from "./movie";
import PageWrapper from "./pagewrapper";

function App() {
  return (

    <PageWrapper>

      <Movie
        titulo="oblivion (2012)"
        calificacion="8.1"
        mmpa="PG-13"
        runtime="2h21’"
        director="Joss Whedon"
        actores="Robert Downey Jr., Chris Evans, Chris Hemsworth"
        release="1 May 2015"
        urltitle="moviesingle.html"
        img="images/uploads/mv1.jpg"
      >
        Earth's mightiest heroes must come together and learn to fight as a team
        if they are to stop the mischievous Loki and his alien army from
        enslaving humanity...
      </Movie>

      <Movie
        titulo="into the wild(2014)"
        calificacion="7.8"
        mmpa="PG-13"
        runtime="2h21’"
        director="Anthony Russo, Joe Russo"
        actores="Chris Evans, Samuel L. Jackson, Scarlett Johansson"
        release="1 May 2015"
        urltitle="moviesingle.html"
        img="images/uploads/mv2.jpg"
>
        As Steve Rogers struggles to embrace his role in the modern world, he
        teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to
        battle a new threat...
      </Movie>

    </PageWrapper>

  );
}
export default App;
