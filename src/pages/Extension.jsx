import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import {Link} from "react-router-dom";

const Extension = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <p>
                    <Link to="https://chromewebstore.google.com/detail/forbidden-gdz/gjdmngheaapadgpddimanehmihikjlcp"
                          target="_blank">
                    <span>
                        ссылочка на расширение
                    </span>
                    </Link>
                </p>
            </main>
        </div>
    );
};

export default Extension;