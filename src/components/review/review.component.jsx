import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './review.styles.scss';

const Review = ({ review, inverted }) => {
  const { title, comment, stars, author } = review;
  const rating = [];

  for (let index = 0; index < stars; index++) {
    rating.push(
      <FontAwesomeIcon
        key={index}
        className="review__star"
        icon={['fas', 'star']}
        size="xs"
      />
    );
  }

  return (
    <div className={`review ${inverted ? 'review--inverted' : ''}`}>
      <div className="review__content">
        <div className="review__stars">{rating}</div>
        <h3 className="review__subject">{title}</h3>
        <p className="review__comment">{comment}</p>
        <h5 className="review__author">{author}</h5>
      </div>
    </div>
  );
};

export default Review;
