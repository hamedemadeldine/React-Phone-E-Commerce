import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import Context, { ProductConsumer } from '../Context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                { e => {
                                return e.products.map(product => {
                                    return <Product key={product.id} 
                                        product={product} />;
                                });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}