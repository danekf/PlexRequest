import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

//takes in the page the user is trying to access, determines if they are authorized, and returns an message if they are not allowed.

const AdminProtectedRoute = ({children}) => {
    //use redux selector to set the user we are checking to a variable
    const user = useSelector((slice) => slice.user);
    let location = useLocation();


    //if not an admin, do not allow to view.
    if(!user.userInfo.isAdmin) {
        return <Navigate to="/login" state={{ from: location}} message={'You must be an admin to view this page, please log in with admin credentials.'} replace />
    }
 return children

};

export default AdminProtectedRoute;