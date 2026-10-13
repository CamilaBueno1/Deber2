import { StyleSheet, Text, View,Image } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escuela Politecnica Nacional-EPN</Text>
      <Image source={require('@/assets/images/imagen_epn.jpeg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A2B5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  Image:{
    justifyContent:'center',
    flex: 1,
  }
});