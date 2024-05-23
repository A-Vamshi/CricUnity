import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from "../constants";

const ShopItem = ({value, handleChangeText, price, image, text}) => {
  return (
    <View className="bg-primary w-full m-2">
     <View className="flex-row justify-between">
          <View>
          <Image 
               source={image}
               resizeMode="contain"
               className="w-40 self-start ml-4 mt-[-20px]"
          />
          </View>
          <View className="w-40">
               <Text className="text-white font-psemibold mt-4 px-2 text-xl">{text} for {price} <Image 
                         source={icons.cricCoin} 
                         className="w-[20px] h-[20px] p-2 self-center"
                         resizeMode="contain"
                    />
               </Text>
          </View>
     </View>
     <View>
          <TextInput
               className="flex-1 text-white font-semibold text-base p-2 ml-3 mr-3 border-2 border-app rounded-2xl"
               value={value}
               placeholder="Enter your Email: "
               placeholderTextColor="#7B7B8B"
               onChangeText={handleChangeText}
          />
          <TouchableOpacity className="bg-yes rounded-md h-10 w-40 items-center justify-center self-center m-2 flex-row">
               <Text className="text-primary font-psemibold">Buy</Text>
          </TouchableOpacity>
     </View>
    </View>
  )
}

export default ShopItem;