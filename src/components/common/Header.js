import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/main" activeClassName="active">MainPage</IndexLink> 
      {" | "}
      <IndexLink to="/login" activeClassName="active">LogIn</IndexLink>
      {" | "}
      <Link to="/register" activeClassName="active">Register</Link>
      {" | "}
      <Link to="/myprofile" activeClassName="active">My Profile</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
