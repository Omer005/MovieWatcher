import { StyleSheet, Text, View,Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Booking from "../assets/images/booking.png"
import SeatMap from "../assets/images/SeatMap.png"
import size from "../assets/images/size.png"
import { useRoute } from '@react-navigation/native'

const ticketsmaping = () => {
    const route = useRoute();
    const {movieInfo} = route.params;
  return (
    <View
    style={{flex:1,
    backgroundColor:'white'
    }}
    >
        <View
        style={{justifyContent:"center",alignItems:"center",paddingVertical:5, 
    }}
        >
        <Text 
        style={{color:"black",fontWeight:"bold", fontSize:20}}
        >{movieInfo?.title}</Text>
        <Text 
        style={{
        color:"#61C3F2"
    
    }}
        >{movieInfo?.release_date}</Text>
        </View>
        <View style={{marginTop:"15%"}}>
                    <Image source={SeatMap} />      
                    </View>
        <View style={{marginTop:"15%",paddingHorizontal:10}}>
                    <Image source={Booking} 
                    />      
                    </View>
        <View style={{marginTop:"15%",paddingHorizontal:10}}>
                    <Image source={size} />      
                    </View>
        <View style={{marginTop:"15%",paddingHorizontal:10,  flexDirection:"row",justifyContent:"space-evenly"}}>
                    <TouchableOpacity 
                    style={{backgroundColor:"#EFEFEF"}}
                    
                    >
                        <Text style={{color:"black"}}>Total Price</Text>
                        <Text style={{color:"black",fontWeight:"bold"}} >$ 60</Text>
                        </TouchableOpacity>   
                    <TouchableOpacity 
                    style={{backgroundColor:"#61C3F2", alignItems:"center",justifyContent:"center",borderRadius:10,paddingHorizontal:10}}
                    
                    >
                        <Text style={{color:"white",fontWeight:"bold",fontSize:18}}>Proceed To Pay</Text>
                        </TouchableOpacity>   
                    </View>
    </View>
  )
}

export default ticketsmaping

const styles = StyleSheet.create({})