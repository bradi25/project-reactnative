import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Shopcart from '../../assets/shopcart.png';

const Position = () => {
  return (
    <View style={styles.Wrapper}>
      <Text>Materi Postion</Text>
      <View style={styles.WrapperShopCart}>
        <Image source={Shopcart} style={styles.Shopcart} />
        <Text style={styles.CountNotification}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  WrapperShopCart: {
    borderWidth: 1,
    borderColor: '#4398d1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 30,
  },
  Shopcart: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '700',
    color: '#777777',
  },
  CountNotification: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 5,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default Position;
