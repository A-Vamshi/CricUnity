import { Image, Text, View } from 'react-native';
import React from 'react';
import images from "../../constants/images";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import { Redirect, router } from "expo-router";

const Profile = () => {
  return (
    <View className="bg-black h-full items-center">
      <Image 
        source={images.ball}
        className="h-[500px] w-[500px] mt-[-200px] "
        resizeMode="contain"
      />
      <Image 
        source={images.me}
        className="h-40 w-40 mt-[-80px] rounded-full"
        resizeMode="contain"
      />
      <Text className="text-gray-300 font-bold text-3xl">Username</Text>
      <Text className="text-gray-300 font-bold text-xl">Email</Text>
      <Text className="text-gray-300 font-bold text-3xl">
        <Image 
          source={icons.cricCoin} 
          className="w-[20px] h-[20px] px-1 self-center m-2"
          resizeMode="contain"
        /> 27k
      </Text>
      <Text className="text-gray-300 font-bold text-3xl">Rank: 1005</Text>
      <CustomButton 
        title="Logout"
        containerStyles="mt-7 w-60"
        textStyles="text-white font-bold text-2xl"
        handlePress={() => router.push('/sign-in')}
      />
    </View>
  )
}

export default Profile;