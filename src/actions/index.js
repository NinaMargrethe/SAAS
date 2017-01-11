import axios from 'axios';

const ROOT_URL_FOR_SEARCH = 'https://api.spotify.com/v1/search/';
export const SEARCH_ALBUMS = 'SEARCH_ALBUMS';
export const ALBUM_LIST = 'ALBUM_LIST';

export function searchAlbums(query) {
    console.log(query);
    const request = axios.get(`${ROOT_URL_FOR_SEARCH}?q=${query}&type=album`);

    return {
        type: SEARCH_ALBUMS,
        payload: request
    }

}