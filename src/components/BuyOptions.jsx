import { BsApple, BsSpotify } from "react-icons/bs";
import { FaAmazon, FaDeezer, FaItunesNote } from "react-icons/fa";

import { SiTidal } from "react-icons/si";

function BuyOptions({ active }) {
  return (
    <div className={`container-options ${active}`}>
      <a
        href="https://music.apple.com/us/artist/vo%C5%9F/1583875289"
        target="_blank"
        className="btn btn--option"
      >
        <div className="container-option">
          <FaItunesNote size={18} className="icon--component" />
          <span className="name-option-btn">iTunes</span>
        </div>
      </a>
      <a
        href="https://music.amazon.com/artists/B09F5KYTNW/voş?ref=dm_sh_oWjmMi53AFa05UFgDsZdFY59O"
        target="_blank"
        className="btn btn--option"
      >
        <div className="container-option">
          <FaAmazon size={18} className="icon--component" />
          <span className="name-option-btn">Amazon Music</span>
        </div>
      </a>
    </div>
  );
}

export default BuyOptions;
