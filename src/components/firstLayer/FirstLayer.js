import { useSelector } from 'react-redux';
import { Circles } from 'react-loader-spinner';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FirstLayer = () => {
  const { cryptoDetail, loading, error } = useSelector((state) => state.home);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cryptoDetail) {
      navigate('/');
    }
  }, [cryptoDetail, navigate]);

  const backToHome = () => {
    navigate('/');
  };

  const displayDetail = () => {
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

    return (
      <div className="first-layer-cont">
        <div>
          <button type="button" className="display-home-bakarrow" onClick={backToHome}>&#8592;</button>
        </div>

        <div>
          {cryptoDetail.map(({
            id, symbol, redActiveUsers, redSubsribers, twiFollowers, twiStatus,
          }) => (
            <div key={id} className="first-layer-grid align-center">
              <div>
                <span>
                  Reddit
                  {symbol}
                  {' '}
                  active users:
                </span>
                <br />
                <br />
                <span>{Math.round(redActiveUsers)}</span>
              </div>
              <div>
                <span>
                  Reddit
                  {symbol}
                  {' '}
                  subscribers:
                </span>
                <br />
                <br />
                <span>{redSubsribers}</span>
              </div>
              <div>
                <span>
                  Twitter
                  {symbol}
                  {' '}
                  followers:
                </span>
                <br />
                <br />
                <span>{twiFollowers}</span>
              </div>
              <div>
                <span>
                  Twitter
                  {symbol}
                  {' '}
                  status:
                </span>
                <br />
                <br />
                <span>{twiStatus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <>{displayDetail()}</>;
};
export default FirstLayer;
