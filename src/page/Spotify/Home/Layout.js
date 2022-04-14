import React, { useState } from 'react';
import Menu from '../../../components/Menu';
import Home from './Home';
import PlaylistPage from '../Playlist';
import SearchPage from '../Search';

import { useSelector, useDispatch } from 'react-redux';
import {
    updateToken,
    selectToken,
  } from '../../../redux/tokenSlice';

function Layout() {

  const dispatch = useDispatch();
  const token = useSelector(selectToken);


  const [view, set_view] = useState("home");

  const [user, set_user] = useState(null);
  const [fav_tracks, set_fav_tracks] = useState([]);
  const [track_id, set_track_id] = useState(null);

  let menu_list = [
    {
    name: "home",
    text: "Home",
    icon: "fa-home",
    page: <Home
            user={user}
            set_user={set_user}
          />
    },

  ];
    if(token){
        menu_list = [
          {
          name: "home",
          text: "Home",
          icon: "fa-home",
          page: <Home
                    user={user}
                    set_user={set_user}
                />
          },
          {
          name: "search",
          text: "Search",
          icon: "fa-search",
          page: <SearchPage
                    fav_tracks={fav_tracks}
                    set_fav_tracks={set_fav_tracks}
                />
          },
          {
            name: "playlists",
            text: "Playlists",
            icon: "fa-headphones-alt",
            page: <PlaylistPage
                    user={user}
                    set_fav_tracks={set_fav_tracks}
                    fav_tracks={fav_tracks}
                    track_id={track_id}
                    set_track_id={set_track_id}
                  />
          },
        ];
    }

  function Page() {
    const selected_page = menu_list.filter(item => item.name === view);
    return selected_page[0].page;
  }

  return (
    <>

      <div className="p-5 w-56 fixed object-left object-top h-screen bg-sptf_black">
        <Menu
          view={view}
          set_view={set_view}
          menu_list={menu_list}
        />
      </div>

      <div className="w-full flex flex-wrap">

        <div className="w-56 border border-blue-600 ">
          {/* <Menu/> */}
        </div>

        <div className="p-5 w-10/12 border-red-600">
          <Page/>
        </div>

      </div>

    </>
  );
}

export default Layout;