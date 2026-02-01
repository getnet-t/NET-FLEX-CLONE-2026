import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import "./footer.css"

function Footer() {
  return (
    <>
    <div>
        <div className="Aouterfoterraper">
          <div className="footreimage">
        <ul className="footereroper">
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><IoLogoYoutube/></li>
        </ul>
        </div>
        </div>
        <div className="footercover">
        <div className="footergraund">
          <ul>
            <div className="fiirstcolem">
            <li>Aoudio &description</li>
            <li>INVENTER relationshipe </li>
            <li>Leagal notes</li>
            <li>servise code </li>
            <li>e920</li>
           </div>
           <div className="secondcolem">
            <li>help center</li>
            <li>job</li>
            <li>kcookise preference</li>
            </div>
            <div className="therdcolem">
            <li>gift code</li>
            <li>term the use</li>
            <li>corporate infomation</li>
            </div>
            <div className="fourthcolem">
            <li>Media center</li>
            <li>coporate </li>
            <li>privacy</li>
            </div>
            </ul>
            </div>
        </div>
    </div>
    </>
      
    
  )
}

export default Footer
