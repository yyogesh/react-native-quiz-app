import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions, Image } from 'react-native';
import { Box } from "../theme";
import Constants from 'expo-constants';
import { moderateScale, verticalScale } from "react-native-size-matters";
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
        </Box>
    </SafeAreaView>
)

export default Welcome;