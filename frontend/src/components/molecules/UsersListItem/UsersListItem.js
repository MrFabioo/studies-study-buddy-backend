import React, { useContext } from "react";
import PropTypes from "prop-types";
import DeleteButton from "components/atoms/DeleteButton/DeleteButton";
import { StyledAverage, StyledInfo, Wrapper } from "./UsersListItem.styled";
import { UserShape } from "types";
import { UsersContext } from "providers/UsersProvider";

const UsersListItem = ({
  userData: {
    attributes: { name, average, attendance = "0" },
    id,
  },
}) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(id)} />
        </p>
        <p>attendance: {attendance}%</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
