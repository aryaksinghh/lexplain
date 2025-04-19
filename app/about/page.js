"use client";

import React from "react";
import { ArrowRight, FileText, Globe, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-24">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          <span className="text-blue-600">Lexplain</span>.app
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Making legal documents understandable for everyone, in plain language.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <div className="mt-2 h-1 w-16 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We believe everyone deserves to understand the legal documents they encounter, regardless of their background or education.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <FileText className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Simplification</h3>
            <p className="text-gray-600">
              Upload any legal document, and our AI will break it down into clear, understandable language without the complex jargon.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Globe className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Languages</h3>
            <p className="text-gray-600">
              Get explanations in your preferred language, making legal documents accessible regardless of your native tongue.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Shield className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
            <p className="text-gray-600">
              Your documents remain private and secure. We use state-of-the-art encryption and never store your sensitive information.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Users className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">For Everyone</h3>
            <p className="text-gray-600">
              Whether you&apos;re a legal professional looking to explain documents to clients or an individual facing complex legal text, Lexplain is for you.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <div className="mt-2 h-1 w-16 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Our advanced AI makes understanding legal documents a breeze in just three simple steps.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <div className="flex-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-6 mx-auto">
              1
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center mb-3">Upload Your Document</h3>
            <p className="text-gray-600 text-center">
              Upload a PDF of your legal document or copy and paste the specific text you need explained.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-6 mx-auto">
              2
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center mb-3">Select Your Preferences</h3>
            <p className="text-gray-600 text-center">
              Choose your preferred language and level of simplification for the explanation.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-6 mx-auto">
              3
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center mb-3">Get Your Explanation</h3>
            <p className="text-gray-600 text-center">
              Receive a clear, plain-language explanation of your document that anyone can understand.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          <div className="mt-2 h-1 w-16 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm relative">
            <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <p className="text-gray-600 mt-4 italic">
              &quot;Lexplain helped me understand my commercial lease agreement without having to hire an expensive lawyer. The explanations were clear and saved me thousands.&quot;
            </p>
            <p className="mt-4 text-sm font-medium text-gray-900">— Jane Doe, Small Business Owner</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm relative">
            <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              MS
            </div>
            <p className="text-gray-600 mt-4 italic">
              &quot;I use Lexplain to help my clients understand complex legal documents. It saves me time and helps them feel more comfortable with the legal process.&quot;
            </p>
            <p className="mt-4 text-sm font-medium text-gray-900">— Michael Smith, Attorney</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm relative">
            <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              LC
            </div>
            <p className="text-gray-600 mt-4 italic">
              &quot;As a non-native English speaker, legal documents were doubly confusing. Lexplain translates them to my language and makes them simple to understand.&quot;
            </p>
            <p className="mt-4 text-sm font-medium text-gray-900">— Lisa Chen, International Student</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-blue-600 rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to simplify legal documents?
        </h2>
        <Link href={"/playground"}><button className="inline-flex cursor-pointer items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 shadow-md transition-colors duration-200">
          Get started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button></Link>
      </div>
    </div>
  );
}