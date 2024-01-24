import styles from './Item.module.scss';
import Star from './../../assets/star.svg';
import StarOrange from './../../assets/star-orange.svg';

import { Flower } from '../../../domain/flower';
interface ItemProps {
  flower: Flower;
  isLoggedIn: boolean;
}

export const Item = ({ flower, isLoggedIn }: ItemProps): JSX.Element => {
  return (
    <div
      className={styles.content}
      style={{ backgroundImage: `url(${flower?.profile_picture})` }}
    >
      {isLoggedIn && (
        <span className={styles.icon}>
          {flower.favorite ? (
            <img id="star" src={StarOrange} alt="Star" />
          ) : (
            <img id="star" src={Star} alt="Star" />
          )}
        </span>
      )}
      <div className={styles.desk}>
        <h1 id="title">{flower?.name}</h1>
        <p>{flower?.latin_name}</p>
        <button type="button" className={'btn btn--rounded btn--grey'}>
          {flower.sightings} sightings
        </button>
      </div>
    </div>
  );
};
