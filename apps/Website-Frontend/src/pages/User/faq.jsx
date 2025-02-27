import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/NavBar/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col text-gray-800">
      {/* Navigation Bar */}
      <NavBar />

      {/* FAQ Section */}
      <section className="flex-grow px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          {/* Question 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              What is PitchDeck?
            </h2>
            <p className="mt-2 text-gray-700">
              PitchDeck is an intelligent matchmaking platform that connects startups with potential investors based on their business needs, funding stage, and industry domain.
            </p>
          </div>

          {/* Question 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              How do I register as a startup or investor?
            </h2>
            <p className="mt-2 text-gray-700">
              You can sign up on our platform by filling out the registration form and providing details about your startup or investment preferences. Once verified, you can start exploring matches.
            </p>
          </div>

          {/* Question 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              How does the matchmaking system work?
            </h2>
            <p className="mt-2 text-gray-700">
              Our platform uses smart algorithms to match startups with suitable investors based on industry type, funding requirements, and compatibility scores.
            </p>
          </div>

          {/* Question 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              Is there a fee for using PitchDeck?
            </h2>
            <p className="mt-2 text-gray-700">
              Basic features are free, but we offer premium subscriptions for advanced features like personalized matchmaking and priority access to investors.
            </p>
          </div>

          {/* Question 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              How secure is my data?
            </h2>
            <p className="mt-2 text-gray-700">
              Your data is encrypted and stored securely, following industry-standard security protocols to ensure maximum privacy and confidentiality.
            </p>
          </div>

          {/* Question 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              Can I communicate with investors before scheduling a meeting?
            </h2>
            <p className="mt-2 text-gray-700">
              Yes, the platform allows startups to initiate conversations with investors through chat before scheduling a formal meeting.
            </p>
          </div>

          {/* Question 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              How are meetings conducted on the platform?
            </h2>
            <p className="mt-2 text-gray-700">
              Meetings are conducted through our integrated video conferencing feature, where both parties can discuss business opportunities in real time.
            </p>
          </div>

          {/* Question 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              Can I cancel or reschedule a meeting?
            </h2>
            <p className="mt-2 text-gray-700">
              Yes, meetings can be canceled or rescheduled through your dashboard. Please refer to our cancellation policy for further details.
            </p>
          </div>

          {/* Question 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              How can I review investors or startups?
            </h2>
            <p className="mt-2 text-gray-700">
              Both startups and investors can leave feedback and ratings after each meeting, helping others make informed decisions.
            </p>
          </div>

          {/* Question 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              What happens if no suitable matches are found?
            </h2>
            <p className="mt-2 text-gray-700">
              If no matches are found, our system will notify you when new investors or startups are available that align with your preferences.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
