import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const ip = "http://192.168.43.75:3000/openai/"

  

  const [img,setimg] = useState(ip+"iron");
  const [txt,settxt] = useState(ip);

  const [ld,setld] = useState(false);





  const searchbtn = () =>{

    setimg(ip+txt)
  }


  return (
    <View style={styles.container}>

      <Modal visible={ld} >
      <View style={{alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
        <Image source={require("../gd/assets/lding.gif")} style={{alignItems:'center',justifyContent:'center'}} />

      </View>
      </Modal>
      <Image source={require("./assets/bg.jpg")} resizeMode="cover" style={styles.bg}/>
      <View style={styles.header}>
      <Image source={require("./assets/img.png")} style={styles.cam} />
      </View>

      <View style={[styles.header,{justifyContent:'space-evenly',height:'auto'}]}>
      <TextInput placeholder='UnderWater City' style={styles.searchbar} onChangeText={text=> settxt(text) } />
      <TouchableOpacity onPress={searchbtn}>
      <Image source={require("./assets/search.png")} style={styles.searchbtn}  />
      </TouchableOpacity>
      </View>



      <View style={styles.otp}>
      <Image source={require("../gd/assets/lding.gif")} style={{alignItems:'center',justifyContent:'center',width:100,height:100,position:'absolute',alignSelf:'center'}} />
      <Image style={{flex:1,borderRadius:15}} source={{uri:img}} resizeMode="cover" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4335E',
    alignItems: 'center',

  },
  bg:{
    width:"100%",
    height:'100%',
    position:'absolute'
  },
  header:{
    width:'100%',
    height:100,
    flexDirection:'row'
  },
  searchbar:{
    width:'80%',
    height:50,
    backgroundColor:"#8E7B72",
    borderRadius:20,
    borderWidth:5,
    borderColor:'black',
    color:'white',
    paddingLeft:50
  },
  cam:{
    width:80,
    height:80,
  },
  otp:{
    width:"98%",
    height:"55%",
    borderColor:'#8E7B72',
    marginTop:30,
    borderRadius:20,
    borderWidth:5,
    backgroundColor:'white'
  },
  searchbtn:{
    width:50,
    height:50,
    backgroundColor:'white',
    borderRadius:50,
    elevation:5,
    borderWidth:3,
    borderColor:'black'
  }
});
