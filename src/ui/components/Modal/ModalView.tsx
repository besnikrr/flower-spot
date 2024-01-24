import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Close from '../../assets/close.svg';
import styles from './ModalView.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  maxWidth: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '3px',
};

export default function ModalView(props: any) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <button className={styles.close} onClick={handleClose}>
          <img src={Close} alt="Close" />
        </button>
        {props.children}
      </Box>
    </Modal>
  );
}
