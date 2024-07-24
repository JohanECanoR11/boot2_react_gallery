import orquidea5 from '../assets/img/orquidea5.png';
import PropTypes from 'prop-types';

export const Orquidea5 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={orquidea5} alt="Orquídea Calanthe" className='image' />
    </div>
  )
}

Orquidea5.propTypes = {
  className: PropTypes.string
};
