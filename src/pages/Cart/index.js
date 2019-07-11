import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {formatPrice} from '../../util/format';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../Header';

import * as CartActions from '../../store/modules/cart/actions'

import {
    Container,
    EmptyCart,
    EmptyCartMsg,
    ProductList,
    Product,
    ProductImage,
    ProductTitle,
    Subtotal,
    AmountBtnLeft,
    AmountBtnRight,
    ProductMain,
    ProductInfo,
    ProductRemove,
    ProductImageArea,
    Counter,
    TotalArea,
    Total,
    Checkout
} from './styles';

function Cart({cart, total, removeFromCart, updateAmountRequest}) {

    function increment(product){
        updateAmountRequest(product.id, product.amount + 1)
    }

    function decrement(product){
        updateAmountRequest(product.id, product.amount - 1)
    }

    return cart.length ? (
        <Container>
            <ProductList
                data={cart}
                keyExtractor={product => String(product.id)}
                renderItem={({item}) => (
                    <Product>
                        <AmountBtnLeft onPress={() => decrement(item)}>
                            <Icon name="remove" color="#FFF" size={20}/>
                        </AmountBtnLeft>
                        <ProductMain>
                            <ProductInfo>
                                <ProductImageArea>
                                    <ProductImage
                                        source={{uri: item.image}}
                                    />
                                    <Counter>
                                        <Text style={{color: '#FFF', fontSize: 15}}>{item.amount}</Text>
                                    </Counter>
                                </ProductImageArea>
                                <ProductTitle>{item.title}</ProductTitle>
                                <Subtotal>{item.subTotal}</Subtotal>
                            </ProductInfo>
                            <ProductRemove onPress={() => removeFromCart(item.id)}>
                                <Icon name="delete-forever" color="#FFF" size={28}/>
                            </ProductRemove>
                        </ProductMain>
                        <AmountBtnRight onPress={() => increment(item)}>
                            <Icon name="add" color="#FFF" size={20}/>
                        </AmountBtnRight>
                    </Product>
                )}
            />
            <TotalArea>
                <Total>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight: '200'}}>Total</Text>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight: '200'}}>{total}</Text>
                </Total>
                <Checkout>
                    <Text style={{color: 'deeppink', fontSize: 20, fontWeight: 'bold'}}>Finalizar Compra</Text>
                </Checkout>
            </TotalArea>
        </Container>
    ) :
    <Container>
        <EmptyCart>
            <Icon name="remove-shopping-cart" size={100} color="#656565"/>
            <EmptyCartMsg>Não há itens no carrinho</EmptyCartMsg>
        </EmptyCart>
    </Container>
}

Cart.navigationOptions = {
    header: props => <Header {...props}/>
}

const mapStateToProps = state => ({
  cart: state.cart.map(p => ({
      ...p,
      subTotal: formatPrice(p.price * p.amount)
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + product.price * product.amount
  }, 0))
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart)


