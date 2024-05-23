import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LeaderBoardCard from "../../components/LeaderBoardCard";
import Header from "../../components/Header";

const LeaderBoard = () => {

  const data = [
    {name: "User", coins: 204, id: 1},
    {name: "User", coins: 200, id: 2},
    {name: "User", coins: 199, id: 3},
    {name: "User", coins: 198, id: 4},
    {name: "User", coins: 180, id: 5},
    {name: "User", coins: 173, id: 6},
    {name: "User", coins: 170, id: 7},
    {name: "User", coins: 165, id: 8},
    {name: "User", coins: 142, id: 9},
    {name: "User", coins: 130, id: 10},
    {name: "User", coins: 204, id: 11},
    {name: "User", coins: 200, id: 12},
    {name: "User", coins: 199, id: 13},
    {name: "User", coins: 198, id: 14},
    {name: "User", coins: 180, id: 15},
    {name: "User", coins: 173, id: 16},
    {name: "User", coins: 170, id: 17},
    {name: "User", coins: 165, id: 18},
    {name: "User", coins: 142, id: 19},
    {name: "User", coins: 130, id: 20},
  ]
  
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <LeaderBoardCard 
              rank={item.id}
              name={item.name}
              coins={item.coins}
            />
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="space-y-6">
            <View className="justify-between items-start flex-row mb-6 mx-4 my-5">
              <View>
                <Text className="text-gray-300 font-bold text-3xl mt-5">Leader Board</Text>
              </View>
            </View>
            <Header />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default LeaderBoard

const styles = StyleSheet.create({})