/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "@remix-run/react";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white">
      <header className="w-full p-6 bg-white text-gray-900 text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
      </header>
      <main className="container mx-auto px-4 py-8 text-gray-900">
        <div className="prose max-w-none">
          <p>Ajoutez ici le contenu de la Privacy Policy.</p>
        </div>
      </main>
      <footer className="bg-white text-gray-900 py-4 text-center border-t border-gray-300">
        <p>© 2023 Time Capsule. All rights reserved.</p>
      </footer>
    </div>
  );
}
