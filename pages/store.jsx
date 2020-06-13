import React from 'react';
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import Menu from "../components/menu/Menu"
import Client from 'shopify-buy'
import Cart from '../components/shopify/Cart'
import { Provider } from 'react-redux';
import store from '../components/store';
import Products from '../components/shopify/Products';

const client = Client.buildClient({
  storefrontAccessToken: '2a6e3bfb99429c40f650581ec954bc19',
  domain: 'hemp-house-supply.myshopify.com'
}); 

class Store extends React.Component {

    constructor(props) {
       super(props);

       this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
       this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
       this.handleCartClose = this.handleCartClose.bind(this);
       this.addVariantToCart = this.addVariantToCart.bind(this);


       store.dispatch({type: 'CLIENT_CREATED', payload: client});

    }

    updateQuantityInCart(lineItemId, quantity) {
        const state = store.getState(); // state from redux store
        const checkoutId = state.checkout.id
        const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
        state.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
          store.dispatch({type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: res}});
        });
    }

    removeLineItemInCart(lineItemId) {
      const state = store.getState(); // state from redux store
      const checkoutId = state.checkout.id
      state.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
        store.dispatch({type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: res}});
      });
    }

    handleCartClose() {
      store.dispatch({type: 'CLOSE_CART'});
    }

    handleCartOpen() {
      store.dispatch({type: 'OPEN_CART'});
    }

    addVariantToCart(variantId, quantity) {
      const state = store.getState(); // state from redux store
      const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
      const checkoutId = state.checkout.id
      state.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
        store.dispatch({type: 'ADD_VARIANT_TO_CART', payload: {isCartOpen: true, checkout: res}});
        });
    }

    render() {

        const state = store.getState();
        const { checkout, isCartOpen } = state;

        return(
        <Container className="lg-container">
         <Provider store={store}>
          {/* <IntlProvider locale={locale} messages={flattenMessages(messages[locale.substring(0, 2)])}> */}
            <Head>
                <title>ReactJS with react-bootstrap</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <Menu></Menu>

            <Container>
                <p>This is the Store page still.</p>
                <div className="service-content-one">
                 <div className="row">
                  <Products/>
                 </div>{/*/.row*/}
                </div>{/*/.service-content-one*/}
            </Container>
            <Cart
               checkout={checkout}
               isCartOpen={isCartOpen}
               handleCartClose={this.handleCartClose}
               updateQuantityInCart={this.updateQuantityInCart}
               removeLineItemInCart={this.removeLineItemInCart}
            />
          {/* </IntlProvider> */}
         </Provider>
        </Container>
        );
    }
}

export default Store;


