import { createContext, useState } from "react";
import { api } from "../../Services";
export const GroupContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [input, setInput] = useState("");
  const [subGroups, setSubGroups] = useState([]);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NDg2MTMxLCJqdGkiOiI5ZWI0MjRhMjNhYWI0NTUwYmVhY2Y4ZGUxZjUyZGQ4ZiIsInVzZXJfaWQiOjk1fQ.ghNkwRw4jpobDI0FrB-CSDNG3R3_eYR2IC8CxcdhrLo";
  const groupsSearch = () => {
    api
      .get(
        `/groups/?search=${input}`,
        { null: null },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setGroups(response.data.results);
        console.log(response.data.results);
      });
  };
  const subscribeGroups = (groupId) => {
    api
      .post(
        `groups/${groupId}/subscribe/`,
        { null: null },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  const subscriptionsGroup = () => {
    api
      .get(
        "/groups/subscriptions/",
        {},
        {
          headers: { Authorization: `Bearer: ${token}` },
        }
      )
      .then((response) => setSubGroups(response.data));
  };
  console.log(subGroups);
  const addGroups = (name, category, description) => {
    console.log(name);
    api
      .post(
        "groups/",
        {
          name: name,
          description: description,
          category: category,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => console.log(response.data));
  };
  const unsubGroups = (id) => {
    api
      .delete(
        `/groups/${id}/unsubscribe/`,
        { null: null },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) =>
        console.log(response.data).catch((err) => console.log(err))
      );
  };

  return (
    <GroupContext.Provider
      value={{
        groups,
        setInput,
        groupsSearch,
        subscribeGroups,
        addGroups,
        subscriptionsGroup,
        unsubGroups,
        subGroups,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
