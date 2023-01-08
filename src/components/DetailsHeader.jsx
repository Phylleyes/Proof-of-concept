import {Link} from 'react-router-dom';

const DetailsHeader= ({ artistId, artistData, songDeets}) =>{
  const artist = artistData?.artists[artistId]?.attributes;

return(
  <div className="relative w-full flex flex-col">
    <div className="w-full sm:h-48 h-28"/>

    <div className="absolute inset-0 flex items-center">
      <img
      alt="arts"
      src={artistId ? art.artwork?.url.replace('{w}', '500').replace('{h}', '500')
    :songDeets?.images?.coverart}
    className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
        {artistId ? artist?.name : songDeets?.title} 
        </p>
        {!artistId &&(
          <Link to={`/artists/${songDeets?.artists[0].adamid}`}>
          <p className="text-base text-white">{songDeets?.subtitle}</p>
          </Link>
        )}

        <p className="text-base text-white mt-2">
          {artistId ? artist?. genreNames[0]
          : songDeets?.genres?.primary}
        </p>
      </div>
    </div>
    <div className="w-full sm:h-44 h-24"/>
  </div>
)
}
export default DetailsHeader;