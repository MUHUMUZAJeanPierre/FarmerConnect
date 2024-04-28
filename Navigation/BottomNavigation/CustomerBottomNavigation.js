import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeCustomer from '../../src/Screen/Customer/HomeCustomer';
import DetailCustomer from '../../src/Screen/Customer/DetailCustomer';
import SearchHarvestCustomer from '../../src/Screen/Customer/SearchHarvestCustomer';
import ProfileCustomer from '../../src/Screen/Customer/ProfileCustomer';

const Tab = createBottomTabNavigator();

export default function CustomerBottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeCustomer" component={HomeCustomer} />
      <Tab.Screen name="DetailCustomer" component={DetailCustomer} />
      <Tab.Screen name="SearchHarvestCustomer" component={SearchHarvestCustomer} />
      <Tab.Screen name="ProfileCustomer" component={ProfileCustomer} />
    </Tab.Navigator>
  );
}
