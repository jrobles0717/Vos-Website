import { BsApple, BsSpotify } from "react-icons/bs";
import { FaAmazon, FaDeezer } from "react-icons/fa";

import { SiTidal } from "react-icons/si";

function StreamOptions({ active }) {
  return (
    <div className={`container-options ${active}`}>
      <a
        href="https://open.spotify.com/artist/1D11d1x5X1HQ9govpTp5On?si=GWRNNaKLT5OcztppEqqXUA&nd=1"
        target="_blank"
        className="btn btn--option"
      >
        <div className="container-option">
          <BsSpotify size={18} className="icon--component" />
          <span className="name-option-btn">Spotify</span>
        </div>
      </a>
      <a
        href="https://music.apple.com/us/artist/vo%C5%9F/1583875289"
        target="_blank"
        className="btn btn--option"
      >
        <div className="container-option">
          <BsApple size={18} className="icon--component" />
          <span className="name-option-btn">Apple Music</span>
        </div>
      </a>
      <a
        href="https://www.deezer.com/us/artist/145435142?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=mobile&utm_content=artist-145435142&deferredFl=1"
        target="_blank"
        className="btn btn--option"
      >
        <div className="container-option">
          <FaDeezer size={18} className="icon--component" />
          <span className="name-option-btn">Deezer</span>
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
      <a
        href="https://tidal.com/browse/artist/28195438"
        target="_blank"
        className="btn btn--option"
      >
        <div className="container-option">
          <SiTidal size={18} className="icon--component" />
          <span className="name-option-btn">Tidal</span>
        </div>
      </a>
    </div>
  );
}

export default StreamOptions;
