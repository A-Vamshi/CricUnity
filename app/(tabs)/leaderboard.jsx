import { FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import LeaderBoardCard from "../../components/LeaderBoardCard";
import Header from "../../components/Header";
import useAppwrite from '../../useAppwrite';
import { getRankers, changeRanker } from "../../appwrite";
import { useGlobalContext } from '../../context/GlobalProvider';


const LeaderBoard = () => {
  const {user} = useGlobalContext();
  const {data: data2, refetch} = useAppwrite(getRankers);
  const update = async () => {
    const dub = data2;
    dub.some((item) =>  {
      if (item.Coins <= user?.coins) {
        changeRanker(item.$id, user?.username, user?.coins);
        return true;
      }
    })
  }
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await update();
    await refetch();
    setRefreshing(false);
  }


  const data = data2 ?? [
    {Username: "User", Coins: 0, Rank: 1},
  ]
  
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList 
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <LeaderBoardCard 
              rank={item.Rank}
              name={item.Username}
              coins={item.Coins}
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
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default LeaderBoard;