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
const Doctor = ({navigation}) => {
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
        <Text style={styles.headerText}>Choose speciality</Text>
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
          <Icon name="chevron-down" type="feather" color={'#014e78'} />
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

      <View style={styles.scrollComponentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.componentheaderContainer}>
            <Text style={styles.componentheaderText}>Top Specialities</Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Urologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                نظام اخراج کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>413 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Dermatologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                امراض جلد کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>872 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Psychiastrist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                ماہر نفسیات (ڈاکٹر)
              </Text>
              <Text style={styles.carddetailText}>461 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Urologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                نظام اخراج کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>413 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Gastroenterologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                معدے کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>474 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.componentheaderContainer2}>
            <Text style={styles.componentheaderText}>
              All Specialities(A - Z)
            </Text>
            <Text style={styles.componentheaderText2}>
              5000+ verified Doctors
            </Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Acupuncture</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>9 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Allergy specialist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>14 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Andrologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>9 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Anesthetist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>45 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Audiologist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>39 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>
                Bariatric / Weight Loss Surgeon
              </Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>14 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Cancer Specialist</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>13 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Cardiac Surgeon</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>122 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>
                Cardiothoracic Anesthetist
              </Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                معدے کے سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>1 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Pressable style={styles.imageContainer}></Pressable>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardheadingText}>Chest Surgeon</Text>
              <Text style={[styles.cardheadingText, {color: 'green'}]}>
                سپیشلسٹ ڈاکٹر
              </Text>
              <Text style={styles.carddetailText}>6 Doctor Available</Text>
            </View>
            <Pressable style={styles.cardIcon}>
              <Icon name="right" type="antdesign" color={'green'} />
            </Pressable>
          </View>
          <View style={{height: 100}}></View>
        </ScrollView>
      </View>
    </View>
  );
};
export default Doctor;
