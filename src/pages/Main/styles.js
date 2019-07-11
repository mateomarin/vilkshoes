import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.View`
    background: #333;
    flex: 1;
`;

export const Product = styled.View`
    background: #212121;
    border-radius: 10px;
    width: 300px;
    color: #FFF;
    margin: 10px;
    height: 480px;
    padding: 30px;

    align-items: center;
    justify-content: flex-start;
`;

export const ProductImage = styled.Image`
    width: 250px;
    height: 250px;
    border-radius: 125px;
`;

export const ProductTitle = styled.Text.attrs({
    numberOfLines: 1
})`
    margin-top: 20px;
    font-size: 18px;
    color: #FFF;
    text-align: center;
`;

export const ProductPrice = styled.Text`
    margin-top: 20px;
    font-size: 30px;
    color: #FFF;
    text-align: center;
    margin-bottom: 15px;
    font-weight: 100;
`;

export const ProductAmount = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
`;

export const CartButton = styled.View`
    margin-top: 15px;
    background: deeppink;
    color: #212121;
    border-radius: 4px;
    height: 40px;
    width: 100%;
    overflow: hidden;

    flex-direction: row;
    align-items: center;
`;

export const CartButtonIcon = styled.View`
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
    background: rgba(0,0,0,0.2);
`;

export const CartButtonPress = styled.View`
    flex: 1;
    justify-content: center;
`;

export const ProductList = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true
})`
    margin-top: 20px;
    height: 400px;
`;
