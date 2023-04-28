import { Header } from '@/layout/Header/Header';
import { ContactsInfo, ContactsHero, FooterCopyright } from '@/components';
import { contactInfoData, socialsData } from '@/utils/templateData';
import { ButtonPrimary, Wrapper } from '@/components/common';

import s from '@/styles/pages/Contacts.module.scss';

function Contacts() {
  const { emailsInfo, legalInfo } = contactInfoData;
  return (
    <>
      <Header />
      <div className={s.contacts}>
        <ContactsHero className={s.contactsHero} />
        <Wrapper>
          <div className={s.contactsInfo}>
            <ContactsInfo
              className={s.contactsInfoLegal}
              title="Юридична інформація"
              contactData={legalInfo}
            />
            <ContactsInfo
              className={s.contactsInfoEmails}
              title="Пошта"
              contactData={emailsInfo}
            />

            <ul className={s.contactsSocials}>
              {socialsData.map(({ href, label }) => (
                <li key={label}>
                  <ButtonPrimary href={href} appearance="grey">
                    {label}
                  </ButtonPrimary>
                </li>
              ))}
            </ul>
          </div>
        </Wrapper>
      </div>
      <div className={s.contactsFooterWrapper}>
        <FooterCopyright className={s.contactsFooter} tag="footer" />
      </div>
    </>
  );
}

export default Contacts;
