import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from './slice';  // Import action addProduct từ Redux

const AddProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  // State để lưu thông tin sản phẩm nhập từ người dùng
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  // Hàm xử lý khi người dùng nhấn vào nút "Add Product"
  const handleAddProduct = () => {
    if (!name || !price || !image) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    // Tạo đối tượng sản phẩm mới từ thông tin người dùng nhập
    const newProduct = {
      id: Math.random().toString(), // Tạo id ngẫu nhiên cho sản phẩm mới
      name,
      price,
      image,
    };

    // Dispatch action để thêm sản phẩm vào Redux store
    dispatch(addProduct(newProduct));

    // Sau khi thêm sản phẩm thành công, điều hướng về màn hình Product
    navigation.navigate('Product');

    // Reset form input
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Product</Text>

      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric" // Để người dùng nhập số cho giá
      />

      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

// Style cho AddProductScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddProductScreen;
