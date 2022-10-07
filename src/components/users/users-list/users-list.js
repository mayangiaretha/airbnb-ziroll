import React from 'react';

const UsersList = ({ name, age, telephone, id }) => {
  return (
    <>
      <h1>Name: {name} </h1>
      <p>Age: {age}</p>
      <p>Tel No: 0{telephone}</p>
      <p>id:{id}</p>
    </>
  );
};
export default UsersList;
