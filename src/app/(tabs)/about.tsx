import { StyleSheet, Text, View, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escuela Politécnica Nacional</Text>
      
      <Image 
        source={require('@/assets/images/imagen_epn.jpeg')} 
        style={styles.image}
      />
      
      <Text style={styles.sectionTitle}>Sobre la EPN</Text>
      
      <Text style={styles.paragraph}>
        La Escuela Politécnica Nacional es una institución pública 
        de educación superior de élite, referente en investigación científica, 
        innovación y formación tecnológica en el Ecuador.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A2B5C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28, // Evita que el texto toque los bordes laterales del teléfono
  },
  text: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,     
  },
  image: {
    width: '100%',         
    height: 190,
    borderRadius: 14,     
    marginBottom: 24,  
  },
  sectionTitle: {
    color: '#FFD700', 
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,    
    textAlign: 'center',
  },
  paragraph: {
    color: '#E0E0E0',
    fontSize: 14,
    lineHeight: 22,        
    textAlign: 'center',
  },
});