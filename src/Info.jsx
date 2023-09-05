import React from "react"
import ProfilePic from "./assets/ProfilePic.png"
import MailPic from "./assets/Mail.png"
import LinkPic from "./assets/linkedin.png"


export default function Info(){
    return (<div className="info">
                <img src={ProfilePic} className="info-profilePic"/>
                <h1 className="info-name">Mathiw Rojas</h1>
                <h1 className="info-position">Frontend Developer</h1>
                <div className="info-Buttons">
                    <a href="mailto:matrj09@gmail.com"  className="info-emailButton">
                        <img src={MailPic} />
                        <p>Email</p>                        
                        </a>     
                         
                    <a href="https://linkedin.com/in/matrj08/" className="info-LinkButton">
                        <img src={LinkPic} />
                        <p>LinkedIn</p>    
                        </a>              
                </div>
    </div>)
}