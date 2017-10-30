import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { login } from '../actions';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen A</Text>
        <Text style={styles.instructions}>This is great</Text>
        <Button onPress={() => this.props.login()} title="Log in" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export default connect(null, { login })(Login);
