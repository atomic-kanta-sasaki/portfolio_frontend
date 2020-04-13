import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
    return (
        <div>
            <Skeleton variant="text" />
            <Skeleton variant="rect" width={210} height={118} />
        </div>
    );
}