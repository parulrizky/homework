import React, { useState, useContext, createContext } from 'react';
import Favorite from './Favorite';
import Api from './Api';
import Test from './Test';

import { TrackProvider } from '../../contexts/TrackContext';

function SpotifyPage() {

  const greetings = {
    siang: {
      teks: "Halo selamat siang pak",
    },
    malam: {
      teks: "Sudah malam nih bos hehe",
    }
  };

  const GreetContext = createContext(greetings.siang);

  const [view, set_view] = useState("search");
    const menu = [
      //{
      //  name: "home",
      //  text: "Home",
      //  icon: "fa-home",
      //  page: <Home/>
      //},
      //{
      //  name: "recent",
      //  text: "Recent",
      //  icon: "fa-play-circle",
      //  page: <Recent/>
      //},
      {
        name: "search",
        text: "Search",
        icon: "fa-search",
        page: <Api/>
      },
      {
        name: "favorite",
        text: "Favorite",
        icon: "fa-heart",
        page: <Favorite/>
      },
      {
        name: "test",
        text: "test",
        icon: "fa-heart",
        page: <Test/>
      }
    ]

  const Page = () => {
    const selected_page = menu.filter(item => item.name === view);
    return selected_page[0].page;
  }

  const Menu = () => {
    return (
      <div className="text-left">

      <div className="my-10">
        <a href="http://localhost:3000">
          <img src="spotify.png" className="w-32" alt="logo"/>
        </a>
      </div>

      { menu.map((item) => {
          return (
            <div className="mb-2 ">
              <a className={`text-lg font-medium mb-5 ${view===item.name ? "text-gray-100" : "text-gray-600 hover:text-sptf"}`}
                href={`#${item.name}`}  
                onClick={() => {set_View(item.name)}} >
                  <i className={`fa m-2 ${item.icon}`}></i>
                  {item.text}</a>
            </div>
          );
        })}

        
      </div>
    )
  }

  return (
      <>

      <div className="p-5 w-56 fixed object-left object-top h-screen bg-sptf_black">
        <Menu/>
      </div>

      <div className="w-full flex flex-wrap">

        <div className="w-56 border border-blue-600 ">
          {/* <Menu/> */}
        </div>

        <div className="p-5 w-10/12 border-red-600">
          <TrackProvider>
            <Page/>
          </TrackProvider>
        </div>
      </div>

    </>
  );
}

export default SpotifyPage;