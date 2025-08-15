import React, { useEffect, useRef } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import TitleImage from '../images/title.jpeg';
import TechnicalImage from '../images/technical.png';
import CommercialImage from '../images/commercial.png';
import SafetyImage from '../images/safety.png';
import OperationsImage from '../images/operations.png';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import { useTheme } from '../hooks/useTheme';

const Index = () => {
  const { themeStyles } = useTheme();
  return (
    <Layout>
      <section className="pt-10 md:pt-20" id="home">
        <div className="container gap-16 mx-auto px-3 md:px-8 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1
              className={`text-4xl lg:text-5xl xl:text-5xl font-bold leading-none ${themeStyles.textSecondary}`}
            >
              {"International Products Global Commodities"}
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
              At <strong>IPGC CONSULTORES SA</strong>, we position ourselves as{' '}
              <strong>
                global leaders in the commercialization of crude oil and its derivatives
              </strong>
              , acting as the <strong>strategic bridge</strong> connecting top-tier energy producers
              with the world's most dynamic demand markets. Our track record is the result of{' '}
              <strong>decades of strategic operations and deep specialization</strong> in the
              complexities of the international hydrocarbon supply chain.
              <br />
              <br />
              Our <strong>expertise spans from sophisticated maritime logistics</strong> —managing
              and operating a diverse fleet including VLCCs, Suezmax, Aframax, and MR/LR vessels,
              under agreements with world-class ship owners—{' '}
              <strong>to final product placement</strong>. This capability allows us to ensure{' '}
              <strong>efficient and safe maritime transport</strong> to key ports like Singapore,
              Zhoushan, and Tanjung Pelepas.
              <br />
              <br />
              One of our greatest strengths lies in the{' '}
              <strong>solid and lasting relationships</strong> we've cultivated with{' '}
              <strong>state-of-the-art refineries and end-distributors</strong> in the dynamic{' '}
              <strong>Asia-Pacific</strong> region (China, Malaysia, Vietnam, Laos, Thailand,
              Cambodia, and the Philippines).
              <br />
              <br />
              Our team, composed of highly qualified managers, naval architects, engineers, and
              specialists in commercial management, logistics, and risk, operates in an environment
              that fosters excellence. This integration of talent and experience ensures the
              provision of{' '}
              <strong>unparalleled ship management and commercialization services</strong>, backed
              by safe and sustainable operations. We are ready to deploy this vast capability and
              knowledge for the benefit of you, forging an alliance that optimizes their market
              access and maximizes the value of their hydrocarbons.
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
      <section className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 id="features" className={`text-5xl font-semibold ${themeStyles.textSecondary}`}>
            Policies
          </h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  Company’s Policy Concept
                </p>
                <p className={`mt-4 text-sm ${themeStyles.textPrimary}`}>
                  At IPGC CONSULTORES SA, our Integrated Management System (IMS) responsibilities
                  permeate every level of the organization, from the Managing Director downwards. We
                  foster a culture where every individual is empowered and expected to take a
                  personal and constructive role in driving highly efficient and effective global
                  operations. All personnel are thoroughly familiar with and actively implement the
                  Company's Policies and strategic objectives, ensuring a unified commitment to
                  excellence that underpins our leadership in hydrocarbon commercialization and
                  comprehensive ship management. Our collective dedication ensures seamless service
                  delivery and unwavering alignment with our clients' strategic interests.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>Safety Policy</p>
                <p className={`mt-4 text-sm ${themeStyles.textPrimary}`}>
                  The Management of IPGC CONSULTORES SA is unequivocally committed to implementing
                  all necessary precautions and measures during the operation of our managed vessels
                  and across all commercialization activities. Our paramount goal is to ensure
                  uncompromising safety at sea, prevent human injury or loss of life, and mitigate
                  any potential damage to property or cargo. We relentlessly pursue a vision of ZERO
                  incidents through a proactive, holistic approach to safety management and
                  continuous operational improvement, recognizing that a flawless safety record is
                  fundamental to trust and reliability in the global energy sector.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  Quality Policy
                </p>
                <p className={`mt-4 text-sm ${themeStyles.textPrimary}`}>
                  IPGC CONSULTORES SA is dedicated to earning and sustaining the absolute confidence
                  of shipowners, charterers, seafarers, our esteemed refinery partners, and all
                  stakeholders across the marine and energy industries. We aspire to be globally
                  recognized as a premier, high-quality, and eminently trustworthy international
                  ship manager and hydrocarbon commercialization leader. This distinction is
                  achieved solely by providing flawless, professional services that consistently
                  exceed all relevant requirements and expectations. We are committed to
                  meticulously protecting our clients' interests and the invaluable assets under our
                  care, ensuring every transaction, from vessel management to product delivery,
                  reflects our dedication to excellence, precision, and maximized value.
                </p>
              </Card>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  Environmental Policy
                </p>
                <p className={`mt-4 ${themeStyles.textPrimary}`}>
                  IPGC CONSULTORES SA is deeply committed to relentless efforts aimed at
                  significantly enhancing its environmental performance across all facets of our
                  operations, rigorously adhering to international regulations, maritime laws, and
                  our robust Integrated Management System (IMS) and Environmental Management System
                  (EMS). Our unwavering goal is to achieve Zero spills or releases into the
                  environment and a continuous reduction in permitted emissions. This dedication
                  underscores our profound responsibility as a global energy commercialization
                  leader to protect marine ecosystems and contribute to a sustainable future,
                  ensuring every operation is conducted with the utmost environmental care.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  Cyber Security Policy
                </p>
                <p className={`mt-4 ${themeStyles.textPrimary}`}>
                  The core purpose and objective of IPGC CONSULTORES SA's Cyber Security Policy is
                  to comprehensively safeguard the company's critical information assets from all
                  potential threats, whether they are internal or external, deliberate or
                  accidental. Our robust framework ensures uninterrupted operational continuity in
                  global hydrocarbon commercialization, minimizes potential damage from cyber
                  incidents, and maximizes the return on investments by protecting sensitive market
                  intelligence and proprietary data. This policy is fundamental to maintaining the
                  trust of our clients and partners, securing our competitive edge, and capitalizing
                  on evolving industry opportunities in a highly interconnected global energy
                  market.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className={`font-semibold text-xl ${themeStyles.textSecondary}`}>
                  Social Media Policy
                </p>
                <p className={`mt-4 ${themeStyles.textPrimary}`}>
                  This policy precisely outlines the essential principles and ethical conduct that
                  all IPGC CONSULTORES SA personnel must observe when engaging with social media. It
                  details the conditions under which internet activity may be monitored to safeguard
                  proprietary commercial information, protect client relationships, and uphold the
                  Company's pristine professional reputation in the global energy sector.
                  Furthermore, this policy clearly specifies the actions that will be taken upon any
                  violation of these established guidelines, reinforcing our commitment to
                  integrity, discretion, and responsible digital presence as a world-class
                  commercialization and ship management entity.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div id="services" className="w-full flex justify-center">
        <h2 className={`text-5xl font-semibold ${themeStyles.textSecondary}`}>Services</h2>
      </div>
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3
              className={`text-3xl font-semibold leading-tight ${themeStyles.textSecondary} text-center`}
            >
              Technical
            </h3>
            <p
              className={`mt-8 text-xl font-light ${themeStyles.textPrimary} leading-6 text-center`}
            >
              At IPGC CONSULTORES SA, the foundation of our successful ship management and
              hydrocarbon commercialization lies in our unwavering adherence to rigorous regulations
              and international industry standards. Our approach is characterized by a well-planned,
              proactive team dedicated to the precise monitoring and maintenance of all vessels,
              ensuring safe and efficient global operations. This includes meticulous budgeting and
              transparent financial reporting, guaranteeing the highest levels of operational
              integrity. Major charterers, leading traders, and global energy companies consistently
              place their trust in IPGC's proven ability to deliver reliable, high-performance
              services, a testament to our technical excellence and the robust health of our managed
              fleet.
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
              Operations
            </h3>
            <p
              className={`mt-8 text-xl font-light ${themeStyles.textPrimary} leading-6 text-center`}
            >
              Our highly experienced operations team at IPGC CONSULTORES SA is fully dedicated to
              managing daily vessel activities at the highest possible standards, ensuring seamless
              global hydrocarbon transportation services. We specialize in coordinating complex
              maritime logistics for VLCCs, Suezmax, Aframax, and MR/LR vessels, facilitating
              efficient deliveries to strategic ports worldwide, including key hubs in Asia-Pacific.
              Our unwavering commitment extends to promoting safe, clean operations with zero
              pollution and minimal environmental impact, while prioritizing the health, safety, and
              security of our seafarers. This dedication enables us to build and sustain
              long-standing relationships with clients, reflecting our reliability and commitment to
              operational excellence in every voyage.
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
              Safety and Quality
            </h3>
            <p
              className={`mt-8 text-xl font-light ${themeStyles.textPrimary} leading-6 text-center`}
            >
              Guided by an uncompromising set of values, IPGC CONSULTORES SA relentlessly strives to
              exceed all applicable legislation and regulations, alongside continuous improvement in
              health, safety, and environmental laws. Our top priority is the safety and well-being
              of all IPGC personnel, both onboard our managed vessels and within our global offices.
              This commitment is actively reinforced through constant Safety Campaigns, meticulous
              Analysis Reports, and informative quarterly Company Bulletins. We maintain continuous
              monitoring of all safety and occupational health aspects across our fleet, providing
              all necessary resources to uphold our pristine safety record and deliver world-class
              service quality in hydrocarbon commercialization and ship management.
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
              Commercial
            </h3>
            <p
              className={`mt-8 text-xl font-light ${themeStyles.textPrimary} text-center leading-6`}
            >
              The commercial team at IPGC CONSULTORES SA comprises highly experienced and
              extensively networked chartering professionals, specializing in the intricate vessel
              sector for hydrocarbon transport. Our expertise allows us to expertly negotiate,
              identify prime employment opportunities, and secure optimal contracts for IPGC-managed
              vessels. We actively engage with major oil companies and international traders in both
              the dynamic spot market and through strategic long-term charters, ensuring the
              profitable placement of crude and derivatives to key refinery partners in regions like
              Asia-Pacific. Our deep understanding of market dynamics and strong client
              relationships ensure maximized value and sustained commercial success for our
              ship-owning partners.
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
      <section
        id="contact"
        className={`container mx-auto md:my-20  md:py-24 px-2`}
      >
        <div className={`container mx-auto my-20  py-24 ${themeStyles.cardBg} rounded-lg text-center`}>
        <h3 className="text-5xl font-semibold text-background-lighter">Get in Touch</h3>
        <p className="mt-8 md:px-40 text-xl font-light text-background-lighter">
          Have a question, comment, or suggestion? We'd love to hear from you. Please feel free to
          reach out to us using the button below
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
            Contact Us
          </a>
        </p>
            </div>
      </section>
    </Layout>
  );
};

export default Index;
