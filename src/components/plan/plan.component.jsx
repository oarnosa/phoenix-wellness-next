import Image from 'next/image';
import Link from 'next/link';

import './plan.styles.scss';

const Plan = ({ special, icon, name, children }) => (
  <div className={`plan ${special ? 'plan--special' : ''}`}>
    {special && <h4 className="plan--deal">MOST POPULAR</h4>}
    <div className="plan__content">
      <Image
        className="plan__icon"
        src={icon}
        alt={name}
        width={90}
        height={90}
      />
      <h3 className="plan__title">{name}</h3>
      <ul className="plan__list">{children}</ul>
    </div>
    <Link
      className="plan__book"
      target="_blank"
      href="https://square.site/book/LF1SNP6G13F24/phoenix-wellness-recovery-miami-fl"
    >
      BOOK NOW
    </Link>
  </div>
);

export default Plan;
