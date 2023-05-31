import React from "react";
import Title from "../assets/images/numbofjoy.png"

function NumbOfJoy() {
    return (
        <section className="text-center">
            <img src={Title} alt="numb-of-joy" id="title"/>
            <h1>On Death and Dying</h1>
            <div>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </section>

    );
}

export default NumbOfJoy;