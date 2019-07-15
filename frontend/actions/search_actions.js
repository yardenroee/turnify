import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_ALL_SEARCHES = "RECEIVE_ALL_SEARCHES";

export const CLEAR_SEARCH = "CLEAR_SEARCH";
const receiveAllSearches = ({artists, search_ids, albums}) => {
    return {
        type: RECEIVE_ALL_SEARCHES,
        artists,
        albums,
        search_ids
    };
};

export const clearSearch = ()=> {
    return{
        type: CLEAR_SEARCH,
    }
}


export const searchArtists = (queryString) => dispatch => (
    SearchApiUtil.searchArtists(queryString).then(response => dispatch(receiveAllSearches(response)))
);
