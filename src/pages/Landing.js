import { ListView } from "@progress/kendo-react-listview";
import React, { useEffect, useState } from 'react';
import { getRandomNElements } from '../utils/helpers';
import { areasOfFocus } from '../data/areas_of_focus'
import { CategoryComponent, SimpleCharityComponent } from '../components';

function Landing(props) {
    const { getNavType } = props;

    const featuredCategories = getRandomNElements(areasOfFocus, 3);

    const [ charities , setCharities ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        getNavType("landing");

        async function getCharities() { 
            try {
                const res = await fetch('/api/getCharities?page=1&limit=10');
                const json = await res.json()

                if(!json.success) setError(json.message)
                else  {
                    const featuredCharities = getRandomNElements(json.data.charities, 3)
                    setCharities(featuredCharities);
                    setIsLoaded(true)
                }
            } catch (error) {
                setError(error.message)
            }
        }

        getCharities();
    }, [getNavType])


    const renderCategories = () => {
        return featuredCategories.map((category, key) => {
            return <CategoryComponent key={key} category={category} />
        })
    }

    const renderCharities = () => {
        if(isLoaded && charities && (typeof charities != "string") && charities.length > 0) {
            return <ListView data={charities} item={SimpleCharityComponent} className="p-k-listview py-2 px-5" />
        }
        else if(error) {
            return <div className="">
                <p className="text-center">An error occured</p>
            </div>;
        }
    }

    return(
        <React.Fragment>
            { isLoaded && <section className="featured-charities pt-5">
                <h2 className ="my-4 text-center">Featured Charities</h2>
                <div className="container-fluid pb-5">
                    { renderCharities() }
                </div>

                <hr className="special"></hr>
            </section> }

            <section className={`featured-areas-of-focus${isLoaded ? "" : " pt-5 "}`}>
                <h2 className ="mb-4 text-center">Featured Areas of Focus</h2>
                <div className="container-fluid pb-5 mb-5">

                    <div className="row py-2 px-5">
                        { renderCategories() }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Landing;