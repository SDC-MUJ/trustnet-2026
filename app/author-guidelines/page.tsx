import React from "react";
import Image from "next/image";

const AuthorGuidelines = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] mb-6">
        <div className="absolute inset-0">
          <Image
            src="/images/graphics/advisory-hero.jpg"
            alt="Author Guidelines"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Guidelines for Authors
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="prose max-w-none text-justify text-lg">
          <p className="mb-6">
            The International Conference on Trusted Networks and Intelligent
            Systems (TrustNet 2026) seeks original research contributions across
            various disciplines, provided the work&apos;s context is adequately
            articulated. Researchers are encouraged to submit their papers by
            the specified deadline. After this date, no new papers will be
            accepted for submission, although modifications to existing
            submissions will still be possible. This conference brings together researchers, academicians, industry leaders, and practitioners to exchange ideas and explore advancements in AI, Computing, Blockchain, Cybersecurity, Digital and Network Security, fostering collaboration and innovation for a smarter, secure future.
          </p>

          <p className="mb-8 text-center">
            <strong>Paper Submission Link:</strong>{" "}
            <a
              href="https://cmt3.research.microsoft.com/TrustNet2026"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
            >
              https://cmt3.research.microsoft.com/TrustNet2026
            </a>
          </p>

          <p className="mb-6">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Manuscript Preparation and Submission Guidelines
          </h2>
          <p className="mb-6">
            All submissions for TrustNet will be managed through emails. By
            submitting, the authors agree to TrustNet 2026&apos;s policies. Each
            submission will receive a unique paper ID, which should be used in
            all communications. Kindly remember the paper ID and quote that ID
            in all further communications in the subject line when you email us
            your query.
          </p>

          <h3 className="text-2xl font-bold mb-3">Article Types</h3>
          <p className="mb-6">
            Articles with novel research contributions on the conference&apos;s
            theme should be submitted to TrustNet 2026.
          </p>

          <h3 className="text-2xl font-bold mb-3">Language Style</h3>
          <p className="mb-6">
            The default language style at TrustNet 2026 is standard English
            language only. Authors should submit manuscripts in English only.
          </p>

          <h3 className="text-2xl font-bold mb-3">
            Manuscript Preparation Guidelines:
          </h3>
          <ol className="list-decimal pl-6 mb-6 text-lg">
            {[
              "Title: First letter of each word except helping verbs and connectors should be uppercase letters only.",
              "Usage of first/second/third person (our, me, us, I, etc.) should be avoided in the manuscript.",
              "Authors are required to proofread the paper for English usage (possibly by a native speaker proofreading).",
              "Abbreviations should be avoided in abstract.",
              "Include all figures in high resolution only. Try to keep the DPI of every figure above 500. Do not include blurred images.",
              "Contents need to be well organized. Title, objective, research gap, proposed methodology, and results need to be inline.",
              "Authors should include motivation and a paper organization at the end of the introduction section.",
              "All images and tables must be numbered and provided with a suitable caption.",
              "Do not paste tables as figures or snapshots.",
              "All equations must be numbered sequentially and discussed in the text.",
              "All images, tables, equations, and references must be cited in the text. Check in-text citations of all these items before final submission.",
              "Mention at least 5 to 8 keywords in the manuscript.",
              "Abbreviations should be expanded to their first usage only. Non-standard abbreviations should be avoided.",
              "All sections and subsections of the manuscript must be numbered properly. Do not include headings beyond 3 levels.",
              "Acknowledgements (if any) should be included after the conclusion section.",
              "Author names and ordering must be kept identical in all places (i.e., Manuscript, Submission portal, and Consent to Publish form).",
              "Include the name, affiliation and e-mail of all authors in both the manuscript as well as on the submission portal. In addition, do not forget to mention the details of the corresponding author.",
              "The conclusion should be novel and supported by statistical remarks on the results of experimental study.",
              "Reference items should be complete. Avoid incomplete and not cited references in the list.",
              "Download the Word/LaTeX template from here Word Format or LaTex Format and submit your manuscript as per the template. The manuscript should be kept within the page limit of 10-12 pages.",
            ].map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ol>

          {/* Template Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12">
            <a
              href="/templates/word.zip"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              download
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Download Word Template
            </a>

            <a
              href="/templates/latex.zip"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              download
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Download LaTeX Template
            </a>
          </div>

          {[
            "Confidentiality",
            "Review Process",
            "Dual/Double Submissions Policy",
            "Attendance responsibilities",
            "Publication",
            "Publicity",
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-3">{section}</h3>
              <p className="mb-6">
                {section === "Confidentiality" &&
                  "The conference committee maintains strict confidentiality throughout the process, from submission to decision-making on every article considered for review. Reviewers involved in this whole review process are from reputed universities throughout the globe, and the practice of keeping all information confidential during the review is part of the standard communication with all reviewers."}
                {section === "Review Process" &&
                  "Once an article is submitted to the conference, the authors agree to our review policy, where the article will be peer-reviewed by professional reviewers after being checked for similarity index and plagiarism by plagiarism detection software (Turnitin). TrustNet 2026 respects Intellectual Property Rights. Plagiarism is defined as the incorrect appropriation of someone else's information, thoughts, or ideas and presenting them as one's own. The conference committee will not tolerate this sort of breach of ethical norms at any cost. Any article with more than 18% similarity index will be rejected immediately without further consideration. The similarity should not be greater than 2% from a single source."}
                {section === "Dual/Double Submissions Policy" &&
                  "Our conference aims to present novel research and ensure efficient use of reviewers' efforts. Authors submitting manuscripts acknowledge that their work has not been previously published or accepted for publication in a substantially similar form in any peer-reviewed venue. Any breach of these conditions will result in rejection and notification to the other venue where the submission was made. Submissions should be original and not duplicate prior publications or ongoing submissions. Include citations in your manuscript if you need to reference another paper concurrently submitted to the conference. Clearly articulate in your paper how your submission differs significantly from these concurrent works and provide the additional papers in the supplemental material. Authors are encouraged to contact the Program Chairs for further clarification if needed."}
                {section === "Attendance responsibilities" &&
                  "The authors must agree that if the paper is accepted, at least one of the authors will register for the conference and present the paper there. Acceptance of a paper does not claim for final publication. Only presented papers will be forwarded to the publication partner. Presenters will be provided with a certificate of paper presentation."}
                {section === "Publication" &&
                  "Select accepted and presented papers at the conference will be submitted for publication through our publication partners. Before final publication, proofs may be sent to the corresponding author designated in the manuscript. It is crucial to provide the corresponding author's correct email address. Please regularly visit the conference website for updates on publication specifics."}
                {section === "Publicity" &&
                  "All articles submitted to the conference cannot be fully or partially publicised on any social media platform until an official acceptance email is received from the publisher. If any author(s) violate this act, their article will be rejected for presentation and removed from the proceeding for publication."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorGuidelines;
