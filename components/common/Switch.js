import React from 'react';
import { Switch } from 'react-native';

import { darkBlue } from '../../constants/Colors';

const SwitchCustom = ({
  value = false,
  onValueChange = () => null,
  trackColor = { false: 'grey', true: darkBlue }
}) => (
  <Switch value={value} onValueChange={onValueChange} trackColor={trackColor} />
);

export default SwitchCustom; // eslint-disable-line import/prefer-default-export