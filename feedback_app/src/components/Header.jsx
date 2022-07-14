import React from 'react'
import PropTypes from 'prop-types'

const Header = ({text, bgColor, textColor}) => {
 const headerStyle = {
  backgroundColor: bgColor,
  color: textColor
 }
  return (
    <header style={headerStyle}>
     <div className="container">
      <h2>{text}</h2>
     </div>
    </header>
  )
}
Header.defaultProps = {
  text: 'FeedBack UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}
Header.propTypes = {
 text: PropTypes.string.isRequired,
 bgColor: PropTypes.string.isRequired,
 textColor: PropTypes.string.isRequired
}

export default Header