import React, { useEffect, useState } from 'react';
import { areasOfFocus } from '../data/areas_of_focus';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { filterBy } from "@progress/kendo-data-query";
import { Loader } from "@progress/kendo-react-indicators";
import CharitiesList from '../components/CharitiesList';

function Charities(props) {
    const { getNavType } = props;

    const areasOfFocusNames = areasOfFocus.map(area => area.name);
    const limit = 5;

    const [ values, setValues ] = useState([]);
    const [ options, setOptions ] = useState(areasOfFocusNames.slice());
    const [ page, setPage ] = useState(1);
    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ charitiesArray, setCharitiesArray ] = useState([]);
    const [ count, setCount ] = useState(0);

    const getPage = (page) => {
        setPage(page)
    }

    useEffect(() => {
        getNavType("other");

        getCharities()
    }, [values]);

    const getCharities = async () => { 
        let url = `/api/getCharities?page=${page}&limit=${limit}`;
        
        if(values.length > 0) {
            let valuesQuery = new URLSearchParams();
            values.forEach(value => {
                valuesQuery.append('area_of_focus', value)
            })

            url += "&" + valuesQuery.toString()
        }

        try {
            const res = await fetch(url);
            const json = await res.json()

            if(!json.success) setError(json.message)
            else  {
                setCharitiesArray(json.data.charities)
                setCount(json.data.total)
                setIsLoaded(true)
            }
        } catch (error) {
            setError(error.message)
        }
    }

    const filterChange = (event) => {
        const newOptions = filterBy(areasOfFocusNames.slice(), event.filter)
        setOptions(newOptions)
    };

    const handleChange = (event) => {
        setValues(event.value);
    };

    return (
        <React.Fragment>
            <section className="filters">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <MultiSelect
                                data={options}
                                onChange={handleChange}
                                filterable={true}
                                onFilterChange={filterChange}
                                label="Area of Focus"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="charities-list">
                <div className="container py-5">
                    { !isLoaded && 
                        <div className="text-center">
                            <Loader size="large" themeColor="dark" />
                        </div>
                    }

                    { isLoaded &&
                        <CharitiesList charities={charitiesArray} count={count} page={page} limit={limit} getPage={getPage} />
                    }

                    { error &&
                        <div>
                            <p className="text-center">{error}</p>
                        </div>
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default Charities;