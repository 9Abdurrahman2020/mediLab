import { useContext } from 'react';
import { authContext } from './UseContext';

const useAuth = () => {
    return useContext(authContext)
};

export default useAuth;