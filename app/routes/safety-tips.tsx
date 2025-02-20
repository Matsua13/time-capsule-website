/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "@remix-run/react";
import React from "react";

export default function SafetyTips() {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
        {/* HEADER */}
        <header className="text-center mb-6 text-justify">
          <h1 className="text-4xl font-extrabold drop-shadow-lg">
            Safety Tips
          </h1>
        </header>
        {/* MAIN CONTENT */}
        <main className="prose">
          <p>
            <strong>Security and Protection of Your Data</strong>
          </p>
          <p>
            Protecting your personal information is our priority. We recommend that you follow these tips to use the platform safely:
          </p>
          <ul>
            <li>
              <strong>- Confidentiality of Content:</strong> Never share content (photos, videos, messages) containing sensitive or compromising personal information.
            </li>
            <li>
              <strong>- Access Settings:</strong> Use the confidentiality options provided to control who can view your capsules.
            </li>
            <li>
              <strong>- Regular Updates:</strong> Make sure you keep your application and data up to date to benefit from the latest security protections.
            </li>
            <li>
              <strong>- Vigilance on Links and Downloads:</strong> Do not open links or files from unverified sources.
            </li>
            <li>
              <strong>- Reporting Anomalies:</strong> If you notice any suspicious behavior or inappropriate content, please report it immediately using our dedicated tool.
            </li>
          </ul>
        </main>
        {/* FOOTER */}
        <footer className="mt-8 text-center text-sm text-gray-600">
          <p>© 2023 Time Capsule. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
