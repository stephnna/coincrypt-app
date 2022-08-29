import axios from 'axios';
import { API_MARKET } from '../../api/Api';

const FETCH_MARKET_BEGINS = 'financialApp/market/FETCH_MARKET_BEGINS';
const FETCH_MARKET_SUCCESS = 'financialApp/market/FETCH_MARKET_SUCCESS';
const FETCH_MARKET_FAILURE = 'financialApp/market/FETCH_MARKET_FAILURE';

const initialMarket = {
  market: [],
  loading: false,
  error: null,
};

const homeReducer = (state = initialMarket, action) => {
  switch (action.type) {
    case FETCH_MARKET_BEGINS: // Mark the state as "loading" so we can show a spinner

      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MARKET_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        market: action.market,
      };

    case FETCH_MARKET_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      return {
        ...state,
        loading: false,
        error: action.error,
        market: [],
      };

    default:
      return state;
  }
};
export const loadingMarket = () => ({
  type: FETCH_MARKET_BEGINS,
});

export const fetchMarket = (market) => ({
  type: FETCH_MARKET_SUCCESS,
  market,
});

export const fetchMarketFailure = (error) => ({
  type: FETCH_MARKET_FAILURE,
  error,
});

export const GetMarketFromApi = () => async (dispatch) => {
  dispatch(loadingBooks());
  try {
    const booksObj = await axios.get(API_MARKET);
    console.log(booksObj);
    // const newBooks = [];
    // if (booksObj.data) {
    //   Object.keys(booksObj.data).forEach((itemKeys) => {
    //     const data = booksObj.data[itemKeys];
    //     const books = Object.assign({}, ...data, { item_id: itemKeys });
    //     newBooks.push(books);
    //   });
    //   dispatch(fetchBook(newBooks));
    // }
  } catch (error) {
    dispatch(fetchMarketFailure(error));
  }
};
export default homeReducer;
