import React, { Component } from 'react';
import ProductItem from './../../components/ProductItem/ProductItem';
import ProductList from './../../components/ProductList/ProductList';
import { connect } from 'react-redux';
import CallApi from '../../Utils/ApiCaller';
import { Link } from 'react-router-dom'


class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        CallApi('products', 'GET', null).then(res => {
            this.setState({
                products: res.data,
            })
        })
    }

    onDelete = (id) => {
        var { products } = this.state;

        CallApi(`products/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) {
                var index = this.findIndex(products, id);
                // console.log(index)
                if (index !== -1) {
                    products.splice(index, 1);
                    this.setState({
                        products: products
                    })
                }
            }
        })
    }
    findIndex = (products, id) => {
        var result = -1;
        products.map((element, index) => {
            if (element.id === id) {
                result = index
            }
        });
        return result
    }
    render() {
        // var {products}=this.props
        var { products } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <Link to='/product/add' className="btn btn-primary"> Thêm Sản Phẩm</Link>
                        <ProductList>
                            {this.ShowProduct(products)}
                        </ProductList>
                    </div>
                </div>
            </div>
        );
    }
    ShowProduct = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                />
            })
        }
        return result;
    }
}

export default ProductListPage;