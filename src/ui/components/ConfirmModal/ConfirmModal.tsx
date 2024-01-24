import styles from './ConfirmModal.module.scss';

interface ConfirmModalProps {
  onClose: (value: boolean) => void;
}

export const ConfirmModal = ({ onClose }: ConfirmModalProps): JSX.Element => {
  const handleClick = () => {
    onClose(false);
  };

  return (
    <div className="modal">
      <h1 className={styles.title}>
        Congratulations! You have successfully signed up for FlowrSpot!
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
