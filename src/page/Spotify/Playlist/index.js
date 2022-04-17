import React, {useState} from 'react';
import PlaylistAll from './PlaylistAll';
import NewForm from './NewForm';
import PlaylistDetail from './PlaylistDetail';
import TrackDetail from '../Track/TrackDetail';

function PlaylistPage() {

    const [view, set_view] = useState("playlistall");
    const [playlist_id, set_playlist_id] = useState(null);

    return (
        <>
            {(view==="playlistall") && (
                <PlaylistAll
                    set_view={set_view}
                    set_playlist_id={set_playlist_id}
                />
            )}

            {(view==="newplaylist") && (
                <NewForm
                    set_view={set_view}
                />
            )}

            {(view==="playlistdetail") && (
                <PlaylistDetail
                    set_view={set_view}
                    user={props.user}
                    set_track_id={props.set_track_id}
                />
            )}

            {(view==="trackdetail") && (
                <TrackDetail/>
            )}


        </>
    );

}

export default PlaylistPage;