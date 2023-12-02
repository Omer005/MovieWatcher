// import { Dimensions, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// // import Video from 'react-native-video';
// import axios from 'axios';
import { useRoute } from '@react-navigation/native';
// import YouTube from 'react-native-youtube';


import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Trailer = () => {
    const route = useRoute();
    const {videoData} = route.params;
    // console.log(movieid,"trailer comp");
    
//   const [videoData, setVideoData] = useState(null);
//   useEffect(()=>{

//     MovieTrailer()

//   },[])
  const MovieTrailer = () => {
    const apiKey = '22dbb72e715050c2245cd9e56d6a2dbd';
    const bearerToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmRiYjcyZTcxNTA1MGMyMjQ1Y2Q5ZTU2ZDZhMmRiZCIsInN1YiI6IjY1NmEwZWRjZDM5OWU2MDBmZTBlMWQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Imd289fzaHtoB-UNiwBh03qKCG-M0DZT0V88aRR-IAI';
    const apiUrl = 'https://api.themoviedb.org/3/movie/' + movieid+"/videos";
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then(response => {
        // Handle the API response here
        console.log(response.data, 'video');
        setVideoData(response.data.results[0]);
      })
      .catch(error => {
        // Handle errors here
        console.log('Error:', error);
      });
  };
//   const getVideoUrl = (videoData) => {
//     return `https://www.youtube.com/watch?v=${videoData}`;
//   };
//   const currentVideo = videos[currentVideoIndex];
const [playing, setPlaying] = useState(false);

const onStateChange = useCallback((state) => {
  if (state === "ended") {
    setPlaying(false);
    Alert.alert("video has finished playing!");
  }
}, []);

const togglePlaying = useCallback(() => {
  setPlaying((prev) => !prev);
}, []);
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        // videoId={"iee2TATGMyI"}
        videoId={videoData.key}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  //   <View style={styles.container}>
  //   <YouTube
  //     apiKey="AIzaSyAHrR0C6QAUbiRmoXvHmSWJ7NXL9Yyqr2M"
  //     videoId="DieUbi5xD5k"
  //     play
  //     fullscreen
  //     loop
  //     onReady={(e) => console.log('onReady', e)}
  //     onChangeState={(e) => console.log('onChangeState', e)}
  //     onChangeQuality={(e) => console.log('onChangeQuality', e)}
  //     onError={(e) => console.log('onError', e)}
  //     style={styles.youtubePlayer}
  //   />
  // </View>
  )
}

export default Trailer

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       youtubePlayer: {
//         alignSelf: 'stretch',
//         height: 200,
//       },

// })