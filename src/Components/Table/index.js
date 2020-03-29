import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class EC2 {
  constructor(id,name,price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

var one = new EC2("id1","ec21","9");
var two = new EC2("id1","ec21","9");
var th = new EC2("id1","ec21","9");
const ec2s =[one,two,th];


class Table extends React.Component {
  render() {
    return (
      <BootstrapTable data={ ec2s }>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Table;
