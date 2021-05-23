import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { capitalize } from 'lodash';

function DetailedCharityComponent(props) {
    const { charityInfo } = props;
    console.log(charityInfo);
    
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="p-charity-image-container text-center mb-2" style={{
                    background: `url(${charityInfo.charity_image.stringValue})  no-repeat center center`,
                    backgroundSize: 'cover',
                    height: 400,
                    maxWidth: '100%'
                }}>
                    <div className="text-center p-charity-involvement-options">
                        <h2 className="text-center text-white font-weight-bold">How to get Involved</h2>
                        { charityInfo.involvement_options.arrayValue.values.map((option, index)=> {
                            let involvementOptionLink;

                            if(option.stringValue === 'donations' || option.stringValue === 'Donations') {
                            involvementOptionLink = charityInfo.donation_link.stringValue;
                            }
                            else if((option.stringValue === 'volunteering' || option.stringValue === 'Volunteering') && charityInfo.volunteering_info) {
                            involvementOptionLink = charityInfo.volunteering_info.stringValue;
                            }
                            else {
                                involvementOptionLink = charityInfo.contact.stringValue
                            }

                            return <a key={index} href={involvementOptionLink} target="__blank" className="btn p-btn-gold mr-2 mb-2">{capitalize(option.stringValue)}</a>;
                        }) }
                    </div>
                    <div className="color-overlay p-charity-image-overlay"></div>
                </div>

                <h1>{charityInfo.name.stringValue}</h1>
                <p className="p-text-gold font-weight-bold">
                    { charityInfo.area_of_focus.arrayValue.values.map((area_of_focus, index)=> {
                        if(index === charityInfo.area_of_focus.arrayValue.values.length - 1)
                            return area_of_focus.stringValue;
                        else
                            return area_of_focus.stringValue + ' | '
                    }) }
                </p>
                <p className="mb-0">CAC Registration: { charityInfo.cac_reg_no.stringValue.length > 0 ? charityInfo.cac_reg_no.stringValue : "NA" }</p>
                <p>Other Registration Information: { charityInfo.additional_reg_info.stringValue.length > 0 ? charityInfo.additional_reg_info.stringValue: "NA" }</p>
                
                <p className="mb-0"><FontAwesomeIcon icon="map-marker-alt" className="p-text-greyish-green mr-2" />{ charityInfo.address.stringValue }</p>
                <p className="mb-0"><FontAwesomeIcon icon="at" className="p-text-greyish-green mr-2" />{ charityInfo.email.stringValue }</p>
                <p className="mb-0"><FontAwesomeIcon icon="phone-alt" className="p-text-greyish-green mr-2" />{ charityInfo.phone.stringValue }</p>
                <p><FontAwesomeIcon icon="link" className="p-text-greyish-green mr-2" /> <a target="__blank" href={ charityInfo.website.stringValue } className="p-text-golden-yellow font-weight-bold">{charityInfo.name.stringValue}</a></p>

                <h2>Description <span className="p-text-golden-yellow">*</span></h2>
                <p>{ charityInfo.description.stringValue }</p>

                <p className="p-description-footnote font-weight-bold"><span className="p-text-golden-yellow">*</span> Some descriptions and images have been culled from the information provided by the charity's website.</p>

                <br />

                <h2>Socials</h2>
                <p>See what {charityInfo.name.stringValue} has been up to on their social feed.</p>
                <div className="d-flex">
                    { charityInfo.facebook_url.stringValue.length > 0 &&
                        <a target="__blank" className="p-text-greyish-brown mr-3" href={charityInfo.facebook_url.stringValue}><span className="p-sr-only">Facebook</span> <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" /></a>
                    }

                    
                    { charityInfo.ig_url.stringValue.length > 0 &&
                        <a target="__blank" className="p-text-golden-yellow mr-3" href={charityInfo.ig_url.stringValue}><span className="p-sr-only">Instagram</span> <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" /></a>
                    }

                    
                    { charityInfo.twitter_url.stringValue.length > 0 &&
                        <a target="__blank" className="p-text-greyish-brown mr-3" href={charityInfo.twitter_url.stringValue}><span className="p-sr-only">Twitter</span> <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" /></a>
                    }

                    
                    { charityInfo.linkedin_url.stringValue.length > 0 &&
                        <a target="__blank" className="p-text-golden-yellow" href={charityInfo.linkedin_url.stringValue}><span className="p-sr-only">LinkedIn</span> <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" /></a>
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailedCharityComponent;