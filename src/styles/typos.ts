import { Platform, TextStyle } from 'react-native';

import { colors } from './colors';
import { responsive } from './responsive';

const bold: TextStyle = {
  fontWeight: Platform.OS === 'ios' ? '700' : undefined,
  fontFamily: 'Roboto-Bold',
  color: colors.BLACK,
};
const regular: TextStyle = {
  fontFamily: 'Roboto-Regular',
  color: colors.BLACK,
  fontWeight: Platform.OS === 'ios' ? '400' : undefined,
};

export const typos = {
  lg: {
    regular: {
      ...regular,
      fontSize: responsive(72),
      lineHeight: responsive(84),
    },
    bold: { ...bold, fontSize: responsive(72), lineHeight: responsive(84) },
  },
  sm: {
    regular: {
      ...regular,
      fontSize: responsive(64),
      lineHeight: responsive(75),
    },
  },
};
