// import { useState } from 'react';

// export default function SearchBox() {
//   const [query, setQuery] = useState([]);

//   const handleChange = (e) => {
//     const userInput = e.target.value;
//     // console.warn(userInput);
//     if (userInput === '') {
//       setQuery([]);
//     } else {
//       searchSong(userInput).then(setQuery);
//       // console.warn(query);
//     }
//   };

//   return (
//     <>
//       <input type="text" name="search" id="search-box" placeholder="search a song" onChange={handleChange} aria-label="Search" className="mb-5" style={{ width: '596px', height: '43px' }} />

//       {/* <div className="search-results"> */}
//       {query.map((item) => (
//         <SongCard className="search-song-card" key={item.id} songObj={item} />
//       ))}
//       {/* </div> */}
//     </>
//   );
// }
