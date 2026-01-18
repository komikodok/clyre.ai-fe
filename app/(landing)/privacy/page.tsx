import { Separator } from "@/components/ui/separator";

const PrivacyPage = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto px-4 md:px-0">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-stone-900">Privacy Policy</h1>
        <p className="text-stone-600 text-lg">
          We value your privacy and are committed to protecting your personal
          data. This policy explains how we handle your information.
        </p>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-stone-800">
          Data Collection & Usage
        </h2>
        <div className="space-y-4 text-stone-700 text-left md:text-justify leading-relaxed">
          <p>
            Clyre.ai is designed with privacy as a core principle. We collect
            minimal data necessary to provide you with mental health support:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Conversation History:</strong> We temporarily store your
              conversations to provide context-aware responses during your
              session.
            </li>
            <li>
              <strong>Uploaded Documents:</strong> Documents you upload for
              specific topics are processed to provide relevant insights.
            </li>
            <li>
              <strong>Session Data:</strong> Technical logs and session
              identifiers required for application functionality.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-stone-800">
          Data Retention & Deletion
        </h2>
        <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 text-stone-700 space-y-4">
          <p>
            We adhere to a strict ephemeral data policy. Your data is{" "}
            <strong>NOT</strong> permanently stored on our servers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded border border-stone-100 shadow-sm">
              <h3 className="font-bold text-stone-900 mb-1">
                Automatic Deletion
              </h3>
              <p className="text-sm">
                All conversation history and session data are automatically
                deleted every <strong>3 days</strong> (72 hours).
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-stone-100 shadow-sm">
              <h3 className="font-bold text-stone-900 mb-1">Session Reset</h3>
              <p className="text-sm">
                Starting a new topic or manually clearing history instantly
                removes local context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-stone-800">Data Security</h2>
        <p className="text-stone-700 text-left md:text-justify leading-relaxed">
          We implement industry-standard security measures to protect your data.
          All transmissions are encrypted using SSL/TLS protocols. Access to
          your active session data is strictly limited to you. We do not sell,
          trade, or otherwise transfer your personal information to outside
          parties.
        </p>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-stone-800">Contact Us</h2>
        <p className="text-stone-600">
          If you have any questions about this Privacy Policy, please contact us
          at <span className="font-semibold">privacy@clyre.ai</span>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPage;
