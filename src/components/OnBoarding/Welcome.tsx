import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions, Image } from 'react-native';
import theme, { Box } from "../theme";
import Constants from 'expo-constants';
import { moderateScale, verticalScale } from "react-native-size-matters";
import Animation from 'react-native-reanimated';

const { height, width } = Dimensions.get("window");

export const welcomeAssets = require('../../../assets/images/boygirl.png');

const Welcome = () => (
    <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
        <Box flex={1} backgroundColor="white" justifyContent="flex-start">
            <Box height={height * 0.5} justifyContent="center" alignContent="center">
                <Box height={verticalScale(250)} width={moderateScale(250)}
                    backgroundColor="white" padding="m">
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
            }}>
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

                </Animation.View>
            </Animation.View>
        </Box>
    </SafeAreaView>
)

export default Welcome;