import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const QuestionCard = ({question, handlePress}) => {
  return (
    <View className="bg-primary space-y-2 my-2 rounded-xl w-80 self-center items-center">
     <Text className="text-white font-psemibold text-md mt-2">{question}</Text>
     <View className="justify-around flex-row space-x-4">
          <TouchableOpacity 
               className="bg-yes rounded-md min-h-[25px] min-w-[45px] items-center justify-center"
               activeOpacity={0.7}
               onPress={handlePress}
          >
               <Text className="text-primary font-bold">Yes</Text>
          </TouchableOpacity>
          <View className="justify-center"><Progress.Bar progress={0.8} width={200} color="#42BD60" /></View>
     </View>
     <View className="justify-around flex-row space-x-4 mb-2">
          <TouchableOpacity 
               className="bg-app rounded-md min-h-[25px] min-w-[45px] items-center justify-center"
               activeOpacity={0.7}
               onPress={handlePress}
          >
               <Text className="text-primary font-bold">No</Text>
          </TouchableOpacity>
          <View className="justify-center"><Progress.Bar progress={0.2} width={200} color="#FF1744" /></View>
     </View>
     <View className="justify-center mb-2"><Text className="text-white">Total votes: 23,745</Text></View>
    </View>
  )
}

export default QuestionCard