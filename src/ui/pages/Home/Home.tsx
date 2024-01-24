import styles from './Home.module.scss';
import { Item } from '../../components/Item';
import { Search } from '../../components/Search';
import { Card } from '../../components/Card';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../application/authContext';
import ProfilePic from './../../assets/profile.svg';
import { Flower } from '../../../domain/flower';
import { getFlowers, searchFlowers } from '../../../services/flower';

export const Home = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  const [flowers, setFlowers] = useState<Flower[]>();
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    const getFlowersData = async () => {
      let result;

      if (searchInput) {
        result = await searchFlowers(searchInput);
        setFlowers(result.data.flowers);
        return;
      }

      result = await getFlowers();
      setFlowers(result.data.flowers);
    };

    getFlowersData();
  }, [searchInput]);

  return (
    <main className={styles.main}>
      {authContext.isLoggedIn ? (
        <div className="container">
          <div className="overview overview--home">
            <div className={styles.info}>
              <div className="image">
                <img src={ProfilePic} alt="Profile picture" />
              </div>
              <div className="desc">
                <h1>{`${authContext?.user?.first_name} ${authContext?.user?.last_name}`}</h1>
                <p>sigtings</p>
              </div>
            </div>
            <button
              type="submit"
              className={`btn btn--pink btn--squared ${styles['report-btn']}`}
            >
              Report
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.banner}>
            <div className={`container ${styles.content}`}>
              <h1>Discover flowers around you</h1>
              <p>Explore between more than 8.427 sightings</p>
              <Search
                onChange={(value: string) => {
                  setSearchInput(value);
                }}
              />
            </div>
          </div>
        </>
      )}
      <Card>
        {flowers && flowers.length ? (
          flowers.map((item: Flower) => (
            <Item
              key={item.id}
              flower={item}
              isLoggedIn={authContext.isLoggedIn}
            />
          ))
        ) : (
          <>No Result</>
        )}
      </Card>
    </main>
  );
};
