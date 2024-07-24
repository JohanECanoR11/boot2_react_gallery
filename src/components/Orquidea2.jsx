import orquidea2 from '../assets/img/orquidea2.png';
import PropTypes from 'prop-types';

export const Orquidea2 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={orquidea2} alt="Orquídea Calanthe" className='image' />
    </div>
  )
}

Orquidea2.propTypes = {
  className: PropTypes.string
};
