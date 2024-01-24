import { useContext } from 'react';
import { AuthContext } from '../../../application/authContext';
import ProfilePic from './../../assets/profile.svg';

export const UserDetails = (props: any): JSX.Element => {
  const authContext = useContext(AuthContext);

  const logoutHandler = () => {
    authContext.logout();
    props.onClose();
  };

  return (
    <div className="modal modal--profile">
      <div className="overview">
        <div className="image">
          <img src={ProfilePic} alt="Profile picture" />
        </div>
        <div className="desc">
          <h1>{`${authContext?.user?.first_name} ${authContext?.user?.last_name}`}</h1>
          <p>sigtings</p>
        </div>
      </div>
      <div className="info">
        <p>First Name</p>
        <h3>{authContext?.user?.first_name}</h3>
      </div>
      <div className="info">
        <p>Last Name</p>
        <h3>{authContext?.user?.last_name}</h3>
      </div>
      <button
        className="btn btn--pink btn--squared logout-btn"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};
