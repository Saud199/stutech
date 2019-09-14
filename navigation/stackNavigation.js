import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../pages/login.js';
import Signup1 from '../pages/signup1.js';
import Signup2 from '../pages/signup2.js';
import OrganizationSignUp from '../pages/orgSignup.js';
import StudentAfterLogin from '../pages/StudentAfterLogin.js';
import StudentNewsFeed from '../pages/studentNewsFeed.js';
import StudentComplaints from '../pages/studentComplaints.js';


const AppStackNavigator = createStackNavigator({
    Login : {screen : Login},                       // 1st Login : jis se call karwana hai , 2nd Login : jo name uper likha hai.
    Signup1 : {screen : Signup1},
    Signup2 : {screen : Signup2},
    OrganizationSignUp : {screen : OrganizationSignUp},
    StudentAfterLogin : {screen : StudentAfterLogin},
    StudentNewsFeed : {screen : StudentNewsFeed},
    StudentComplaints : {screen : StudentComplaints}
},
{
    defaultNavigationOptions:{header:null}
});

const Navigator = createAppContainer(AppStackNavigator);

export default Navigator;