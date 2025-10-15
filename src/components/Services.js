import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    name: "Manufacturing Staffing Solutions",
    desc: "We offer end-to-end manpower solutions for manufacturing industries. From skilled machine operators to plant supervisors, our recruitment services ensure smooth production and quality compliance.",
    roles: ["Assembly Line Operators", "Quality Control Inspectors", "Production Supervisors"],
  },
  {
    name: "Logistics & Supply Chain Recruitment",
    desc: "Keep your supply chain efficient with our trained logistics and warehouse workforce. We provide staffing solutions to support operations, inventory, and distribution.",
    roles: ["Warehouse Staff", "Inventory Controllers", "Supply Chain Coordinators"],
  },
  {
    name: "Retail & E-Commerce Hiring",
    desc: "Scale your retail stores and e-commerce operations with customer-focused and sales-driven professionals.",
    roles: ["Sales Associates", "Order Fulfillment Executives", "Customer Service Representatives"],
  },
  {
    name: "IT & ITES Manpower",
    desc: "Our IT & ITES recruitment services connect you with skilled technical experts and BPO professionals to strengthen your digital and process operations.",
    roles: ["Technical Support Specialists", "Data Entry Operators", "Process Associates"],
  },
  {
    name: "Healthcare Workforce Solutions",
    desc: "We provide reliable and compliance-ready healthcare support staff for hospitals, clinics, and medical facilities.",
    roles: ["Administrative Staff", "Patient Care Assistants", "Support Service Teams"],
  },
  {
    name: "BFSI (Banking, Financial Services & Insurance)",
    desc: "Strengthen your financial and banking operations with professionals trained in compliance, data management, and customer support.",
    roles: ["Customer Service Executives", "Data Processing Associates", "Back-Office Support"],
  },
  {
    name: "Sales & Marketing Recruitment",
    desc: "Boost your business growth with dynamic sales and marketing talent who specialize in lead generation, customer acquisition, and brand promotion.",
    roles: ["Sales Executives & Team Leaders", "Marketing Specialists", "Business Development Managers"],
  },
  {
    name: "Hospitality & Tourism Manpower",
    desc: "Enhance guest satisfaction with our well-trained hospitality and tourism staff, skilled in service excellence and operations.",
    roles: ["Front Desk & Reception Staff", "Event Coordinators", "Housekeeping & Maintenance Teams"],
  },
  {
    name: "Education Staffing Services",
    desc: "Support your educational institutions with dedicated teaching and non-teaching professionals.",
    roles: ["Administrative Assistants", "Teaching Assistants", "Student Support Staff"],
  },
];

const Services = () => {
  const [layout, setLayout] = useState("grid");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center min-h-screen w-full py-16 
      bg-gradient-to-br from-gray-100 via-blue-50 to-pink-50 
      dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-500 px-4 overflow-x-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center gradient-text drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="mb-10 text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At AB Recruiters, we provide tailored staffing solutions across industries — ensuring that every hire is the right fit.
        </motion.p>

        <div className="flex justify-center mb-10">
          <motion.button
            onClick={() => setLayout(layout === "grid" ? "accordion" : "grid")}
            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Switch to {layout === "grid" ? "Accordion" : "Card Grid"} View
          </motion.button>
        </div>

        {/* GRID VIEW */}
        <AnimatePresence mode="wait">
          {layout === "grid" && (
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {servicesData.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-start text-left bg-white/90 dark:bg-gray-800/80 backdrop-blur-md 
                  rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 
                  hover:scale-[1.03] hover:shadow-2xl hover:border-pink-400 transition-all duration-400"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-sm">
                    {service.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-blue-700 to-pink-600 dark:from-gray-200 dark:via-purple-300 dark:to-blue-300 mb-3">
                    {service.desc}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {service.roles.map((role, i) => (
                      <li
                        key={i}
                        className={`font-medium ${
                          i % 2 === 0
                            ? "text-blue-600 dark:text-blue-300"
                            : "text-pink-600 dark:text-pink-300"
                        }`}
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ACCORDION VIEW (Improved Headline Style) */}
        <AnimatePresence mode="wait">
          {layout === "accordion" && (
            <motion.div
              key="accordion"
              className="w-full max-w-4xl mx-auto space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {servicesData.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/90 dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <motion.button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex justify-between items-center px-6 py-4 
                    bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 
                    dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 
                    hover:from-blue-100 hover:via-pink-100 hover:to-purple-100 
                    dark:hover:from-gray-600 dark:hover:via-gray-700 dark:hover:to-gray-800 
                    transition-all font-semibold text-left rounded-t-2xl"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-sm">
                      {service.name}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl ml-2 text-gray-700 dark:text-gray-300"
                    >
                      ▼
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-5 bg-gray-50 dark:bg-gray-900"
                      >
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {service.desc}
                        </p>
                        <ul className="text-gray-500 dark:text-gray-400 text-sm list-disc list-inside">
                          {service.roles.map((role, i) => (
                            <li key={i}>{role}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
