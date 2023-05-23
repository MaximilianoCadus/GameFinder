import { Outlet, Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = () => {
    const location = useLocation();
    const accessToken = JSON.parse(localStorage.getItem('jwt'));

    return(
        accessToken ? <Outlet /> : <Navigate to='/' state={{from: location}} replace />
    )
}

export default PrivateRoute