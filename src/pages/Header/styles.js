import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  background: #333;
  padding: 0 20px;
  border-bottom-color: #656565;
  border-bottom-width: 1;
  padding-top: 40px;
`;

export const Logo = styled.Image`
    height: 25px;
    width: 140px;
`;

export const CartButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    position: relative;
    width: 20px;
    height: 20px;
`;

export const Counter = styled.View`
    position: absolute;
    right: -8px;
    top: -9px;
    background: deeppink;
    color: #FFF;
    height: 16px;
    width: 16px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;
