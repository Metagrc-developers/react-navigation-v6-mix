import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

var {width} = Dimensions.get('window');
const Header = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-outline" size={40} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Meta GRC(Pvt.) Ltd</Text>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: '#7b68ee',
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    width: width - 80,
    height: width / 7 - 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    position: 'relative',
  },
});
