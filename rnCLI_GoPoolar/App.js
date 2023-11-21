import 'react-native-gesture-handler';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabBarScreen from './components/bottomTabBarScreen';
import {LogBox} from 'react-native';
import PickLocationScreen from './screens/pickLocation/pickLocationScreen';
import AvailableRidesScreen from './screens/availableRides/availableRidesScreen';
import RideDetailScreen from './screens/rideDetail/rideDetailScreen';
import RideMapViewScreen from './screens/rideMapView/rideMapViewScreen';
import ReviewsScreen from './screens/reviews/reviewsScreen';
import MessageScreen from './screens/message/messageScreen';
import ConfirmPoolingScreen from './screens/confirmPooling/confirmPoolingScreen';
import OfferRideScreen from './screens/offerRide/offerRideScreen';
import NotificationsScreen from './screens/notifications/notificationsScreen';
import RideRequestScreen from './screens/rideRequest/rideRequestScreen';
import StartRideScreen from './screens/startRide/startRideScreen';
import EndRideScreen from './screens/endRide/endRideScreen';
import RideCompleteScreen from './screens/rideComplete/rideCompleteScreen';
import TransactionsScreen from './screens/transactions/transactionsScreen';
import PaymentMethodsScreen from './screens/paymentMethods/paymentMethodsScreen';
import CreditCardScreen from './screens/creditCard/creditCardScreen';
import BankInfoScreen from "./screens/bankInfo/bankInfoScreen";
import AddAndSendMoneyScreen from './screens/addAndSendMoney/addAndSendMoneyScreen';
import SuccessfullyAddAndSendScreen from './screens/successfullyAddAndSend/successfullyAddAndSendScreen';
import EditProfileScreen from "./screens/editProfile/editProfileScreen";
import RideHistoryScreen from "./screens/rideHistory/rideHistoryScreen";
import HistoryRideDetailScreen from "./screens/historyRideDetail/historyRideDetailScreen";
import UserVehiclesScreen from "./screens/userVehicles/userVehiclesScreen";
import AddVehicleScreen from "./screens/addVehicle/addVehicleScreen";
import TermsAndConditionsScreen from "./screens/termsAndConditions/termsAndConditionsScreen";
import PrivacyPolicyScreen from "./screens/privacyPolicy/privacyPolicyScreen";
import CustomerSupportScreen from "./screens/customerSupport/customerSupportScreen";
import FaqScreen from "./screens/faq/faqScreen";
import SplashScreen from './screens/splashScreen';
import OnboardingScreen from './screens/onboarding/onboardingScreen';
import LoginScreen from './screens/auth/loginScreen';
import RegisterScreen from './screens/auth/registerScreen';
import VerificationScreen from './screens/auth/verificationScreen';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen
          name="BottomTabBar"
          component={BottomTabBarScreen}
          options={{...TransitionPresets.DefaultTransition}}
        />
        <Stack.Screen name="PickLocation" component={PickLocationScreen} />
        <Stack.Screen name="AvailableRides" component={AvailableRidesScreen} />
        <Stack.Screen name="RideDetail" component={RideDetailScreen} />
        <Stack.Screen name="RideMapView" component={RideMapViewScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="ConfirmPooling" component={ConfirmPoolingScreen} />
        <Stack.Screen name="OfferRide" component={OfferRideScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="RideRequest" component={RideRequestScreen} />
        <Stack.Screen name="StartRide" component={StartRideScreen} />
        <Stack.Screen name="EndRide" component={EndRideScreen} />
        <Stack.Screen name="RideComplete" component={RideCompleteScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} />
        <Stack.Screen
          name="AddAndSendMoney"
          component={AddAndSendMoneyScreen}
        />
        <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
        <Stack.Screen name="CreditCard" component={CreditCardScreen} />
        <Stack.Screen
          name="SuccessfullyAddAndSend"
          component={SuccessfullyAddAndSendScreen}
        />
         <Stack.Screen name="BankInfo" component={BankInfoScreen} />
       <Stack.Screen name="EditProfile" component={EditProfileScreen} />
       <Stack.Screen name="RideHistory" component={RideHistoryScreen} />
        <Stack.Screen
          name="HistoryRideDetail"
          component={HistoryRideDetailScreen}
        />
       <Stack.Screen name="UserVehicles" component={UserVehiclesScreen} />
         <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditionsScreen}
        />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen
          name="CustomerSupport"
          component={CustomerSupportScreen}
        />
        <Stack.Screen name="Faq" component={FaqScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
