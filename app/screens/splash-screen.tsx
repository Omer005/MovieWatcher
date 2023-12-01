import React, { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, useColorScheme, View, ScrollView, StyleSheet } from "react-native"

import logo from "../assets/images/search.png"
import splashImage from "../assets/images/splash-image.png"
import { COLOR_PRIMARY } from "../utils/colors"
import CustomButton from "../components/button"
import { ROUTES_NAMES } from "../utils/constants";
import axios from "axios"
const cardData2 = [
    {
      id: 1,
      title: 'Card Title 1',
      image: require('../assets/images/food.png'),
      textTopLeft: 'World Food Day',
      textBottomLeft: 'Free Guy',
     
    },
    {
      id: 1,
      title: 'Card Title 1',
      image: require('../assets/images/food.png'),
      textTopLeft: 'World Food Day',
      textBottomLeft: 'Free Guy',
     
    },
    {
      id: 2,
      title: 'Card Title 2',
      image: require('../assets/images/food2.png'),
      textTopLeft: 'Animal Day',
      textBottomLeft: 'The Kihng;s Man',

    },
    {
      id: 2,
      title: 'Card Title 2',
      image: require('../assets/images/food2.png'),
      textTopLeft: 'Animal Day',
      textBottomLeft: 'jojo rabit',

    },
  ];
const ImageBaseUrl="https://api.themoviedb.org"
const Card = ({ item }) => {
  const imageUrl="https://image.tmdb.org/t/p/w500"+item.backdrop_path
    return (
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{ uri: imageUrl }} />
        {/* <Text style={styles.textTopLeft}>{item.textTopLeft}</Text> */}
        <Text style={[styles.textBottomLeft]}>{item.original_title}</Text>
        {/* <Text style={styles.textBottomRight}>{item.textBottomRight}</Text>
        <Text style={styles.textBottomRight1}>{item.textBottomRight1}</Text>
        <Text style={styles.textBottomRight2}>{item.textBottomRight2}</Text> */}
      </View>
    );
  };


const SplashScreen = (props) => {
  const [upcomingMovies,setUpcomingMovies]=useState([])

    useEffect(()=>{
        GetMoviesList()
    },[])

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
              console.log(response.data.results,"ress");
              setUpcomingMovies(response.data.results);
            })
            .catch(error => {
              // Handle errors here
              console.log('Error:', error);
            });
    }
    


    return (<>
        <View style={{ flex: 1, padding: 10 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, marginTop: 30 }}>

                <Text style={styles.text}>watch</Text>
          <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ROUTES_NAMES.searchScreen)
          }}
          >

                    <Image source={logo} />      
          </TouchableOpacity>
            </View>
            <ScrollView 
            style={{marginTop:"5%",backgroundColor:"#EFEFEF"}}
            showsHorizontalScrollIndicator={false}
          >
            {upcomingMovies.map(item => (
               <TouchableOpacity onPress={()=>{
                let movieid=item.id;
                props.navigation.navigate(ROUTES_NAMES.detailscreen, { movieid });

                // setimgurlone(item.image);
                // setTextvalueone(item.textTopLeft)
                // setModalVisibleone(true)
              }}>
              <Card key={item.id} item={item} />
              </TouchableOpacity>
            ))}
          </ScrollView>
            {/* <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{
                    justifyContent: "center", alignItems: "center",
                    width: 383,
                    height: 255,
                    marginVertical:20
                }}>
                    <Image source={splashImage}
                        style={{
                           width: "90%",
                            height: "90%",
                            resizeMode: 'contain',
                        }} />
                </View>



                <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "gray", marginRight: 7 }} />
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "gray", marginRight: 7 }} />
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: COLOR_PRIMARY, marginRight: 7 }} />
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "gray" }} />
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.textHeading}>

                        Give Happiness With E
                    </Text>
                    <Text style={styles.textHeading}>Cent</Text>
                </View>


                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.text}>

                        Make a tangible difference and foster a
                    </Text>

                    <Text style={styles.text}>

                        compassionate society. You can
                    </Text>

                    <Text style={styles.text}>

                        establish a schedule for the
                    </Text>
                    <Text style={styles.text}>

                        donations and help them
                    </Text>
                    <Text style={styles.text}>
                        rise with you.
                    </Text>

                    <View style={{ alignItems: "center" }}>
                        <CustomButton text="Get Started"
                            onPress={() => {
                                props.navigation.navigate(ROUTES_NAMES.signup)

                            }}

                            isFilled isFullWidth={false} />

                        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                            <Text style={styles.text}>
                                Already have anaccount?
                            </Text>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate(ROUTES_NAMES.login)
                            }}>
                                <Text style={[styles.text, { marginLeft: 10, color: "#4E148C", fontWeight: "700" }]}>
                                    Log In
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            height: 6, backgroundColor: COLOR_PRIMARY,
                            width: "40%", borderRadius: 10, marginTop: 10
                        }} />
                    </View>



                </View>

            </ScrollView> */}

        </View>


    </>
    )
}









const styles = StyleSheet.create({
    cardContainer: {
        // width: 500,
        height: 200,
        // marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom:"5%"
      },
      cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      textTopLeft: {
        // backgroundColor: COLOR_PRIMARY,
        position: 'absolute',
        top: 0,
        left: 7,
        fontSize: 20,
        padding: "2%",
        color: 'white',
        fontWeight: "bold"
      },
      textBottomLeft: {
        // backgroundColor: COLOR_PRIMARY,
    
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: '#fff',
        fontSize: 20,
        padding: "2%",
        // color: 'white',
        fontWeight: "bold",
        zIndex:999
      },
    text: {
        textAlign: "center",
        fontFamily: 'Poppins-Medium',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
        color: "#000",
    },
    textHeading: {
        textAlign: "center",
        fontFamily: 'Poppins-Medium',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 36,
        color: "#000",
    },
    skipText: {
        fontFamily: 'Poppins-Medium',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 27,
        color: "#4E148C"
    },
});






export default SplashScreen