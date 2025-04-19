"use client"
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function Pricing() {
  const supabase = createClient();
  const [isHovered, setIsHovered] = useState(false);
  const [session, setSession] = useState(false);

  useEffect(() => {
    const checksession = async () => {
        const {data, error} = await supabase.auth.getUser();
        if (data.user) {
            setSession(true);
        }
    }
    checksession();
  }, []);
  

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We're making legal documents accessible to everyone. Try Lexplain AI for free.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mt-16 flex justify-center">
          <div
            className="relative w-full max-w-md rounded-2xl overflow-hidden transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Neon border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-70 blur-md"></div>
            
            {/* Card content */}
            <div className="relative bg-white/90 backdrop-blur-sm m-0.5 rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Early Access</h3>
                <div className="mt-4 flex justify-center items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900">Free</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">/month</span>
                </div>
                <p className="mt-5 text-lg text-gray-500">
                  We're launching Lexplain AI with full features at no cost during our initial release.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">Upload legal documents</p>
                </div>

                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">AI-powered simplification</p>
                </div>

                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">Key terms extraction</p>
                </div>

                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">Unlimited documents</p>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  disabled={session}
                  className={`w-full inline-flex cursor-pointer items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                    isHovered ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
                  } hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 disabled:cursor-not-allowed`}
                >
                  {session? "Subscribed":"Get started for free"}
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  No credit card required. Early access for a limited time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Premium Plans Coming Soon</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We're working on advanced features for our premium plans. Enjoy the full capabilities of Lexplain AI for free during our early access period.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">How long will the free access last?</h3>
              <p className="mt-2 text-base text-gray-500">
                We're committed to providing free access during our early release phase. We'll notify all users well in advance before introducing any paid plans.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Are there any limitations during the free period?</h3>
              <p className="mt-2 text-base text-gray-500">
                None at all! You get access to all features without any restrictions on the number of documents or usage.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Is my data secure?</h3>
              <p className="mt-2 text-base text-gray-500">
                Absolutely. We take privacy and security seriously. Your documents are encrypted and never shared with third parties. We do not store document content after processing.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Will I have to pay in the future?</h3>
              <p className="mt-2 text-base text-gray-500">
                We plan to introduce paid tiers with advanced features in the future while maintaining a free option. Early adopters may receive special benefits once we launch our premium plans.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}