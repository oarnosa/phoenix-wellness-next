import Image from 'next/image';

import './profile.styles.scss';

const Profile = ({ name, image, children, inverted }) => (
  <div className={`team__member ${inverted ? 'team__member--inverted' : ''}`}>
    <div className="team__image--container">
      <Image
        className="team__image"
        src={image}
        alt={name}
        width={450}
        height={500}
      />
    </div>
    <div className="team__info">
      <h1>{name}</h1>
      <p>{children}</p>
    </div>
  </div>
);

export default Profile;
