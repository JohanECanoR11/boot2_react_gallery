import orquidea4 from '../assets/img/orquidea4.png';
import PropTypes from 'prop-types';

export const Orquidea4 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={orquidea4} alt="Orquídea Calanthe" className='image' />
    </div>
  )
}

Orquidea4.propTypes = {
  className: PropTypes.string
};
