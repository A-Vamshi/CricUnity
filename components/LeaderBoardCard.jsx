import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from "../constants";

const LeaderBoardCard = ({rank, name, coins}) => {

  return (
    <View className="w-full mt-1 rounded-xl px-3 justify-center">
     <View className="m-2 ml-[-10px] bg-slate-700">
          <View className="flex-row">
               <View className="bg-slate-900 items-center w-10 mx-1">
                    <Text className="text-white font-bold text-lg">{rank}</Text>
               </View>
               <View className="bg-slate-800 items-center mx-1 justify-center w-48">
                    <Text className="text-white font-psemibold">{name}</Text>
               </View>
               <View className="bg-slate-800 w-30 mx-1 flex-row pr-1">
                    <Image 
                         source={icons.cricCoin} 
                         className="w-[20px] h-[20px] px-1 self-center m-2"
                         resizeMode="contain"
                    />
                    <Text className="text-white font-psemibold self-center px-2">{coins}</Text>
               </View>
          </View>
     </View>
    </View>
  )
}

export default LeaderBoardCard;