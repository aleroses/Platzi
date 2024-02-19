import { useFetchData } from "../hooks/useFetchData";

const UserList = ({ endPoint }) => {
  const { data, isLoading } = useFetchData(endPoint);

  return (
    <>
      <ul>
        {isLoading ? (
          <p>Loading</p>
        ) : endPoint === "users" ? (
          data.map((item) => <li key={item.id}>Name: {item.name}</li>)
        ) : (
          data.map((item) => <li key={item.id}>Name: {item.body}</li>)
        )}
      </ul>
    </>
  );
};

export { UserList };
/* rafc */
