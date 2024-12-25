import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import {Link} from "react-router-dom";
import Finder from "../components/Finder";
import ExtensionAnswer from "../components/ExtensionAnswer";

const Extension = () => {
    const [url, setUrl] = useState('')


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
                <Finder placeholder="Введите URL задания" callback={(text) => setUrl(text)}/>
                {url !== '' &&
                    <ExtensionAnswer url={url}/>
                }
            </main>
        </div>
    );
};

export default Extension;