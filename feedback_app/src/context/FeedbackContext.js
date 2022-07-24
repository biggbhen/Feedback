import { createContext, useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
	const [isloading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});
	useEffect(() => {
		fetchFeedback();
	}, []);

	// fetch feedback
	const fetchFeedback = async () => {
		const response = await fetch(
			'http://localhost:5000/feedback?_sort=id&_order=desc'
		);
		const data = await response.json();
		setFeedback(data);
		setIsLoading(false);
	};

	// addFeedback
	const addFeedback = (newFeedBack) => {
		// newFeedBack.id = uuidv4();
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
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
		);
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
