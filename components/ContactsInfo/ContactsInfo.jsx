import PropTypes from 'prop-types';
import cx from 'classnames';

import { Subtitle, Text } from '../common';

import { isEmail } from '@/utils/utils';

import s from './ContactsInfo.module.scss';

export const ContactsInfo = ({ title, contactData, className }) => {
  return (
    <div className={cx(s.contactsInfo, className)}>
      <Text className={s.contactsInfoTitle} size="l">
        {title}
      </Text>

      <ul className={s.contactsInfoList}>
        {contactData.map(({ label, info }) => (
          <li className={s.contactsInfoItem} key={label}>
            <Subtitle size="small">{label}</Subtitle>
            {isEmail(info) ? (
              <a className={s.contactInfoLink} href={`email:${info}`}>
                <Text>{info}</Text>
              </a>
            ) : (
              <Text>{info}</Text>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsInfo.propTypes = {
  title: PropTypes.string,
  contactData: PropTypes.array,
  className: PropTypes.string
};
