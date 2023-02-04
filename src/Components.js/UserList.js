import React, { useEffect, useState } from "react";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/photos")
    fetch("https://api.github.com/users")

      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) =>{
        setUsers(data)
      } );
  },[]);
  return (
    <>
      <div className="container-fluid m-5">
      <h2 className="text-info"> List of User and their Details</h2>
      <div className="row text-center ">
      {users.map((user) => {
        return (
        //   <d/iv className="row">
            <div className="col-md-2 mt-5"  key={user.id}>
              <div className="card">
            <img className="card-img-top" src={user.avatar_url} alt=""/>
            <div className="card-body">
            <h5 className="card-title">Card number {user.id}</h5>
            <p className="card-text">Organisation Id :{user.organizations_url}</p>
            </div>
            <div className="card-footer">
            <small className="text-muted">
            <button type="button" className="rounded  btn btn-info">

                {user.type}</button></small>
            </div>
        </div>
            </div>
            
        //   </div>
        );
        
      })}
      </div>
      </div>
    </>
  );
};
