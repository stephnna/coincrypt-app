// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { Circles } from 'react-loader-spinner';
// import FirstLayer from './FirstLayer';
// import de


// let isInitial = true;
// const Home = () => {
//   const { cryptocurrencies, loading, error } = useSelector((state) => state.home);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (isInitial) {
//       dispatch();
//       isInitial = false;
//     }
//   }, []);  

//   const displayMarket = () => {
//     if (error) {
//       return (
//         <div>
//           <span>
//             Oops!
//             {' '}
//             {error.message}
//             !
//           </span>
//         </div>
//       );
//     }
//     if (loading) {
//       return (
//         <Circles
//           height="80"
//           width="80"
//           color="#4fa94d"
//           ariaLabel="circles-loading"
//           wrapperStyle={{}}
//           wrapperClass=""
//           visible={true}
//         />
//       );
//     }

//     return (
//       <div>
//         {cryptocurrencies.map((crypto) => (
//           <FirstLayer
//             id={crypto.id}
//             name={crypto.name}
//             rank={crypto.rank}
//             symbol={crypto.symbol}
//             price={crypto.price}
//             cap={crypto.cap}
//             tsupply={crypto.tsupply}
//             volume={crypto.volume}
//             percent1H={crypto.percent_change_1h}
//             percent24H={crypto.percent_change_24h}
//             percent7D={crypto.percent_change_7d}
//             key={crypto.id}
//           />
//         ))}
//       </div>
//     );
//   };

//   return <>{displayMarket()}</>;
// };
// export default Home;
