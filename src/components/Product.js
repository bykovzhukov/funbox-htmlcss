import React, { Component } from 'react';
import Cat from '../img/cat.png';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.product = props.product;

    this.state = {
      hovered: false,
      selected: props.product.selected,
      disabled: props.product.disabled,
    };

    this.click = this.click.bind(this);
    this.over = this.over.bind(this);
    this.out = this.out.bind(this);
  }

  click() {
    if (!this.state.disabled) {
      this.setState({
        hovered: false,
        selected: !this.state.selected
      });
    }
  }

  over(e) {
    if (!this.state.disabled) {
      this.setState({
        hovered: true
      });
    }
  }

  out(e) {
    if (!this.state.disabled) {
      this.setState({
        hovered: false,
      });
    }
  }

  render() {
    let productClassName = "product";
    let caption;

    if (this.state.disabled) {
      productClassName += " is-disabled";

      caption = <div className="product__caption product__caption--disabled">Печалька, {this.product.subtitle} закончился.</div>;
    } else {

      productClassName += this.state.hovered ? " is-hovered" : "";
      productClassName += this.state.selected ? " is-selected" : "";

      caption = this.state.selected ? <div className="product__caption">{this.product.caption}</div>
        : <div className="product__caption">Чего сидишь? Порадуй котэ, <span className="product__caption-color"><span onClick={this.click} className="product__caption-dashed">купи</span>.</span></div>;
    }

    const headline = this.state.selected && this.state.hovered ? <div className="product__headline product__headline--selected-hover">Котэ не одобряет?</div>
      : <div className="product__headline">{this.product.headline}</div>

    return (
      <div className={productClassName}>
        <div className="product__body" onClick={this.click} onMouseEnter={this.over} onMouseLeave={this.out}>
          <svg className="product__frame">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-frame"></use>
          </svg>
          <img src={Cat} alt="" className="product__img" />
          {headline}
          <h2 className="product__title">{this.product.title} <span>{this.product.subtitle}</span></h2>
          <div className="product__desc" dangerouslySetInnerHTML={{__html: this.product.description}} />
          <div className="product__size">{this.product.size} <span>кг</span></div>
        </div>
        <div className="product__bottom">{caption}</div>
      </div>
    );
  }
}
