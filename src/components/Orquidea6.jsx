import orquidea6 from '../assets/img/orquidea6.png';
import PropTypes from 'prop-types';

export const Orquidea6 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={orquidea6} alt="Orquídea Calanthe" className='image' />
    </div>
  )
}

Orquidea6.propTypes = {
  className: PropTypes.string
};
