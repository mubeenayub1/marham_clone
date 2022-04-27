import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {Icon} from '@rneui/themed';
const Medicine = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#014e78'} />
      {/* header */}
      <View style={styles.headerConatiner}>
        <Pressable>
          <Image
            style={styles.headerImage}
            source={require('../../assets/profile1.jpg')}
          />
        </Pressable>
        <Text style={styles.headerText}>Medicine</Text>
        <Pressable style={styles.headerIcon}>
          <Icon name="bell" type="fontisto" color={'#014e78'} />
        </Pressable>
      </View>

      {/* search bar */}
      <View style={styles.searchBarContainer}>
        <Pressable style={styles.searchBarIcon}>
          <Icon name="search1" type="antdesign" color={'grey'} />
        </Pressable>
        <TextInput
          style={styles.searchBartext}
          placeholder="Search speciality "
        />
      </View>
      <View></View>
    </View>
  );
};
export default Medicine;
