import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../UseContext/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){
        return <h6 className="text-center">Loading...</h6>
    }
    return (
        <Route
        {...rest}
        render={({location})=> user ? children : <Redirect
        to={{
            pathname:"/login",
            state:{ from: location }
        }}
        />

        }
        />
    );
};

export default PrivateRoute;