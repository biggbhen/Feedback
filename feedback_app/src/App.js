import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import About from './pages/About';
import { FeedbackProvider } from '../src/context/FeedbackContext';

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);
	const addFeedback = (newFeedBack) => {
		newFeedBack.id = uuidv4();
		setFeedback([newFeedBack, ...feedback]);
	};

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
									<FeedbackForm handleAdd={addFeedback} />
									<FeedbackStats />
									<FeedbackList />
								</>
							}></Route>

						<Route path='/about' element={<About />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
