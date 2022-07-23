import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			rating: 10,
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis culpa quaerat quis soluta necessitatibus, esse aspernatur modi nobis nisi sunt maiores quasi rem quam voluptates labore unde tempora quos quia?',
		},
		{
			id: 2,
			rating: 6,
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis culpa quaerat quis soluta necessitatibus, esse aspernatur modi nobis nisi sunt maiores quasi rem quam voluptates labore unde tempora quos quia?',
		},
		{
			id: 3,
			rating: 5,
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis culpa quaerat quis soluta necessitatibus, esse aspernatur modi nobis nisi sunt maiores quasi rem quam voluptates labore unde tempora quos quia?',
		},
	]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});
	// addFeedback
	const addFeedback = (newFeedBack) => {
		newFeedBack.id = uuidv4();
		setFeedback([newFeedBack, ...feedback]);
	};
	// deleteFeedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};
	// edit Feedback
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};
	// update data
	const updateFeedback = (id, updItem) => {
		setFeedback((item) => (item.id === id ? { ...item, ...updItem } : item));
	};
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
