export default function Movie(props) {
  return (
    <div className="movie-item-style-2">
      <img src={props.img} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href={props.urltitle}>{props.titulo}</a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{props.calificacion}</span> /10
        </p>
        <p className="describe">
          {props.children}
        </p>
        <p className="run-time">          
          Run Time: {props.runtime} .{" "} <span>MMPA: {props.mmpa} </span> .{" "}
          <span>Release: {props.release}</span>
        </p>
        <p>Director: <a href="#">{props.director}</a></p>
        <p>Stars: <a href="#">{props.actores}</a></p>
      </div>
    </div>
  );
}
