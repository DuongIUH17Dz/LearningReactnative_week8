import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';  // Import store từ Redux

import HomeScreen from './HomeScreen'; // Màn hình chính
import ProductScreen from './ProductScreen'; // Màn hình sản phẩm
import DetailPD from './DetailPD';  // Màn hình chi tiết sản phẩm
import AddProductScreen from './AddProductScreen'; // Màn hình thêm sản phẩm

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<Provider store={store}>  {/* Bao bọc toàn bộ ứng dụng với Provider */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Product" component={ProductScreen} />
  <Stack.Screen name="DetailPD" component={DetailPD} />
  <Stack.Screen name="AddProduct" component={AddProductScreen} />
</Stack.Navigator>
</NavigationContainer>
    </Provider>
  );
}
