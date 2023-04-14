import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Subtitle } from '../common';

import { contactsData } from '@/utils/templateData';

import s from './FooterContacts.module.scss';

export const FooterContacts = ({ className }) => {
  return (
    <div className={cx(s.footerAddressWrapper, className)}>
      {contactsData.map(({ country, email, phone }) => (
        <address className={s.footerAddress} key={country}>
          <Subtitle size="small" className={s.footerAddressCountry}>
            {country}
          </Subtitle>
          <a
            className={s.footerAddressLink}
            href={`tel:${phone.replace(/[),(, ,-]/g, '')}`}
          >
            {phone}
          </a>
          <a className={s.footerAddressLink} href={`email:${email}`}>
            {email}
          </a>
        </address>
      ))}
    </div>
  );
};

FooterContacts.propTypes = {
  className: PropTypes.string
};
