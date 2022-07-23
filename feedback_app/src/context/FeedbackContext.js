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

	return <FeedbackContext.Provider>{children}</FeedbackContext.Provider>;
};
