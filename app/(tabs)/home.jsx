import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import QuestionCard from "../../components/QuestionCard";

const Home = () => {

  const data = [
    {question: "Will India score a 6 in the first 2 overs?", id: 1},
    {question: "Will Pakistan win this match?", id: 2},
    {question: "Will India score a 6 in the first 2 overs?", id: 3},
    {question: "Will Pakistan win this match?", id: 4},
    {question: "Will India score a 6 in the first 2 overs?", id: 5},
    {question: "Will Pakistan win this match?", id: 6},
    {question: "Will India score a 6 in the first 2 overs?", id: 7},
    {question: "Will Pakistan win this match?", id: 8},
    {question: "Will India score a 6 in the first 2 overs?", id: 9},
    {question: "Will Pakistan win this match?", id: 10},
    {question: "Will India score a 6 in the first 2 overs?", id: 11},
    {question: "Will Pakistan win this match?", id: 12},
    {question: "Will India score a 6 in the first 2 overs?", id: 13},
    {question: "Will Pakistan win this match?", id: 14},
  ]
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <QuestionCard question={item.question} />
        )}
        ListHeaderComponent={() => (
          <View className="my-10 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6" >
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back!
                </Text>
                <Text className="text-2xl font-psemibold text-white">User</Text>
              </View>
              <View className="mt-2">
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home;