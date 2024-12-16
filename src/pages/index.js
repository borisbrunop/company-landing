import React, { useEffect, useRef } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => {
  useEffect(() => {
    if (document) {
      document.getElementById('vid').play();
    }
  }, []);

  return (
    <Layout>
      <section className="pt-20" id="home">
        <div className="container gap-10 mx-auto px-8 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Lineas GH</h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Company manages and operation Oil & Chemical Tanker vessels IMO Type II/III, Container
              ships, Bulk Carrier, RO,RO ships, under individual operating agreements with ship
              owning companies
            </p>
            {/* <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p> */}
            <p className="mt-4 text-gray-600">
              Company manages and operation Oil & Chemical Tanker vessels IMO Type II/III, Container
              ships, Bulk Carrier, RO,RO ships, under individual operating agreements with ship
              owning companies.
              <br />
              <br />
              The Company has created a working environment where people are challenged to do their
              best and has determined and maintains the infrastructure needed to provide ship
              management services that meet the specified or implied requirements of the Customers
              and other interested parties.
              <br />
              <br />
              The Company’s organization consists of highly skilled and experienced Managers,
              Masters, Naval Architects, Technicians, Engineers and vessel’s Officers as well as
              specialists in the fields of safety management system, commercial management, vessel
              finance, personnel management and insurance. Ensuring that the working conditions on
              board and in the office are safe and sustainable.
            </p>
          </div>
          <div className="lg:w-1/2">
            <video
              width="520"
              loop
              muted
              id="vid"
              className="w-full mr-4 rounded-lg object-cover "
              style={{ height: '30em' }}
            >
              <source
                type="video/mp4"
                src="https://conaves.com.co/wp-content/uploads/2024/09/WhatsApp-Video-2024-09-28-at-04.58.12.mp4"
              />
            </video>
          </div>
        </div>
      </section>
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Policies</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Company’s Policy Concept</p>
                <p className="mt-4 text-sm">
                  IMS responsibilities extend throughout the organisation from the Managing Director
                  downwards. Everyone is expected to take a personal and constructive role in the
                  drive for efficient and effective operations. All personnel should be familiar and
                  implement the Company’s Policies and objectives.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Safety Policy</p>
                <p className="mt-4 text-sm">
                  The Management of LINEAS GH E.U. is committed to take all reasonable precautions
                  and measures, during the operation of managed vessels, in order to ensure safety
                  at sea, prevention of human injury or loss of life and avoidance of damage to
                  property. The Company’s goal is to achieve ZERO incidents through continuous
                  improvement.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Quality Policy</p>
                <p className="mt-4 text-sm">
                  LINEAS GH E.U endeavours to earn the confidence of the shipowners, charterers,
                  seafarers and the marine industry and other interested parties and be recognized
                  as a high quality, trustworthy international ship manager. This can only be
                  achieved by providing flawless services that satisfy all relevant requirements.
                  The Company shall always provide professional ship management services to owners
                  and charterers, protect their interests and assets under its care, and fulfil all
                  their expectations.
                </p>
              </Card>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Environmental Policy</p>
                <p className="mt-4">
                  LINEAS GH E.U is committed through continuous efforts to improve its environmental
                  performance in all areas required by the international regulations and laws and
                  Company’s IMS and EMS. The Company’s goal is to achieve Zero spills or releases to
                  the environment and reduction in permitted emissions through continuous
                  improvement.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Cyber Security Policy</p>
                <p className="mt-4">
                  The purpose and objective of this Policy is to protect the company’s information
                  assets from all threats, whether internal or external, deliberate or accidental,
                  to ensure operations continuity, minimize damage and maximize return on
                  investments and relevant industry opportunities.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Social Media Policy</p>
                <p className="mt-4">
                  This policy outlines the necessary principles that users of social media shall
                  observe, the conditions in which Internet activity will be monitored and actions
                  to be taken upon violation of the established polic
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Technical</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              A key element for the success of a modern Management and Operation Company is its
              strict adherence to regulations and industry standards while adopting all
              environmental measures with a well-planned proactive team for proper monitoring and
              maintenance for the safe operations of all vessels with proper budgeting and financial
              reporting. Major charterers, traders and companies show continuous trust for their
              cargoes in LINEAS GH , ability to provide reliable services.
            </p>
          </div>
        }
        secondarySlot={
          <img
            className="w-full rounded-lg object-cover "
            style={{ height: '30em', objectPosition: 'left' }}
            src="	https://conaves.com.co/wp-content/uploads/2024/09/18bffca4-d283-4c36-8d93-aa5d6f279d4d.jpg"
            alt="ship"
          />
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">Operations</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              The experienced operations team is fully responsible and geared to undertake daily
              vessel activities at the highest possible standard in order to offer a reliable
              transportation service and develop long- standing relationships. The dedication in
              promoting safe, clean, with zero pollution and minimal environmental impact in all
              ships operations is the target with the highest commitment to our seafarer’s health,
              safety and security.
            </p>
          </div>
        }
        secondarySlot={
          <img
            className="w-full rounded-lg object-cover "
            style={{ height: '30em' }}
            src="https://conaves.com.co/wp-content/uploads/2024/09/9a8d4d3f-5e93-4754-bff5-f3d74cb4e849-1.jpg"
            alt="ship"
          />
        }
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Safety and Quality</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Armed with values, we strive to comply with all applicable legislation and regulations
              and continuous improvement on health, safety and environmental laws with our top
              priority the safety of all LINEAS GH E.U employees through constant Safety Campaigns,
              Analysis Reports and quarterly Company’s Bulletin. Continuous monitoring of all safety
              and occupational health aspects of vessels while providing all necessary resources.
            </p>
          </div>
        }
        secondarySlot={
          <img
            className="w-full rounded-lg object-cover "
            style={{ height: '30em' }}
            src="https://conaves.com.co/wp-content/uploads/2024/09/db0073a6-0701-4883-ace0-156c74002da6-480x640.jpg"
            alt="ship"
          />
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">Commercial</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              The team comprises with highly experienced and networked chartering professionals
              specialized in the vessels sector to negotiate, identify employment opportunities and
              pursuing the right contracts. LINEAS GH E.U vessels are chartered with major oil
              companies both on the spot market and on long term charters.
            </p>
          </div>
        }
        secondarySlot={
          <img
            className="w-full rounded-lg object-cover "
            style={{ height: '30em' }}
            src="https://conaves.com.co/wp-content/uploads/2024/09/05d2eb95-9d12-4de3-83b6-66d318ddfd7c-rotated.jpg"
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
      <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          {/* <LabelText className="mb-8 text-gray-600 text-center">Managment</LabelText> */}
          <div className="flex flex-col md:flex-row md:-mx-3 md:justify-center">
            {customerData.map((customer) => (
              // <div key={customer.customerName} className="flex-1 px-3 justify-center">
              <div key={customer.customerName} className="px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
      >
        <h3 className="text-5xl font-semibold">Get in Touch</h3>
        <p className="mt-8 md:px-40 text-xl font-light">
          Have a question, comment, or suggestion? We'd love to hear from you. Please feel free to
          reach out to us using the button below
        </p>
        <p className="mt-8">
          <Button size="xl">Contact Us</Button>
        </p>
      </section>
    </Layout>
  );
};

export default Index;
