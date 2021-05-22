import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, CardBody, CardTitle } from '@progress/kendo-react-layout';
import React from 'react';

function CategoryComponent(props) {
    const { category } = props;

    return(
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <a className="card-link" href={`/area-of-focus/${category.name}`}>
                <Card className="py-4"
                    style={{
                        boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
                    }}
                >
                    <CardBody className="text-center">
                        <Avatar type={category.iconType} size="large" shape="circle" themeColor="inherit" className="mr-0">
                            {category.iconType === "image" && 
                                <img src={category.icon} alt={category.name} style={{
                                    width: 35,
                                    height: 35,
                                }} />
                            }
                            
                            {category.iconType === "icon" && <FontAwesomeIcon icon={category.icon} size="2x" />}
                        </Avatar>
                        <CardTitle className="p-text-gold">
                            {category.name}
                        </CardTitle>
                    </CardBody>
                </Card>
            </a>
        </div>
    )
}

export default CategoryComponent;