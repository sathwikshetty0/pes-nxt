"use client";

import { useState, FormEvent } from "react";

const SECTORS = [
  "HealthTech",
  "AgriTech",
  "AI & DeepTech",
  "EdTech",
  "FinTech",
  "LegalTech",
  "MSME",
  "Event Tech",
  "Other",
];

const STAGES = ["Idea", "Prototype", "MVP", "Revenue"];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  startupName: string;
  sector: string;
  problemStatement: string;
  proposedSolution: string;
  teamSize: string;
  currentStage: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  institution: "",
  startupName: "",
  sector: "",
  problemStatement: "",
  proposedSolution: "",
  teamSize: "",
  currentStage: "",
};

export function Apply() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClasses =
    "w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition";

  if (submitted) {
    return (
      <section className="py-20 bg-surface-alt min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          <a href="/" className="inline-flex items-center text-sm text-primary hover:text-accent mb-8 font-medium">
            ← Back to Home
          </a>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="text-green-600 text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Application submitted successfully!
            </h3>
            <p className="text-green-700">
              We&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-surface-alt min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <a href="/" className="inline-flex items-center text-sm text-primary hover:text-accent mb-8 font-medium">
          ← Back to Home
        </a>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Apply for Incubation
          </h2>
          <p className="text-gray-600 mb-6">
            Submit your application to join PES NEXT. We support technology-driven startups, social-impact enterprises, and rural innovation ventures.
          </p>
          <div className="text-left bg-white rounded-lg p-5 shadow-sm">
            <p className="text-sm font-semibold text-primary mb-2">Who Can Apply</p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Students of PES College of Engineering, Mandya</li>
              <li>Alumni entrepreneurs</li>
              <li>Researchers and faculty</li>
              <li>Local entrepreneurs with technology-driven ideas</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className={inputClasses}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={inputClasses}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={inputClasses}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Institution */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Institution / Organisation
            </label>
            <input
              type="text"
              value={formData.institution}
              onChange={(e) => handleChange("institution", e.target.value)}
              className={inputClasses}
            />
            {errors.institution && (
              <p className="text-red-500 text-xs mt-1">{errors.institution}</p>
            )}
          </div>

          {/* Startup Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Startup Name
            </label>
            <input
              type="text"
              value={formData.startupName}
              onChange={(e) => handleChange("startupName", e.target.value)}
              className={inputClasses}
            />
            {errors.startupName && (
              <p className="text-red-500 text-xs mt-1">{errors.startupName}</p>
            )}
          </div>

          {/* Sector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sector
            </label>
            <select
              value={formData.sector}
              onChange={(e) => handleChange("sector", e.target.value)}
              className={inputClasses}
            >
              <option value="">Select a sector</option>
              {SECTORS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.sector && (
              <p className="text-red-500 text-xs mt-1">{errors.sector}</p>
            )}
          </div>

          {/* Problem Statement */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              One-line Problem Statement
            </label>
            <input
              type="text"
              value={formData.problemStatement}
              onChange={(e) => handleChange("problemStatement", e.target.value)}
              className={inputClasses}
            />
            {errors.problemStatement && (
              <p className="text-red-500 text-xs mt-1">{errors.problemStatement}</p>
            )}
          </div>

          {/* Proposed Solution */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Proposed Solution
            </label>
            <textarea
              rows={3}
              value={formData.proposedSolution}
              onChange={(e) => handleChange("proposedSolution", e.target.value)}
              className={inputClasses}
            />
            {errors.proposedSolution && (
              <p className="text-red-500 text-xs mt-1">{errors.proposedSolution}</p>
            )}
          </div>

          {/* Team Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Team Size
            </label>
            <input
              type="number"
              value={formData.teamSize}
              onChange={(e) => handleChange("teamSize", e.target.value)}
              className={inputClasses}
            />
            {errors.teamSize && (
              <p className="text-red-500 text-xs mt-1">{errors.teamSize}</p>
            )}
          </div>

          {/* Current Stage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Stage
            </label>
            <select
              value={formData.currentStage}
              onChange={(e) => handleChange("currentStage", e.target.value)}
              className={inputClasses}
            >
              <option value="">Select current stage</option>
              {STAGES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.currentStage && (
              <p className="text-red-500 text-xs mt-1">{errors.currentStage}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-semibold rounded-full py-4 hover:bg-accent-light transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
