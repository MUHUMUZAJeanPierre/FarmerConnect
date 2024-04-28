import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeCustomer from './src/Screen/Customer/HomeCustomer';
import Login from './src/Components/Authantication/Login';
import ThemeProvider from './src/Screen/Context/ThemeContext';
import PostFarmer from './src/Screen/Farmer/PostFarmer';
import SignUp from './src/Components/Authantication/SignUp';
import Onboarding from './src/Components/Onboarding/Onboarding';
import AppStack from './Navigation/StackNavigation/Stack';
import SearchHarvestCustomer from './src/Screen/Customer/SearchHarvestCustomer';
import ProfileCustomer from './src/Screen/Customer/ProfileCustomer';
import ProfileFarmerSpecialist from './src/Screen/Specialist/ProfileFarmerSpecialist';

export default function App() {
  return (
    <>
      <ThemeProvider>
        {/* <HomeCustomer/> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <Onboarding /> */}
        {/* <PostFarmer /> */}
        <AppStack />
        {/* <SearchHarvestCustomer /> */}
        {/* <ProfileCustomer /> */}
        {/* <ProfileFarmerSpecialist /> */}
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
