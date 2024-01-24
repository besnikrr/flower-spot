import styles from './SuccessModal.module.scss';

interface SuccessModalProps {
  onClose: (value: boolean) => void;
}

export const SuccessModal = ({ onClose }: SuccessModalProps): JSX.Element => {
  const handleClick = () => {
    onClose(false);
  };

  return (
    <div className="modal">
      <h1 className={styles.title}>
        Congratulations! You have successfully logged into FlowrSpot!
      </h1>
      <button
        className={`btn btn--pink btn--squared ${styles['ok-btn']}`}
        onClick={handleClick}
      >
        OK
      </button>
    </div>
  );
};
