import React, { useEffect } from "react";
import { fetchUser } from "./ReduxThunk/dataSlice";
import { useDispatch, useSelector } from "react-redux";

function UserData() {
  const { user, loading, error } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if(loading) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div> error: {error}</div>;
  }
  return (
    <div>
      <h1>fetched User</h1>
      <ul>
        {user.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserData;
