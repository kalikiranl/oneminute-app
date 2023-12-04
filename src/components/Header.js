import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header class ='header'>
        <h1> {title} </h1>
        <Button color={showAdd ? 'Red' : 'Green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick= {onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Employee Task Tracker' 
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header