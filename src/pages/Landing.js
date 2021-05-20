import React, { useEffect, useState } from 'react';
import { getRandomNElements } from '../utils/helpers';
import { areasOfFocus } from '../data/areas_of_focus'
import CategoryComponent from '../components/CategoryComponent';
import SimpleCharityComponent from '../components/SimpleCharityComponent';

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
                    const featuredCharities = getRandomNElements(json.data, 3)
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
            return charities.map((charity, e) => {
                return <SimpleCharityComponent key={e} charity={charity} page={"landing"} />
            });
        }
        else if(error) {
            return <div className="">
                <p className="text-center">An error occured</p>
            </div>;
        }
    }

    return(
        <React.Fragment>
            { isLoaded && <section className="featured-charities">
                <h2 className ="mb-4 text-center">Featured Charities</h2>
                <div className="container-fluid pb-5">

                        <div className="row py-2 px-5">
                            { renderCharities() }
                        </div>
                </div>

                <hr className="special"></hr>
            </section> }

            <section className="featured-areas-of-focus">
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