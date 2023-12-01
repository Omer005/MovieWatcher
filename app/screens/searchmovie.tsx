import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CustomTextInput from '../components/input'
import search from '../assets/images/search.png';

const searchmovie = () => {
  return (
    <View>
      <View style={{position: 'relative', paddingVertical: 20}}>
        <CustomTextInput
          PadLeft={35}
          BorRad={25}
          placeholder="Search"
          title="Enter Email"
          leftAlign={true}
        />
        <Image
          style={{position: 'absolute', top: 35, left: 8}}
          source={search}
        />
      </View>
    </View>
  )
}

export default searchmovie

const styles = StyleSheet.create({})