/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "@remix-run/react";
import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
        {/* HEADER */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-extrabold drop-shadow-lg">Contact Us</h1>
        </header>
        {/* MAIN CONTENT */}
        <main className="prose">
          <p>
            If you have any questions, feedback, or need assistance, please feel free to contact us via email at{" "}
            <a href="mailto:ltifene@gmail.com" className="text-sky-500 hover:underline">
              ltifene@gmail.com
            </a>.
          </p>
          <p>
            We look forward to hearing from you and will get back to you as soon as possible!
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
