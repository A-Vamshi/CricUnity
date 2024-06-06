import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';


const QuestionCard = ({question, handlePress1, handlePress2, option1, option2, doc}) => {
     const yes = doc?.yes;
     const no = doc?.no;
     const total = (yes?.length + no?.length)? (yes?.length + no?.length): 0;
     const yesP = yes?.length / (yes?.length + no?.length);
     const noP = no?.length / (yes?.length + no?.length);
  return (
    <View className="bg-primary space-y-2 my-2 rounded-xl w-80 self-center items-center">
     <Text className="text-white font-psemibold text-md mt-2">{question}</Text>
     <View className="justify-around flex-row space-x-4">
          <TouchableOpacity 
               className="bg-yes rounded-md min-h-[25px] min-w-[45px] items-center justify-center"
               activeOpacity={0.7}
               onPress={handlePress1}
          >
               <Text className="text-primary font-bold">{option1? option1 : "Yes" }</Text>
          </TouchableOpacity>
          <View className="justify-center"><Progress.Bar progress={yesP? yesP : 0} width={200} color="#42BD60" /></View>
     </View>
     <View className="justify-around flex-row space-x-4 mb-2">
          <TouchableOpacity 
               className="bg-app rounded-md min-h-[25px] min-w-[45px] items-center justify-center"
               activeOpacity={0.7}
               onPress={handlePress2}
          >
               <Text className="text-primary font-bold">{option2? option2 : "No"}</Text>
          </TouchableOpacity>
          <View className="justify-center"><Progress.Bar progress={noP? noP : 0} width={200} color="#FF1744" /></View>
     </View>
     <View className="justify-center mb-2"><Text className="text-white">Total votes: {total? total: 0}</Text></View>
    </View>
  )
}

export default QuestionCard;
//