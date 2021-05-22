import { Loader } from '@progress/kendo-react-indicators';
import React, { useEffect, useState } from 'react';
import DetailedCharityComponent from '../components/DetailedCharityComponent';

function Charity(props) {
    const { getNavType, match } = props;
    const { charityId } = match.params;
    
    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ charityDetails, setCharityDetails ] = useState(null);

    useEffect(() => {
        getNavType("other");

        getCharity();
    }, [charityId]);

    const getCharity = async () => {
        let url = `/api/charities/${charityId}`;


        try {
            const res = await fetch(url);
            const json = await res.json()

            if(!json.success) setError(json.message)
            else  {
                setCharityDetails(json.data)
                setIsLoaded(true)
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="container py-5">
            { !isLoaded &&
                <div className="text-center">
                    <Loader size="large" themeColor="dark" />
                </div>
            }

            { isLoaded && 
                <DetailedCharityComponent charityInfo={charityDetails} />
            }

            { error && 
                <div>
                    <p className="text-center">{error}</p>
                </div>
            }
        </div>
    )
}

export default Charity;