import { Separator } from "@/components/ui/separator";

const UsagePage = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto px-4 md:px-0">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-stone-900">Usage Guide</h1>
        <p className="text-stone-600 text-lg">
          Complete guide to using Clyre.ai effectively and responsibly for your
          mental health journey.
        </p>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-stone-800">Getting Started</h2>
        <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
          <ol className="list-decimal list-inside space-y-4 text-stone-700">
            <li>
              <span className="font-semibold">Open the Application:</span>{" "}
              Navigate to the chat interface.
            </li>
            <li>
              <span className="font-semibold">Review Guidelines:</span> Read the
              disclaimer and usage information carefully.
            </li>
            <li>
              <span className="font-semibold">Start Consultation:</span> Select
              a topic or just start typing your query in the input box.
            </li>
            <li>
              <span className="font-semibold">Receive Support:</span> The AI
              will respond with empathetic, evidence-based guidance.
            </li>
          </ol>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-stone-800">
          System Limitations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-stone-200 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-stone-900">
              Session Limits
            </h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• Maximum 50 messages per session/topic</li>
              <li>• Real-time message counter provided</li>
              <li>• Start a new topic to reset the counter</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border border-stone-200 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-stone-900">
              Reset System
            </h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• Automatic history deletion every 3 days</li>
              <li>• Resets conversation context completely</li>
              <li>• Ensures data freshness and privacy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-stone-800">
          Privacy & Security
        </h2>
        <div className="space-y-4 text-stone-700 text-left md:text-justify leading-relaxed">
          <p>
            Your privacy is our top priority. We employ strict data handling
            practices:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Temporary Storage:</strong> Conversation history is not
              permanently stored and is deleted automatically.
            </li>
            <li>
              <strong>Session-Based:</strong> Data exists primarily within your
              active session lifecycle.
            </li>
            <li>
              <strong>Private Access:</strong> Only you have access to your
              conversation history during the active period.
            </li>
          </ul>
        </div>
      </section>

      <Separator />

      <section className="bg-red-50 p-6 rounded-lg border border-red-100 space-y-3">
        <h3 className="text-red-700 font-bold flex items-center gap-2">
          Important Disclaimer
        </h3>
        <p className="text-red-600 text-sm leading-relaxed text-left md:text-justify">
          This platform provides AI-based information and support for mental
          health. It is intended as an initial aid and reference only. It is{" "}
          <strong>NOT</strong> a replacement for professional medical advice,
          diagnosis, or treatment. If you are experiencing a mental health
          crisis or thoughts of self-harm, please immediately contact emergency
          services or a qualified mental health professional.
        </p>
      </section>
    </div>
  );
};

export default UsagePage;
