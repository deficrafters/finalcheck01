"use client";

import { useEffect, useState, useContext, Suspense } from "react";
import { content } from "@/utils/content.js";
import GlobalContext from "@/components/context/global/GlobalContext";

export default function Privacy() {
  return (
    <main className={`relative bg-black`}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={`px-[2%]`}>
          <>
            <div
              style={{
                margin: "0cm",
                marginBottom: ".0001pt",
                lineHeight: "115%",
                fontSize: 15,
                fontFamily: '"Arial",sans-serif',
                border: "none #E5E7EB 1.0pt",
                padding: "0cm 0cm 0cm 0cm",
              }}
            >
              <h1
                style={{
                  marginTop: "20.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 27,
                  fontFamily: '"Arial",sans-serif',
                  fontWeight: "normal",
                  margin: "0cm",
                  border: "none",
                  padding: "0cm",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 31,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Privacy Policy
                  </span>
                </strong>
              </h1>
            </div>
            <div
              style={{
                margin: "0cm",
                marginBottom: ".0001pt",
                lineHeight: "115%",
                fontSize: 15,
                fontFamily: '"Arial",sans-serif',
                border: "none #1F1E33 1.0pt",
                padding: "0cm 0cm 0cm 0cm",
              }}
            >
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  border: "none",
                  padding: "0cm",
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    lineHeight: "115%",
                    fontFamily: "Poppins",
                    color: "white",
                  }}
                >
                  This Privacy Policy informs users about how Dreamgamez (“we,
                  the Platform, the Website”) &nbsp;collect and handle their
                  personal data, who we share it with, if we sell it, and any
                  other relevant details.
                </span>
              </p>
            </div>
            <div
              style={{
                margin: "0cm",
                marginBottom: ".0001pt",
                lineHeight: "115%",
                fontSize: 15,
                fontFamily: '"Arial",sans-serif',
                border: "none #E5E7EB 1.0pt",
                padding: "0cm 0cm 0cm 0cm",
              }}
            >
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    What is the purpose of the processing of your personal data?
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  At dreamgamez.io (“website”), we obtain information from our
                  website users for the following purposes:
                </span>
              </p>
            </div>
            <div
              style={{
                margin: "0cm",
                marginBottom: ".0001pt",
                lineHeight: "115%",
                fontSize: 15,
                fontFamily: '"Arial",sans-serif',
                border: "none #E5E7EB 1.0pt",
                padding: "0cm 0cm 0cm 0cm",
                marginLeft: "18.0pt",
                marginRight: "0cm",
              }}
            >
              <ol
                style={{ marginBottom: "0cm", marginTop: "0cm" }}
                start={1}
                type="I"
              >
                <li
                  style={{
                    margin: "0cm",
                    marginBottom: ".0001pt",
                    lineHeight: "115%",
                    fontSize: 15,
                    fontFamily: '"Arial",sans-serif',
                    color: "white",
                    marginTop: "15.0pt",
                    marginLeft: "18.0pt",
                    textAlign: "justify",
                    border: "none",
                    padding: "0cm",
                    borderBottom: "0cm none #E5E7EB",
                  }}
                >
                  <span style={{ fontFamily: "Poppins" }}>
                    To manage the delivery of the information requested
                  </span>
                </li>
                <li
                  style={{
                    margin: "0cm",
                    marginBottom: ".0001pt",
                    lineHeight: "115%",
                    fontSize: 15,
                    fontFamily: '"Arial",sans-serif',
                    color: "white",
                    marginLeft: "18.0pt",
                    textAlign: "justify",
                    border: "none",
                    padding: "0cm",
                    borderBottom: "0cm none #E5E7EB",
                  }}
                >
                  <span style={{ fontFamily: "Poppins" }}>
                    To provide interested users with&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                    }}
                  >
                    $DMZT
                  </span>
                  <span
                    style={{
                      fontSize: 16,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                    }}
                  >
                    &nbsp;token&nbsp;
                  </span>
                  <span style={{ fontFamily: "Poppins" }}>
                    &nbsp;offers and related services.
                  </span>
                </li>
                <li
                  style={{
                    margin: "0cm",
                    marginBottom: ".0001pt",
                    lineHeight: "115%",
                    fontSize: 15,
                    fontFamily: '"Arial",sans-serif',
                    color: "white",
                    marginLeft: "18.0pt",
                    textAlign: "justify",
                    border: "none",
                    padding: "0cm",
                    borderBottom: "0cm none #E5E7EB",
                  }}
                >
                  <span style={{ fontFamily: "Poppins" }}>
                    To offer our products and services according to their
                    interests
                  </span>
                </li>
                <li
                  style={{
                    margin: "0cm",
                    marginBottom: ".0001pt",
                    lineHeight: "115%",
                    fontSize: 15,
                    fontFamily: '"Arial",sans-serif',
                    color: "white",
                    marginLeft: "18.0pt",
                    textAlign: "justify",
                    border: "none",
                    padding: "0cm",
                  }}
                >
                  <span style={{ fontFamily: "Poppins" }}>
                    To improve your user experience.&nbsp;
                  </span>
                </li>
              </ol>
            </div>
            <div
              style={{
                margin: "0cm",
                marginBottom: ".0001pt",
                lineHeight: "115%",
                fontSize: 15,
                fontFamily: '"Arial",sans-serif',
                border: "none #E5E7EB 1.0pt",
                padding: "0cm 0cm 0cm 0cm",
              }}
            >
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  textAlign: "justify",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  To fulfill these purposes, we will elaborate a profile based
                  on the information provided. Automated decisions will not be
                  made based on the profiles of the database. Automated emails
                  will be sent, previously programmed by the owner of the data
                  or their service providers or employees, in order to send
                  information on the news of the blog, and commercial products
                  that will be offered through this website, whether they are
                  hosted on it or on platforms from third-party service
                  providers. We will also use all types of cookies that we
                  consider appropriate to our personal brand.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    How long will we keep your data?
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  textAlign: "justify",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The personal data provided on the website will be kept for a
                  period of five years from the last confirmation of your
                  interest. They will also be maintained while the mercantile
                  relationship is maintained. They will disappear when their
                  deletion or portability is requested by the interested party.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  textAlign: "justify",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Legitimation
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  textAlign: "justify",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The legal basis for the treatment of your data is the
                  execution of the online contact form of the website as well as
                  access to all the&nbsp;
                </span>
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "115%",
                    fontFamily: "Poppins",
                    color: "white",
                  }}
                >
                  $DMZT
                </span>
                <span
                  style={{
                    fontSize: 16,
                    lineHeight: "115%",
                    fontFamily: "Poppins",
                    color: "white",
                  }}
                >
                  &nbsp;token purchased&nbsp;
                </span>
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  on said website. The offer of&nbsp;
                </span>
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "115%",
                    fontFamily: "Poppins",
                    color: "white",
                  }}
                >
                  $DMZT
                </span>
                <span
                  style={{
                    fontSize: 16,
                    lineHeight: "115%",
                    fontFamily: "Poppins",
                    color: "white",
                  }}
                >
                  &nbsp;token sale
                </span>
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  &nbsp;is based on the consent that is requested, without in
                  any case the withdrawal of this consent conditions the
                  execution of the&nbsp;
                </span>
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "115%",
                    fontFamily: "Poppins",
                    color: "white",
                  }}
                >
                  $DMZT
                </span>
                <span
                  style={{
                    fontSize: 16,
                    lineHeight: "115%",
                    fontFamily: "Poppins",
                    color: "white",
                  }}
                >
                  &nbsp;token sale.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  textAlign: "justify",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Recipients to whom your data will be communicated
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  textAlign: "justify",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The data collected through this website will be communicated
                  to other companies of the business group for internal
                  administrative purposes, including the processing of personal
                  data of customers or employees. DREAM GAMEZ SOCIEDAD DE
                  RESPONSABILIDAD LIMITADA and to whom the data are communicated
                  will have binding corporate rules approved by Costa Rican laws
                  for data protection and available in this document.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    What are your rights when you provide us with your
                    information?
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  Anyone has the right to obtain confirmation about whether
                  DREAM GAMEZ SOCIEDAD DE RESPONSABILIDAD LIMITADA is processing
                  personal data that concerns them or not. Interested persons
                  have the right to access their personal data, as well as to
                  request the correction of inaccurate data or, where
                  appropriate, request its deletion when, among other reasons,
                  the data is no longer necessary for the purposes that were
                  collected. In certain circumstances, the interested parties
                  may request the limitation of the processing of their data, in
                  which case we will only keep them for the exercise or defense
                  of claims. In certain circumstances and for reasons related to
                  their particular situation, the interested parties may object
                  to the processing of their data. DREAM GAMEZ SOCIEDAD DE
                  RESPONSABILIDAD LIMITADA will stop processing the data, except
                  for compelling legitimate reasons or the exercise or defense
                  of possible claims.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    How have we obtained your data?
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The personal data we treat in the website comes either from
                  the web itself, email, instant messaging or postal mail of our
                  company. The categories of data we deal with are:
                  Identification data, codes or identification keys, postal or
                  electronic addresses, commercial information, economic data.
                  We also inform you that we do not obtain specially protected
                  data on a regular basis. If specially protected data reaches
                  our company, we will protect it in accordance with current
                  regulations.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Responsibilities
                  </span>
                </strong>
              </h3>
              <h4
                style={{
                  marginTop: "6.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: "#666666",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Waiver of any responsibility
                  </span>
                </strong>
              </h4>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  This page and its components are offered for informational
                  purposes only. The DREAM GAMEZ SOCIEDAD DE RESPONSABILIDAD
                  LIMITADA, owner of this page is not responsible for the
                  accuracy, usefulness or availability of any information that
                  is transmitted or made available through it; will not be
                  responsible for any error or omission in said information. The
                  users of this platform that give their personal data, with the
                  acceptance of the informed consent, renounce any compensation
                  that for the legal use of such data could correspond to them,
                  not being able to exercise any legal claim for it. If you want
                  to hold it, you should not give your information on this
                  website.
                </span>
              </p>
              <h4
                style={{
                  marginTop: "6.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: "#666666",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Minors
                  </span>
                </strong>
              </h4>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  Our services and products are for users over 18 years of age.
                  Children under this age are not authorized to use our services
                  and should not, therefore, send us their personal information.
                </span>
              </p>
              <h4
                style={{
                  marginTop: "6.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: "#666666",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Links policy of our website - Responsibility.
                  </span>
                </strong>
              </h4>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The provider is excludedt from any type of liability arising
                  from the information published on its website, provided that
                  this information has been manipulated or introduced by a third
                  party outside it. The access service to the Portal includes
                  links that may lead the user to other websites and web pages
                  managed by third parties, over which DREAM GAMEZ SOCIEDAD DE
                  RESPONSABILIDAD LIMITADA does not exercise any type of
                  control.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  In these cases, DREAM GAMEZ SOCIEDAD DE RESPONSABILIDAD
                  LIMITADA acts as a provider of intermediation services. DREAM
                  GAMEZ SOCIEDAD DE RESPONSABILIDAD LIMITADA Legal Property does
                  not respond neither to the contents nor to the status of said
                  websites and web pages. The provider is not responsible for
                  the information and stored content, by way of example, but not
                  limited to forums, chat, blog generators, comments, social
                  networks or any other means that allows third parties to
                  publish content independently in the web page of the provider.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  However, the provider is made available to all users,
                  authorities and security forces, and actively collaborating in
                  the withdrawal or blocking of any content that could affect or
                  contravene national legislation, or international, rights of
                  third parties or morality and public order. We do not want to
                  link to other pages, being prohibited deep-links, IMG or image
                  links, frames, which can make the user understand that they
                  are on another website that is not ours. The user must be
                  aware that our company is not responsible for the privacy
                  practices of these other websites.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  We recommend that users be aware that by using one of these
                  links they are leaving our website and that they read the
                  privacy policies of those other websites that collect personal
                  data. This privacy policy only applies to personal data
                  collected through this website.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Intellectual property
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The User acknowledges and accepts that all intellectual and
                  industrial property rights over the contents and any other
                  elements inserted in the Website belong to DREAM GAMEZ
                  SOCIEDAD DE RESPONSABILIDAD LIMITADA
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The entire content of the website, including but not limited
                  to its programming, editing, compilation and other elements
                  necessary for its operation, the designs, logos, text and / or
                  graphics, images, graphic or artistic material present in the
                  website. web, are the property of the provider or, where
                  appropriate, have a license or express authorization from the
                  authors.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  All the contents of the website are protected by industrial
                  and intellectual property rights, registered in the
                  corresponding public registers under the ownership of DREAM
                  GAMEZ SOCIEDAD DE RESPONSABILIDAD LIMITADA or by third
                  parties, without which any of the exploitation rights of the
                  user may be construed. the same beyond what is strictly
                  necessary for the correct use of the Portal.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  Any individual or legal entity is authorized to establish
                  links or links to the website on its pages or web sites, both
                  to its main page and to any of its pages. However, links to
                  any of the pages of the website that imply viewing them in the
                  browser through frames or frames are expressly prohibited.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  All the contents shown on this website are subject to and
                  protected by intellectual and industrial property rights.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  It is not allowed the alteration, exploitation, reproduction,
                  distribution or public communication and made available on the
                  contents of the course without the prior express authorization
                  of the owner of the web.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  textAlign: "justify",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The page and its original content, features and functionality
                  are the property of DREAM GAMEZ SOCIEDAD DE RESPONSABILIDAD
                  LIMITADA are protected by international copyright, trademarks,
                  patents, trade secrets and other laws of intellectual property
                  or property rights.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Rescission
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  We may cancel your access to the site, without cause or
                  notice, which may result in the seizure and destruction of all
                  information that is associated with your account. All
                  provisions of this agreement that, by their nature, must
                  survive the cancellation will survive it, including without
                  limitation, property dispositions, waivers of warranty,
                  indemnification and limitations of liability.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Changes in conditions
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The company reserves the right to modify these conditions when
                  it deems appropriate; likewise, the permanent use of the page
                  will signify your acceptance of any adjustment to such terms.
                  If there is any change in our privacy policy, we will announce
                  on our homepage and on other important pages of our site that
                  such changes have been made. If there is any change to our
                  page regarding the way we use our customers’ personal
                  identification information, we will send a notification via
                  email or postal mail to those affected by the change. Notice
                  of any change in our privacy policy will be published on our
                  website 7 days before such changes occur. Therefore, it is
                  recommended that you reread this statement on a regular basis.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Regulation and conflict resolution
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  The present Terms of Use and Privacy Policy are governed in
                  each and every one of its extremes by Costa Rican law. The
                  language of drafting and interpretation of this legal notice
                  is English. This legal notice will not be filed individually
                  for each user, but will remain accessible through the Internet
                  on this Website.
                </span>
              </p>
              <h2
                style={{
                  marginTop: "17.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 21,
                  fontFamily: '"Arial",sans-serif',
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 23,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    Data Protection Policy for Dream Gamez&apos;s Raffle Website
                  </span>
                </strong>
              </h2>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    1. Scope and Purpose:
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  This Data Protection Policy applies to all personal data
                  collected, processed, and stored by DreamGamez concerning its
                  website operations, which require Know Your Customer (KYC)
                  procedures mainly for their raffle features. This policy aims
                  to ensure that DreamGamez complies with applicable data
                  protection laws, such as the Law on the Protection of Persons
                  Regarding the Processing of their Personal Data No. 8968 of
                  2011, and to establish the safeguards necessary to protect the
                  privacy and security of user data.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    2. Types of Data Collected and Methods of Collection:
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  DreamGamez&apos;s raffle website collects the following types of
                  personal data:
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Identification Data: Name, Date of birth, and
                  Government-issued identification numbers.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Contact Information: Address, email address, and phone
                  number.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Financial Data: Payment information and transaction history.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Technical Data: IP address, login data, browser type, and
                  version.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  Data is collected through the following methods:
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Directly from users when they provide it to us (e.g., during
                  the registration or KYC process).
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Automatically as users navigate the site (e.g., usage
                  details collected through cookies).
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    3. Data Storage, Processing, and Protection:
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  User data is stored on secure servers with limited access to
                  authorized personnel. Data processing is done with the utmost
                  confidentiality and integrity, ensuring user data is not
                  accessed or disclosed without proper authorization.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  Protection measures include:
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Encryption of data in transit and at rest.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Regular security assessments and updates.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Implementation of access controls and authentication
                  measures.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    4. User Consent and Data Retention:
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  User consent is obtained before any data collection and
                  processing, with users being informed of the specific data
                  being collected and the purpose for which it will be used.
                  Data is retained only for as long as necessary to fulfill the
                  purposes for which it was collected, including to satisfy any
                  legal, accounting, or reporting requirements.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    5. User Rights:
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  Users have the right to:
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Access their personal data.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Request correction or deletion of their personal data.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Object to processing and request restriction of processing.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Withdraw consent at any time without affecting the
                  lawfulness of processing based on consent before withdrawal.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Complain to a supervisory authority.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    6. Compliance with Data Protection Laws:
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  DreamGamez is committed to complying with all relevant data
                  protection laws, including the Law on the Protection of
                  Persons Regarding the Processing of their Personal Data No.
                  8968 of 2011. This includes, but is not limited to, ensuring
                  lawful processing of data, maintaining comprehensive records
                  of data processing activities, and conducting Data Protection
                  Impact Assessments (DPIAs) where necessary.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    7. Contact Point for Data-Related Inquiries:
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  For any inquiries or requests regarding personal data, users
                  can contact our Data Protection Specialist (DPS) at
                  support@dreamgamez.io
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    8. Data Breach Handling Process:
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  In the event of a data breach, DreamGamez will:
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Promptly assess the risk to individuals&apos; rights and
                  freedoms.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Where feasible, notify the appropriate supervisory authority
                  within 72 hours of becoming aware of the breach.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  - Communicate the breach to affected individuals without undue
                  delay if it is likely to result in a high risk to their rights
                  and freedoms.
                </span>
              </p>
              <h3
                style={{
                  marginTop: "10.0pt",
                  marginRight: "0cm",
                  marginBottom: ".0001pt",
                  marginLeft: "0cm",
                  lineHeight: "115%",
                  fontSize: 19,
                  fontFamily: '"Arial",sans-serif',
                  color: "#434343",
                  fontWeight: "normal",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: 17,
                      lineHeight: "115%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    9. Policy Review and Update:
                  </span>
                </strong>
              </h3>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  This Data Protection Policy will be reviewed and updated
                  regularly to ensure ongoing compliance with legal obligations
                  and best practices in data security.
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  Responsible for the processing of your data:
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  • Identity: DREAM GAMEZ SOCIEDAD DE RESPONSABILIDAD LIMITADA
                  (S.R.L.)
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  • Mailing address: 3335 10th Avenue, Catedral District, San
                  José City, San José, Costa Rica, &nbsp; &nbsp;Postal code
                  10104
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                  borderBottom: "0cm none #E5E7EB",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  • Email: support@dreamgamez.io
                </span>
              </p>
              <p
                style={{
                  margin: "0cm",
                  marginBottom: ".0001pt",
                  lineHeight: "115%",
                  fontSize: 15,
                  fontFamily: '"Arial",sans-serif',
                  marginTop: "15.0pt",
                  border: "none",
                  padding: "0cm",
                }}
              >
                <span style={{ fontFamily: "Poppins", color: "white" }}>
                  • The company registered in Costa Rica (Reg. No. 3-102-887215)
                </span>
              </p>
            </div>
            <p
              style={{
                margin: "0cm",
                marginBottom: ".0001pt",
                lineHeight: "115%",
                fontSize: 15,
                fontFamily: '"Arial",sans-serif',
              }}
            >
              <span style={{ fontFamily: "Poppins", color: "white" }}>
                &nbsp;
              </span>
            </p>
          </>
        </div>
      </Suspense>
    </main>
  );
}