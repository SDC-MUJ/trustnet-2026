"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaShieldAlt,
  FaServer,
  FaUserShield,
  FaBrain,
  FaMobileAlt,
  FaClipboardCheck,
  FaUserLock,
  FaEllipsisH,
  FaCube, // Add this import for the new icon
} from "react-icons/fa";

const getIconForTrack = (index: number) => {
  const icons = [
    FaShieldAlt,
    FaServer,
    FaUserShield,
    FaBrain,
    FaMobileAlt,
    FaClipboardCheck,
    FaUserLock,
    FaCube, // New icon for computational complexity
    FaEllipsisH,
  ];
  const Icon = icons[index] || FaEllipsisH;
  return <Icon className="w-6 h-6 text-orange-500" />;
};

const tracksData = [
  {
    title: "AREA 1: APPLIED CRYPTOGRAPHY AND NETWORK SECURITY",
    topics: [
      "Information Hiding",
      "Intrusion Detection & Prevention",
      "Network Security",
      "Privacy Enhancing Cryptography",
      "Security Protocols",
      "Sensor and Mobile Ad Hoc Network Security",
      "Wireless Network Security",
      "Cryptography and Cryptanalysis",
      "Quantum-Safe and Post-Quantum Cryptography",
      "Computer Networks and Protocols",
    ],
  },
  {
    title: "AREA 2: DISTRIBUTED SYSTEMS AND ARCHITECTURES",
    topics: [
      "Blockchain security",
      "Critical Infrastructure Protection",
      "Peer-to-Peer Security",
      "Security in Distributed Systems",
      "Security Information Systems Architecture",
      "Blockchain and Distributed Ledger for Security",
      "Next-Generation Networks (5G/6G, Vehicular, IoT, and Edge Networks)",
      "Network Architectures: SDN, NFV, and Cloud-Based Networking",
    ],
  },
  {
    title: "AREA 3: DATA SECURITY AND PRIVACY",
    topics: [
      "Access Control",
      "Anonymity",
      "Biometrics Security and Privacy",
      "Database Security and Privacy",
      "Data Integrity",
      "Ethical and Legal Implications of Security and Privacy",
      "Identity Management",
      "Personal Data Protection for Information Systems",
      "Privacy Enhancing Technologies",
      "Security and Privacy Policies",
      "Privacy-Preserving Technologies",
      "Digital Forensics and Incident Response",
    ],
  },
  {
    title: "AREA 4: SECURITY AND AI/MACHINE LEARNING",
    topics: [
      "Adversarial Machine Learning",
      "AI-based Solutions for Security",
      "Attacks on Machine Learning",
      "Secure Federated Learning",
      "Security Vulnerabilities of Large Language Models",
      "Artificial Intelligence for Security and Trust Management",
      "Anomaly Detection and Threat Intelligence",
      "Emerging Trends in Cybersecurity and Network Intelligence",
    ],
  },
  {
    title: "AREA 5: SECURITY AND PRIVACY IN EMERGING SCENARIOS",
    topics: [
      "Security and Privacy for Big Data",
      "Security and Privacy in Crowdsourcing",
      "Security and Privacy in IT Outsourcing",
      "Security and Privacy in Location-Based Services",
      "Security and Privacy in Mobile Systems",
      "Security and Privacy in Pervasive/Ubiquitous Computing",
      "Security and Privacy in Smart Grids",
      "Security and Privacy in Social Networks",
      "Security and Privacy in the Cloud",
      "Cyber-Physical Systems and IoT Security",
      "Security in Smart Cities, Healthcare, and Critical Infrastructures",
      "Secure Cloud and Edge Computing",
    ],
  },
  {
    title: "AREA 6: RISKS, POLICIES AND SOFTWARE SECURITY",
    topics: [
      "Formal Methods and Security",
      "Information Systems Auditing",
      "Intellectual Property Protection",
      "Insider Threats and Countermeasures",
      "Organizational Security Policies",
      "Risk Assessment",
      "Secure Software Development Methodologies",
      "Security Verification and Validation",
      "Software Metrics",
      "Trust Modeling and Risk Management in Networks",
      "Lightweight Security for Resource-Constrained Devices",
    ],
  },
  {
    title: "AREA 7: TRUST MANAGEMENT AND USABILITY",
    topics: [
      "Human factors",
      "Reliability and Dependability",
      "Security Requirements",
      "Security Metrics and Measurement",
      "Security usability",
      "Trust Management and Reputation Systems",
      "Intrusion Detection and Prevention Systems",
    ],
  },
  {
    title: "AREA 8: COMPUTATIONAL COMPLEXITY THEORY AND ITS APPLICATIONS",
    topics: [
      "Computational Complexity theory and its Application in Computer Networks",
      "Quantum Query Complexity",
    ],
  },
];

