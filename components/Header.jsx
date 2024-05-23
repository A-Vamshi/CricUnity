import { View, Text } from 'react-native'
import React from 'react'

const header = () => {
  return (
    <View className="w-full mt-1 rounded-xl px-2 justify-center">
          <View className="justify-around flex-row items-center">
               <View className="bg-slate-900 self-center px-2 py-2">
                    <Text className="text-white mx-2 font-bold">RANK</Text>
               </View>
               <View className="bg-slate-800 items-center px-2 py-2 justify-center w-48">
                    <Text className="text-white mx-2 font-bold">NAME</Text>
               </View>
               <View className="bg-slate-900 self-center px-2 py-2 mr-1">
                    <Text className="text-white mx-2 font-bold">COINS</Text>
               </View>
          </View>
    </View>
  )
}

export default header