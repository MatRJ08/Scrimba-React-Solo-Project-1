import React from "react";
import GitPic from "./assets/GitHub_Icon.png"
import TwitterPic from "./assets/Twitter_Icon.png"
import LinkPic from "./assets/Linkedin Icon.png"

export default function Footer(){
    return(<div className="footer">
        <a href="https://twitter.com/MatPK_08">
            <img src={TwitterPic} />
        </a>
        <a href="https://linkedin.com/in/matrj08/">
            <img src={LinkPic} />
        </a>
        <a href="https://github.com/MatRJ08">
            <img src={GitPic} />
        </a>


    </div>)
}