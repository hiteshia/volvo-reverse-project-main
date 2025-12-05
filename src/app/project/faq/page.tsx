"use client";
import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

// NEXTJS app router page for faaq

export default function Faqs() {
  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-center mb-4">
          <div className="instaHeading">FAQ for The Reverse Project</div>
        </div>
      </div>
      <div className="container-fluid p-md-0">
        <div className="cstmContainer">
          <div className="col-12">
            <Accordion className="px-3 px-md-0 apple-glass-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is the objective of the Reverse Project by Volvo Cars
                  India?
                </Accordion.Header>
                <Accordion.Body>
                  The Reverse Project by Volvo Cars India aims to restore the
                  environment by creating large-scale green cover. This year,
                  the initiative supports the Community Land Transformation
                  Project in Gurugram, Haryana. The project is led by the
                  SankalpTaru Foundation in partnership with the Haryana Forest
                  Department, with Volvo Car India contributing to the
                  restoration of degraded land and helping convert it into a
                  thriving ecosystem. The initiative also encourages community
                  participation, making environmental renewal a shared
                  responsibility.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How can individuals participate in the Reverse Project if they
                  own an electric vehicle?
                </Accordion.Header>
                <Accordion.Body>
                  No matter which car you drive, Volvo or otherwise, you can
                  register and share your EV registration number, and we will
                  plant 3 trees on your behalf. Volvo Car India will also share
                  a certificate that will include geo-tagged details for the
                  trees planted on your behalf.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How can I contribute if I do not own an EV?
                </Accordion.Header>
                <Accordion.Body>
                  You can join the Reverse Project by registering as a non-EV
                  participant and sharing your car’s registration number. We
                  will plant 2 trees and you shall receive a certificate with
                  the geo-tagged details of the trees planted for you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Is the Reverse Project open to both 2-wheeler and 4-wheeler
                  vehicle owners?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, the Reverse Project welcomes participation from both
                  2-wheeler and 4-wheeler vehicle owners. Any vehicle owner can
                  register and contribute to the tree plantation..
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How many trees have been planted as part of the Reverse
                  Project?
                </Accordion.Header>
                <Accordion.Body>
                  Volvo Cars India has planted 35,000 trees so far, and with
                  each contribution by participants, we aim to cross 55,000
                  trees.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Where is the plantation site located for the Reverse Project,
                  and what was its previous condition?
                </Accordion.Header>
                <Accordion.Body>
                  This year, the plantation site is spread across twenty acres
                  of Maitri Van in Gurugram. The land had undergone significant
                  degradation over time and is now being restored through
                  large-scale plantation and ecological rehabilitation under the
                  Reverse Project.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  How many trees will be planted under my name?
                </Accordion.Header>
                <Accordion.Body>
                  EV owners will have 3 trees planted for them..
                  <br />
                  Non-EV owners will have 2 trees planted for them.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
