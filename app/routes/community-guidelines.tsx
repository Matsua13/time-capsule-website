/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "@remix-run/react";
import React from "react";

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
        {/* HEADER */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-extrabold drop-shadow-lg">
            Community Guidelines
          </h1>
        </header>
        {/* MAIN CONTENT */}
        <main className="prose text-justify">
          <p>Welcome to the Time Capsule Universe,</p>
          <p>
            At Time Capsule, we believe that every message and every memory is precious. To ensure a harmonious and respectful environment, we invite you to observe the following principles:
          </p>
          <ul>
            <li>
              <strong>- Respect and Kindness:</strong> Treat everyone with courtesy and consideration. Any form of harassment, discrimination, or hate speech is strictly prohibited.
            </li>
            <li>
              <strong>- Confidentiality and Discretion:</strong> Avoid sharing sensitive personal information about yourself or others.
            </li>
            <li>
              <strong>- Constructive Sharing:</strong> Your messages and memories are intended to inspire and encourage. Be aware of the impact of your publications and foster enriching exchanges—even if your goals are not immediately achieved, your capsule is meant for introspection and evolution.
            </li>
            <li>
              <strong>- Authenticity and Responsibility:</strong> Ensure that your content reflects your true emotions and experiences while respecting the dignity of others.
            </li>
          </ul>
          <p>
            By using Time Capsule, you agree to abide by these essential rules. Together, let&#39;s create a space for sharing and inspiration, where each capsule contributes to weaving a collective story of respect and hope.
          </p>
        </main>
        {/* FOOTER */}
        <footer className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Time Capsule. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
