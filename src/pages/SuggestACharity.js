import React, { useEffect } from 'react';

function SuggestACharity(props) {
    const { getNavType } = props;

    useEffect(() => {
        getNavType("other");

    });

    return (
        <React.Fragment>
            <section>
                <div className="container pt-5">
                    <h1>Suggest a Charity</h1>
                    <hr />
                </div>
            </section>
        </React.Fragment>
    )
}

export default SuggestACharity;