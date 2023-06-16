import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();

  return (
    <div className="user-container">
      {user ? (
        <div>
          <p>Hello, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout.
          </button>
        </div>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
