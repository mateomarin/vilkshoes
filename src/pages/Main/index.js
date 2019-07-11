import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button, ActivityIndicator } from 'react-native';
import api from '../../services/api';
import Header from '../Header';

import * as CartActions from '../../store/modules/cart/actions'

import { Container, ProductList, Product, ProductImage, ProductTitle, ProductPrice, CartButton, CartButtonIcon, ProductAmount, CartButtonPress } from './styles';
import { formatPrice } from '../../util/format';

class Main extends Component {
    // static navigationOptions = {
    //     headerTitle: <Image style={{ width: 140, height: 25 }} source={logo} />,
    //     headerRight: (
    //         <MaterialHeaderButtons>
    //             <Item title="" iconName="shopping-cart" show={this.props && !this.props.amount.length} onPress={() => {}} />
    //         </MaterialHeaderButtons>
    //     ),
    // };

    static navigationOptions = {
        header: props => <Header {...props}/>
    }

    state = {
        products: []
    };

    async componentDidMount() {
        const response = await api.get('products');
        const data = response.data.map(p => ({
            ...p,
            priceFormatted: formatPrice(p.price)
        }))
        this.setState({products: data})
    }

    handleAddProduct = id => {
        const {addToCartRequest} = this.props;
        addToCartRequest(id);
    }

    render() {
        const {products} = this.state;
        const {amount, loading} = this.props;
        console.tron.log('products', products);
        return (
            <Container>
                <ProductList
                    data={products}
                    keyExtractor={product => String(product.id)}
                    renderItem={({item}) => (
                        <Product>
                            <ProductImage
                                source={{uri: item.image}}
                            />
                            <ProductTitle>{item.title}</ProductTitle>
                            <ProductPrice>{item.priceFormatted}</ProductPrice>
                            <CartButton>
                                <CartButtonIcon>
                                    {loading[item.id] && <ActivityIndicator size="small" color="#FFF"/>}
                                    {!loading[item.id] && !amount[item.id] && <Icon name="add-shopping-cart" size={20} color="#FFF"/>}
                                    {!loading[item.id] && amount[item.id] && <ProductAmount>{amount[item.id]}</ProductAmount>}
                                </CartButtonIcon>
                                <CartButtonPress>
                                    <Button color="#FFF" title="Adicionar" onPress={() => this.handleAddProduct(item.id)}/>
                                </CartButtonPress>
                            </CartButton>
                        </Product>
                    )}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
    loading: state.cart.reduce((loading, product) => {
        loading[product.id] = product.loading;
        return loading;
    }, {})
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
