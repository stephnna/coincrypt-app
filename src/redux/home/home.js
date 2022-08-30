import axios from 'axios';
import API_MARKET from '../../api/Api';

const FETCH_MARKET_BEGINS = 'financialApp/market/FETCH_MARKET_BEGINS';
const FETCH_MARKET_SUCCESS = 'financialApp/market/FETCH_MARKET_SUCCESS';
const FETCH_MARKET_FAILURE = 'financialApp/market/FETCH_MARKET_FAILURE';
const FETCH_MARKET_DETAIL_SUCCESS = 'financialApp/market/FETCH_MARKET_DETAIL_SUCCESS';

const initialMarket = {
  cryptocurrencies: [],
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
        cryptocurrencies: action.organizedCrpto,
      };

    case FETCH_MARKET_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      return {
        ...state,
        loading: false,
        error: action.error,
        cyptocurrencies: [],
      };

    case FETCH_MARKET_DETAIL_SUCCESS:

      return {
        ...state,
        loading: false,
        error: action.error,
        cyptocurrencies: action.detail,
      };

    default:
      return state;
  }
};
export const loadingMarket = () => ({
  type: FETCH_MARKET_BEGINS,
});

export const fetchMarket = (crptoData) => {
  const organizedCrpto = [];
  crptoData.forEach((obj) => {
    const newCrpto = {
      id: obj.id,
      name: obj.name,
      rank: obj.rank,
      symbol: obj.symbol,
      price: obj.price_usd,
      cap: obj.market_cap_usd,
      tsupply: obj.tsupply,
      csupply: obj.csupply,
      volume: obj.volume24,
      percent_change_1h: obj.percent_change_1h,
      percent_change_7d: obj.percent_change_7d,
      percent_change_24h: obj.percent_change_24h,
    };
    organizedCrpto.push(newCrpto);
  });

  return {
    type: FETCH_MARKET_SUCCESS,
    organizedCrpto,
  };
};

export const detailPage = (id) => ({
  type: FETCH_MARKET_DETAIL_SUCCESS,
  detail,
  id,
});

export const fetchMarketFailure = (error) => ({
  type: FETCH_MARKET_FAILURE,
  error,
});

export const getDetailPage = (id) => async (dispatch) => {
  try {
    const resultDet = await axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`);
    const resultMar = await axios.get(`https://api.coinlore.net/api/coin/markets/?id=${id}`);
    const resultSoc = await axios.get(`https://api.coinlore.net/api/coin/social_stats/?id=${id}`);

    console.log(resultDet.data, 'resultDet');
    console.log(resultMar.data, 'resultMar');
    console.log(resultSoc.data, 'resultSoc');
    // dispatch(detailPage(id));
  } catch (error) {
    dispatch(fetchMarketFailure(error));
  }
};

export const GetMarketFromApi = () => async (dispatch) => {
  dispatch(loadingMarket());
  try {
    const { data } = await axios.get(API_MARKET);
    const crptoArray = data.data;
    dispatch(fetchMarket(crptoArray));
  } catch (error) {
    dispatch(fetchMarketFailure(error));
  }
};
export default homeReducer;
