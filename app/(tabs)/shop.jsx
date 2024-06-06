import { FlatList, SafeAreaView, Text, View, TextInput } from 'react-native';
import { React, useState } from 'react';
import ShopItem from "../../components/ShopItem";
import images from "../../constants/images";

const Shop = () => {
  const data = [
    {
      name: "$500",
      price: 1000, 
      id: 1,
      icon: images.amazonGC,
    },
    {
      name: "$1000",
      price: 2000, 
      id: 2,
      icon: images.amazonGC,
    },
    {
      name: "$100",
      price: 400, 
      id: 3,
      icon: images.amazonGC,
    },
    {
      name: "$200",
      price: 700, 
      id: 4,
      icon: images.amazonGC,
    },
  ]

  return (
    <SafeAreaView className="bg-black h-full p-1">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ShopItem
            price={item.price}
            image={item.icon}
            text={item.name}
          />
        )}
        ListHeaderComponent={() => (
          <View className="mt-6 space-y-6">
            <View className="mx-3 justify-center items-start my-3">
              <Text className="text-gray-300 font-bold text-3xl">Shop</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Shop