import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../pages/Home/index";
import Room from "../pages/Room/index";
import Device from '../pages/Device/index'
import Register from "../pages/Register/index";
import Suggestions from "../pages/Suggestions/index";
import AddDevice from "../pages/AddDevice/index";
import Budget from "../pages/Budget/index";

const appDefaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "#0016a8",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const HomeStack = createStackNavigator(
  {
    Home: Home,
    Room: Room,
    Device: Device,
  },
  {
    defaultNavigationOptions: appDefaultNavigationOptions,
  }
);
const SuggestionsStack = createStackNavigator(
  {
    Suggestions: Suggestions,
  },
  {
    defaultNavigationOptions: appDefaultNavigationOptions,
  }
);
const RegisterStack = createStackNavigator(
  {
    Register: Register,
    AddDevice: AddDevice,
  },
  {
    defaultNavigationOptions: appDefaultNavigationOptions,
  }
);
const BudgetStack = createStackNavigator(
  {
    Budget: Budget,
  },
  {
    defaultNavigationOptions: appDefaultNavigationOptions,
  }
);

const TabNavigator = createMaterialBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarLabel: "Home",
      },
    },
    SuggestionsTab: {
      screen: SuggestionsStack,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-menu" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarLabel: "Suggestions",
      },
    },
    RegisterTab: {
      screen: RegisterStack,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-menu" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarLabel: "Register",
      },
    },
    BudgetTab: {
      screen: BudgetStack,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-menu" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarLabel: "Budget",
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "dodgerblue",
    },
    shifting: true,
    barStyle: { backgroundColor: "#0016a8" },
  }
);

export default createAppContainer(TabNavigator);
