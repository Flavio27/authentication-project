import { Box } from '@chakra-ui/layout';
import useAuth from 'src/hooks/useAuth';

// eslint-disable-next-line no-unused-vars
function Dashboard(_props) {
	const { user, signin } = useAuth();

	return (
		<Box>
			<a href="" className="test" target="_blank" rel="test"></a>
			<img src={user?.photoURL} alt="" />
			<h1>Name: {user?.displayName}</h1>
			<h1>Email: {user?.email}</h1>
		</Box>

	);
}

export default Dashboard;
