import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>A premium online shop for</Text>
      <Text style={styles.subHeaderText}>sporters and their stylish choice</Text>
      <Image style={styles.image} source={require('./assets/Xe1.PNG')} />
      <Text style={styles.title}>POWER BIKE</Text>
      <Text style={styles.title}>SHOP</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Product')} // Điều hướng đến màn hình 'Product'
      >
        <Text style={styles.buttonText}>GET START</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Căn giữa nội dung trong View
    justifyContent: 'center', // Căn giữa theo chiều dọc
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: '15%',
    textAlign: 'center',
  },
  subHeaderText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: '7%',
    textAlign: 'center',
  },
  image: {
    width: '90%',
    height: '50%',
    marginBottom: '10%', // Tạo khoảng cách dưới ảnh
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: '20%',
    width: '80%',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold', // Sử dụng fontWeight thay vì fontStyle
    fontSize: 14,
  },
});

export default HomeScreen;
