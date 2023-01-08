import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    export const shazamCoreApi= createApi({
reducerPath:'shazamApi',
baseQuery:fetchBaseQuery({
    //this is the baseURL
    baseUrl:'https://shazam.p.rapidapi.com',
    prepareHeaders:(headers) =>{
        //this is the API key
        headers.set('X-RapidAPI-Key','e13d1bd465msh23b93a3bae7bf4cp15d79ejsn598d6de4b7af' );
        return headers;
    },
}),
endpoints: (builder) =>({
    // gets the top songs in a specfic country
    getTopCharts: builder.query({query: () =>'/charts/track'}), 
    //gets the song detail of the song, like genre, lyrics, artist, and etc.
    getSongDeets: builder.query({query: ({ songid }) =>`/songs/get-details?key=${songid}`}), 
    //gets recommendations for the specific song that you clicked
    getSongRelated: builder.query({query: ({ songid })=>`/songs/list-recommendations?key=${ songid }`}), 
    //Gets the details of the artist
    getArtistDetails: builder.query({query: (artistId) =>`/artists/get-details?id=${artistId}`}),
}),
    });

    export const{
        useGetTopChartsQuery,
        useGetSongDeetsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
    } = shazamCoreApi;