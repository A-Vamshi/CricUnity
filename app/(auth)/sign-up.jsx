import { ScrollView, StyleSheet, Image, View, Text, Alert } from 'react-native';
import { Link, router } from "expo-router";
import { React, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";
// import { signUp } from '../../firebaseConfig';



const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.email || !form.password || !form.username) {
      Alert.alert("Error", "Please fill in all the details");
    }
    setIsSubmitting(true);
    try {
      const result = await signUp(form.email, form.password, form.username);
      // Set to global state
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center min-h-[90vh] px-4 my-6">
          <Image
            source={images.logo} 
            resizeMode="contain"
            className="w-[115px] h-[75px]"
          />
          <Text className="text-2xl text-white text-semibold mt-5 font-psemibold">Sign Up to CricUnity</Text> 
          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e})}
            otherStyles="mt-10"
          />
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
          />
          <CustomButton 
            title="Sign Up"
            isLoading={isSubmitting}
            handlePress={submit}
            containerStyles="mt-7"
          />
          <View className="justify-center pt-5 flex-row gap-2 ">
            <Text className="text-lg text-gray-100 font-pregular">Have an account already?</Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-app">Sign in</Link> 
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp;