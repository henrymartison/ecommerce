import React from 'react';
import Modal from 'react-native-modal';

const CustomModal = ({
  isVisible = false,
  onModalShow = () => null,
  actionOpenClose = () => null,
  style = {},
  children = null
}) => (
  <Modal
    isVisible={isVisible}
    onModalShow={onModalShow}
    onBackdropPress={actionOpenClose}
    onBackButtonPress={actionOpenClose}
    hideModalContentWhileAnimating
    useNativeDriver
    backdropOpacity={0.5}
    style={style}
  >
    {children}
  </Modal>
);

export default CustomModal; // eslint-disable-line import/prefer-default-export