const CallForPapers = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-secondaryBg text-white py-20 px-4"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Call for Papers
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Call for Papers - Submit your original research and be part of the
            global dialogue on Trusted Networks, Intelligent Systems, and Secure
            Innovation.
          </p>
        </div>
      </motion.div>

      <div className="bg-white text-gray-800 py-20 px-4">
        <div className="container mx-auto">
          {/* Guidelines Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto border border-gray-400 rounded-xl p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Submission Guidelines
            </h2>
            <p className="text-lg mb-12">
              Researchers, academicians, and professionals are invited to submit
              their research abstracts and full papers for oral and poster
              presentations. Selected presentations will be appreciated with
              Cash Awards under &ldquo;Best Paper Category&rdquo; and
              &ldquo;Outstanding Research Category&rdquo;.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4">
                  Submission Requirements
                </h3>
                <ul className="text-left list-none space-y-2">
                  <li>• Original, unpublished research</li>
                  <li>• High-quality academic content</li>
                  <li>• Follow conference format guidelines</li>
                  <li>• Peer-review process</li>
                </ul>
              </div>

              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4">
                  Presentation Formats
                </h3>
                <ul className="text-left list-none space-y-2">
                  <li>• Oral presentations</li>
                  <li>• Poster presentations</li>
                  <li>• Panel discussions</li>
                  <li>• Interactive sessions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Submission Timeline
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative p-6 text-center"
                >
                  <div className="text-3xl font-bold text-gray-300 mb-4">
                    {index}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {index === 1
                      ? "Call for Papers"
                      : index === 2
                      ? "Submission"
                      : index === 3
                      ? "Acceptance"
                      : "Registration End"}
                  </h3>

                  <div className="text-gray-600">
                    {index === 1 ? (
                      "September 9, 2025"
                    ) : index === 2 ? (
                      <div className="flex flex-col items-center">
                        {/* <span className="text-xs text-red-600 line-through decoration-red-600 decoration-2">
                          November 15, 2025
                        </span> */}
                        <span className="text-gray-600">November 30, 2025</span>
                      </div>
                    ) : index === 3 ? (
                      "December 15, 2025"
                    ) : (
                      "December 25, 2025"
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Topics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-16 bg-gradient-to-b from-white to-gray-50"
          >
            <div className="container mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-8 relative pb-3 uppercase">
                Conference Tracks
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-orange-300 rounded-full"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {tracksData.map((track, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index}
                    className={`
                      p-6 rounded-xl transition-all duration-300
                      bg-gradient-to-br from-orange-50 to-white
                      border border-orange-100
                      hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]
                      hover:border-orange-200 hover:-translate-y-1
                      cursor-pointer relative
                      overflow-hidden
                    `}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {getIconForTrack(index)}
                      <h3 className="text-xl font-semibold text-gray-800">
                        {track.title.replace(/AREA \d+: /, "")}
                      </h3>
                    </div>

                    <ul className="space-y-2 relative z-10">
                      {track.topics.map((topic, topicIndex) => (
                        <motion.li
                          key={topicIndex}
                          className="text-gray-600 text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                          {topic}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-transparent transition-opacity duration-300 opacity-0 hover:opacity-100" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Brochure Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto mt-20 text-center"
          >
            <Image
              src="/brochure/trustnet-brochure.jpeg"
              alt="TrustNet Brochure"
              width={950}
              height={600}
              className="rounded-lg shadow-lg mx-auto"
            />
          </motion.div>

          {/* Publication and Indexing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mt-20 text-center"
          >
            <h2 className="text-3xl font-semibold mb-8">
              Publication and Indexing
            </h2>
            {/* <p className="text-lg mb-12">Submitted to Springer for approval.</p> */}
            <p className="text-lg mb-12 text-justify text-gray-700 ">
              The Microsoft CMT service was used for managing the peer-reviewing
              process for this conference. This service was provided for free by
              Microsoft and they bore all expenses, including costs for Azure
              cloud services as well as for software development and support.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <Image
                src="/images/logo/scopus-logo.png"
                alt="Scopus Logo"
                width={200}
                height={100}
                className="object-contain"
              />
              {/* <Image
                          src="/images/logo/elsevier-logo.png"
                          alt="Springer Logo"
                          width={80}
                          height={80}
                          className="object-contain"
                        /> */}
              <Image
                src="/images/logo/springer.png"
                alt="Springer Logo"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#db4e1a] text-white hover:bg-[#db4e1a]/90 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Abstract Book
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                Scopus Journals
              </motion.button>
            </div> */}
            <p className="text-lg mt-6 text-justify text-gray-700 ">
              The proceedings of TrustNet’26 will be published in Lecture Notes
              in Networks and Systems (LNNS). LNNS is abstracted and indexed in
              SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CallForPapers;
