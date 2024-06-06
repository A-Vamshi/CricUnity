import { Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import images from "../../constants/images";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from '../../context/GlobalProvider';
import { signOut, getCurrentUser, changePic } from '../../appwrite';
import useAppwrite from '../../useAppwrite';
import * as DocumentPicker from "expo-document-picker";
import { useState } from 'react';
import useApiFetch from "../../useApiFetch";


const Profile = () => {
  // const {data: cric, isLoading, error, refetch: refetchApi} = useApiFetch("recent");
  // console.log(cric);
  const {isLoggedIn, setIsLoggedIn, user, setUser } = useGlobalContext();
  const {data: user2, refetch} = useAppwrite(getCurrentUser);
  const [img, setImg] = useState(null);
  const logout = () => {
    setIsLoggedIn(false);
    signOut();
    setUser(null);
    router.replace("/sign-in");
  }
  const refresh = async () => {
    await refetch()
  }
  const openPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/png", "image/jpeg"],
    })
    if (!result.canceled) {
      setImg(result.assets[0].uri);
      changePic(user.$id, result.assets[0].uri);
    } else {
      setTimeout(() => {
        Alert.alert("Document picked", JSON.stringify(result, null, 2))
      }, 100)
    }
  }

  return (
    <View className="bg-black h-full items-center">
      <Image 
        source={images.ball}
        className="h-[500px] w-[500px] mt-[-200px] "
        resizeMode="contain"
      />
      <TouchableOpacity onPress={openPicker}>
        <Image 
          source={{uri: img ?? (user2 ?? user)?.avatar}}
          className="h-40 w-40 mt-[-80px] rounded-full"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text className="text-gray-300 font-bold text-3xl">{(user2 ?? user)?.username}</Text>
      <Text className="text-gray-300 font-bold text-xl">{(user2 ?? user)?.email}</Text>
      <Text className="text-gray-300 font-bold text-3xl">
        <Image 
          source={icons.cricCoin} 
          className="w-[20px] h-[20px] px-1 self-center m-2"
          resizeMode="contain"
        /> {(user2 ?? user)?.coins}  <TouchableOpacity 
        onPress={refresh}
        className="self-center justify-center"
      >
        <Image 
          source={icons.refresh}
          className="h-8 w-8"
          resizeMode="contain"
        />
      </TouchableOpacity>
      </Text>
      <CustomButton 
        title="Logout"
        containerStyles="mt-7 w-60"
        textStyles="text-white font-bold text-2xl"
        handlePress={logout}
      />
    </View>
  )
}

export default Profile;