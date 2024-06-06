import { Text, View, Image, ScrollView, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function Index() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  console.log(isLoggedIn);
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Join the best cricket community today
            <Text className="text-app"> CricUnity</Text>
            </Text>
          </View>
          {/* <Text className="text-white">
            Find the answers to the most asked questions about cricket matches. 
            Answers provided by the users, for the users and to the users.
            Gather CricUnity points as rewards by answering correctly and use your points to buy exciting gifts!
          </Text> */}
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7" 
            textStyles={undefined} 
            isLoading={undefined}            
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#151D27" style="light"/>
    </SafeAreaView>
  );
}
