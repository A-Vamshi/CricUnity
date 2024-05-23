import { FlatList, SafeAreaView, Text, View, TextInput } from 'react-native';
import { React, useState } from 'react';
import ShopItem from "../../components/ShopItem";
import images from "../../constants/images";

const Shop = () => {
  const [email, setEmail] = useState("");
  const data = [
    {
      name: "Amazon gift card worth $500",
      price: 500000, 
      id: 1,
      icon: images.amazonGC,
    },
    {
      name: "Amazon gift card worth $1000",
      price: 500, 
      id: 2,
      icon: images.amazonGC,
    },
    {
      name: "Amazon gift card worth $100",
      price: 50000, 
      id: 3,
      icon: images.amazonGC,
    },
    {
      name: "Amazon gift card worth $200",
      price: 200000, 
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
            value={email}
            handleChangeText={setEmail}
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