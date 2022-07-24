import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'

import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
 const {feedback, isloading} = useContext(FeedbackContext)

 if (!isloading &&(!feedback || feedback.length === 0)) {
  return (<Card>
    No Feedback Yet! 
    </Card>)
 }
 return isloading ? (
  <Spinner />
 ):  (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map(item => 
      <motion.div 
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
      <FeedbackItem key={item.id} item={item} />
      </motion.div>
      )}
      </AnimatePresence>
      
    </div>
  )
  
}


export default FeedbackList