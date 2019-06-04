export const fetchAllArtists = () => {
    return $.ajax({
        method: 'get',
        url: 'api/artists'
    })
}

export const fetchArtist = (artistId) => {
    return $.ajax({
        method: 'get',
        url: `api/artists/${artistId}`
    })
}

