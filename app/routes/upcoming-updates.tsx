/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "@remix-run/react";
import React from "react";

export default function UpcomingUpdates() {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
        {/* HEADER */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-extrabold drop-shadow-lg">
            Upcoming Updates
          </h1>
        </header>
        {/* MAIN CONTENT */}
        <main className="prose text-justify">
          <p>
            At Time Capsule, we&#39;re continuously working to enhance your experience. In our upcoming updates, you can expect:</p>
          <ul>
            <li>
              <strong>- Draft Mode:</strong> Create and save draft capsules that you can edit and refine before sending—giving you the time to think about your message.
            </li>
            <li>
              <strong>- Archive option:</strong> Archive the capsules you want to make it easier to organise the dashboard.
            </li>
            <li>
              <strong>- Friend Connections:</strong> Connect with other users so that your public capsules can be shared and enjoyed among friends.
            </li>
            <li>
              <strong>- Interactive Replies:</strong> Respond to received capsules—whether it&#39;s engaging with your past self or replying to a friend&#39;s message.
            </li>
            <li>
              <strong>- Social Sign-In:</strong> Enjoy a smoother experience with the option to sign up and log in using Google and Facebook.
            </li>
          </ul>
          <p>
            Stay tuned for these exciting new features as we continue to evolve your Time Capsule experience!
          </p>
        </main>
        {/* FOOTER */}
        <footer className="mt-8 text-center text-sm text-gray-600">
          <p>© 2023 Time Capsule. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
