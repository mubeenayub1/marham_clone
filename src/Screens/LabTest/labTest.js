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

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const LabTest = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#014e78'} />
      {/* header */}
      <View style={styles.headerConatiner}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrowleft" type="antdesign" color={'#014e78'} />
        </Pressable>
        <Text style={styles.headerText}>Book Lab Test</Text>
        <Pressable style={styles.headerIcon}>
          <Text style={styles.headerIconText}>Help?</Text>
        </Pressable>
      </View>

      {/* location container */}
      <View style={styles.locationContainer}>
        <View style={styles.locationTextContainer}>
          <Icon name="marker" type="foundation" color={'#014e78'} />
          <Text style={styles.locationText}>Pakistan</Text>
        </View>
        <Pressable style={styles.locationIcon}>
          {/* <Icon name="chevron-down" type="feather" color={'#014e78'} /> */}
          <Text style={styles.changelocationText}>Change location</Text>
        </Pressable>
      </View>

      {/* search bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBartext}
          placeholder="Search Test (CBC, CT Scan etc) "
        />
        <Pressable style={styles.searchBarIcon}>
          <Icon name="search1" type="antdesign" color={'grey'} />
        </Pressable>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}></View>
      </View>
    </View>
  );
};
export default LabTest;
