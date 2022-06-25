import React, { useContext } from "react";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import UsersList from "components/organisms/UsersList/UsersList";
import { UsersContext } from "providers/UsersProvider";

const Dashboard = ({ key }) => {
  const { users } = useContext(UsersContext);
  return (
    <ViewWrapper>
      <UsersList key={key} users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
