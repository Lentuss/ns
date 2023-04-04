import { useState } from 'react';
import PropTypes from 'prop-types';

import { CustomCollapse, Htag, Ptag, Wrapper } from '../common';

import { oftenQuestionsData } from '@/utils/templateData';
import { black800 } from '@/utils/const';

import s from './OftenQuestions.module.scss';

export const OftenQuestions = (props) => {
  const [activeCollapse, setActiveCollapse] = useState(null);

  const setActiveCollapseHandler = (id) =>
    setActiveCollapse(id === activeCollapse ? null : id);

  const renderCollapses = () => (
    <ul>
      {oftenQuestionsData.map(({ id, question, answer }, idx) => (
        <li key={id}>
          <CustomCollapse
            title={question}
            number={`0${++idx}`}
            isOpened={activeCollapse === id}
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
    <section className={s.oftenQuestions}>
      <Wrapper>
        <Htag className={s.oftenQuestionsTitle} tag="h2">
          Часті запитання
        </Htag>
        {renderCollapses()}
      </Wrapper>
    </section>
  );
};

OftenQuestions.propTypes = {};