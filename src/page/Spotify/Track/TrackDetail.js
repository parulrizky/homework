import React,{useState,useEffect} from 'react';
import AddToPlaylist from './AddToPlaylist';

import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../../redux/tokenSlice';
import { selectSelectedTrack } from '../../../redux/selectedTrackSlice';

const axios = require('axios');

function TrackDetail(props) {

    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const selecedTrack = useSelector(selectSelectedTrack);

    const [show_add_modal, set_show_add_modal] = useState(false);

    function TesTombol(){
        return(
            <a
                onClick={() => {
                    console.log("Selected track:")
                    console.log(selectedtrack);
                }}
                className="cursor-pointer text-white bg-blue-500 p-2 rounded-lg">
            Tes tombol</a>
        )
    }

    function PlayButton(){

        return(
          <div className="mr-3">
            <a href={selectedtrack.external_urls.spotify} target="new"
              title="Play on Spotify"
              className="cursor-pointer text-sm text-white py-2 px-4 rounded-full bg-sptf hover:bg-gray-600">
              <i className="text-sm fa fa-play mr-1"></i> Play on Spotify
            </a>
          </div>
        );
    }

    function AddToPlaylistButton(){

        return(
          <div className="">
            <a onClick= {() => {
                set_show_add_modal(true);
                }}
              title="Add to playlist"
              className="cursor-pointer text-sm text-white py-2 px-4 rounded-full border-2 border-gray-400 hover:border-sptf hover:text-sptf ">
              <i className="text-sm fa fa-headphones-alt mr-1"></i> Add to playlist
            </a>
          </div>
        );
    }


    function Page(){
        return(
        <>
            {(show_add_modal) && (
                <AddToPlaylist
                    set_show_add_modal={set_show_add_modal}
                />
            )}
            
            <div className="flex flex-wrap mt-10">
                <div className="p-5">
                <img src={selecedTrack.album.images[0].url} title={selecedTrack.name} alt="{props.album_name}" className="object-cover rounded w-52 h-52"/>
                </div>
            </div>

            <div className="p-5">
                <div className="mb-5">
                    <a className="text-7xl text-white font-bold">{selecedTrack.name}</a>
                </div>
                <div className="">
                    <a className="text-base text-gray-300">{selecedTrack.album.artists[0].name}</a>
                </div>
            </div>

            <div className="flex flex-wrap pl-5 mt-5">
                <PlayButton/><AddToPlaylistButton/>
            </div>

        </>
        )
    }

    return (
        <>
            <Page/>
            {/*<TesTombol/>*/}
        </>
    );
}

export default TrackDetail;