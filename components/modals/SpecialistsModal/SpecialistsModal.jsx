import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { Htag, Label, Modal, Ptag, Subtitle } from '../../common';

import {
  selectSpecialist,
  toogleShowSpecialistModal,
  toogleShowSpecialistFormModal
} from '@/store/slices/specialist';

import { enableHTMLScrolling } from '@/utils/utils';

import s from './SpecialistsModal.module.scss';
import { ListWithBullets } from '@/components';
import { specialistModalSkills } from '@/utils/templateData';

export const SpecialistsModal = (props) => {
  const dispatch = useDispatch();
  const selectedSpecialist = useSelector(
    (state) => state.specialist.selectedSpecialist
  );
  const isSpecialistModalShow = useSelector(
    (state) => state.specialist.isSpecialistModalShow
  );

  const { experiense, features, imageSrc, jobName, sallary } =
    selectedSpecialist || {};

  // if (!selectedSpecialist) return <></>;

  const onCloseHandler = () => {
    dispatch(toogleShowSpecialistModal(false));
    dispatch(selectSpecialist(null));
    enableHTMLScrolling();
  };

  const onNextStepHandler = () => {
    dispatch(toogleShowSpecialistModal(false));
    dispatch(toogleShowSpecialistFormModal(true));
  };

  const renderModalHead = () => (
    <div className={s.modalHead}>
      <Image className={s.modalHeadImage} src={imageSrc} alt={jobName} />
      <Htag className={s.modalHeadTitle} tag="h4">
        {jobName}
      </Htag>
      <div className={s.modalHeadLabels}>
        <Label name={experiense} />
        <Ptag className={s.modalHeadSallary} size="m">
          {sallary}
        </Ptag>
      </div>
    </div>
  );

  const renderModalFeatures = () => (
    <div className={s.modalSection}>
      {features?.map(({ label, list }) => (
        <div className={s.modalFeatures} key={label}>
          <Subtitle className={s.modalFeaturesLabel} size="small">
            {label}
          </Subtitle>
          {list.map((item) => <Label name={item} className={s.modalFeaturesLabel} />)}
        </div>
      ))}
    </div>
  );

  const renderModalDescription = () => (
    <div className={s.modalSection}>
      <Htag className={s.modalSectionTitle} tag="h6">
        Опис
      </Htag>
      <Ptag className={s.modalDescriptionText} size="m">
        Фахівець з вищою технічною освітою, який здійснює інженерну діяльність з
        систем вентиляції, кондиціювання та опалення (за потребою). Від 3-х
        років досвіду активного проектування в програмах за вимогою (Revit
        AutoCad) 3D моделювання.
      </Ptag>
    </div>
  );

  const renderModalSkills = () => (
    <div className={s.modalSection}>
      <Htag className={s.modalSectionTitle} tag="h6">
        Вміння
      </Htag>
      <ListWithBullets
        className={s.modalSkillsList}
        listData={specialistModalSkills}
      />
    </div>
  );

  return (
    <Modal
      isOpen={isSpecialistModalShow}
      onClose={onCloseHandler}
      primaryButtonLabel="Скасувати"
      secondareButtonLabel="Обрати"
      onClickPrimaryButton={onCloseHandler}
      onClickSecondaryButton={onNextStepHandler}
    >
      {renderModalHead()}
      {renderModalFeatures()}
      {renderModalDescription()}
      {renderModalSkills()}
    </Modal>
  );
};

SpecialistsModal.propTypes = {};
