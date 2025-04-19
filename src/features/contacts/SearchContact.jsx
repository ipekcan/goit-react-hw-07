import SBCss from "../../components/SearchBox/SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { getFilter } from "../../redux/selector";

const SearchBox = () => {
    
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    const onFilterChanged = e => {
        const val = e.target.value;
        dispatch(setFilter(val));
    }
    
    
  return (
    
      <form className={`${SBCss.form}`}>
        <label htmlFor="search" className={`${SBCss.lblSrch}`}>Find contacts by name</label>
        <input id="search" name="filter" className={`${SBCss.txtSrch}`} onChange={onFilterChanged} value={value}/>  
      </form>
    
  );
};

export default SearchBox;
