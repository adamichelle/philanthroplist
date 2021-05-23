import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <div className='container py-5 pb-1'>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <h1 className="p-title">Philanthroplist</h1>
                        <ul className="" style={{   
                                listStyleType: 'none',
                                padding: 0,
                                margin: 0,
                                display: "flex",
                            }}>
                                <li className="mr-3"><Link to="/about">About</Link></li>
                                <li><p>&copy; 2021 Philanthroplist</p></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="d-flex">
                            <Link to="/charities" className="btn font-weight-bold p-btn-gold ml-lg-auto">Get Started</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="attribution-links">
                    <p>Photo by <a target="__blank" href="https://unsplash.com/@kattyukawa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Katt Yukawa</a> on <a href="https://unsplash.com/s/photos/charities?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    <p>Photo by <a target="__blank" href="https://unsplash.com/@_mrjn_esf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">mrjn Photography</a> on <a href="https://unsplash.com/s/photos/water?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    <p>Icons made by <a target="__blank" href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                    <p>Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                    <p>Icons made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">bqlqn</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;