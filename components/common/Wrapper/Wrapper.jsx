import PropTypes from 'prop-types';

import s from './Wrapper.module.scss';

export const Wrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};
