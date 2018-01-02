import React, { Component } from 'react';
import * as messages from '../constants/Message';


class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }
  render() {
    var { item } = this.props;
    var {quantity} = item.quantity > 0 ? item : this.state;
    return (
      <tr>
        <th scope="row">
          <img src={item.product.image} alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}><a>—</a></label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}><a>+</a></label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item" onClick={() => this.onDelete(item.product)}>X</button>
        </td>
      </tr>
    )
  }

  onUpdateQuantity = (product, quantity) => {
    var { onUpdateProductInCart } = this.props;
    if(quantity > 0) {
      this.setState({
        quantity
      });
      onUpdateProductInCart(product, quantity);
    }
  }

  showSubTotal(price, quantity) {
    return price * quantity;
  }

  onDelete = (product) => {
    var {onDeleteProductInCart, onChangeMessage} = this.props;
    this.props.onDeleteProductInCart(product);
    onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART);
  }
}
export default CartItem;
