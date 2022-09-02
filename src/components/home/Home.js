import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import DisplayHome from './DisplayHome';
import DisplayGlobal from './DisplayGlobal';
import { GetMarketFromApi } from '../../redux/home/home';

let isInitial = true;
const Home = () => {
  const {
    cryptocurrencies, globalData, loading, error,
  } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(GetMarketFromApi());
      isInitial = false;
    }
  }, [dispatch]);

  const GlobalMarketData = () => {
    if ((cryptocurrencies && globalData)) {
      return (
        <>
          <div>
            {globalData.map((global) => (
              <DisplayGlobal
                totalCoin={global.totalCoin}
                totalCap={global.totalCap}
                totalCapChange={global.totalCapChange}
                avgChange={global.totalVolume}
                totalVolume={global.totalVolume}
                key={global.id}
              />
            ))}
          </div>
          <div className="home-grid">
            {cryptocurrencies.map((crypto) => (
              <div key={crypto.id} className="home-grid-item">
                <DisplayHome
                  id={crypto.id}
                  name={crypto.name}
                  rank={crypto.rank}
                  symbol={crypto.symbol}
                  price={crypto.price}
                  cap={crypto.cap}
                  tSupply={crypto.tsupply}
                  cSupply={crypto.csupply}
                  volume={crypto.volume}
                  percent1H={crypto.percent_change_1h}
                  percent24H={crypto.percent_change_24h}
                  percent7D={crypto.percent_change_7d}
                  key={crypto.id}
                />
              </div>
            ))}
          </div>
        </>
      );
    }
    return null;
  };

  const displayGlobalMarket = () => {
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
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible
        />
      );
    }
    return <>{GlobalMarketData()}</>;
  };

  return <>{displayGlobalMarket()}</>;
};
export default Home;
