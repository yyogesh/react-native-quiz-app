import React from 'react';
import theme, { Box, Text } from "../theme";
import QuizContainer from './QuizContainer';
import { Button } from '../../Utils'
import { StyleSheet, SafeAreaView, Dimensions, Image, View } from 'react-native';

interface QuestionProps {

}

const { height, width } = Dimensions.get("window");

const Question = ({ navigation }: QuestionProps) => {
    return (
        <QuizContainer>
            <Box flex={1}>
                <View>
                    <Text color="white">
                        Quiz Loading....
                   </Text>
                </View>
            </Box>
        </QuizContainer>
    )
}