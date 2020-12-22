import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default class BookCount extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>{this.props.title}</Text>
        <Text>{this.props.count}</Text>
      </View>
    );
  }
}