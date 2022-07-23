import { createContext, useState } from 'react';

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 3,
			rating: 10,
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis culpa quaerat quis soluta necessitatibus, esse aspernatur modi nobis nisi sunt maiores quasi rem quam voluptates labore unde tempora quos quia?',
		},
	]);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
