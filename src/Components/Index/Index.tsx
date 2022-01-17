import LoginPage from "../Login/LoginPage";
import React, { Fragment } from 'react'


export default function IndexPage() {

    return (
        <div>
            <Fragment>
                <div>

                    <link rel="preconnect" href="https://fonts.gstatic.com/" />
                    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />

                    <body>
                        <style>
                            .quotes &lbrace;display: nonee&rbrace;
                            .test_header &lbrace;min - height: 400px&rbrace;
                        </style>

                        <header id="home">
                            <div className="row">


                                <div className="container">
                                    <div className="col-md-12 col-xs-12 col-sm-12 zero_padd">
                                        <div className="stories_lead row">

                                            <div className="col-md-6 col-xs-12 col-sm-12 zero_padd">
                                                <div className="story_leader">
                                                    <div className="center_head">
                                                        <img src="../../Assets/NDLogo.png" className="logo" alt="Namba Doctor" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xs-12 col-sm-12 zero_padd">
                                                <div className="story_view">
                                                    <img src="../../Assets/NDLogo.png" className="banner_img" alt="Namba Doctor" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </header>

                    </body>

                </div>
            </Fragment>

            <div>

                <LoginPage />
            </div>

        </div>


    );


}