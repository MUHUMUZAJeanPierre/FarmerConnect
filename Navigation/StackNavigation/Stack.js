import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getItemAsync } from "expo-secure-store";
import { ThemeContext } from "../../src/Screen/Context/ThemeContext";
import SignUp from "../../src/Components/Authantication/SignUp";
// import HomeScreen from "../Home/HomeScreen";
// import AddHarvest from "../AddHarvest/AddHarvest";
import ForgotPassword from "../../src/Components/Authantication/ForgotPassword";
import Login from "../../src/Components/Authantication/Login";
import Splash from "../../src/Components/Splash";
import Onboarding from "../../src/Components/Onboarding/Onboarding";
import FarmerBottomNavigation from "../BottomNavigation/FarmerBottomNavigation";
import EditProfileFarmer from "../../src/Screen/Farmer/EditProfileFarmer";
import CustomerBottomNavigation from "../BottomNavigation/CustomerBottomNavigation";
import EditProfileCustomer from "../../src/Screen/Customer/EditProfileCustomer";
import SpecialistBottomNavigation from "../BottomNavigation/SpecialistBottomNavigation";
import EditProfileSpecialist from "../../src/Screen/Specialist/EditProfileSpecialist";

const Stack = createStackNavigator();

const AppStack = () => {
  const { isLog, setIsLog, isLogging, setIsLogging } = useContext(ThemeContext);
  const [roleData, setRoleData] = useState('');

  useEffect(() => {
    const fetchRoleData = async () => {
      try {
        const data = await getItemAsync("role");
        console.log("Role Data: fgcccccc", data);
        setRoleData(data);
        console.log(roleData);
      } catch (error) {
        console.log("Error fetching role data:", error);
      }
    };

    fetchRoleData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLog && roleData === "farmer" && (
          <>
            <Stack.Screen name="FarmerBottomNavigation" component={FarmerBottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfileFarmer} options={{ headerShown: false }} />
          </>
        )}
        {isLog && roleData === "customer" && (
          <>
            <Stack.Screen name="CustomerBottomNavigation" component={CustomerBottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfileCustomer" component={EditProfileCustomer} options={{ headerShown: false }} />
          </>
        )}
        {isLog && roleData === "farmerSpecialist" && (
          <>
            <Stack.Screen name="SpecialistBottomNavigation" component={SpecialistBottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfileSpecialist" component={EditProfileSpecialist} options={{ headerShown: false }} />
          </>
        )}
        {!isLog && (
          <>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
