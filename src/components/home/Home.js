import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import ReduxAddBookForm from './ReduxAddBookForm';
// import ReduxBookList from './ReduxBookList';
import { GetMarketFromApi } from '../../redux/home/home';

const Home = () => {
const { loading, market, error } = useSelector((state) => state.market);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(GetMarketFromApi());
},
[]);

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
  if (loading) return <div className="redux-book-loading"><span>Loading...</span></div>;
  return (
    <div>
      fetchBooked market
    </div>
  );
};

return <>{displayMarket()}</>;
}
export default Home;
