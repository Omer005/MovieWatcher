import {StyleSheet, Text, View, ImageBackground,Image,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import playbutton from "../assets/images/playbutton.png"

const Coloes = ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F'];

const movieDetail = () => {
  const route = useRoute();
  const {movieid} = route.params;
  const [movieInfo, setmovieInfo] = useState(null);
  console.log('idiididdi', movieid);

  useEffect(() => {
    GetMovieDetail();
  }, []);
  const GetMovieDetail = () => {
    const apiKey = '22dbb72e715050c2245cd9e56d6a2dbd';
    const bearerToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmRiYjcyZTcxNTA1MGMyMjQ1Y2Q5ZTU2ZDZhMmRiZCIsInN1YiI6IjY1NmEwZWRjZDM5OWU2MDBmZTBlMWQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Imd289fzaHtoB-UNiwBh03qKCG-M0DZT0V88aRR-IAI';
    const apiUrl = 'https://api.themoviedb.org/3/movie/' + movieid;
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then(response => {
        // Handle the API response here
        console.log(response.data, 'detail');
        setmovieInfo(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.log('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + movieInfo?.poster_path,
        }}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
            <TouchableOpacity style={styles.watch}>
            <Image  source={playbutton} style={{paddingRight:10}}/>
        {/* <Text style={styles.textTopLeft}>{item.textTopLeft}</Text> */}
        <Text >Watch Trailer</Text>
            </TouchableOpacity>
          {/* Other components or content can be added here */}
          {/* <Text style={styles.text}>{movieInfo?.title}</Text> */}
        </View>
      </ImageBackground>
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.text1}>Geners</Text>
        <View style={styles.geners}>
          {movieInfo?.genres?.map((item, index) => {
            return (
              <View
                style={[styles.genersbody, {backgroundColor: Coloes[index]}]}>
                <Text>{item.name}</Text>
              </View>
            );
          })}
        </View>
        <View style={{paddingTop:0}}>
        <Text style={styles.text1}>Overview</Text>
        <Text style={{color:"#8F8F8F"}} >{movieInfo?.overview}</Text>
        </View>
      </View>
    </View>
  );
};

export default movieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  watch: {
    
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:"center",
    borderColor:"white",
    borderRadius:10,
    borderWidth:1,
    paddingHorizontal:30,
    paddingVertical:10,
    marginHorizontal:60
    
  },
  backgroundImage: {
    flex: 0.5, // Take up half of the screen
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add an overlay for better text visibility
    justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  text1: {
    marginTop: 10,
    marginBottom: 17,
    color: 'black',
    fontSize: 22,
    fontWeight:"bold"
  },
  geners: {
    flexDirection: 'row',
    //  justifyContent:'center'
  },
  genersbody: {
    marginRight: 5,
    flexDirection: 'row',
    color: 'white',
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 20,
  },
});
