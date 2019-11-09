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
import StudentViewCategories from '../pages/studentViewCategories.js';
import StudentViewPostDetails from '../pages/studentViewPostDetails.js';
import StudentViewOwnComplaints from '../pages/studentViewOwnComplaints.js';
import StudentViewPostFromNF from '../pages/studentViewPostFromNF.js';
import StudentViewOrganizationDetails from '../pages/studentViewOrganizationDetails.js';
import StudentViewAchievementDetails from '../pages/studentViewAchievementDetails.js';
import ContactsList from '../pages/contactList.js';
import Messenger from '../pages/messenger.js';
import ForgetPassword from '../pages/forgetPassword.js';
import TeacherNewsFeed from '../pages/teacherNewsFeed.js';
import TeacherViewCategories from '../pages/teacherViewCategories.js';
import TeacherAchievements from '../pages/teacherAchievements.js';
import TecaherViewOrganization from '../pages/teacherViewOrganization.js';
import TeacherFavourites from '../pages/teacherFavourites.js';
import TeacherNotification from '../pages/teacherNotification.js';
import TeacherAddJob from '../pages/teacherAddJob.js';
import TeacherComplaints from '../pages/teacherComplaints.js';
import TeacherProfile from '../pages/teacherProfile.js';
import Security from '../pages/security.js';
import TeacherSecurity from '../pages/teacherSecurity.js';
import TeacherViewOwnComplaints from '../pages/teacherViewOwnComplaints.js';
import TeacherViewPostDetails from '../pages/teacherViewPostDetails.js';
import TeacherViewPostFromNF from '../pages/teacherViewPostFromNF.js';
import TeacherViewOrganizationDetails from '../pages/teacherViewOrganizationDetails.js';

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
    Security : {screen : Security},
    StudentViewCategories : {screen : StudentViewCategories},
    StudentViewPostDetails : {screen : StudentViewPostDetails},
    StudentViewOwnComplaints : {screen : StudentViewOwnComplaints},
    StudentViewPostFromNF : {screen : StudentViewPostFromNF},
    StudentViewOrganizationDetails : {screen : StudentViewOrganizationDetails},
    StudentViewAchievementDetails : {screen : StudentViewAchievementDetails},
    ContactsList : {screen : ContactsList},
    Messenger : {screen : Messenger},
    ForgetPassword : {screen : ForgetPassword},
    TeacherNewsFeed : {screen : TeacherNewsFeed},
    TeacherAchievements : {screen : TeacherAchievements},
    TecaherViewOrganization :{screen : TecaherViewOrganization},
    TeacherFavourites : {screen : TeacherFavourites},
    TeacherNotification : {screen : TeacherNotification},
    TeacherAddJob : {screen : TeacherAddJob},
    TeacherViewCategories : {screen : TeacherViewCategories},
    TeacherComplaints : {screen : TeacherComplaints},
    TeacherProfile : {screen : TeacherProfile},
    TeacherViewCategories : {screen : TeacherViewCategories},
    TeacherSecurity : {screen : TeacherSecurity},
    TeacherViewOwnComplaints : {screen : TeacherViewOwnComplaints},
    TeacherViewPostDetails : {screen : TeacherViewPostDetails},
    TeacherViewPostFromNF : {screen : TeacherViewPostFromNF},
    TeacherViewOrganizationDetails : {screen : TeacherViewOrganizationDetails}
},
{
    defaultNavigationOptions:{header:null}
});

const Navigator = createAppContainer(AppStackNavigator);

export default Navigator;