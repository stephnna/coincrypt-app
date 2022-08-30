import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { Circles } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import DisplayHome from './DisplayHome';
import { GetMarketFromApi } from '../../redux/home/home';

let isInitial = true;
const Home = () => {
  const { cryptocurrencies, loading, error } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      dispatch(GetMarketFromApi());
      isInitial = false;
    }
  }, []);

  console.log(cryptocurrencies, loading, error, 'lead, crt, er');

  const displayMarket = () => {
    if (error) {
      return (
        <div>
          <span>
            Oops!
            {' '}
            {error.message}
            !
          </span>
        </div>
      );
    }
    if (loading) {
      return (
        <>
      loading---
        </>
      );
    }

    return (
      <div>
        {cryptocurrencies.map((crypto) => (
          <DisplayHome
            id={crypto.id}
            name={crypto.name}
            rank={crypto.rank}
            symbol={crypto.symbol}
            price={crypto.price}
            cap={crypto.cap}
            tsupply={crypto.tsupply}
            volume={crypto.volume}
            percent1H={crypto.percent_change_1h}
            percent24H={crypto.percent_change_24h}
            percent7D={crypto.percent_change_7d}
            key={crypto.id}
          />
        ))}
      </div>
    );
  };

  return <>{displayMarket()}</>;
};
export default Home;
