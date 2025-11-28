import React from "react";

const Registration = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/graphics/advisory-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration</h1>
          <p className="text-lg md:text-xl">Join us at TrustNet 2026</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-16">
        <div className="prose max-w-none text-justify text-lg">
          <p className="mb-6">
            The authors agree that if the paper is accepted for oral/ poster
            presentation, at least one of the authors will register for the
            conference and present the paper at the conference venue. The
            registration fee is given below for your
            reference:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border-gray-200 text-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-3 text-left">CATEGORY</th>
                  <th className="border p-3 text-left">INDIAN (INR)</th>
                  <th className="border p-3 text-left">INTERNATIONAL (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Students / Researchers</td>
                  <td className="border p-3">9000</td>
                  <td className="border p-3">200</td>
                </tr>
                <tr>
                  <td className="border p-3">Academicians</td>
                  <td className="border p-3">10000</td>
                  <td className="border p-3">250</td>
                </tr>
                <tr>
                  <td className="border p-3">Industry Participants</td>
                  <td className="border p-3">12500</td>
                  <td className="border p-3">300</td>
                </tr>
                <tr>
                  <td className="border p-3">Attendee Only</td>
                  <td className="border p-3">2500</td>
                  <td className="border p-3">100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-lg">
            <strong>Paper Page Limit:</strong> 10-12 pages
          </p>
          <p className="mb-4">
            <strong>Extra Page Charges (per page):</strong> INR 2000 / USD 25
          </p>
          <p className="mb-6">
            <strong>Note:</strong> Registration fee is NOT refundable.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            The registration for TrustNet 2026 is a two-step process:
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">
              Step 1: Pay Registration Fee
            </h3>
            <p className="mb-2">Payment link:</p>
            <div className="flex gap-4 mb-4">
              <button className="bg-secondaryBg text-white px-4 py-2 rounded">
                Indian participants
              </button>
              <button className="bg-secondaryBg text-white px-4 py-2 rounded">
                International/Foreign participants
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">
              Step 2: Fill the Registration form
            </h3>
            <a href="#" className="text-blue-600 hover:underline">
              Click here for the registration form
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Important Instructions:</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                For successful registration, at least one author should register
                before the deadline.
              </li>
              <li>
                The registration fee includes participation at the conference,
                food, a conference kit and a one-day gala dinner.
              </li>
              <li>Boarding and lodging will be borne by participants only.</li>
              <li>
                After payment, note down the transaction ID and save a snapshot
                of the payment. Transaction ID and snapshots are required for
                registration.
              </li>
              <li>
                A presentation certificate will be issued to the presenter only.
              </li>
              <li>
                If multiple papers are accepted for publication and presentation
                by the same author(s), each paper requires a registration fee to
                be included in the proceedings.
              </li>
              <li>
                Do not enquire about registration status via email/phone. You
                will be notified via email once the payment information is
                updated with us from the finance section.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
