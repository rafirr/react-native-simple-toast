import {NativeModules,ToastAndroid,Platform} from 'react-native';

var RCTToastAndroid = Platform.OS === 'android' ? ToastAndroid : NativeModules.LRDRCTSimpleToast;

var SimpleToast = {
  // Toast duration constants
  SHORT: Platform.OS === 'android' ? RCTToastAndroid.SHORT : 0,
  LONG: Platform.OS === 'android' ? RCTToastAndroid.LONG : 1,

  // Toast gravity constants
  TOP: Platform.OS === 'android' ? RCTToastAndroid.TOP : 49,
  BOTTOM: Platform.OS === 'android' ? RCTToastAndroid.BOTTOM : 81,
  CENTER: Platform.OS === 'android' ? RCTToastAndroid.CENTER : 17,

  show: function (
    message,
    duration
  ) {
    RCTToastAndroid.show(message, duration === undefined ? this.SHORT : duration);
  },

  showWithGravity: function (
    message,
    duration,
    gravity,
  ) {
    RCTToastAndroid.showWithGravity(message, duration === undefined ? this.SHORT : duration, gravity);
  },
};

export default SimpleToast;
