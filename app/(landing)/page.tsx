import { Separator } from "@/components/ui/separator";

const LandingPage = () => {
  return (
    <div className="space-y-10">
      <section className="p-1 flex flex-col sm:flex-row sm:justify-between space-y-6 sm:space-y-0 w-full sm:space-x-10">
        <h1 className="text-start text-xl sm:text-2xl sm:w-1/2 flex-shrink-0 h-fit font-bold">
          AI Mental Health Platform
        </h1>
        <p className="columns-1 sm:columns-2 gap-8 text-stone-700 text-sm sm:text-sm text-left sm:text-justify leading-relaxed">
          An AI-powered platform designed to help you navigate mental health
          challenges and support your well-being journey. Using advanced AI
          technology, we provide interactive conversations that understand
          context and deliver relevant, personalized support. Our platform
          enables you to manage multiple mental health topics, upload supporting
          documents for deeper analysis, and receive real-time responses from
          our AI agent. All conversation history is securely stored for your
          future reference and progress tracking.
        </p>
      </section>

      <Separator />

      <section className="p-1 flex flex-col sm:flex-row sm:justify-between space-y-6 sm:space-y-0 w-full sm:space-x-10">
        <h1 className="text-start text-xl sm:text-2xl sm:w-1/2 flex-shrink-0 h-fit font-bold">
          Key Features
        </h1>
        <p className="columns-1 sm:columns-2 gap-8 text-stone-700 text-sm sm:text-sm text-left sm:text-justify leading-relaxed">
          <strong>Evidence-Based Support</strong> provides guidance grounded in
          psychological research and therapeutic approaches for mental health
          challenges. <strong>Personalized Insights</strong> tailored to your
          specific situation through context-aware conversations that understand
          your unique mental health journey. Manage{" "}
          <strong>Multiple Topics</strong> and organize your mental health
          concerns in one centralized place. <strong>Document Context</strong>{" "}
          allows you to upload relevant materials per topic, helping the AI
          provide more informed and personalized guidance.{" "}
          <strong>Real-Time Conversations</strong> with streaming responses for
          immediate support when you need it. Track your{" "}
          <strong>Mental Health Progress</strong> over time with comprehensive
          conversation history and pattern recognition.
        </p>
      </section>

      <Separator />

      <section className="p-1 flex flex-col sm:flex-row sm:justify-between space-y-6 sm:space-y-0 w-full sm:space-x-10">
        <h1 className="text-start text-xl sm:text-2xl sm:w-1/2 flex-shrink-0 h-fit font-bold">
          Security & Disclaimer
        </h1>
        <p className="columns-1 sm:columns-2 gap-8 text-stone-700 text-sm sm:text-sm text-left sm:text-justify leading-relaxed">
          All your mental health data is encrypted and securely stored.
          Conversation history and documents are accessible only to you. This
          platform is built with trusted AI technology to provide empathetic and
          responsive support.{" "}
          <strong className="text-red-600">Mental Health Disclaimer:</strong>{" "}
          This platform provides AI-based information and support for mental
          health. Use it as an initial aid and reference, not as a replacement
          for consultation with psychologists, psychiatrists, or other mental
          health professionals. If you are experiencing a mental health crisis
          or thoughts of self-harm, please immediately contact emergency
          services or mental health professionals.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
