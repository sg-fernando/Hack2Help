import React from "react";
import { View, Text, Image, TextInput, StyleSheet, Pressable } from "react-native";

import ViewModelInstance from '../ViewModel';

import { COLORS, FONTS, SIZES, assets } from "../constants";

const FriendsHeader = ({onSearch, index}) => {

    let friendTextComponent;
    let groupTextComponent;
    if (index === 0) {
        friendTextComponent = <View style={styles.notSelected}><Text>My Friends</Text></View>;
        groupTextComponent = <View style={styles.selected}><Text>Groups/Organizations</Text></View>;
    } else {
        friendTextComponent = <View style={styles.selected}><Text>My Friends</Text></View>;
        groupTextComponent = <View style={styles.notSelected}><Text>Groups/Organizations</Text></View>;
    }

  return (
    <View style={styles.container}>
        <View style={styles.spacing}>
            <Pressable onPress={() => ViewModelInstance.FriendListRef.scrollToIndex({
                animated: true,
                index: 0,
                viewPosition: 0
            })}>
                {groupTextComponent}
            </Pressable>
            <Pressable onPress={() => ViewModelInstance.FriendListRef.scrollToIndex({
                animated: true,
                index: 1,
                viewPosition: 0
            })}>
                {friendTextComponent}
            </Pressable>
        </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.searchBar}>
          <Image
            source={assets.search2}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.navbar,
    padding: SIZES.font,
    height: 120,
  },
  spacing: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15,
  },
  selected: {
    backgroundColor: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.black,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.font,
  },
  notSelected: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    paddingHorizontal: SIZES.base,
    color: COLORS.white,
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },
  searchBar: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  }

});

export default FriendsHeader;
