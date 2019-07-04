export const searchArtists = (paramString) => {
    return $.ajax({
        method: "GET",
        url: `api/searches/${paramString}`
    })
}