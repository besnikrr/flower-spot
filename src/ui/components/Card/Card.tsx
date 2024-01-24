import styles from './Card.module.scss';

export const Card = (props: any): JSX.Element => {
  return (
    <div className={`container`}>
      <div className={styles.card}>{props.children}</div>
    </div>
  );
};
