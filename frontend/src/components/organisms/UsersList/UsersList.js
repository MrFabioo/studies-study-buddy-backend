import React from "react";
import PropTypes from "prop-types";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList } from "./UsersList.styles";
import { UserShape } from "types";
import { Title } from "components/atoms/Title/Title";

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Student list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.id} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
