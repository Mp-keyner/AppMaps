import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import BottomNav from './BottomNav';

const Layout = () => {
  return (
    <NavigationContainer>
      <View >
        <BottomNav />
        <Text>Layout</Text>
      </View>
    </NavigationContainer>
  );
}

export default Layout;



const styles = StyleSheet.create({
    Do: {
      // flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });