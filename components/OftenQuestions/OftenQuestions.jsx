import { useState } from 'react';
import PropTypes from 'prop-types';

import { CustomCollapse, Htag, Ptag, Wrapper } from '../common';

import { oftenQuestionsData } from '@/utils/templateData';
import { black800 } from '@/utils/const';

import s from './OftenQuestions.module.scss';

export const OftenQuestions = (props) => {
  const [activeCollapse, setActiveCollapse] = useState(null);

  const setActiveCollapseHandler = (question) =>
    setActiveCollapse(question === activeCollapse ? null : question);

  const renderCollapses = () => (
    <ul className={s.oftenQuestionsList}>
      {oftenQuestionsData.map(({ question, answer }, idx) => (
        <li key={question}>
          <CustomCollapse
            title={question}
            number={`0${++idx}`}
            isOpened={activeCollapse === question}
            onClick={() => setActiveCollapseHandler(question)}
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
    <section className={s.oftenQuestions}>
      <Wrapper>
        <Htag tag="h2">Часті запитання</Htag>
        {renderCollapses()}
      </Wrapper>
    </section>
  );
};

OftenQuestions.propTypes = {};
