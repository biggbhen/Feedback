import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import About from './pages/About';
import { FeedbackProvider } from '../src/context/FeedbackContext';

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
									<AboutIconLink />
								</>
							}></Route>

						<Route path='/about' element={<About />} />
					</Routes>
				</div>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
