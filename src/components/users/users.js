import React from 'react';
import UsersList from './users-list/users-list';
import users from './data.json';

const Users = ({ name, age, telephone, id }) => {
  return (
    <>
      {users.map((user, i) => {
        const { name, age, telephone, id } = user;
        return (
          <div key={i}>
            <UsersList name={name} age={age} telephone={telephone} id={id} />
          </div>
        );
      })}
    </>
  );
};

export default Users;
