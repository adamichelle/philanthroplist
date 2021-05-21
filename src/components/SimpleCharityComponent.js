import { Card, CardTitle, CardImage, CardHeader, CardSubtitle } from '@progress/kendo-react-layout';
import React from 'react';
import { Link } from 'react-router-dom';

const SimpleCharityComponent = (props) => {
    const charity = props.dataItem;
    return (
        <div className="col-sm-12 col-md-4 mb-3">
            <Link className="card-link" to={`/charities/${charity.id}`}>
                <Card>
                    <CardImage src={charity.charity_image}
                        style={{
                            height: "200px",
                            maxWidth: "100%",
                          }}
                     />
                    <CardHeader
                        style={{
                            minHeight: "130px"
                        }}
                    >
                        <CardTitle>{charity.name}</CardTitle>
                        <CardSubtitle>
                            { charity.area_of_focus.map((area_of_focus, index)=> {
                                if(index === charity.area_of_focus.length - 1)
                                return area_of_focus;
                                else
                                return area_of_focus + ' | '
                            }) }
                        </CardSubtitle>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    )
}

export default SimpleCharityComponent;