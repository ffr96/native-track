import { Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRef, useEffect } from 'react';

export const Loading = ({
  loading,
  size = 20,
  color = 'black',
}: {
  loading: boolean;
  size?: number;
  color?: string;
}) => {
  const spin = useRef(new Animated.Value(0)).current;

  const doSpin = () => {
    Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        useNativeDriver: true,
        duration: 1000,
      })
    ).start();
  };

  useEffect(() => {
    doSpin();
  }, []);

  if (!loading) return null;
  return (
    <Animated.View
      style={{
        height: size + 10,
        width: size + 10,
        padding: 5,
        transform: [
          {
            rotate: spin.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}
    >
      <AntDesign name='loading1' size={size} color={color} />
    </Animated.View>
  );
};
