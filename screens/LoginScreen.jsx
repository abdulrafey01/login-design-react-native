import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <View className="h-full justify-center bg-white">
      <View className="right-7" style={styles.waveSet}>
        <Image source={require("../assets/images/wave-haikei4.png")} />
      </View>
      <View className="absolute rounded-l-full top-[161px] right-0 bg-[#7f1bd5] h-14 w-4"></View>
      <View className="absolute rounded-l-full top-[-37px] left-[117px] bg-[#7f1bd5] -rotate-[50deg]  h-24 w-16"></View>
      <View className=" px-7">
        <View className="mb-7">
          <Text className="text-center  font-bold text-2xl">Sign Up</Text>
        </View>
        <View style={styles.shadowContainer}>
          <Icon name="account" size={30} color="#7f1bd5" />
          <TextInput className="ml-3" placeholder="Name" />
        </View>
        <View style={styles.shadowContainer}>
          <Icon name="email-open" size={30} color="#7f1bd5" />
          <TextInput className="ml-3" placeholder="E-Mail" />
        </View>
        <View style={styles.shadowContainer}>
          <Icon name="lock" size={30} color="#7f1bd5" />
          <TextInput className="ml-3" placeholder="Password" />
          <View className="absolute right-3 top-3">
            <Icon name="eye" size={30} color="#7f1bd5" />
          </View>
        </View>
        <View className="mb-5 flex-row justify-center items-center">
          <Checkbox
            color="#7f1bd5"
            value={isChecked}
            onValueChange={setIsChecked}
            className="h-4 w-4 mr-2"
          />
          <Text className="text-slate-400" style={styles.textStyle1}>
            I read and agree to{" "}
          </Text>
          <Text style={styles.textStyle1} className="text-[#7f1bd5]">
            Terms And Conditions
          </Text>
        </View>
        <LinearGradient
          colors={[
            " rgba(135,13,197,1)",
            "rgba(135,13,197,1)",
            "rgba(22,7,181,1)",
          ]}
          className="mb-10 rounded-3xl p-4"
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 1, y: 1 }}
        >
          <Text className="text-center text-white">CREATE ACCOUNT</Text>
        </LinearGradient>
        <View className="flex-row justify-center">
          <Text className="text-slate-400" style={styles.textStyle2}>
            Already have an account?{" "}
          </Text>
          <Text style={styles.textStyle2} className="text-[#7f1bd5]">
            Sign in
          </Text>
        </View>
      </View>
      <View className="absolute bottom-0">
        <Image source={require("../assets/images/blob-haikei2.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    padding: 10,
    marginBottom: 36,
    flexDirection: "row",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 20, // This is for Android shadow
    backgroundColor: "white", // Set your desired background color
  },
  textStyle1: {
    fontSize: 11,
  },
  textStyle2: {
    fontSize: 13,
  },
  waveSet: {
    position: "absolute",
    top: -50,
    transform: [
      {
        rotate: "210deg",
      },
    ],
  },
});
