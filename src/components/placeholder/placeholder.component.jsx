import Image from 'next/image';

import './placeholder.styles.scss';

import LogoEmblem from '@/assets/logo-emblem.svg';

const Placeholder = () => (
  <div className="placeholder">
    <Image
      src={LogoEmblem}
      className="placeholder-logo"
      alt="Phoenix Logo Emblem"
      loading="eager"
    />
    <p className="placeholder-text">Coming Soon</p>
  </div>
);

export default Placeholder;
