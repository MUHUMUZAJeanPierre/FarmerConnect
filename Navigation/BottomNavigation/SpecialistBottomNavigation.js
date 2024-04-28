import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSpecialistFarmer from '../../src/Screen/Specialist/HomeSpecialistFarmer';
import DetailFarmerSpecilist from '../../src/Screen/Specialist/DetailFarmerSpecilist';
import ChatFarmerSpecialist from '../../src/Screen/Specialist/ChatFarmerSpecialist';
import PostFarmerSpecialist from '../../src/Screen/Specialist/PostFarmerSpecialist';
import ProfileFarmerSpecialist from '../../src/Screen/Specialist/ProfileFarmerSpecialist';

const Tab = createBottomTabNavigator();

export default function SpecialistBottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeSpecialistFarmer} />
      <Tab.Screen name="DetailFarmerSpecilist" component={DetailFarmerSpecilist} />
      <Tab.Screen name="ChatFarmerSpecialist" component={ChatFarmerSpecialist} />
      <Tab.Screen name="PostFarmerSpecialist" component={PostFarmerSpecialist} />
      <Tab.Screen name="ProfileFarmerSpecialist" component={ProfileFarmerSpecialist} />
    </Tab.Navigator>
  );
}
