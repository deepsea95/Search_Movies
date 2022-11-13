import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import List from './list';
import Details from './Details';

const router = createBrowserRouter([
	{
		path: '/',
		element: <List />
	},

	{
		path: '/details',
		element: <Details />
	}
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
