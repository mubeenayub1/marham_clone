import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.colors.whiteColor,
    width: '100%',
    // alignItems: 'center',
  },
  headerConatiner: {
    height: (height / 100) * 8,
    width: (width / 100) * 100,
    backgroundColor: Theme.colors.whiteColor,
    borderBottomColor: Theme.colors.grayColor,
    borderBottomWidth: 0.5,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: Theme.fontFamily.bold,
    fontSize: Theme.fontSizes.big,
    fontWeight: '800',
    alignSelf: 'center',
    color: Theme.colors.primaryColor,
  },
  headerImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
  headerIcon: {
    // marginRight: moderateScale(2.5),
    width: moderateScale(70),
    backgroundColor: 'red',
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: '600',
  },
  locationContainer: {
    width: '90%',
    height: moderateScale(40),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginTop: moderateScale(15),
    borderBottomColor: '#cfd0d1',
    borderBottomWidth: 0.5,
    backgroundColor: Theme.colors.whiteColor,
  },

  locationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: '100%',
    justifyContent: 'space-between',
  },
  locationText: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.medium,
  },
  locationIcon: {
    width: '35%',
    // backgroundColor: Theme.colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  changelocationText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.medium,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  searchBarContainer: {
    width: '90%',
    height: moderateScale(50),
    borderRadius: moderateScale(5),
    // elevation: 2,
    marginVertical: moderateScale(10),
    flexDirection: 'row',
    marginHorizontal: '5%',
    backgroundColor: Theme.colors.whiteColor,
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    elevation: 5,
  },
  searchBartext: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.xmedium,
    width: '85%',
    paddingHorizontal: moderateScale(10),
  },
  searchBarIcon: {
    width: '15%',
    backgroundColor: Theme.colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  cardContainer: {
    height: moderateScale(200),
    width: '95%',
    marginHorizontal: '2.5%',
    elevation: 5,
    backgroundColor: Theme.colors.whiteColor,
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  imageContainer: {},
});
export default styles;
