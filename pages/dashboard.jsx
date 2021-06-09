import useAuth from '../hooks/useAuth';

// eslint-disable-next-line no-unused-vars
function Dashboard(_props) {
  const { user } = useAuth();
  console.log(user);

  if (true) {
    useState();
  }
  return (
    <div>
      <a href="" className="test" target="_blank" rel="test"></a>
      <img src={user?.photoURL} alt="" />
      <h1>Name: {user?.displayName}</h1>
      <h1>Email: {user?.email}</h1>
    </div>
  );
}

export default Dashboard;
