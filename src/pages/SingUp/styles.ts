import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
`;

export const Title = styled.Text`
  margin: 64px 0 24px;
  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const BackToSignInButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-top-width: 1px;
  border-color: #232129;
  padding: 0 30px;
  padding: 16px 0 16px;
`;

export const BackToSignInButtonText = styled.Text`
  margin-left: 16px;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;
