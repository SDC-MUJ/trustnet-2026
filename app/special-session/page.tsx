import React from "react";
import Image from "next/image";

const SpecialSession = () => {
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
            Special Session Proposal Guidelines
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-6">
          <div className="text-lg">
            <ol className="list-decimal space-y-4">
              <li>
                All Special Sessions will be held at the conference venue or
                online.
                <ol className="list-[lower-alpha] ml-8 mt-2 space-y-2">
                  <li>
                    To conduct a special session, the organizer of the session
                    needs to send a proposal containing the following items to{" "}
                    <a
                      href="mailto:trustnet2026@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      trustnet2026@gmail.com
                    </a>
                    <ol className="list-[lower-alpha] ml-8 mt-2 space-y-2">
                      <li>Aim &amp; Scope/ Objectives</li>
                      <li>Sub-topics of interest</li>
                      <li>Contact information of the Organizer</li>
                      <li>Organizers&apos; short biography</li>
                      <li>
                        List of potential reviewers/ TPC capable of reviewing
                        papers submitted to the special session
                      </li>
                      <li>Tentative number of paper submissions</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li className="mt-4">
                Proposals will be duly evaluated by the TrustNet&apos;26
                Technical Committee based on the novelty and associated impact
                of the topic and, the same will be intimated via email to the
                session organizer with further guidelines.
              </li>
              <li>
                Organizers of Special Sessions are required to announce/
                publicize the Call for Papers for Special Sessions on their own,
                however, details of all accepted Sessions will be made available
                on the Conference website (
                <a
                  href="https://trustnetcon.in/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://trustnetcon.in/
                </a>
                ).
              </li>
              <li>
                The review process (First phase) of the papers submitted in the
                Special Sessions will be done by the respective Organizers of
                the sessions. In the review process, each paper should receive
                at least two reviews from qualified reviewers (all reviewers are
                required to have expertise in the area of the submitted paper).
              </li>
              <li>
                The third qualified review (Second Phase) will be done by the
                Technical Committee/ Reviewer Pool of TrustNet&apos;26 who will
                make the final decision on acceptance/ rejection. The decision
                about acceptance/ rejection will also be intimated to the
                respective organizers of the special session.
              </li>
              <li>
                The acceptance rate of papers submitted for the special session
                and similarity index percentage must be restricted to 30% and
                ≤15% respectively.
              </li>
              <li>
                For successful execution of the special session minimum 5
                accepted papers are required, and the Organizer of the special
                session will be invited to chair the session. However, the
                TrustNet&apos;26 organizing committee may combine papers from
                different sessions, if the number of papers is less than 5 in a
                single session.
              </li>
            </ol>
          </div>

          <div className="mt-8 space-y-2">
            <h2 className="text-xl font-semibold">Important dates:</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Notification of acceptance: at the earliest</li>
              <li>
                Full length paper submission and registration: As per Conference
                Timeline
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <p>
              The special session will be organized through online mode only.
            </p>
          </div>

          <div className="mt-8 text-lg">
            <p className="mb-1">Warm regards,</p>
            <p className="mb-1">Team TrustNet&apos;26</p>
            <p className="mb-1">Manipal University Jaipur</p>
            <p>
              Email:{" "}
              <a
                href="mailto:trustnet2026@gmail.com"
                className="text-blue-600 hover:underline"
              >
                trustnet2026@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialSession;
