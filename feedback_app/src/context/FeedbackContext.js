import { createContext, useState, useEffect } from 'react';

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
		console.log(data);
		setFeedback(data);
		setIsLoading(false);
	};

	// addFeedback
	const addFeedback = async (newFeedBack) => {
		const response = await fetch('http://localhost:5000/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedBack),
		});
		const data = await response.json();
		setFeedback([data, ...feedback]);
	};
	// deleteFeedback
	const deleteFeedback = async (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' });
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
	const updateFeedback = async (id, updItem) => {
		const response = await fetch(`http://localhost:5000/feedback/${id}`, {
			method: 'PUT',
			headers: {
				Content: 'application/json',
			},
			body: JSON.stringify(updItem),
		});
		const data = await response.json();
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
		);
	};
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				isloading,
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
