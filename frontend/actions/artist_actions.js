import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

const receiveAllArtists = (artists) => {
    return {
        type: RECEIVE_ALL_ARTISTS,
        artists
    }
}

const receiveArtist = (artist) => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
}

export const fetchAllArtists = () => dispatch => {
    return ArtistApiUtil.fetchAllArtists().then(artists => {
        return dispatch(receiveAllArtists(artists))
    })
}

export const fetchArtist = (artistId) => dispatch => {
    return ArtistApiUtil.fetchArtist(artistId).then(artist => {
        return dispatch(receiveArtist(artist))
    })
}