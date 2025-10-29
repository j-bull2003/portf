"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#fdfdfc] text-[#1e1e1c] font-sans antialiased relative overflow-x-hidden"
      style={{
        backgroundImage:
          "radial-gradient(#d8d8d8 0.8px, transparent 0.99px)",
        backgroundSize: "22px 22px",
      }}
    >
      {/* translucent overlay to soften dots */}
      <div className="absolute inset-0 bg-[#fdfdfc]/40 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-16 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <Image
              src="/profile.jpeg"
              alt="Profile photo"
              width={220}
              height={220}
              className="rounded-xl object-cover shadow-lg border border-[#e5e4e2]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-3 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Jessica Bull
            </h1>
            <p className="text-[15px] text-[#4b4b4b]">
              Software Engineer · TypeScript · Python · AWS · Microservices · NodeJS
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-[#606060] mt-3">
              <a
                href="https://www.linkedin.com/in/jessica-bull-b9aab9253/"
                target="_blank"
                className="hover:text-[#004aad] transition"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/j-bull2003"
                target="_blank"
                className="hover:text-[#004aad] transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="mailto:jessicabull833@gmail.com"
                className="hover:text-[#004aad] transition"
              >
                <HiOutlineMail size={22} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 md:px-0 py-12 border-t border-[#e4e3e1] leading-relaxed text-[15px]"
        >
          <h2 className="text-xl font-semibold mb-4 text-[#111111]">About</h2>
          <p className="mb-3 text-[#353535]">
            I’m a full stack software engineer who enjoys translating
            complex requirements into elegant, maintainable systems. My work
            combines backend reliability with thoughtful front-end design and backend architecture.
          </p>
          <p className="mb-3 text-[#353535]">
            I’ve contributed to both startup and enterprise products, designing
            cloud-native services in AWS and delivering smooth, data-driven
            user interfaces. My goal is to write code that’s clean, testable,
            and built for longevity.
          </p>
          <p className="text-[#353535]">
            Outside of code I mentor students, study system architecture, and
            explore how design and engineering intersect to produce great
            experiences.
          </p>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 md:px-0 py-12 border-t border-[#e4e3e1] text-[15px]"
        >
          <h2 className="text-xl font-semibold mb-6 text-[#111111]">
            Professional Experience
          </h2>

          <div className="bg-white border border-[#e7e6e4] rounded-lg p-6 mb-8 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-[#111111]">
              Full-Stack Software Engineer — Utonomy (London, UK)
            </h3>
            <p className="text-xs text-[#6b6b6b] mb-2">
              July 2023 – Present
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#2f2f2f]">
              <li>
              Stack: Node.js framework with JavaScript (backend), Python (AWS CDK), Angular framework with TypeScript (frontend) and a microservice architecture, and experience using the Cumulocity SoftwareAG SDK.
              </li>
              <li>
              Led development of Python CDK Infrastructure as Code (IaC) for AWS, orchestrating the deployment of a sophisticated AI pipeline using SageMaker, step functions, and security networking construct.
              </li>
              <li>
              Created multiple microservices (Upredict) from the ground up, enabling customers to configure and deploy predictive schedules to custom gas networks. This service leverages AI to predict daily gas usage based on weather patterns and historical data, seamlessly integrating with our machine learning repository.
              </li>
              <li>
              Developed Angular dashboards with protected services and dashboards, feature widgets, including reusable components (charts, forms, modals) integrated with REST APIs and microservices.
-Implemented Express.js microservices in Node.js, designing API endpoints, middleware, and integration with distributed services.
              </li>
              <li>
              Resolved circular dependency issues during Angular and Cumulocity (C8Y) client upgrades by refactoring service injection patterns and isolating shared dependencies.
              </li>
            </ul>
          </div>

          <div className="bg-white border border-[#e7e6e4] rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-[#111111]">
              Founding Software Engineer — Valearnis (Australia)
            </h3>
            <p className="text-xs text-[#6b6b6b] mb-2">
              Aug 2022 – Jul 2022
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#2f2f2f]">
              <li>
              Built full-stack features with React (hooks, context, form handling) and Django/Django REST Framework, backed by PostgreSQL (migrations, indexed queries).
              </li>
              <li>
              Implemented a referral system: referral code generation, tracked attribution on signup, persistence in PostgreSQL, and admin reporting endpoints.
              </li>
              <li>
              Integrated Stripe: payment intents and checkout; implemented webhooks for payment/success/failure events with signature verification, idempotency keys, and retry handling; updated user entitlements on webhook events.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 md:px-0 py-12 border-t border-[#e4e3e1] text-[15px]"
        >
          <h2 className="text-xl font-semibold mb-6 text-[#111111]">
            Education
          </h2>

          <div className="bg-white border border-[#e7e6e4] rounded-lg p-6 mb-6 shadow-sm">
            <h3 className="font-semibold text-lg text-[#111111]">
              Monash University — Integrated Masters of Computer Science
            </h3>
            <p className="text-xs text-[#6b6b6b] mb-2">
              2021 – 2024 · First Class Honours
            </p>
            <p className="text-[#2f2f2f]">
            Achieved 91% in Final Capstone: (developed a full stack system for analysing space occupancy within the University) - Machine learning with YOLOv8 (PyTorch, Ultralytics), graph based analysis (NetworkX + Euclidean distance metrics) to detect groups based on proximity and relative size, generated density heatmaps (OpenCV + Gaussian kernels), structured detection outputs into Pandas DataFrames.
            </p>
          </div>

          <div className="bg-white border border-[#e7e6e4] rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-[#111111]">
              La Trobe University — Bachelor of Computer Science
            </h3>
            <p className="text-xs text-[#6b6b6b] mb-2">
              2019 – 2021 · First Class Honours
            </p>
            <p className="text-[#2f2f2f]">
            Coursework covered discrete mathematics, statistics, ethical hacking, functional programming, object oriented programming, machine learning, UI/UX, fullstack development and data structures and algorithms.

            </p>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 md:px-0 py-12 border-t border-[#e4e3e1] text-[15px]"
        >
          <h2 className="text-xl font-semibold mb-4 text-[#111111]">
            Technical Skills
          </h2>
          <p className="text-[#2f2f2f]">
            TypeScript · JavaScript · Angular · React · Node.js · Python · Next.js
            · Django · AWS (S3 / Lambda / CDK / Step Functions) · Express · REST
            APIs · PostgreSQL · CI/CD · Docker · ML (PyTorch) · Graph Analysis ·
            Cloud IaC · Automated Testing · UI/UX Design
          </p>
        </motion.section>

        <footer className="text-center text-xs text-[#757575] py-10 border-t border-[#e4e3e1]">
          © {new Date().getFullYear()} Jessica Bull · All rights reserved
        </footer>
      </div>
    </main>
  );
}
