import React from "react";
import { StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import theme, { Box, Text } from "../theme";
import Constants from 'expo-constants';
import { moderateScale, verticalScale } from "react-native-size-matters";
import Animation from 'react-native-reanimated';
import { StatusBar } from "expo-status-bar"
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Button } from '../../Utils'

const { height, width } = Dimensions.get("window");

export const welcomeAssets = require('../../../assets/images/boygirl.png');

import { OnBoardingRoutes } from "../Navigation";
import { AppStackRoutes } from "../../../App";

interface WelcomeProps {
    navigation: CompositeNavigationProp<StackNavigationProp<OnBoardingRoutes, "Welcome">,
        StackNavigationProp<AppStackRoutes, "Question">>
}

const Welcome = ({ navigation }: WelcomeProps) => (
    <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
        <Box flex={1} backgroundColor="white" justifyContent="flex-start">
            <Box height={height * 0.5} justifyContent="center" alignContent="center">
                <Box height={verticalScale(250)}
                    backgroundColor="white" padding="m" justifyContent="center">
                    <Image source={welcomeAssets} style={{ flex: 1 }} resizeMode="contain" />
                </Box>
            </Box>
            <Animation.View style={{
                backgroundColor: theme.colors['primary'],
                height: 500 + height,
                width: width * 2,
                borderRadius: 1000,
                position: "absolute",
                alignSelf: "center",
                top: 0.52 * height
            }} />
            <Animation.View style={{
                backgroundColor: theme.colors['primary'],
                height: height * 0.35,
                width: width,
                position: "absolute",
                bottom: 0,
                alignSelf: "center",
                padding: 20,
                alignItems: "center"
            }}>
                <Text variant="title" marginBottom="m" textAlign="center">
                    Quiz App
                </Text>
                <Text variant="body" color="white" marginBottom="m" textAlign="center">
                    Imporve your app building skills and upgrade your personal growth
                </Text>
                <Button variant="primary" label="Start Quiz" onPress={() => { navigation.navigate("Question") }} textTransform="uppercase" />
            </Animation.View>
        </Box>
        <StatusBar backgroundColor={theme.colors["primary"]} style="light" />
    </SafeAreaView>
)

export default Welcome;