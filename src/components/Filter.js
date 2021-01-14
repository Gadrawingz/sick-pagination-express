import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order{" "}
          <select>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>

        <div className="filter-size">
          Filter{" "}
          <select>
            <option>ALL</option>
            <option value="XS">XSmall</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Xlarge</option>
          </select>
        </div>
      </div>
    );
  }
}
