import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ProductItem extends Component {
    onDelete=(id)=>{
        this.props.onDelete(id)
    }
    render() {
        var { product, index } = this.props;
        var ShowStatus = product.status ? 'Còn Hàng' : 'Hết Hàng'
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className="label label-warning">{ShowStatus}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}`} className="btn btn-success mr10" > Sửa</Link>
                    <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(product.id)}> Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;