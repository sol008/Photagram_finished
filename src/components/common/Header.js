import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
    <h1> PHOTAGRAM </h1>
      <IndexLink to="/" activeClassName="active">LogIn</IndexLink>
      {" | "}
      <Link to="/fakemain" activeClassName="active">Register</Link>
      {" | "}
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
