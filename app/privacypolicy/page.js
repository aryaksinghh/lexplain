// pages/privacy-policy.js
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Database, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Lexplain</title>
        <meta name="description" content="Privacy Policy for Lexplain - AI-powered legal document simplification" />
      </Head>
      
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-600">
              Last Updated: April 13, 2025
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center mb-8">
              <Shield className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Our Commitment to Your Privacy</h2>
            </div>
            
            <p className="text-gray-700">
              At Lexplain, we&apos;re committed to protecting your privacy while providing you with a powerful tool to understand legal documents. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service that simplifies legal documents and clauses through AI technology.
            </p>
            
            <div className="flex items-center mt-10 mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Information We Collect</h2>
            </div>
            
            <h3 className="text-xl font-medium text-black mt-6">Document Content</h3>
            <p className="text-gray-700">
              When you upload legal documents or text for simplification, our AI processes this content to provide you with simplified explanations. The documents and clauses you upload are considered your content.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Account Information</h3>
            <p className="text-gray-700">
              If you create an account, we collect your email address, name, and password (stored in encrypted form). This information is used for authentication and to provide you with our services.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Usage Information</h3>
            <p className="text-gray-700">
              We collect information about how you interact with our service, including the types of documents you analyze, features you use, and your device information. This helps us improve our service and troubleshoot issues.
            </p>
            
            <div className="flex items-center mt-10 mb-6">
              <Database className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">How We Use Your Information</h2>
            </div>
            
            <p className="text-gray-700">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Process and simplify your legal documents and clauses</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Develop new features and functionality</li>
              <li>Communicate with you about your account or our services</li>
              <li>Protect against fraudulent or illegal activity</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>
            
            <div className="flex items-center mt-10 mb-6">
              <Eye className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Data Retention & AI Training</h2>
            </div>
            
            <p className="text-gray-700">
              By default, we retain the documents you upload and the simplified results for 30 days after processing to allow you to access your results. After this period, this content is automatically deleted from our active systems.
            </p>
            
            <p className="text-gray-700 mt-4">
              <strong>AI Model Training:</strong> We do not use your uploaded documents or clauses to train our AI models unless you explicitly opt in to this program. If you choose to participate, your anonymized content may be used to improve our AI systems. You can opt out at any time through your account settings.
            </p>
            
            <div className="flex items-center mt-10 mb-6">
              <Lock className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Data Security</h2>
            </div>
            
            <p className="text-gray-700">
              We implement robust security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Encryption of document content in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Strict access controls for our personnel</li>
              <li>Secure cloud infrastructure with industry-standard protections</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              While we implement strong safeguards, no system is 100% secure. We continuously work to protect your information but cannot guarantee absolute security.
            </p>
            
            <div className="flex items-center mt-10 mb-6">
              <UserCheck className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Your Rights and Choices</h2>
            </div>
            
            <p className="text-gray-700">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access and download your personal information</li>
              <li>Correct inaccurate personal information</li>
              <li>Delete your personal information</li>
              <li>Object to certain processing of your information</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us at <a href="mailto:support@lexplain.app" className="text-blue-600 hover:text-blue-800">support@lexplain.app</a>.
            </p>
            
            <h3 className="text-xl font-medium text-black mt-6">Cookie Policy</h3>
            <p className="text-gray-700">
              We use cookies and similar technologies to enhance your experience, analyze usage, and assist in our marketing efforts. You can manage your cookie preferences through your browser settings.
            </p>
            
            <div className="flex items-center mt-10 mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-black m-0">Changes to This Policy</h2>
            </div>
            
            <p className="text-gray-700">
              We may update this Privacy Policy periodically to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes through our website or via email if you have an account.
            </p>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-black">Contact Us</h2>
              <p className="text-gray-700 mt-4">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> <a href="mailto:support@lexplain.app" className="text-blue-600 hover:text-blue-800">support@lexplain.app</a>
              </p>
              
              <div className="mt-8">
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                  Visit our Contact Page →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}