import React, { Component } from 'react';
import CallApi from './../../Utils/ApiCaller';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }
    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.match.params.id;
            CallApi(`products/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            })
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;           
        this.setState({
            [name]: value
        })
    }
    onSave = (event) => {
        event.preventDefault();
        var { txtName, txtPrice, chkbStatus, id } = this.state;
        var { history,match } = this.props;
        console.log('111',txtName,txtPrice)
        if(txtName!==''&&txtPrice!==''){
            if (id) {
                CallApi(`products/${id}`, 'PUT', {
                    name: txtName,
                    price: txtPrice,
                    status: chkbStatus
                }).then(res => {
                    match.history.push('/product-list')
                })
            } else {
                CallApi('products', 'POST', {
                    name: txtName,
                    price: txtPrice,
                    status: chkbStatus
                }).then(res => {
                    history.history.push('/product-list')
                })
            }
        }
    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state
        return (
            <div className="col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên Sản Phẩm</label>
                        <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange} checked={chkbStatus} />
                            Còn Hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;