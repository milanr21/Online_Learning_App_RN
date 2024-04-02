import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Colors from './../Shared/Color';

export default function Login() {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const animatedStyle = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.mainText, animatedStyle]}>
        Coursdemy
      </Animated.Text>
      <View style={styles.imageContainer}>
        <Image
          accessibilityLabel='Login Image'
          style={{
            height: 400,
            width: 400,
          }}
          source={require('./../Assets/Images/login.jpg')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Login pressed')}
        >
          <AntDesign name='login' size={24} color='white' />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Sign Up pressed')}
        >
          <Entypo name='google--with-circle' size={24} color='white' />
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'flex-start',
  },
  mainText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 8,
    color: '#FF6F61',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginLeft: 10,
    letterSpacing: 2,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
});
