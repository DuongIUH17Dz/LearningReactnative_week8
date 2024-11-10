import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './slice'; // Đảm bảo bạn import action fetchProducts từ Redux
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Lấy danh sách sản phẩm từ Redux store
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);

  // Lấy danh sách sản phẩm từ API khi màn hình được tải
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); // Đảm bảo fetch lại dữ liệu khi màn hình được load

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate('DetailPD', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The world's Best Bike</Text>

      {/* Button Container for Categories */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()} // Đảm bảo mỗi sản phẩm có key duy nhất
        numColumns={2} // Hiển thị sản phẩm trong 2 cột
        columnWrapperStyle={styles.columnWrapper}
      />

      {/* Footer with Add Product Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddProduct')} // Điều hướng tới màn hình thêm sản phẩm
        >
          <Text style={styles.addButtonText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'red',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
  },
  productContainer: {
    backgroundColor: '#FEF5EC',
    flex: 1,
    margin: 5,
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
    marginTop: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductScreen;
