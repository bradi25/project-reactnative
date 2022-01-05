import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import gambar from './assets/macbook_pro2.jpg';
import ProjekPertama from './ProjectPertama';

const App = () => {
  return (
    <View>
      <ScrollView>
        <ProjekPertama />
        <StylingNativeComponent />
      </ScrollView>
    </View>
  );
};

const StylingNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          borderColor: '#81ECEC',
          backgroundColor: '#81ECEC',
          borderWidth: 2,
          margin: 20,
        }}
      />
      <View style={styles.container}>
        <Image source={gambar} style={styles.imagesCard} />
        <Text style={styles.title}>New Macbook Pro</Text>
        <Text style={styles.price}>Rp. 25.000.000</Text>
        <Text style={styles.lokasi}>Jakarta Barat</Text>
        <View style={styles.button}>
          <Text style={styles.textButton}>Beli</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
    margin: 10,
  },
  imagesCard: {width: 188, height: 107, borderRadius: 8},
  title: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    color: '#F2994A',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 16,
  },
  lokasi: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  button: {
    marginTop: 5,
    paddingVertical: 6,
    backgroundColor: '#6FCF97',
    borderRadius: 25,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
