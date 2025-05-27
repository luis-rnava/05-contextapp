import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../../config/app-them';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const decrementBy = useCounterStore(state => state.decrementBy);
  const reset = useCounterStore(state => state.reset);

  useEffect(() => {
    navigation.setOptions({
      title: `Settings - Count: ${count}`,
    });
  }, [count]);
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Pressable onPress={() => incrementBy(1)} style={styles.primaryButton}>
        <Text>+1</Text>
      </Pressable>
      <Pressable onPress={() => decrementBy(1)} style={styles.primaryButton}>
        <Text>-1</Text>
      </Pressable>
      <Pressable onPress={reset} style={styles.primaryButton}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
};
