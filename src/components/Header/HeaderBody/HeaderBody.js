    import React , {useEffect, useState} from 'react';
import {db} from '../../../firebase';

import icon from "../../../assets/profpic.jpg";
import "./HeaderBody.css";
import Flip from 'react-reveal/Flip';

function HeaderBody(props)
{
    const [description, setDescription] = useState('')

    useEffect(()=>{
        db.collection('introduction').get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            let descrData = data[0];
            setDescription(descrData.description);
        });
    }, [])


    let nameStyle =
    {
        color: "#ffc125",
        textAlign: "center",
        margin: 0,
    }

    return (
        <div className="header-body-container">
            <Flip top>
                <div className="imgContainer-circle profile-img">
                    <img src={icon} alt="profile"/>
                </div>
            </Flip>
            

            <div className="header-body-summary">
                <h1 style={nameStyle}>Malik Roc</h1>
                <h3 className="pronunciation" style={{textAlign: "center", margin: 0}}>(muh-leek rock)</h3>

                <div className="header-descr">
                    {`${description}`}
                </div>
            </div>
        </div>
    )
};

export default HeaderBody;