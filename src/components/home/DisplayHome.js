import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDetailPage } from '../../redux/home/home';

const DisplayHome = (props) => {
  const {
    id, name, rank, symbol, price, cap,
    tSupply, cSupply, volume, percent1H,
    percent24H, percent7D,
  } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // {replace: true}
  const viewDetail = () => {
    navigate('/first-layer', { replace: true });
    dispatch(getDetailPage(id, name, symbol));
  };

  const badgeStyles = `${percent1H <= 0 || percent24H <= 0 || percent7D <= 0 ? 'badge-red' : 'badge-green'}`;

  return (
    <>
      <div className="display-home-cont">
        <div className="align-right"><button type="button" className="display-home-forarrow align-center" onClick={viewDetail} onKeyDown={viewDetail}>&#8594;</button></div>
        <div className="desktop-home-crypto">
          <div>
            <span className="display-home-key">Rank: </span>
            <span>
              {' '}
              {rank}
            </span>
          </div>
          <br />
          <div>
            <span className="display-home-key">Name: </span>
            <span>
              {' '}
              {name}
              (
              {symbol}
              )
            </span>
          </div>
          <br />
          <div>
            <span className="display-home-key">Price: </span>
            <span>
              {' '}
              $
              {price}
            </span>
          </div>
          <br />
          <div>
            <span className="display-home-key">1h%: </span>
            <span className={badgeStyles}>
              {' '}
              {percent1H}
              %
            </span>
          </div>
          <br />
          <div>
            <span className="display-home-key">24h%: </span>
            <span className={badgeStyles}>
              {' '}
              {percent24H}
              %
            </span>
          </div>
          <br />
          <div>
            <span className="display-home-key">7d%: </span>
            <span className={badgeStyles}>
              {' '}
              {percent7D}
              %
            </span>
          </div>
          <br />
          <div>
            <span className="display-home-key">Volume:</span>
            <span>
              {' '}
              $
              {Math.round(volume)}
            </span>
          </div>
          <br />
          <div>
            <span className="display-home-key">Total:</span>
            <span>
              {' '}
              {Math.round(tSupply)}
              (
              {symbol}
              )
            </span>
          </div>
          <br />
          <div>
            <span className="display-home-key">Circulating supply:</span>
            <span>
              {' '}
              {Math.round(cSupply)}
              (
              {symbol}
              )
            </span>
          </div>
          <br />
          <div>
            <span className="display-home-key">Cap:</span>
            <span>
              {' '}
              $
              {Math.round(cap)}
            </span>
          </div>
          <br />
          <div><button className="dekstop-home-forarrow" onClick={viewDetail} type="button">&#8594;</button></div>
        </div>
      </div>
    </>
  );
};

DisplayHome.defaultProps = {
  tSupply: null,
};

DisplayHome.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cap: PropTypes.string.isRequired,
  tSupply: PropTypes.string,
  cSupply: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  percent1H: PropTypes.string.isRequired,
  percent24H: PropTypes.string.isRequired,
  percent7D: PropTypes.string.isRequired,
};

export default DisplayHome;
