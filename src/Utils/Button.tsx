import React from "react";
import { ReactButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useTheme } from '@shopify/restyle';
import { Theme, Text } from "../components/theme"

interface ButtonProps {
    variant?: "default" | "primary";
    label?: string;
    onPress?: () => void;
    textTransform?: any;
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    }
})