import { FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import QuestionCard from "../../components/QuestionCard";
import ScoreCard from "../../components/ScoreCard"
import { useGlobalContext } from '../../context/GlobalProvider';
import { addUser, getDocs, getCurrentUser } from '../../appwrite';
import useAppwrite from '../../useAppwrite';



const Home = () => {
  const {data: data2, refetch} = useAppwrite(getDocs);
  const [refreshing, setRefreshing] = useState(false);
  const {data: user2, refetch: refetch2} = useAppwrite(getCurrentUser);
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    await refetch2();
    setRefreshing(false);
  }
  const {user} = useGlobalContext();

  const data = data2? data2 : [
    {question: "Loading", id: 1},
  ]
  const handlePress1 = (item) => {
    const yes = item.yes;
    const no = item.no;
    const yesSet = new Set(yes);
    const noSet = new Set(no);
    const has = noSet.has(user.accountId);
    if (has) noSet.delete(user.accountId);
    yesSet.add(user.accountId);
    const arr1 = [...yesSet];
    const arr2 = [...noSet];
    addUser(item.$id, arr1, arr2);
  }
  const handlePress2 = (item) => {
    const yes = item.yes;
    const no = item.no;
    const yesSet = new Set(yes);
    const noSet = new Set(no);
    const has = yesSet.has(user.accountId);
    if (has) yesSet.delete(user.accountId);
    noSet.add(user.accountId);
    const arr1 = [...yesSet];
    const arr2 = [...noSet];
    addUser(item.$id, arr1, arr2);
  }
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <QuestionCard 
            question={item.question}
            doc={item}
            handlePress1={() => {handlePress1(item)}}
            handlePress2={() => {handlePress2(item)}}
          />
        )}
        ListHeaderComponent={() => (
            <View className="flex-row mb-2 w-80 justify-center self-center">
              <ScoreCard />
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Home;