
import {
  React,
  Text,
  StyleSheet,
  Image,
  View,

} from 'react-native';

const AppHeader = prop  => {
 
  return (

    <View style={{  backgroundColor:'green', justifyContent:'center', alignContent:'center', alignItems:'center',alignSelf:'center'}}>
   
      
        <Image
          resizeMode={'contain'}
          source={{uri:'https://fakeimg.pl/60/'}}
          style={{ height: 60, width: 60, borderRadius:30 ,backgroundColor:'red'}}
        />
      
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  titleText: {

    color: '#C7CFDB',
  },
  
});
