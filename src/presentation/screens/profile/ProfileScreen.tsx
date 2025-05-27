import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../../config/app-them';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProfileScreen </Text>
      <Text style={styles.title}>Name: {name}</Text>
      <Text style={styles.title}>Email: {email}</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          changeProfile('Luis Navarro', email);
        }}>
        <Text>Cambiar Nombre</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          changeProfile(name, 'luis.navarro@example.com');
        }}>
        <Text>Cambiar Email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          changeProfile('Jhon Doe', 'jhon.doe@example.com');
        }}>
        <Text>Regresar Jhon Doe</Text>
      </Pressable>
    </View>
  );
};
