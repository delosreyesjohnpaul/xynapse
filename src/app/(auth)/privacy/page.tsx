import React from 'react';

const PrivacyAgreement = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-700">
      <h1 className="text-3xl font-bold mb-6">Xynapse Privacy Agreement</h1>

      <p className="mb-6">
        Thank you for choosing Xynapse as your project management platform. We value your privacy and are committed to protecting your data. This Privacy Agreement outlines how Xynapse collects, uses, and secures information to ensure a safe and effective experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Data Collection</h2>
      <p className="mb-4">
        Xynapse collects specific data to enhance team collaboration, streamline task execution, and optimize platform features:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Project and Task Data:</strong> Information related to projects, tasks, and timelines that you and your team upload to manage workflows.</li>
        <li><strong>Team Collaboration Data:</strong> User interactions, comments, and updates to support collaborative work environments.</li>
        <li><strong>Usage Analytics:</strong> We collect usage data to understand platform performance, enabling us to improve features and user experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Collected Data</h2>
      <p className="mb-4">
        Xynapse uses collected data exclusively to enhance project management and collaboration. This data is never shared or sold to third parties. We use it to:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Facilitate seamless task tracking and team collaboration.</li>
        <li>Improve platform performance, security, and user experience.</li>
        <li>Analyze usage trends to tailor features to user needs.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
      <p className="mb-6">
        Protecting your data is our priority. Xynapse employs advanced encryption, secure data storage, and access controls to prevent unauthorized access and maintain data integrity.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention</h2>
      <p className="mb-6">
        Data related to your projects and tasks is retained only for as long as needed to fulfill the purposes outlined in this agreement. Users may request data deletion at any time through their account settings or by contacting our support team.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Rights</h2>
      <p className="mb-6">
        You have full control over your data. You may update or delete your information as needed and have the right to request details on how your data is used. Contact our support team for any inquiries related to your data rights.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to the Privacy Agreement</h2>
      <p className="mb-6">
        We may occasionally update this Privacy Agreement to reflect changes in our policies. We will notify users of significant updates. Continued use of Xynapse after any changes indicates acceptance of the revised terms.
      </p>

      <p className="mt-8">
        For questions about this Privacy Agreement, contact us at <a href="mailto:war.xynapse30@gmail.com" className="text-blue-600 hover:underline">support@xynapse.com</a>.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Last updated: October 2024
      </p>

      <footer className="mt-12 border-t pt-4 text-center text-sm text-gray-500">
        © 2024 Xynapse. Built by PaulDR, Programmer and Data Analyst.
      </footer>
    </div>
  );
};

export default PrivacyAgreement;
