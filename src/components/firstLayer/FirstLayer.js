import { useSelector} from 'react-redux';
import { Circles } from 'react-loader-spinner';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FirstLayer = () => {
const {cryptoDetail, loading, error } = useSelector((state) => state.home);
const navigate = useNavigate();

useEffect(() => {
  if(!cryptoDetail) navigate('/');
}, [])

const backToHome = () => {
  navigate('/', {replace: true});  
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
        visible={true}
      />
    );
  }

  return (
    <>
    <div><span className='display-home-bakarrow align-left' onClick={backToHome}>&#8592;</span></div>
    <div>
      {cryptoDetail.map(( {id, redActiveUsers, redSubsribers,twiFollowers, twiStatus}) => (
        <div key={id}>
          <div>
                <span>{redActiveUsers}</span>
                <span>{redSubsribers}</span>
                <span>{twiFollowers}</span>
                <span>{twiStatus}</span>
              </div>
        </div>
      ))}
    </div>
    </>
  );
};

return <>{displayDetail()}</>;

  }
export default FirstLayer;
