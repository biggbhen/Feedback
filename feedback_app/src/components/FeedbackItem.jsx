import React, {useState} from 'react'
// import PropTypes from 'prop-types'

const FeedbackItem = props => {
 const [rating, setRating] = useState(7)
 const [text, setText] = useState('This is an example of a feeback item')
 const handleClick= () =>{
  setRating((prev)=>{
   return prev + 1
  })
  setText('i stand here')
 }
  return (
    <div className="card">
     <div className="num-display">{rating}</div>
     <div className="text-display">{text}</div>
     <button onClick={handleClick}>click</button>
    </div>
  )
}

// FeedbackItem.propTypes = {}

export default FeedbackItem

