import { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { CustomCollapse, Htag, Ptag, Wrapper } from '../common';

import { oftenQuestionsData } from '@/utils/templateData';
import { black800 } from '@/utils/const';

import s from './OftenQuestions.module.scss';

export const OftenQuestions = ({ className }) => {
  const [activeCollapse, setActiveCollapse] = useState([]);

  const setActiveCollapseHandler = (id) =>
    setActiveCollapse((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });

  const renderCollapses = (
    <ul>
      {oftenQuestionsData.map(({ id, question, answer }, idx) => (
        <li key={id}>
          <CustomCollapse
            title={question}
            number={`0${++idx}`}
            isOpened={activeCollapse.includes(id)}
            onClick={() => setActiveCollapseHandler(id)}
          >
            <Ptag size="m" color={black800}>
              {answer}
            </Ptag>
          </CustomCollapse>
        </li>
      ))}
    </ul>
  );
  return (
    <section className={cx(s.oftenQuestions, className)}>
      <Wrapper>
        <Htag className={s.oftenQuestionsTitle} tag="h2">
          Часті запитання
        </Htag>
        {renderCollapses}
      </Wrapper>
    </section>
  );
};

OftenQuestions.propTypes = {};
