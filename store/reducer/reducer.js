// Object and Variables Who stored  and Provide Values in all Over Application 
const INITIAL_STATE = {
    accountType : '' ,
    signupInfo : {} ,
    studentInfo :{} ,
    teacherInfo:{} ,
    organizationInfo:{},
    adminInfo:{},
    dynamicInfo:{},
    postInfo:{},
    orgMoreInfo:{},
    achievementInfo:{},
    contactInfo:{},
    chatInfo:{},
    reminfo:{},
}

// Use Case To Check the triggered Function of Action.js and set the triggered function value init respective obeject or variable  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DYNAMICDATA':
            return ({
                ...state,
                 dynamicInfo : action.payload
                })
        case 'USERINFO':
            return ({
                ...state,
                 userInfo : action.payload
                })

            case 'SIGNUPINFO' :
            return ({
                ...state,
                 signupInfo : action.payload 
            })

            case 'STUDENTINFO' :
            return ({
                ...state,
                 studentInfo : action.payload ,
                 accountType : action.payload.accountType || 'not Defined'
            })

            case 'TEACHERINFO' :
            return ({
                ...state,
                 teacherInfo : action.payload ,
                 accountType : action.payload.accountType || 'not Defined'
            })

            case 'ORGANIZATIONINFO' :
            return ({
                ...state,
                 organizationInfo : action.payload ,
                 accountType : action.payload.accountType || 'not Defined'
            })

            case 'ADMININFO' :
            return ({
                ...state,
                 adminInfo : action.payload ,
                 accountType : action.payload.accountType || 'not Defined'
            })

            case 'POSTINFO' :
            return ({
                ...state,
                 postInfo : action.payload ,
                 accountType : action.payload.accountType || 'not Defined'
            })

            case 'ORGMOREDETAILS' :
            return ({
                ...state,
                 orgMoreInfo : action.payload ,
                 accountType : action.payload.accountType || 'not Defined'
            })

            case 'ACHIEVEMENTINFO' :
            return ({
                ...state,
                 achievementInfo : action.payload ,
                 accountType : action.payload.accountType || 'not Defined'
            })

            case 'CONTACTINFO' :
            return ({
                ...state,
                 contactInfo : action.payload ,
                 accountType : action.payload.accountType || 'not Defined'
            })

            case 'CHATDATA' :
                return ({
                    ...state,
                     chatInfo : action.payload ,
                     accountType : action.payload.accountType || 'not Defined'
            })

            case 'REMINFO' :
                return ({
                    ...state,
                     reminfo : action.payload ,
                     accountType : action.payload.accountType || 'not Defined'
            })


            
        default:
         return state;
    }

}