import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from '../pages/splashScreen.js';
import Login from '../pages/login.js';
import Signup1 from '../pages/signup1.js';
import Signup2 from '../pages/signup2.js';
import OrganizationSignUp from '../pages/orgSignup.js';
import StudentAfterLogin from '../pages/StudentAfterLogin.js';
import StudentNewsFeed from '../pages/studentNewsFeed.js';
import StudentComplaints from '../pages/studentComplaints.js';
import StudentReminder from '../pages/studentReminder.js';
import StudentViewOrganizations from '../pages/studentViewOrganizations.js';
import StudentFavourites from '../pages/studentFavourites.js';
import StudentAchievements from '../pages/studentAchievements.js';
import StudentNotifications from '../pages/studentNotifications.js';
import StudentProfile from '../pages/studentProfile';
import ContactsList from '../pages/contactList.js';
import Messenger from '../pages/messenger.js';


const AppStackNavigator = createStackNavigator({
    SplashScreen : {screen : SplashScreen},
    Login : {screen : Login},                       // 1st Login : jis se call karwana hai , 2nd Login : jo name uper likha hai.
    Signup1 : {screen : Signup1},
    Signup2 : {screen : Signup2},
    OrganizationSignUp : {screen : OrganizationSignUp},
    StudentAfterLogin : {screen : StudentAfterLogin},
    StudentNewsFeed : {screen : StudentNewsFeed},
    StudentComplaints : {screen : StudentComplaints},
    StudentReminder : {screen : StudentReminder},
    StudentViewOrganizations : {screen : StudentViewOrganizations},
    StudentFavourites : {screen : StudentFavourites},
    StudentAchievements : {screen : StudentAchievements},
    StudentNotifications : {screen : StudentNotifications},
    StudentProfile : {screen : StudentProfile},
    ContactsList : {screen : ContactsList},
    Messenger : {screen : Messenger}
},
{
    defaultNavigationOptions:{header:null}
});

const Navigator = createAppContainer(AppStackNavigator);

export default Navigator;