'use client';
import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';

// NEXTJS app router page for faaq

export default function Faqs() {
  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-center mb-4">
          <div className="instaHeading">FAQ for The Reverse Project</div>
        </div>
      </div>
      <div className="container-fluid p-md-0 whiteBg">
        <div className="cstmContainer">
          <div className="col-12">

            <Accordion className='px-3 px-md-0'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How can individuals participate in the Reverse Project if they own an electric vehicle?</Accordion.Header>
                <Accordion.Body>
                  Whether you own a Volvo or not, you can still be an eco-warrior & join the Reverse Project by registering your EV as a volunteer. Volvo will plant trees as you drive and provide you certificates, with the tree&apos;s geo-tagged location.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How can I contribute if I don&apos;t own an EV?</Accordion.Header>
                <Accordion.Body>
                  If you do not own an EV, you can participate in the Reverse Project by taking a pledge to help the environment and spreading awareness about the importance of tree planting. To mark your commitment, we will name 1 tree after you that are planted under this initiative.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What is the objective of the Reverse Project by Volvo Car India? </Accordion.Header>
                <Accordion.Body>
                  The objective of the Reverse Project by Volvo Car India as the name suggests is to reverse the damage caused to the environment. The Reverse Project by Volvo Car India, in collaboration with ASSOCHAM, is dedicated to converting a Ghaziabad urban dump yard into an Urban Forest, fostering community participation to take the first steps in achieving this goal.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How many trees have been planted as a part of the Reverse Project?</Accordion.Header>
                <Accordion.Body>
                  As part of the Reverse Project, Volvo Car India has already planted 10,000 trees at the urban dump yard in Ghaziabad and with every kilometre you drive, we will continue to plant more.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Where is the plantation site located for the Reverse Project, and what was its previous condition?</Accordion.Header>
                <Accordion.Body>
                  The Reverse Project&apos;s plantation site is Nagar Van, Pratap Vihar, Ghaziabad. Previously it was an urban dump yard.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>How many trees will be planted under my name?</Accordion.Header>
                <Accordion.Body>
                  - As a Volvo EV owner, 4 trees will be named after you for every 5000 km driven.<br />
                  - As an EV owner, 3 trees  will be named after you for every 5000 km driven.<br />
                  - As a non-EV owner, 1 tree will be named after you, that are already planted under this initiative.
                </Accordion.Body>
              </Accordion.Item>
              
            </Accordion>
            <div className='mt-5 py-5'></div>
          </div>
        </div>
      </div>
    </>
  );
}
