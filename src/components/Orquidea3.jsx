import orquidea3 from '../assets/img/orquidea3.png';
import PropTypes from 'prop-types';

export const Orquidea3 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={orquidea3} alt="Orquídea Calanthe" className='image' />
    </div>
  )
}

Orquidea3.propTypes = {
  className: PropTypes.string
};
