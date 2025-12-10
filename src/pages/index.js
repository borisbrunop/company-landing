import React from 'react';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import TitleImage from '../images/title.jpeg';
import TechnicalImage from '../images/technical.png';
import CommercialImage from '../images/commercial.png';
import SafetyImage from '../images/safety.png';
import OperationsImage from '../images/operations.png';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { themeStyles } = useTheme();
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="pt-10 md:pt-20" id="home">
        <div className="container gap-16 mx-auto px-3 md:px-8 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1
              className={`text-4xl lg:text-5xl xl:text-5xl font-bold leading-none ${themeStyles.textSecondary}`}
            >
              {'International Products Global Commodities'}
            </h1>
            {/* <p className="text-xl lg:text-2xl mt-6 font-semibold text-primary">
              Company manages and operation Oil & Chemical Tanker vessels IMO Type II/III, Container
              ships, Bulk Carrier, RO,RO ships, under individual operating agreements with ship
              owning companies
            </p> */}
            {/* <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button> 
          </p> */}
            <p className={`mt-4 ${themeStyles.textPrimary}`}>
              {t('hero.description_1.1')}
              <strong>{t('hero.description_1.2')}</strong>
              {t('hero.description_1.3')} <strong>{t('hero.description_1.4')}</strong>
              {t('hero.description_1.5')}
              <strong>{t('hero.description_1.6')}</strong>
              {t('hero.description_1.7')}
              <strong>{t('hero.description_1.8')}</strong> {t('hero.description_1.9')}
              <br />
              <br />
              {t('hero.description_2.1')}
              <strong>{t('hero.description_2.2')}</strong> {t('hero.description_2.3')}{' '}
              <strong>{t('hero.description_2.4')}</strong>
              {t('hero.description_2.5')}
              <strong>{t('hero.description_2.6')}</strong> {t('hero.description_2.7')}
              <br />
              <br />
              {t('hero.description_3.1')}
              <strong>{t('hero.description_3.2')}</strong> {t('hero.description_3.3')}{' '}
              <strong>{t('hero.description_3.4')}</strong> {t('hero.description_3.5')}{' '}
              <strong>{t('hero.description_3.6')}</strong> {t('hero.description_3.7')}
              <br />
              <br />
              {t('hero.description_4.1')} <strong>{t('hero.description_4.2')}</strong>,{' '}
              {t('hero.description_4.3')}
            </p>
          </div>
          <div className="lg:w-1/2 rounded-lg" style={{ boxShadow: '0 10px 28px rgba(0,0,0,.50)' }}>
            <img
              className="w-full rounded-lg object-cover"
              style={{ height: '40em' }}
              src={TitleImage}
              alt="ship"
            />
          </div>
        </div>
      </section>
      <section className="pt-48">
        <div className="container mx-auto text-center">
          <h2 id="features" className={`text-5xl font-semibold ${themeStyles.textSecondary}`}>
            {t('policies.title')}
          </h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  {t('policies.company.title')}
                </p>
                <p className={`mt-4 text-sm ${themeStyles.textPrimary}`}>
                  {t('policies.company.text')}
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  {t('policies.safety.title')}
                </p>
                <p className={`mt-4 text-sm ${themeStyles.textPrimary}`}>
                  {t('policies.safety.text')}
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  {t('policies.quality.title')}
                </p>
                <p className={`mt-4 text-sm ${themeStyles.textPrimary}`}>
                  {t('policies.quality.text')}
                </p>
              </Card>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  {t('policies.environmental.title')}
                </p>
                <p className={`mt-4 ${themeStyles.textPrimary}`}>
                  {t('policies.environmental.text')}
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  {t('policies.cyber.title')}
                </p>
                <p className={`mt-4 ${themeStyles.textPrimary}`}>{t('policies.cyber.text')}</p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  {t('policies.social.title')}
                </p>
                <p className={`mt-4 ${themeStyles.textPrimary}`}>{t('policies.social.text')}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center pt-48">
        <h2 id="services" className={`text-5xl font-semibold ${themeStyles.textSecondary}`}>
          {t('services.title')}
        </h2>
      </div>
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3
              className={`text-3xl font-semibold leading-tight ${themeStyles.textSecondary} text-center`}
            >
              {t('services.technical.title')}
            </h3>
            <p
              className={`mt-8 text-xl font-light ${themeStyles.textPrimary} leading-6 text-center`}
            >
              {t('services.technical.text')}
            </p>
          </div>
        }
        secondarySlot={
          <img
            className="w-full rounded-lg object-cover "
            style={{
              height: '35em',
              objectPosition: 'left',
              boxShadow: '0 10px 28px rgba(0,0,0,.50)',
            }}
            src={TechnicalImage}
            alt="ship"
          />
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3
              className={`text-3xl font-semibold leading-tight ${themeStyles.textSecondary} text-center`}
            >
              {t('services.operations.title')}
            </h3>
            <p
              className={`mt-8 text-xl font-light ${themeStyles.textPrimary} leading-6 text-center`}
            >
              {t('services.operations.text')}
            </p>
          </div>
        }
        secondarySlot={
          <img
            className="w-full rounded-lg object-cover "
            style={{ height: '35em', boxShadow: '0 10px 28px rgba(0,0,0,.50)' }}
            src={OperationsImage}
            alt="ship"
          />
        }
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3
              className={`text-3xl font-semibold leading-tight ${themeStyles.textSecondary} text-center`}
            >
              {t('services.safety_quality.title')}
            </h3>
            <p
              className={`mt-8 text-xl font-light ${themeStyles.textPrimary} leading-6 text-center`}
            >
              {t('services.safety_quality.text')}
            </p>
          </div>
        }
        secondarySlot={
          <img
            className="w-full rounded-lg object-cover "
            style={{ height: '35em', boxShadow: '0 10px 28px rgba(0,0,0,.50)' }}
            src={SafetyImage}
            alt="ship"
          />
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3
              className={`text-3xl font-semibold leading-tight ${themeStyles.textSecondary} text-center`}
            >
              {t('services.commercial.title')}
            </h3>
            <p
              className={`mt-8 text-xl font-light ${themeStyles.textPrimary} text-center leading-6`}
            >
              {t('services.commercial.text')}
            </p>
          </div>
        }
        secondarySlot={
          <img
            className="w-full rounded-lg object-cover "
            style={{ height: '35em', boxShadow: '0 10px 28px rgba(0,0,0,.50)' }}
            src={CommercialImage}
            alt="ship"
          />
        }
      />
      {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}
      {/* <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:-mx-3 md:justify-center">
            {customerData.map((customer) => (
              <div key={customer.customerName} className="px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className={`container mx-auto md:my-20  md:py-24 px-2`}>
        <div
          className={`container mx-auto my-20  py-24 ${themeStyles.cardBg} rounded-lg text-center`}
        >
          <h3 id="contact" className="text-5xl font-semibold text-background-lighter">
            {t('contact.title')}
          </h3>
          <p className="mt-8 md:px-40 text-xl font-light text-background-lighter">
            {t('contact.text')}
          </p>
          <p className="mt-8">
            <a
              href="mailto:gerencia@interpgc.com"
              type="button"
              style={{ textDecoration: 'none' }}
              className={`
              py-5 px-16 text-lg
              hover:${themeStyles.buttonHoverBg}
              hover:${themeStyles.buttonHoverText}
              rounded
              ${themeStyles.buttonBg}
              ${themeStyles.buttonText}
              `}
            >
              {t('contact.button')}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
