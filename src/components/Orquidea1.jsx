import orquidea1 from '../assets/img/orquidea1.png';
import PropTypes from 'prop-types';

export const Orquidea1 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={orquidea1} alt="Orquídea Calanthe" className='image' />
    </div>
  )
}

Orquidea1.propTypes = {
  className: PropTypes.string
};
