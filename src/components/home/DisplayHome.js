import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getDetailPage } from '../../redux/home/home';


const DisplayHome = (props) => {
  const {
    id, name, rank, symbol, price, cap,
    tSupply, cSupply, volume, percent1H,
    percent24H, percent7D,
  } = props;

  const dispatch = useDispatch();
  const viewDetail = () => dispatch(getDetailPage(id));
  // const btnBadge = reserved ? 'Leave Mission' : 'Join Mission';
  // const memberBadge = reserved ? 'Active Member' : 'NOT A MEMBER';

  // const btnStyles = `btn-mission ${reserved ? 'btn-mission-sec' : ''}`;
  // const badgeStyles = `badge ${reserved ? 'badge-secondary' : 'badge-primary'}`;

  return (
    <div>
      <div>
        <span>{rank}</span>
        <span>
          {name}
          {' '}
          {symbol}
        </span>
        <span>{price}</span>
        <span>{percent1H}</span>
        <span>{percent24H}</span>
        <span>{percent7D}</span>
        <span>{cap}</span>
        <span>{volume}</span>
        <span>{cSupply}</span>
        <span>{tSupply}</span>
      </div>
      <div><button onClick={viewDetail}>arrow</button></div>
    </div>
  );
};

DisplayHome.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cap: PropTypes.string.isRequired,
  tSupply: PropTypes.string,
  cSupply: PropTypes.string,
  volume: PropTypes.number,
  percent1H: PropTypes.string.isRequired,
  percent24H: PropTypes.string.isRequired,
  percent7D: PropTypes.string.isRequired,
};

export default DisplayHome;
