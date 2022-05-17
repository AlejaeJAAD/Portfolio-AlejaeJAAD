/** @format */
import Axios from 'axios';

const state = {
  artistData: [],
  albumsData: [],
  songsData: [],
  albumName: '',
  artistName: '',
  lyricSong: [],
  previewData: '',
  error: '',
};

const mutations = {
  setArtistData(state, artistData) {
    state.artistData = artistData;
  },
  setAlbumsData(state, albumsData) {
    state.albumsData = albumsData;
  },
  setSongsData(state, songs) {
    state.songsData = songs;
  },
  setArtistName(state, artistName) {
    state.artistName = artistName;
  },
  setAlbumName(state, albumName) {
    state.albumName = albumName;
  },
  setLyricSong(state, lyricData) {
    state.lyricSong = lyricData;
  },
  setPreview(state, previewData) {
    state.previewData = previewData;
    console.log(state.previewData);
  },
  POST_ERROR: (state, payload) => {
    state.error = payload;
  },
  setPreviewBlank() {
    state.previewData = '';
  },
};
const actions = {
  //   async getArtistData(context, artistName) {
  //     try {
  //       const response = await fetch(
  //         `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artistName}`
  //       );
  //       const data = await response.json();
  //       context.commit('setArtistData', data.artists[0]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  getArtistData(context, artistName) {
    return new Promise((resolve) => {
      Axios.get(
        `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artistName}`,
        {}
      ).then((res) => {
        resolve(true);
        if (res.data.artists === null) {
          state.artistData = [];
          state.albumsData = [];
        } else {
          context.commit('setArtistData', res.data.artists[0]);
          //context.commit('setPresidencias', res.data);
        }
      });
    });
  },
  async getAlbumsFromArtist(context, artistId) {
    try {
      const response = await fetch(
        `https://theaudiodb.com/api/v1/json/2/album.php?i=${artistId}`
      );
      const data = await response.json();
      context.commit('setAlbumsData', data.album);
    } catch (error) {
      console.log(error);
    }
  },
  async getSongsFromAlbum(context, album) {
    const idAlbum = album.idAlbum;
    const artistName = album.strArtist;
    const albumName = album.strAlbum;
    const songs = [];

    try {
      const response = await fetch(
        `https://theaudiodb.com/api/v1/json/2/track.php?m=${idAlbum}`
      );
      const data = await response.json();
      for (let index = 0; index < data.track.length; index++) {
        const element = [];
        element = data.track[index].strTrack;
        songs.push(element);
      }
      context.commit('setSongsData', songs);
      context.commit('setArtistName', artistName);
      context.commit('setAlbumName', albumName);
    } catch (error) {
      console.log(error);
    }
  },
  async getLyricFromSong(context, payload) {
    const artistNameChild = payload.nameArtist;
    const songNameChild = payload.songSelected;
    //songName.slice('');
    try {
      const response = await fetch(
        //`https://api.lyrics.ovh/v1/${artist}/${song}`
        `https://api.lyrics.ovh/v1/${artistNameChild}/${songNameChild}`
      );
      const data = await response.json();
      context.commit('setLyricSong', data.lyrics);
    } catch (error) {
      console.error(error);
    }
  },
  async getTrackData(context, payload) {
    const artistNameChildC = payload.nameArtist;
    const songNameChildC = payload.songSelected;

    //curl -d client_id=5fbc38ff68e34d90abf55f75894968b3 -d client_secret=e70d1ecb59054a03a22a7aacd6687680 -d grant_type=authorization_code -d code=AQCjC1JtL2YqTFWOmg6L0AWb6UJ7A33sueDtKuEZWUCqZALMPyWY0aZzLgaboddNxm7ZNTlRaNCTwZCZspJYM3Ed57mffb-WrkLv4v2pptQ4IdBwfoqMO12LFDsW9XMgH1xzNayRXNPiyI-HOo-7nO6-uY2d3Iykwx5mpEfdgw -d redirect_uri=http://localhost:8081/music https://accounts.spotify.com/api/token

    return new Promise((resolve, error) => {
      Axios.get(
        `https://api.spotify.com/v1/search?query=${songNameChildC}%27+artist%3A${artistNameChildC}&type=track&offset=0&limit=20`,
        {
          headers: {
            Authorization: `Bearer BQCTxCDvlnOOgCq0Qn_rvFr9h3knZ0EDPhe6w2d-RSsw3tJuvMMyAAjP4aAzCCGRS5Z0BLI5gSbf7IY7Duoklrdmtjtqsw4hEjqtulWvqNIdNpfyNqHCboZ8axPs2yJpe6wDP-mSb4nUSUMbcAvYZo2jlgT9ncqLiQ`,
          },
        }
      )
        .then((res) => {
          // const track = res.data.tracks.items[0].preview_url;
          // console.log(res.data.tracks.items[0])
          const dataSong = [
            res.data.tracks.items[0].preview_url,
            res.data.tracks.items[0].external_urls.spotify,
            res.data.tracks.items[0].name,
            res.data.tracks.items[0].artists[0].name,
            res.data.tracks.items[0].artists[0].external_urls.spotify,
            res.data.tracks.items[0].album.images[0].url,
          ];
          console.log(dataSong);
          //cancion completa - items.external_urls.spotify
          //nombre cancion - items.name
          //link artista - items.artists[0].external_urls.spotify
          //imagenes - items.album.images[0]
          console.log(res.data, 'data');
          resolve(res.data);
          context.commit('setPreview', dataSong);
        })
        .catch((err) => error(new Error(`CATCHERR: Algo salió mal! ${err}`)));
    });
  },
  SET_ERROR: (context, errorMsg) => {
    console.log(errorMsg);
    context.commit('POST_ERROR', errorMsg);
  },
};

const getters = {
  getArtistData() {
    return state.artistData;
  },
  getAlbumsData() {
    return state.albumsData;
  },
  getSongsData() {
    return state.songsData;
  },
  getArtistName() {
    return state.artistName;
  },
  getAlbumName() {
    return state.albumName;
  },
  getLyric() {
    return state.lyricSong;
  },
  getPreview() {
    return state.previewData;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
