import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { logout } from '../actions';
import { connect } from 'react-redux';

class MainScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{'You are "logged in" right now'}</Text>
        <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        <Button title={'Log Out'} onPress={() => this.props.logout()} />
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
  }
});

export default connect(null, { logout })(MainScreen);
