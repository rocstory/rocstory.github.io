import React, { useEffect, useState } from 'react';
import "./Header.css";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import {db} from '../../firebase';

import HeaderBody from "./HeaderBody/HeaderBody";
import ContactLinks from "./ContactLinks/ContactLinks";
import Nav from "./Nav/Nav";
// import Nav from "./Nav/Nav";

function Header(props)
{
    const [socialButtons, setSocialButtons] = useState(null);
    const {selected, handleChange} = props

    useEffect(()=>{
        db.collection('contactLinks').get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            let socialMediaButtons = null;
            socialMediaButtons = data.map((social) => <SocialMediaButton key={social.type} link={social} /> );
            setSocialButtons(socialMediaButtons);
        });
    }, [])
    
    return (
        <div className="header">
            <HeaderBody />
            <ContactLinks socialButtons={socialButtons}/>
            <Nav selected={selected} handleChange={handleChange}/>
        </div>
    )
}

export default Header;
