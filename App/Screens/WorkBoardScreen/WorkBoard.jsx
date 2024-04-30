import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../HomeScreen/Header'
import Categories from '../HomeScreen/Categories'
import { ScrollView } from 'react-native'

export default function WorkBoard() {
  return (
    <ScrollView>
      {/* Header  */}
      <Header/>

      <View style={{padding:20, marginTop:20}}>
        <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Button 2</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.button3}>
            <Text style={styles.buttonText}>Button 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}>
            <Text style={styles.buttonText}>Button 4</Text>
            </TouchableOpacity>
        </View>
        </View>

        <Categories/>  
      </View>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    button1: {
      width: '45%',
      height: 150 ,
      backgroundColor: '#A563D9',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: '3%',
      marginVertical: '0%',
      borderRadius: '30%',
      borderTopLeftRadius: '150%'
    },
    button2: {
        width: '45%',
        height: 150 ,
        backgroundColor: '#A563D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '3%',
        marginVertical: '0%',
        borderRadius: '30%',
        borderTopRightRadius: '150%'
      },
      button3: {
        width: '45%',
        height: 150 ,
        backgroundColor: '#A563D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '3%',
        marginVertical: '0%',
        borderRadius: '30%',
        borderBottomLeftRadius: '150%'
      },
      button4: {
        width: '45%',
        height: 150 ,
        backgroundColor: '#A563D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '3%',
        marginVertical: '0%',
        borderRadius: '30%',
        borderBottomRightRadius: '150%'
      },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });