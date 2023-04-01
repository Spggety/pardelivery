import './search.css'
import '../../../icons/style.css'
function SearchTable() {
  return (
    <div className = 'search'>
      <i className='ic_Search'></i>
      <input type='search' placeholder='Поиск'></input>
      <i className='ic_Filter'></i>
    </div>
  );
}
export default SearchTable;