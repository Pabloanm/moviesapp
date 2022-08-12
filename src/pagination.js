export default function Pagination(props){
    
    return(
    <div className="topbar-filter">
    <label>Movies per page:</label>
    <select>
      <option value="range">5 Movies</option>
      <option value="saab">10 Movies</option>
    </select>
    <div className="pagination2">
      <span>Page {props.pagina} of {props.total}:</span>
      <a className="active" href="#">1</a>
      <a href="#">2</a>
      <a href="#"><i className="ion-arrow-right-b"></i></a>
    </div>
  </div>
  );
}