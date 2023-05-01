import { Fragment, useCallback, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { ButtonPrimary, ButtonText, Heading, Ptag, Rating } from '../common';

import { black700, black800 } from '@/utils/const';

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
  isCommentWithAnswer = false,
  isShowAnswers = false,
  id,
  onToggleVisibileAnswers = () => {}
}) => (
  <li
    className={cx(s.commentItem, {
      [s.commentItemAnswer]: isAnswer,
      [s.isHidden]: isShowAnswers
    })}
  >
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

        <ButtonText appearance="pink">{likes} Підтримали</ButtonText>
      </div>

      {isCommentWithAnswer && (
        <ButtonText
          className={s.commentItemToggleAnswersButton}
          appearance="pink"
          onClick={() => onToggleVisibileAnswers(id, !isShowAnswers)}
        >
          {isShowAnswers ? 'Показати відповіді' : 'Сховати відповіді'}
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
  const [isShowAnswers, setShowAnswers] = useState([]);

  const onToggleVisibileAnswersHandler = useCallback(
    (id, isShow) => {
      const answer = isShowAnswers.find((a) => a.id === id);

      if (answer) {
        answer.isShow = isShow;
        setShowAnswers([...isShowAnswers.filter((a) => a.id !== id), answer]);
      } else {
        setShowAnswers([...isShowAnswers, { id, isShow }]);
      }
    },
    [isShowAnswers]
  );

  return (
    <ul className={cx(s.commentsList, className)}>
      {commentsData.map(({ answers, ...comment }) => (
        <Fragment key={comment.id}>
          <CommentItem
            {...comment}
            isCommentWithAnswer={!!answers.length}
            onToggleVisibileAnswers={onToggleVisibileAnswersHandler}
            isShowAnswers={
              isShowAnswers.find((a) => a.id === comment.id)?.isShow
            }
          />
          {answers.length > 0 &&
            answers.map((c) => (
              <CommentItem
                {...c}
                isAnswer
                key={c.id}
                isShowAnswers={
                  isShowAnswers.find((a) => a.id === comment.id)?.isShow
                }
              />
            ))}
        </Fragment>
      ))}
    </ul>
  );
};

CommentsList.propTypes = {
  className: PropTypes.string
};
