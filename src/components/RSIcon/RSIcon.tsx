
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {  useContext, useState } from 'react';

import { ERSIcon } from '../../enums/ERSIcon';
import { 
    faGithub, faCuttlefish, faCss3Alt,
    faHtml5, faJsSquare, faPython,
    faRaspberryPi, faTwitter, faTwitch,
    faInstagram, faFacebook, faYoutube,
    faLinkedin, faGithubAlt, faUnity, faReact, faDiscord, faSpotify,

} from '@fortawesome/free-brands-svg-icons';
import { 
    faPlay, faFire, faDatabase,
    faRobot,
    faEllipsisH,
    faQuestionCircle,
    faLeaf,
    faLaptopCode,
    faBolt,
    faLink,
    faSeedling
 
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFileCode, faLightbulb

} from '@fortawesome/free-regular-svg-icons';

type RSIconProps = {
    iconName: ERSIcon,
}
function RSIcon(props: RSIconProps) {
    const {
        iconName
    } = props
    
    const getFontAwesomeIcon = () => {
        switch (iconName) {
            case ERSIcon.Github:
                return faGithub;
            case ERSIcon.CuttleFish:
                return faCuttlefish;
            case ERSIcon.CSS:
                return faCss3Alt; 
            case ERSIcon.HTML:
                return faHtml5;
            case ERSIcon.JsSquare: 
                return faJsSquare;
            case ERSIcon.Python:
                return faPython
            case ERSIcon.RaspberryPi:
                return faRaspberryPi;
            case ERSIcon.Twitter:
                return faTwitter
            case ERSIcon.Twitch:
                return faTwitch
            case ERSIcon.Instagram:
                return faInstagram;
            case ERSIcon.Facebook:
                return faFacebook;
            case ERSIcon.Youtube:
                return faYoutube;
            case ERSIcon.LinkedIn:
                return faLinkedin;
            case ERSIcon.Link:
                return faLink; 
            case ERSIcon.Unity:
                return faUnity;
            case ERSIcon.FileCode:
                return faFileCode;
            case ERSIcon.LightBulb:
                return faLightbulb;
            case ERSIcon.EllipsisH:
                return faEllipsisH;
            case ERSIcon.Play:
                return faPlay;
            case ERSIcon.Fire:
                return faFire;
            case ERSIcon.Database:
                return faDatabase;
            case ERSIcon.Robot:
                return faRobot;
            case ERSIcon.MongoDB:
                return faLeaf;
            case ERSIcon.OpenSCAD:
                return faFileCode;
            case ERSIcon.TypeScript:
                return faLaptopCode;
            case ERSIcon.React:
                return faReact;
            case ERSIcon.Bolt:
                return faBolt
            case ERSIcon.Other:
                return faLightbulb
            case ERSIcon.Discord:
                return faDiscord
            case ERSIcon.Spotify:
                return faSpotify
            case ERSIcon.Seedling:
                return faSeedling
            case ERSIcon.QuestionCircle:
                return faQuestionCircle;
            default:
                return faQuestionCircle;
        }
    }

    const icon = getFontAwesomeIcon(); 
    return (
        <FontAwesomeIcon icon={icon}/>
    )
}

export default RSIcon;

