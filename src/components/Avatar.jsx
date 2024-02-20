import PropTypes from "prop-types";
import "../styles/Avatar.scss";
import AvatarImg from "../images/person_avatar.svg";

const Avatar = ({ className, src, alt }) => {
  const handleOnError = (e) =>{
    e.target.src = AvatarImg;
  }
  return (
    <div>
      {src ? (
        <img className={`defaultClass ${className}`} src={src} alt={alt} onError={handleOnError}/>
      ) : (
        <img
          className={`defaultClass ${className}`}
          src={AvatarImg}
          alt={alt}
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.any,
  className: PropTypes.any,
};

export default Avatar;
