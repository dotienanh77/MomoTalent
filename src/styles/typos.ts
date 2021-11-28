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
      fontSize: responsive(18),
      lineHeight: responsive(18),
    },
    bold: { ...bold, fontSize: responsive(23), lineHeight: responsive(27) },
  },
  sm: {
    regular: {
      ...regular,
      fontSize: responsive(17),
      lineHeight: responsive(18),
    },
  },
};
