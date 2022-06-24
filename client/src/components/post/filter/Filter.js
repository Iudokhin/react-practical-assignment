import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../../features/reducers/postSlice";
import { Delete, Search } from "../../utils/icons";
import './Filter.css'

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useRef(null);
  const { toFilter } = useSelector((store) => store.post);

  const filterHandler = useCallback(() => {
    if(filterValue.current.value.trim().length !== 0) {
      dispatch(filter(filterValue.current.value));
    }
  }, [dispatch]);

  const clearFilterHandler = useCallback(() => {
    dispatch(filter(""))
  }, [dispatch]);

  return (
      <div className="filter">
        <input
          type="text"
          name="filter"
          ref={filterValue}
          placeholder="Post search"
        />
        {toFilter && (
          <div className="filter__clear">
            {toFilter}
            <Delete clear={clearFilterHandler}/>
          </div>
        )}
        <Search filter={filterHandler} />
      </div>
  );
}
