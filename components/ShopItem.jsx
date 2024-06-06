import { View, Text, Image, Alert } from 'react-native';
import CustomButton from './CustomButton';
import React from 'react';
import { icons } from "../constants";
import { buyItem, updateCoins } from '../appwrite';
import { useGlobalContext } from "../context/GlobalProvider";


const ShopItem = ({ price, image, text}) => {
     const {user} = useGlobalContext();
     const handlePress = () => {
          if (user?.coins > price) {
               buyItem(user?.accountId, price);
               updateCoins(user?.$id, user?.coins - price);
          } else {
               Alert.alert("Not enough coins", "You don't have enough coins to buy this, keep playing to earn more!");
          }
     }
  return (
    <View className="bg-primary w-full m-2 h-60">
     <View className="flex-row justify-around">
          <View className="">
               <Image 
                    source={image}
                    resizeMode="contain"
                    className="w-32 self-start ml-4 mt-[-20px]"
               />
          </View>
          <View className="w-40 items-center">
               <Text className="text-white font-psemibold mt-4 px-2 text-xl">{text} for {price} <Image 
                         source={icons.cricCoin} 
                         className="w-[20px] h-[20px] p-2 self-center"
                         resizeMode="contain"
                    />
               </Text>
          </View>
     </View>
     <View className="items-center justify-center mt-2">
          <CustomButton 
            title="Buy"
            containerStyles="mt-1 w-40 h-10 mb-2"
            textStyles="text-white font-bold text-2xl"
            handlePress={handlePress}
          />
     </View>
    </View>
  )
}

export default ShopItem;