import { useState, useContext } from 'react';
import { AuthContext } from '../../../application/authContext';
import { Link } from 'react-router-dom';
import { SignUpForm } from '../SignUpForm';
import { UserDetails } from '../UserDetails';
import { LoginForm } from '../LoginForm';
import ModalView from '../Modal/ModalView';
import Logo from './../../assets/logo.svg';
import ProfilePic from './../../assets/profile.svg';
import styles from './Header.module.scss';
import { ConfirmModal } from '../ConfirmModal';
import { SuccessModal } from '../SuccessModal';

export const Header = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  const [open, setOpen] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);

  const handleOpen = (login?: boolean) => {
    if (login) {
      setLoginModal(true);
    }

    setOpen(true);
  };

  const onClose = () => {
    setLoginModal(false);
    if (confirmModal) {
      setConfirmModal(false);
    }
    if (successModal) {
      setSuccessModal(false);
    }
    setOpen(false);
  };

  const onLogin = (loginModal: boolean) => {
    setSuccessModal(loginModal);
  };

  const onSuccess = (successModal: boolean) => {
    setSuccessModal(successModal);
    setOpen(successModal);
  };

  const onSignUp = (signUpModal: boolean) => {
    setConfirmModal(signUpModal);
  };

  const onConfirm = (confirmModal: boolean) => {
    setConfirmModal(confirmModal);
    setLoginModal(!confirmModal);
  };

  return (
    <header className={`container ${styles.header}`}>
      <Link className={styles.logo} to="/">
        <img src={Logo} alt="SVG logo image" />
      </Link>
      <input type="checkbox" name="" id="" />
      <div className={styles['hamburger-lines']}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>
      <nav className={styles.nav}>
        <Link className={`txt--light-grey ${styles['item']}`} to="/flowers">
          Flowers
        </Link>
        <Link className={`txt--light-grey ${styles['item']}`} to="/sightings">
          Latest Sightings
        </Link>
        <Link className={`txt--light-grey ${styles['item']}`} to="/favorites">
          Favorites
        </Link>
        {authContext.isLoggedIn ? (
          <>
            <p
              className={`txt--light-grey`}
            >{`${authContext?.user?.first_name} ${authContext?.user?.last_name}`}</p>
            <div className={styles.profile} onClick={() => handleOpen(false)}>
              <img src={ProfilePic} alt="Profile" />
            </div>
          </>
        ) : (
          <>
            <p className={`txt--pink`} onClick={() => handleOpen(true)}>
              Login
            </p>
            <button
              className={`btn btn--pink btn--rounded ${styles['login']}`}
              onClick={() => handleOpen()}
            >
              New Account
            </button>
          </>
        )}
        <ModalView open={open} onClose={onClose}>
          {authContext.isLoggedIn && !successModal && !confirmModal ? (
            <UserDetails onClose={onClose} />
          ) : loginModal ? (
            successModal ? (
              <SuccessModal onClose={(value) => onSuccess(value)} />
            ) : (
              <LoginForm onClose={(value) => onLogin(value)} />
            )
          ) : confirmModal ? (
            <ConfirmModal onClose={(value) => onConfirm(value)} />
          ) : (
            <SignUpForm onClose={(value) => onSignUp(value)} />
          )}
        </ModalView>
      </nav>
    </header>
  );
};
