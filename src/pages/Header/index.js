import React from 'react';
import {connect} from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import logo from '../../assets/images/logo_alt2.png'

import { Container, Logo, CartButton, Counter } from './styles';

function Header({cartSize, navigation}){

    const handleNavigate = (page) => {
        navigation.navigate(page);
    }

    return (
        <Container>
            <View style={{width: 30, height: 20}}/>
            <TouchableOpacity onPress={() => handleNavigate('Main')}>
                <Logo source={logo}/>
            </TouchableOpacity>
            <CartButton onPress={() => handleNavigate('Cart')}>
                <Icon name="shopping-cart" size={20} color="#FFF"/>
                <Counter><Text style={{color: '#FFF', fontSize: 12}}>{cartSize}</Text></Counter>
            </CartButton>
        </Container>
    )
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(state => ({
    cartSize: state.cart.length
  }))(Header)
