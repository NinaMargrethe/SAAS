import axios from 'axios';

const ROOT_URL_FOR_SEARCH = 'https://api.spotify.com/v1/search/';
export const SEARCH_ALBUMS = 'SEARCH_ALBUMS';
export const ADD_ALBUM = 'ADD_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';


export function searchAlbums(query, offset = 0) {

    // redux-thunk style
    return dispatch =>
        axios.get(`${ROOT_URL_FOR_SEARCH}?q=${query}&offset=${offset}&type=album`)
            .then(response => {
                dispatch({
                    type: SEARCH_ALBUMS,
                    query: query,
                    result: response.data
                })
            }).catch(error => {
                console.log("Search Albums Error: ", error);
            });
}

export function clearSearch() {
    return {
        type: CLEAR_SEARCH
    }
}

export function addAlbum(album) {
    return {
        type: ADD_ALBUM,
        payload: album
    }
}

export function deleteAlbum(album) {
    return {
        type: DELETE_ALBUM,
        payload: album
    }
}