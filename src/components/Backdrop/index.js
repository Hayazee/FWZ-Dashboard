import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux'


export default function SimpleBackdrop({ children }) {
    const loading = useSelector(({ user: { isLoading } }) => isLoading)

    return (
        <div>
            <Backdrop open={loading}>
                <CircularProgress color='inherit' />
            </Backdrop>
            {children}
        </div>
    );
}
