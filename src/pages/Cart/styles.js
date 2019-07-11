import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background: #333;
    align-items: center;
`;

export const EmptyCart = styled.View`
    margin-top: 250px;
    align-items: center;
`;

export const EmptyCartMsg = styled.Text`
    color: grey;
    font-size: 20px;
    margin-top: 20px;
`;

export const ProductList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
    margin-top: 20px;
    flex: 1;
`;

export const Product = styled.View`
    background: #212121;
    border-radius: 10px;
    width: 300px;
    color: #FFF;
    margin: 10px auto;
    height: auto;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ProductTitle = styled.Text.attrs({
    numberOfLines: 1
})`
    margin-top: 20px;
    font-size: 18px;
    color: #FFF;
    text-align: center;
    width: 90%;
`;

export const Subtotal = styled.Text`
    color: #FFF;
    font-size: 30px;
    font-weight: 100;
    margin-top: 20px;
`;

export const AmountBtnLeft = styled.TouchableOpacity`
    background: deeppink;
    color: #FFF;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 100%;
    width: 30px;
`;

export const AmountBtnRight = styled.TouchableOpacity`
    background: deeppink;
    color: #FFF;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 100%;
    width: 30px;
`;

export const ProductMain = styled.View`
    justify-content: flex-start;
    flex: 1;
`;

export const ProductInfo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ProductRemove = styled.TouchableOpacity`
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ProductImageArea = styled.View`
    width: 100px;
    height: 100px;
    margin-top: 20px;
    position: relative;
`;

export const ProductImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

export const Counter = styled.View`
    width: 28px;
    height: 28px;
    border-radius: 14px;
    background: green;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -5;
    top: -5;
`;

export const TotalArea = styled.View`
    width: 100%;
    height: auto;
    border-top-color: grey;
    border-top-width: 1px;
    background: #212121;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
`;

export const Total = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
`;

export const Checkout = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;
