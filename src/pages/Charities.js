import React, { useEffect } from 'react';

function Charities(props) {
    const { getNavType } = props;

    useEffect(() => {
        getNavType("other");
    })
    return (
        <div></div>
    )
}

export default Charities;