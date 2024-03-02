import './footer.styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__content">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} PHOENIX WELLNESS AND RECOVERY. ALL
        RIGHTS RESERVED.
      </p>
    </div>
  </div>
);

export default Footer;
