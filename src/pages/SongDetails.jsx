import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDeetsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';
const SongDetails = () => {
const dispatch = useDispatch();
const{songid} = useParams();
const {activeSong, isPlaying} = useSelector((state) => state.player);
const{data:songDeets, isFetching: isFetchingSongDeets} = 
useGetSongDeetsQuery({songid});
const{data, isFetching: isFetchingRelatedSongs, error} = useGetSongRelatedQuery({songid});
const handlePauseClick= () => {
    dispatch(playPause(false));
  
  };
  const handlePlayClick= (song, i) =>{
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
  
  };
if(isFetchingSongDeets || isFetchingRelatedSongs) return
<Loader title = "Searching song details"/>;
if(error) return <Error/>;

return (
    <div className="flex flex-col">
        <DetailsHeader artistId="" songDeets={songDeets}/>

        <div className="mb-10">
            <h2 className="text-white text-3xl font-bold">Lyrics</h2>
            <div className="mt-5 ">
                {songDeets?.sections[1].type=== 'LYRICS' ?
                songDeets?.sections[1].text.map((line, i) =>(
                    <p key={i} className="text-[#ffffff] font-bold">{line}</p>
                )) : <p>
                    No lyrics Found
                </p> }
                
            </div>
        </div>
        <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
        />

    </div>
)
}

export default SongDetails;
