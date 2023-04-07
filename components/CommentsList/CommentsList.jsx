import { Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { ButtonPrimary, ButtonText, Heading, Ptag, Rating } from '../common';

import { black700, black800, pinkPrimary } from '@/utils/const';

import HeartIcon from '@/assets/icons/heart.svg';

import { commentsData } from '@/utils/templateData';

import s from './CommentsList.module.scss';

const CommentItem = ({
  author,
  publishDate,
  rating,
  comment,
  likes,
  isAnswer = false,
  isCommentWithAnswer = false
}) => (
  <li className={cx(s.commentItem, { [s.commentItemAnswer]: isAnswer })}>
    <div className={s.commentItemTitle}>
      <Heading size="s">{author}</Heading>
      <Ptag size="m" color={black700}>
        {publishDate}
      </Ptag>
    </div>

    <Rating className={s.commentItemRating} rating={rating} />

    <Ptag className={s.commentItemComment} size="m" color={black800}>
      {comment}
    </Ptag>

    <div className={s.commentItemBottom}>
      <div className={s.commentItemLike}>
        <button className={s.commentItemButtonLike}>
          <HeartIcon />
        </button>

        <Ptag size="m" color={pinkPrimary}>
          {likes} Підтримали
        </Ptag>
      </div>

      {isCommentWithAnswer && (
        <ButtonText
          className={s.commentItemToggleAnswersButton}
          appearance="pink"
        >
          Сховати відповіді
        </ButtonText>
      )}

      {!isAnswer && (
        <ButtonPrimary className={s.commentItemAnswerButton} appearance="grey">
          Відповісти
        </ButtonPrimary>
      )}
    </div>
  </li>
);

export const CommentsList = ({ className }) => {
  return (
    <ul className={cx(s.commentsList, className)}>
      {commentsData.map(({ answers, id, ...comment }) => (
        <Fragment key={id}>
          <CommentItem {...comment} isCommentWithAnswer={!!answers.length} />
          {answers.length > 0 &&
            answers.map((c) => <CommentItem {...c} isAnswer key={c.id} />)}
        </Fragment>
      ))}
    </ul>
  );
};

CommentsList.propTypes = {
  className: PropTypes.string
};
