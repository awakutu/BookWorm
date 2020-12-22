import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BookCount from "./components/BookCount";
import { Ionicons } from "@expo/vector-icons";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
    };
  }

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };

  hideAddNewBook = () => {
    this.setState({ isAddNewBookVisible: false });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View
          style={{
            height: 70,
            borderBottomWidth: 0.5,
            borderBottomColor: "#E9E9E9",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Book Worm</Text>
        </View>
        <View style={{ flex: 1 }}>
          {this.state.isAddNewBookVisible && (
            <View
              style={{
                height: 50,
                flexDirection: "row",
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  backgroundColor: "#ececec",
                  paddingLeft: 5,
                }}
                placeholder="Enter Book Name"
                placeholderTextColor="grey"
              />
              <TouchableOpacity>
                <View
                  style={{
                    width: 50,
                    backgroundColor: "#a5deba",
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="ios-checkmark" size={40} color="white" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.hideAddNewBook}>
                <View
                  style={{
                    width: 50,
                    backgroundColor: "#deada5",
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="ios-close" size={40} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            onPress={this.showAddNewBook}
            style={{ position: "absolute", bottom: 20, right: 20 }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#AAD1E6",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                }}
              >
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 70,
            flexDirection: "row",
            borderTopWidth: 0.5,
            borderTopColor: "#E9E9E9",
          }}
        >
          <BookCount count={this.state.totalCount} title="Total" />
          <BookCount count={this.state.readingCount} title="Reading" />
          <BookCount count={this.state.readCount} title="Read" />
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
