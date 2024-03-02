import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import LogoEmblem from '@/assets/logo-emblem.svg';
import LogoTextLight from '@/assets/logo-text-light.svg';
import reviewsData from '@/assets/reviews.data.json';
import Carousel from '@/components/carousel/carousel.component';
import Plan from '@/components/plan/plan.component';
import Profile from '@/components/profile/profile.component';
import Review from '@/components/review/review.component';

import './page.styles.scss';

const Home = () => (
  <div className="home">
    {/* LANDING */}
    <section className="home__landing" id="landing">
      <div className="landing__content">
        <div className="landing__brand">
          <Image
            src={LogoEmblem}
            className="landing__brand-emblem"
            alt="Phoenix Logo Emblem"
            loading="eager"
          />
          <Image
            src={LogoTextLight}
            className="landing__brand-name"
            alt="Phoenix Logo Text Light"
            loading="eager"
          />
        </div>
        <div className="landing__socials">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="landing__icon-wrapper"
          >
            <FontAwesomeIcon
              className="landing__icon"
              icon={['fab', 'facebook']}
            />
          </a>
          <a
            href="https://www.instagram.com/phxrecover"
            target="_blank"
            className="landing__icon-wrapper"
          >
            <FontAwesomeIcon
              className="landing__icon"
              icon={['fab', 'instagram']}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/phxrecover"
            target="_blank"
            className="landing__icon-wrapper"
          >
            <FontAwesomeIcon
              className="landing__icon"
              icon={['fab', 'linkedin-in']}
            />
          </a>
        </div>
        <Link
          className="landing__session"
          href="https://square.site/book/LF1SNP6G13F24/phoenix-wellness-recovery-miami-fl"
          target="_blank"
        >
          BOOK A SESSION
        </Link>
      </div>
    </section>
    {/* END LANDING */}

    {/* MISSION */}
    <section className="home__mission" id="mission">
      <div className="mission__content">
        <div className="mission__headline">
          <h3 className="mission__headline-tag">OUR MANTRA</h3>
          <h2 className="mission__headline-phrase">
            REBUILD. RECOVER. REBORN.
          </h2>
        </div>
        <div className="mission__statement">
          <p>
            At Phoenix Wellness and Recovery, our mission is to deliver
            exceptional physical recovery and wellness experiences through the
            fusion of cutting-edge technology, a modern facility, and a highly
            skilled professional team. Our state-of-the-art clinic is equipped
            with advanced rehabilitation tools, biofeedback systems, and
            innovative assistive devices. These high-tech resources enable us to
            create personalized treatment plans tailored to each
            individual&#39;s needs, maximizing their recovery potential.
          </p>
          <p>
            Our team of therapists are dedicated to excellence in their fields.
            With their extensive knowledge and expertise, they harness the power
            of our advanced equipment to deliver top-quality care. Whether
            it&#39;s optimizing functionality in sports, weightlifting, or
            everyday life, we strive to empower our clients to reach their
            wellness goals and enhance their overall quality of life. At Phoenix
            Wellness and Recovery, we are committed to providing the highest
            level of care, utilizing cutting-edge technology, and supporting our
            clients on their journey to optimal physical well-being.
          </p>
        </div>
      </div>
    </section>
    {/* END MISSION */}

    {/* VIDEO */}
    <section className="home__gallery" id="gallery">
      <div className="gallery__video--container">
        <iframe
          title="Phoenix Wellness & Recover Promotional Video"
          className="gallery__video"
          src="https://www.youtube.com/embed/eJor1EibF4I?start=3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    {/* END VIDEO */}

    {/* TEAM */}
    <section className="home__team" id="team">
      <div className="team__content">
        <div className="team__headline">
          <h3 className="team__headline-tag">OUR TEAM</h3>
          <h2 className="team__headline-phrase">
            CERTIFIED PROFESSIONAL EXPERTS.
          </h2>
        </div>
        <Profile name={'DANNY'} image={'/images/team/profile-danny.jpg'}>
          Meet Danny, an orthopedic specialized occupational therapist, with
          experience in outpatient ortho and body mechanics. Danny understands
          the importance of proper recovery from the daily stress sports or
          physical activity can put on muscles of the body. Danny utilizes
          evidence-based practice and techniques to provide the highest quality
          recovery possible, to get you back to doing what you love as quickly
          as possible.
        </Profile>
        <Profile
          name={'VICKY'}
          image={'/images/team/profile-vicky.jpg'}
          inverted
        >
          Meet Vicky, a dedicated and highly skilled physical therapist
          specializing in manual therapy and sports performance. With a passion
          for optimizing movement and enhancing athletic capabilities, Vicky
          brings a wealth of expertise to the field. Through hands-on manual
          therapy techniques, she focuses on promoting joint mobility, reducing
          pain, and improving overall musculoskeletal function.
        </Profile>
        <Profile name={'MADISON'}>
          As the social media and office manager at our therapy clinic, Madison
          stands out for her exceptional customer service skills and commitment
          to client satisfaction. With a warm and attentive approach, she
          ensures that every clients experience is positive and seamless.
          Madison consistently prioritizes client schedules, making it a
          priority to accommodate their preferences and needs when booking
          visits, reflecting her dedication to providing a personalized and
          client-centric experience at our clinic.
        </Profile>
      </div>
    </section>
    {/* END TEAM */}

    {/* PLANS */}
    <section className="home__plans" id="plans">
      <div className="plans__content">
        <h3 className="plans__headline-tag">OUR PLANS</h3>
        <div className="plans__offers">
          <Plan icon="/images/plans/plan-bronze.svg" name="BRONZE">
            <li>
              Schedule <b>1</b> &#8212; 1 hour sessions a month including:
            </li>
            <ul className="plan__list-sub">
              <li>Manual Treatment With Problem Area Focus</li>
              <li>Active Assitive Range of Motion (AAROM) Stretching</li>
              <li>Trigger Point Treatment</li>
              <li>Percussion Drill Massage</li>
              <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
            </ul>
            <p className="plan__center">AND</p>
            <li>Select a specialized service including:</li>
            <ul className="plan__list-sub">
              <li>Cold Plunge Ice Bath</li>
              <li>
                Pneumatic Compression Device (Arms, Legs, Hip, Lower Back)
              </li>
              <li>Temperature Contrast Technology/Modalities</li>
            </ul>
          </Plan>
          <Plan special icon="/images/plans/plan-gold.svg" name="GOLD">
            <li>
              Schedule <b>3</b> &#8212; 1 hour sessions a month including:
            </li>
            <ul className="plan__list-sub">
              <li>Manual Treatment With Problem Area Focus</li>
              <li>Active Assitive Range of Motion (AAROM) Stretching</li>
              <li>Trigger Point Treatment</li>
              <li>Percussion Drill Massage</li>
              <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
            </ul>
            <p className="plan__center">AND</p>
            <li>Select a specialized service including:</li>
            <ul className="plan__list-sub">
              <li>Cold Plunge Ice Bath</li>
              <li>
                Pneumatic Compression Device (Arms, Legs, Hip, Lower Back)
              </li>
              <li>Temperature Contrast Technology/Modalities</li>
            </ul>
          </Plan>
          <Plan icon="/images/plans/plan-silver.svg" name="SILVER">
            <li>
              Schedule <b>2</b> &#8212; 1 hour sessions a month including:
            </li>
            <ul className="plan__list-sub">
              <li>Manual Treatment With Problem Area Focus</li>
              <li>Active Assitive Range of Motion (AAROM) Stretching</li>
              <li>Trigger Point Treatment</li>
              <li>Percussion Drill Massage</li>
              <li>Instrument Assisted Soft Tissue Mobilization (IASTM)</li>
            </ul>
            <p className="plan__center">AND</p>
            <li>Select a specialized service including:</li>
            <ul className="plan__list-sub">
              <li>Cold Plunge Ice Bath</li>
              <li>
                Pneumatic Compression Device (Arms, Legs, Hip, Lower Back)
              </li>
              <li>Temperature Contrast Technology/Modalities</li>
            </ul>
          </Plan>
        </div>
      </div>
    </section>
    {/* END PLANS */}

    {/* EQUIPMENT */}
    <section className="home__equipment" id="equipment">
      <div className="equipment__content">
        <div className="equipment__wrapper">
          <Carousel
            images={[
              '/images/equipment/compress_1.jpg',
              '/images/equipment/compress_2.jpg',
              '/images/equipment/compress_3.jpg',
            ]}
          />
          <div className="equipment__info">
            <h2>PNEUMATIC COMPRESSION</h2>
            <p>
              Experience our Pneumatic Compression Therapy, a sophisticated
              solution for precision-focused physical rehabilitation. Utilizing
              controlled air pressure, our devices prioritize targeted recovery,
              pain reduction, and overall well-being.
            </p>
          </div>
        </div>
        <div className="equipment__wrapper equipment__wrapper--inversed">
          <div className="equipment__info">
            <h2>TEMPERATURE CONTRAST</h2>
            <p>
              Discover the tailored therapeutic benefits of our Temperature
              Contrast Devices (TCDs) offering precise temperature control,
              optimizing recovery, reducing inflammation, and promoting overall
              wellness.
            </p>
          </div>
          <Carousel
            images={[
              '/images/equipment/temp_1.jpg',
              '/images/equipment/temp_2.jpg',
              '/images/equipment/temp_3.jpg',
              '/images/equipment/temp_4.jpg',
            ]}
          />
        </div>
        <div className="equipment__wrapper">
          <Carousel />
          <div className="equipment__info">
            <h2>Cold Plunge</h2>
            <p>
              Immerse yourself in our cold water plunge to trigger
              vasoconstriction, combating inflammation and muscle soreness. The
              benefits extend to improved circulation, heightened alertness, and
              increased energy levels. Dive into the practice that enhances
              physical performance and supports a healthy lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* END EQUIPMENT */}

    {/* REVIEWS */}
    <section className="home__reviews" id="reviews">
      <div className="reviews__content">
        <div className="reviews__headline">
          <h3 className="reviews__headline-tag">OUR CUSTOMERS</h3>
          <h2 className="reviews__headline-phrase">
            REAL PEOPLE. REAL RESULTS.
          </h2>
        </div>
        <div className="reviews__testimonials">
          {reviewsData.map((review) => (
            <Review
              key={review.id}
              review={review}
              inverted={review.id % 2 !== 0 ? '' : 'inverted'}
            />
          ))}
        </div>
        <Link
          className="reviews__more"
          href="https://shorturl.at/rIMPU"
          target="_blank"
        >
          SEE MORE REVIEWS
        </Link>
      </div>
    </section>
    {/* END REVIEWS */}

    {/* CONTACT */}
    <section className="home__contact" id="contact">
      <div className="contact__content">
        <div className="contact__section">
          <div className="contact__headline">
            <h3 className="contact__headline-tag">OUR INFO</h3>
            <h2 className="contact__headline-phrase">CONTACT US.</h2>
          </div>
          <p className="contact__statement">
            Your convenience is our top priority. At Phoenix we bring our
            service and equipment to you whether it is at home, work, or
            anywhere else at a time most convenient to you. Reach out to us via
            phone, email, or social media and book a session today.
          </p>
        </div>
        <div className="contact__info">
          <div className="contact__location">
            <h5>LOCATION</h5>
            <h5>
              <Link
                href="https://goo.gl/maps/yC1v9CaS3rTSiL6t7"
                target="_blank"
              >
                14360 SW 139TH CT MIAMI, FL 33186
              </Link>
              <br />
              WEEKDAYS 8AM - 9PM
            </h5>
          </div>
          <div className="contact__phone">
            <h5>PHONE</h5>
            <Link href="tel:7863026104">(786) 302 6104</Link>
          </div>
          <div className="contact__email">
            <h5>EMAIL</h5>
            <Link href="mailto:phxrecover@gmail.com">PHXRECOVER@GMAIL.COM</Link>
          </div>
          <div className="contact__socials">
            <h5>SOCIALS</h5>
            <div className="contact__icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="contact__icon-wrapper"
              >
                <FontAwesomeIcon
                  className="contact__icon"
                  icon={['fab', 'facebook']}
                />
              </a>
              <a
                href="https://www.instagram.com/phxrecover"
                target="_blank"
                className="contact__icon-wrapper"
              >
                <FontAwesomeIcon
                  className="contact__icon"
                  icon={['fab', 'instagram']}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/phxrecover"
                target="_blank"
                className="contact__icon-wrapper"
              >
                <FontAwesomeIcon
                  className="contact__icon"
                  icon={['fab', 'linkedin-in']}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__session-wrapper">
          <Link
            className="contact__session"
            href="https://square.site/book/LF1SNP6G13F24/phoenix-wellness-recovery-miami-fl"
            target="_blank"
          >
            BOOK A SESSION
          </Link>
        </div>
      </div>
    </section>
    {/* END CONTACT */}
  </div>
);

export default Home;
