import React, { useRef } from 'react'
import { Animated } from 'react-native';

export const useFade = () => {
    
    const opacity = useRef(new Animated.Value(0)).current;
    

    const fadeIn = (cb?:()=> void) => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true

      }).start(()=>cb?cb():null);
    };
  
    const fadeOut = (duration: number = 500) => {
      Animated.timing(opacity, {
        toValue: 0,
        duration,
        useNativeDriver: true
      }).start();
    };


    return {
        opacity,
        fadeIn,
        fadeOut
    }
}
