import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import NewRequest from '../Screens/NewRequest';
import DateSelection from '../Screens/DateSelection';
const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',


            }}
            initialRouteName="Home"
        >

            <Stack.Screen
                name="Home"
                component={Home}
                // options={{ headerShown: false, }}
                // options={{  headerShown: true, headerTransparent: true}}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="NewRequest"
                component={NewRequest}
                options={{ headerShown: false }}

            // options={{ headerShown: false, }}
            />
            <Stack.Screen
                name="DateSelection"
                component={DateSelection}
                options={{ headerShown: false }}

            // options={{ headerShown: false, }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
