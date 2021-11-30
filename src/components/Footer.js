import React from "react";
import { FaFacebook,FaGithub,FaInstagram,FaDiscord } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <img
        className="ftImg"
        src="https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="img"
      />
      <div className="listCont">
        <ul className="ul">
          <li>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur
            adipisci[ng] velit, sed quia non numquam [do] eius modi tempora
            inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem.
          </li>
        </ul>
        <ul className="ul1">
          <li>Abdullah</li>
          <li>Carina</li>
          <li>Victor</li>
        </ul>

        <ul className="ul2">
          <li><FaFacebook size="2.5em" /></li>
          <li><FaGithub size="2.5em" /></li>
          <li><FaInstagram size="2.5em" /></li>
          <li><FaDiscord size="2.5em" /></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
