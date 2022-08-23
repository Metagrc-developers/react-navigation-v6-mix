import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';

var {width} = Dimensions.get('window');

export default function Banner() {
  const [BannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      'https://www.metagrc.org/assets/imgs/index/Documents.jpg',
      'https://www.metagrc.org/assets/imgs/index/Trainings.jpg',
      'https://www.metagrc.org/assets/imgs/index/easyISO.jpg',
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.swiper}>
        <Swiper
          showButtons={false}
          autoplay={true}
          autoplayTimeout={4}
          style={{
            height: width / 2,
          }}>
          {BannerData.map(item => {
            return (
              <Image
                key={item}
                resizeMode="contain"
                source={{uri: item}}
                style={styles.banner}
              />
            );
          })}
        </Swiper>
        <View style={{height: 20}}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  swiper: {
    width: width,
    marginTop: '5%',
    alignItems: 'center',
  },
  banner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    //  marginHorizontal: 20,
  },
});
