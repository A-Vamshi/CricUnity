import { SafeAreaView, Text, View, Image } from 'react-native';
import { icons } from "../constants";

const ScoreCard = () => {
  return (
      <View className="h-40 w-full bg-primary items-center mt-10 mb-3 rounded-md">
        <View className="h-8 w-full mt-6 items-center flex-row justify-between px-3">
          <View className="h-full items-center flex-row">
            <Image 
              source={icons.team1}
              resizeMode="contain"
              className="w-8 h-full self-start"
            /> 
            <View>
              <Text className="font-psemibold text-white">    Canada </Text>
            </View>
          </View>
          <Text className="text-md font-bold text-white"> 175/9 (20) </Text>
        </View>
        <View className="h-8 w-full mt-2 items-center flex-row justify-between px-3">
          <View className="h-full items-center flex-row">
            <Image 
              source={icons.team2}
              resizeMode="contain"
              className="w-8 h-full self-start"
            />
            <View>
              <Text className="font-psemibold text-white">    United States </Text>
            </View>
          </View>
          <Text className="text-md font-bold text-white"> 0 (0) </Text>
        </View>
        <Text className="text-lg font-bold text-white mt-6"> Canada batting </Text>
      </View>
  )
}

export default ScoreCard;


