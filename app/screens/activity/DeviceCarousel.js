import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
  Animated,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const {width} = Dimensions.get('screen');

function DeviceCarousel(props) {
  const [ready, setReady] = useState(false);
  const [carouselOpacity] = useState(new Animated.Value(0));

  const init = () => {
    setReady(true);
    Animated.timing(carouselOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    init();
    return () => {};
  });

  const renderCarouselItems = ({item, index}) => (
    <TouchableOpacity activeOpacity={1} onPress={() => {}}>
      <View style={{backgroundColor: '#958a85'}}>
        <Image style={styles.image} source={item.src} />
        <View
          style={{
            paddingLeft: 20,
            paddingBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'white',
            }}>
            {item.recentSuccess}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#c6c9ca',
            }}>
            {item.execStatus}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.display, {opacity: carouselOpacity}]}>
        {props.images.length > 1 && ready ? (
          <Carousel
            data={props.images}
            slideStyle={styles.carousel}
            sliderWidth={width}
            itemWidth={width - 195}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.9}
            renderItem={renderCarouselItems}
          />
        ) : (
          <View style={{paddingHorizontal: 0}}>
            <TouchableOpacity activeOpacity={1} onPress={() => {}}>
              <Image
                style={styles.image}
                source={require('../../assets/device_nimble.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
}

DeviceCarousel.propTypes = {
  images: PropTypes.array,
};

DeviceCarousel.defaultProps = {
  images: [],
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#756a65',
    padding: 12,
    width: '100%',
  },
  display: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 10,
    height: 180,
    width: 220,
    padding: 0,
  },
});

export default DeviceCarousel;
