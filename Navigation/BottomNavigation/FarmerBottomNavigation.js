import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFarmer from '../../src/Screen/Farmer/HomeFarmer';
import DetailFarmer from '../../src/Screen/Farmer/DetailFarmer';
import ChatFarmer from '../../src/Screen/Farmer/ChatFarmer';
import PostFarmer from '../../src/Screen/Farmer/PostFarmer';
import ProfileFarmer from '../../src/Screen/Farmer/ProfileFarmer';

const Tab = createBottomTabNavigator();

export default function FarmerBottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeFarmer} />
      <Tab.Screen name="DetailFarmer" component={DetailFarmer} />
      <Tab.Screen name="ChatFarmer" component={ChatFarmer} />
      <Tab.Screen name="PostFarmer" component={PostFarmer} />
      <Tab.Screen name="ProfileFarmer" component={ProfileFarmer} />
    </Tab.Navigator>
  );
}