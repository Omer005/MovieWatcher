import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import CustomTextInput from '../components/input'
import search from '../assets/images/search.png';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const searchmovie = () => {
  const [upcomingMovies,setUpcomingMovies]=useState([])
  const [searchText, setSearchText] = useState('');
  const [data,setData ] = useState(false);

    useEffect(()=>{
        GetMoviesList()
    },[data])

    const GetMoviesList=()=>{
        const apiKey = '22dbb72e715050c2245cd9e56d6a2dbd';
        const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmRiYjcyZTcxNTA1MGMyMjQ1Y2Q5ZTU2ZDZhMmRiZCIsInN1YiI6IjY1NmEwZWRjZDM5OWU2MDBmZTBlMWQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Imd289fzaHtoB-UNiwBh03qKCG-M0DZT0V88aRR-IAI'; 
const apiUrl = 'https://api.themoviedb.org/3/movie/upcoming';
axios.get(apiUrl, {
  headers: {
    'Authorization': `Bearer ${bearerToken}`,
  },
})
            .then(response => {
              // Handle the API response here
              console.log(response.data.results,"search");
              setUpcomingMovies(response.data.results);
            })
            .catch(error => {
              // Handle errors here
              console.log('Error:', error);
            });
    }

    const filterMovies = () => {
      const filtered = upcomingMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setUpcomingMovies(filtered);
    }
  return (
    <View style={{flex:1}}>
      <View style={{position: 'relative', paddingVertical: 20}}>
        <CustomTextInput
          PadLeft={35}
          BorRad={25}
          placeholder="Search"
          title="Enter Email"
          leftAlign={true}
          onChangeText={text => {
            if (text === '') {
              setData(!data);
            } else {
              filterMovies();
            }
            setSearchText(text);
            filterMovies();
          }}
        />
        <Image
          style={{position: 'absolute', top: 35, left: 8}}
          source={search}
        />
      </View>
      <ScrollView style={{
        backgroundColor:"#F2F2F6"
      }}>
      {upcomingMovies?.map((item)=>
        (
          <View style={styles.cardContainer}>
          <Image style={styles.cardImage} source={{ uri: "https://image.tmdb.org/t/p/w500"+item.backdrop_path }} />
          {/* <Text style={styles.textTopLeft}>{item.textTopLeft}</Text> */}
          <Text style={[styles.text]}>{item?.title.substring(0, 18)}</Text>
          {/* <Text style={styles.textBottomRight}>{item.textBottomRight}</Text>
          <Text style={styles.textBottomRight1}>{item.textBottomRight1}</Text>
          <Text style={styles.textBottomRight2}>{item.textBottomRight2}</Text> */}
        </View>
        )
      )}
      </ScrollView>
     
    </View>
  )
}

export default searchmovie

const styles = StyleSheet.create({
  cardContainer: {
    height:200,
  //  flex:1,
   flexDirection:"row",
   justifyContent:"flex-start",
   alignItems:"center",
   padding:20
  },
  cardImage: {
    width: '50%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius:10
  },
  text:{
    fontSize: 16,
    padding: "2%",
    color: 'black',
    fontWeight: "bold",
    flexWrap:"wrap"

  }
})