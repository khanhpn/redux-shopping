import React, { Component } from 'react'
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from '../actions/index';

class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      <Products>
        {this.showProducts(products)}
      </Products>
    )
  }

  showProducts(products) {
    var { onAddToCart, onChangeMessage } = this.props;
    var results = null;
    if (products.length > 0) {
      results = products.map((product, index) => {
        return <Product product={product} key={index} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
      });
    }
    return results;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
