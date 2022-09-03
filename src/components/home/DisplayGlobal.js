import PropTypes from 'prop-types';

const DisplayGlobal = (props) => {
  const {
    totalCoin, totalCap, totalCapChange, avgChange, totalVolume,
  } = props;

  const badgeStyles = `${totalCapChange <= 0 ? 'badge-red' : 'badge-green'}`;

  //

  // const btnBadge = reserved ? 'Leave Mission' : 'Join Mission';
  // const memberBadge = reserved ? 'Active Member' : 'NOT A MEMBER';

  // const btnStyles = `btn-mission ${reserved ? 'btn-mission-sec' : ''}`;
  // const badgeStyles = `badge ${reserved ? 'badge-secondary' : 'badge-primary'}`;

  return (
    <>
      <div className="display-global-cont">
        <div>
          <span className="display-global-key">COIN COUNT:</span>
          <span>
            {' '}
            {totalCoin}
          </span>
        </div>
        <br />
        <div>
          <span className="display-global-key">TOTAL MARKET CAP:</span>
          <span>
            {' '}
            $
            {Math.round(totalCap)}
          </span>
        </div>
        <br />
        <div>
          <span className="display-global-key">TOTAL CAP CHANGE: </span>
          <span className={badgeStyles}>
            {' '}
            $
            {Math.round(totalCapChange)}
          </span>
        </div>
        <br />
        <div>
          <span className="display-global-key">AVERAGE CHANGE:</span>
          <span>
            {' '}
            $
            {Math.round(avgChange)}
          </span>
        </div>
        <br />
        <div>
          <span className="display-global-key">24H VOLUME:</span>
          <span>
            {' '}
            $
            {Math.round(totalVolume)}
          </span>
        </div>
      </div>
      <div className="display-global-starts align-center">STATS BY CRYPTOCURRENCIES</div>
      <div className="desktop-home-crypto-header black-color">
        <span>Rank</span>
        <span>Name</span>
        <span>Price</span>
        <span>1h%</span>
        <span>24h%</span>
        <span>7d%</span>
        <span>Volume</span>
        <span>Total supply</span>
        <span>Circulating supply</span>
        <span>Cap</span>
        <span>More</span>
      </div>
    </>
  );
};

DisplayGlobal.propTypes = {
  totalCoin: PropTypes.number.isRequired,
  totalCap: PropTypes.number.isRequired,
  totalCapChange: PropTypes.string.isRequired,
  avgChange: PropTypes.number.isRequired,
  totalVolume: PropTypes.number.isRequired,
};

export default DisplayGlobal;
