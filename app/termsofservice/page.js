// pages/terms-of-service.js
import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, FileText, AlertCircle, Clock, Zap, Scale, ShieldCheck } from 'lucide-react';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Lexplain</title>
        <meta name="description" content="Terms of Service for Lexplain - AI-powered legal document simplification" />
      </Head>
      
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Terms of Service</h1>
            <p className="mt-4 text-lg text-gray-600">
              Last Updated: April 13, 2025
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center mb-8">
              <BookOpen className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Introduction</h2>
            </div>
            
            <p className="text-gray-700">
              Welcome to Lexplain. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Lexplain website, services, and applications (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
            </p>
            
            <p className="text-gray-700 mt-4">
              Our Service uses artificial intelligence to analyze and simplify legal documents and clauses. Please read these Terms carefully, as they contain important information about your legal rights, remedies, and obligations.
            </p>
            
            <div className="flex items-center mt-10 mb-6">
              <Zap className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Service Description</h2>
            </div>
            
            <p className="text-gray-700">
              Lexplain provides an AI-powered platform that helps users understand legal documents by analyzing images or text clauses and providing simplified explanations. The Service includes:
            </p>
            
            <ul className="list-disc pl-6 text-gray-700">
              <li>Document and clause analysis tools</li>
              <li>AI-generated simplified explanations</li>
              <li>User accounts for managing documents and explanations</li>
              <li>Other features and services that we may add from time to time</li>
            </ul>
            
            <div className="flex items-center mt-10 mb-6">
              <AlertCircle className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Important Disclaimers</h2>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
              <h3 className="text-xl font-medium text-black">Not Legal Advice</h3>
              <p className="text-gray-700 mt-2">
                <strong>THE SERVICE IS NOT A SUBSTITUTE FOR LEGAL ADVICE.</strong> The simplified explanations provided by our AI are for informational purposes only and should not be construed as legal advice. Our AI technology aims to make legal language more accessible, but it cannot replace the expertise of a qualified legal professional.
              </p>
              <p className="text-gray-700 mt-4">
                We strongly recommend consulting with a licensed attorney for any legal matters. Lexplain does not create an attorney-client relationship between you and Lexplain or any of its employees or affiliates.
              </p>
            </div>
            
            <div className="flex items-center mt-10 mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">User Accounts and Content</h2>
            </div>
            
            <h3 className="text-xl font-medium text-black mt-6">Account Registration</h3>
            <p className="text-gray-700">
              You may need to create an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account and to update your information as necessary.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Your Content</h3>
            <p className="text-gray-700">
              Our Service allows you to upload, submit, and analyze legal documents and clauses (&quot;User Content&quot;). You retain all rights to your User Content, and you are solely responsible for it. By uploading User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and process your User Content solely for the purpose of providing and improving the Service.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Prohibited Content</h3>
            <p className="text-gray-700">
              You agree not to upload, submit, or analyze content that:
            </p>
            
            <ul className="list-disc pl-6 text-gray-700">
              <li>Violates any applicable law or regulation</li>
              <li>Infringes on the intellectual property rights of others</li>
              <li>Contains malware, viruses, or other harmful code</li>
              <li>Is fraudulent, deceptive, or misleading</li>
              <li>Promotes illegal activities</li>
              <li>Contains personally identifiable information of third parties without proper authorization</li>
            </ul>
            
            <div className="flex items-center mt-10 mb-6">
              <Scale className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Usage Limitations and Service Levels</h2>
            </div>
            
            <p className="text-gray-700">
              We offer different service tiers with varying features, document limits, and pricing. The specific limitations and features of each tier are described on our pricing page. We reserve the right to modify our service tiers, features, and pricing at any time.
            </p>
            
            <p className="text-gray-700 mt-4">
              You agree not to circumvent any limitations imposed on your account or to engage in activities that could disrupt or interfere with the Service.
            </p>
            
            <div className="flex items-center mt-10 mb-6">
              <ShieldCheck className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Intellectual Property Rights</h2>
            </div>
            
            <h3 className="text-xl font-medium text-black mt-6">Our Rights</h3>
            <p className="text-gray-700">
              The Service, including its design, features, content, and underlying technology, is protected by copyright, trademark, patent, and other intellectual property laws. All rights, title, and interest in and to the Service are and will remain the exclusive property of Lexplain and its licensors.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">License to Use the Service</h3>
            <p className="text-gray-700">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use the Service for your personal or internal business purposes.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Feedback</h3>
            <p className="text-gray-700">
              If you provide us with feedback or suggestions regarding the Service, you grant us the right to use this feedback without any restriction or compensation to you.
            </p>
            
            <div className="flex items-center mt-10 mb-6">
              <Clock className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Term and Termination</h2>
            </div>
            
            <p className="text-gray-700">
              These Terms will remain in effect until terminated by either you or Lexplain. You may terminate these Terms at any time by deactivating your account and ceasing all use of the Service.
            </p>
            
            <p className="text-gray-700 mt-4">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Surviving Provisions</h3>
            <p className="text-gray-700">
              All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            
            <div className="flex items-center mt-10 mb-6">
              <AlertCircle className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Warranty Disclaimer and Limitation of Liability</h2>
            </div>
            
            <h3 className="text-xl font-medium text-black mt-6">Warranty Disclaimer</h3>
            <p className="text-gray-700 uppercase font-bold">
              The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            
            <p className="text-gray-700 mt-4">
              Lexplain does not warrant that the Service will function uninterrupted, secure, or available at any particular time or location, or that any errors or defects will be corrected. While we strive for accuracy, we do not guarantee that the simplified explanations provided by our AI will be error-free or completely comprehensive.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Limitation of Liability</h3>
            <p className="text-gray-700 uppercase font-bold">
              To the maximum extent permitted by applicable law, in no event shall Lexplain, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            
            <ul className="list-disc pl-6 text-gray-700">
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any reliance placed on the simplified explanations or other content provided through the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            
            <div className="flex items-center mt-10 mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Miscellaneous</h2>
            </div>
            
            <h3 className="text-xl font-medium text-black mt-6">Governing Law</h3>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of the India, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Delhi.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Changes to Terms</h3>
            <p className="text-gray-700">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Entire Agreement</h3>
            <p className="text-gray-700">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Lexplain regarding the Service and supersede all prior agreements and understandings.
            </p>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-black">Contact Us</h2>
              <p className="text-gray-700 mt-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> <a href="mailto:support@lexplain.app" className="text-blue-600 hover:text-blue-800">support@lexplain.app</a>
              </p>
              
              <div className="mt-8 space-x-6">
                <Link href="/privacypolicy" className="text-blue-600 hover:text-blue-800 font-medium">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}