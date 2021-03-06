import React, {useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../../redux/tokenSlice';
import { selectUser } from '../../../redux/userSlice';

const axios = require('axios');

function NewForm(props){

    const token = useSelector(selectToken);
    const user = useSelector(selectUser);

    const [form, set_form] = useState({
        title: '',
        desc: '',
    });

    async function doCreate() {
        try {
            let url = "https://api.spotify.com/v1/users/"+ user.id +"/playlists";
            await axios.post(url, 
                {
                    name: form.title,
                    description: form.desc,
                    public: 'false',
                    collaborative: 'false'
                },
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            )
        } catch(err) {
            console.error(err);
        } finally {
            alert("A new playlist created succesfully");
            props.set_view("playlistall");
        }
    }

    function handleOnchange(e){
        const name = e.target.name
        const value = e.target.value
        set_form({...form, [name] : value })
    }

    function handleSubmit(){
        if(form.title.length < 10){
            alert("Title must be at least 10 characters");
        }
        else if(form.desc.length < 20) {
            alert("Description must be at least 20 characters");
        }
        else{
            doCreate();
        }
    }                  

    return (
        <>

        <div className="flex flex-wrap w-10/12 my-10">
          <div className="w-6/12">
            <a className="text-2xl text-white font-bold">Create new playlist</a>
          </div>
        </div>

        <form onSubmit={() => {handleSubmit()}}>
            <div className="mb-2">
                <input
                    onChange={(e) => {handleOnchange(e)}}
                    name="title"
                    value={form.title}
                    minlength="10"
                    required
                    className="bg-gray-600 text-gray-100 py-1 px-3 rounded w-5/12"
                    type="text" placeholder="Title..."/>
            </div>

            <div>
                <textarea
                    onChange={(e) => {handleOnchange(e)}}
                    name="desc"
                    value={form.desc}
                    className="bg-gray-600 text-gray-100 py-1 px-3 rounded w-80"
                    placeholder="Description..."
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className="justify-center rounded px-4 py-2 bg-sptf hover:bg-gray-600 text-base font-medium text-white">
                        Submit
                </button>
            </div>
        </form>

        </>
    );

}

export default NewForm;