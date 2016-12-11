import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm.js';


class EmployeeEdit extends Component {
  componentWillMount() {
    console.log('Employee Edit #componentWillMount firing');

    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    console.log(this.props.name, this.props.phone, this.props.shift);
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
