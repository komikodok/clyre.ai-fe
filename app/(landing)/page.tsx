"use client"

import { Separator } from "@/components/ui/separator"
import { motion } from "motion/react"

const LandingPage = () => {
  return (
  <div className="space-y-10">
    <section className="p-1 sm:flex sm:justify-between space-y-6 w-full space-x-10">
      <motion.h1 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="text-start text-xl sm:text-2xl sm:w-1/2 flex-shrink-0 h-fit font-bold"
      >
        The Smart Cashier Assistant
      </motion.h1>
      <motion.p 
        whileInView={{ opacity: [0, 1] }}
        transition={{ ease: 'linear', duration: 0.5 }}
        className="columns-2 gap-8 text-stone-700 text-xs sm:text-sm text-justify"
      >
        Meet <strong>Clyre</strong> — your intelligent cashier assistant that brings both efficiency and emotion to your business.
        Beyond simplifying transactions, managing orders, and providing real-time insights, 
        Clyre also interacts expressively through an animated avatar that reflects the tone of your business day.

        When sales rise, it greets you with a cheerful smile.
        When inventory runs low, its expression turns thoughtful — prompting action without stress.
        This emotional layer makes every interaction feel human and engaging, transforming routine tasks into meaningful collaboration.

        Built for cafes and restaurants, Clyre understands not just numbers, but moods — 
        helping you stay connected, informed, and inspired through every shift.
      </motion.p>
    </section>

    <Separator />

    <section className="p-1 sm:flex sm:justify-between space-y-6 w-full space-x-10">
      <motion.h1 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="text-start text-xl sm:text-2xl sm:w-1/2 flex-shrink-0 h-fit font-bold"
      >
        Intelligent Sales Insights
      </motion.h1>
      <motion.p 
        whileInView={{ opacity: [0, 1] }}
        transition={{ ease: 'linear', duration: 0.5 }}
        className="columns-2 gap-8 text-stone-700 text-xs sm:text-sm text-justify"
      >
        Clyre doesn’t just record sales — it learns from them.
        Using AI-driven analytics, it identifies your top-selling products, 
        predicts demand trends, and helps manage stock efficiently.
        
        You’ll receive recommendations on restocking, pricing adjustments, 
        and even see performance summaries that are easy to understand.
        It’s like having a data analyst built right into your counter.
      </motion.p>
    </section>

    <Separator />

    <section className="p-1 sm:flex sm:justify-between space-y-6 w-full space-x-10">
      <motion.h1 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="text-start text-xl sm:text-2xl sm:w-1/2 flex-shrink-0 h-fit font-bold"
      >
        Privacy and Reliability
      </motion.h1>
      <motion.p 
        whileInView={{ opacity: [0, 1] }}
        transition={{ ease: 'linear', duration: 0.5 }}
        className="columns-2 gap-8 text-stone-700 text-xs sm:text-sm text-justify"
      >
        Every transaction is encrypted and securely processed. 
        Your data stays private — accessible only to you and your team.
        Clyre follows strict safety standards to ensure reliability in every report, 
        recommendation, and system operation.
        
        Built on trusted AI infrastructure, it delivers both speed and security — 
        so you can run your business confidently, every single day.
      </motion.p>
    </section>
  </div>
  )
}

export default LandingPage
