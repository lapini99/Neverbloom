import React from "react";
import Lady from "../assets/images/Bliss.jpeg";
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollTrigger from "react-scroll-trigger";
import {MDBCol} from "mdb-react-ui-kit";
import "../../src/custom.css";


function WhatIsMobile() {
    const handleScrollEnterLeft = () => {
        const element = document.getElementById("content");
        element.classList.add("fade-in-left");
    }

    const handleScrollEnterRight = () => {
        const element = document.getElementById("content-right");
        element.classList.add("fade-in-right");
    }

    return (
        <MDBCol>
                <MDBCol className="custom-column">
                    <ScrollTrigger onEnter={handleScrollEnterLeft}>
                        <div id="content">
                            <h1>Bargaining?</h1>
                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente aperiam porro delectus ducimus ad laborum amet,
                                error quibusdam deleniti distinctio nesciunt natus,
                                asperiores rem doloribus blanditiis temporibus consequatur ipsa? Mollitia.
                            </p>
                        </div>
                    </ScrollTrigger>
                    <img src={Lady} alt="lady" id="lady-of-woe" className="figure" />
                </MDBCol>
                <MDBCol className="custom-column">
                    <ScrollTrigger onEnter={handleScrollEnterRight}>
                        <div id="content-right">
                            <h1>Anger?</h1>
                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente aperiam porro delectus ducimus ad laborum amet,
                                error quibusdam deleniti distinctio nesciunt natus,
                                asperiores rem doloribus blanditiis temporibus consequatur ipsa? Mollitia.
                            </p>
                        </div>
                    </ScrollTrigger>
                </MDBCol>
                <MDBCol className="custom-column">
                    <img src={Lady} alt="lady" id="lady-of-woe" className="figure" />
                </MDBCol>
            <br />
            <section className="text-center" id="gallery">
                <h1>GALLERY</h1>
                <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aliquid,
                    eaque cum id accusamus perspiciatis temporibus autem quaerat deserunt
                    quidem dolorem molestiae, quibusdam dignissimos, nobis eius consequuntur obcaecati quo aperiam?
                </p>
            </section>

        </MDBCol>
    );
}

export default WhatIsMobile;