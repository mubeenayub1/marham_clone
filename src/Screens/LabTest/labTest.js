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
      <ScrollView
        contentContainerStyle={{marginBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>20% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>Chughtai Lab</Text>
              <Text style={styles.detailText}>9:00 AM - 9:00 PM</Text>
              <Text style={styles.detailText}>Available branches:284</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>15% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>Dr. Essa's Laboratory</Text>
              <Text style={styles.detailText}>8:00 AM - 8:00 PM</Text>
              <Text style={styles.detailText}>Available branches:20</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>15% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>Citilab and Rearch Center</Text>
              <Text style={styles.detailText}>9:00 AM - 9:00 PM</Text>
              <Text style={styles.detailText}>Available branches:72</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>20% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>CLINILAB</Text>
              <Text style={styles.detailText}>12:00 AM - 12:00 PM</Text>
              <Text style={styles.detailText}>Available branches:3</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>20% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>One Health Lab</Text>
              <Text style={styles.detailText}>9:00 AM - 9:00 PM</Text>
              <Text style={styles.detailText}>Available branches:7</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>15% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>Alnoor Diagnostic Center</Text>
              <Text style={styles.detailText}>9:00 AM - 9:00 PM</Text>
              <Text style={styles.detailText}>Available branches:1</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>20% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>Capital Medical Lab</Text>
              <Text style={styles.detailText}>9:00 AM - 9:00 PM</Text>
              <Text style={styles.detailText}>Available branches:1</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>10% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>Mughal Diagnostic Lab</Text>
              <Text style={styles.detailText}>8:00 AM - 8:00 PM</Text>
              <Text style={styles.detailText}>Available branches:20</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>20% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>Metropole Laboratories</Text>
              <Text style={styles.detailText}>8:00 AM - 8:00 PM</Text>
              <Text style={styles.detailText}>Available branches:1</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>25% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>Pride Lab</Text>
              <Text style={styles.detailText}>9:00 AM - 9:00 PM</Text>
              <Text style={styles.detailText}>Available branches:1</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.offtextcontainer}>
            <Text style={styles.offtext}>20% off</Text>
          </View>
          <View style={styles.wholeContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/lab.png')}
                style={styles.cardimage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>Pro Lab Diagnostic Center</Text>
              <Text style={styles.detailText}>8:00 AM - 11:00 PM</Text>
              <Text style={styles.detailText}>Available branches:1</Text>
            </View>
          </View>
          <View style={styles.wholeButtonContainer}>
            <Pressable
              style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: '#014e78'}]}>
                View Profile
              </Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Select Tests</Text>
            </Pressable>
          </View>
        </View>
        <View style={{height: 30}}></View>
      </ScrollView>
    </View>
  );
};
export default LabTest;
