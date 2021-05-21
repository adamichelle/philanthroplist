import { Pager } from '@progress/kendo-react-data-tools';
import { ListView } from "@progress/kendo-react-listview";
import React, { useEffect, useState } from 'react';
import SimpleCharityComponent from '../components/SimpleCharityComponent';

function CharitiesList(props) {
    console.log(props)
    const { charities, count, page, limit, getPage } = props;
    const skip = (page - 1) * limit;
    const [ selectedPage, setSelectedPage ] = useState(page)

    useEffect(() => {
        getPage(selectedPage)
    })

    const handlePageChange = (event) => {
        setSelectedPage(page)
        getPage(selectedPage)
    }

    return (
        <React.Fragment>
            <ListView data={charities} item={SimpleCharityComponent} className="p-k-listview mb-3" />
            <Pager
                skip={skip}
                take={limit}
                buttonCount={5}
                info={true}
                type={"numeric"}
                onPageChange={handlePageChange}
                total={count}
                className="p-k-pager-wrap"
            />
        </React.Fragment>
    )
}

export default CharitiesList;