import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DetailPD = ({ route }) => {
  const { product } = route.params;
  const originalPrice = parseFloat(product.price.replace('$', '')); // Loại bỏ dấu $ và chuyển sang số
  const discountedPrice = (originalPrice * 0.85).toFixed(2); // Tính giá giảm

  const [isFavorite, setIsFavorite] = useState(false); // Trạng thái yêu thích
  const toggleFavorite = () => setIsFavorite(!isFavorite); // Chuyển trạng thái yêu thích

  return (
    <View style={styles.container}>
      {/* Hình ảnh sản phẩm */}
      <Image source={product.image} style={styles.productImage} />

      {/* Tên sản phẩm */}
      <Text style={styles.productName}>{product.name}</Text>

      {/* Giá giảm và giá gốc */}
      <View style={styles.priceContainer}>
        <Text style={styles.discountedPrice}>${discountedPrice}</Text>
        <Text style={styles.originalPrice}>{product.price}</Text>
      </View>

      {/* Mô tả sản phẩm */}
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>
        It is a very important form of writing as{'\n'}
        we write almost everything in{'\n'}
        paragraphs, be it an answer, essay, story,{'\n'}
        emails, etc.
      </Text>

      {/* Các hành động yêu thích và thêm vào giỏ hàng */}
      <View style={styles.actionsContainer}>
        {/* Yêu thích */}
        <TouchableOpacity onPress={toggleFavorite}>
          <Text style={[styles.favoriteIcon, { color: isFavorite ? 'red' : 'gray' }]}>
            ♥
          </Text>
        </TouchableOpacity>

        {/* Thêm vào giỏ hàng */}
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain', // Đảm bảo hình ảnh không bị vỡ
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  discountedPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  originalPrice: {
    fontSize: 18,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  favoriteIcon: {
    fontSize: 40,
    marginRight: 30,
  },
  addToCartButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DetailPD;
