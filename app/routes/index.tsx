// app/routes/index.tsx
import { Link } from "@remix-run/react";
import React, { useEffect, useRef, useState } from "react";

// Composant pour révéler le contenu au scroll avec une animation
const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// Définition des récits pour la section "Histoires du Temps"
const stories = [
  {
    id: "abandoned-dream",
    title: "The Regret of an Abandoned Dream",
    parts: {
      past:
        "When she was young, Lea dreamed of exploring the world and becoming a famous photographer. With eyes shining with ambition, she created a capsule in which she recorded her dreams, her first photos, and her promise never to give up. Every word and image reflected a future full of possibilities.",
      present:
        "Years later, exhausted by the routine and compromises of everyday life, Lea rediscovered her capsule. As she looked through the memories, she realised with bitterness that she had let her dreams die. Her once-vibrant ambitions had dissipated, and her heart clenched at the realization that she had achieved nothing of what she had hoped. The pain of regret washed over her, marking a moment of profound self-questioning.",
      future:
        "However, this painful realization became the starting point for a new beginning. In the tumult of her present, Lea chose to draw on this emotion to reclaim her life. She realised that, to transform her future, it first had to be rooted in a sincere and committed present. That day, despite the sadness of lost dreams, she vowed to rekindle the flame of her passion, to take control of her life and, from that moment on, to build the future she had always wanted.",
    },
  },
  {
    id: "brushstrokes-of-time",
    title: "Brushstrokes of Time",
    parts: {
      past:
        "In the tender light of a bygone era, a young drawing enthusiast, armed with his first pencils and a notebook brimming with hopes, sends a capsule to his future self. In this message, he captures the innocence of his first sketches, the naivety of his ambitions and the ardent dream of becoming a recognised artist.",
      present:
        "Some years later, after overcoming some challenges and tasting some unexpected successes, he rediscovered this message. In reading it, he rediscovers the creative spark that once animated him, realising how much his journey has shaped his sensibility and refined his art.",
      future:
        "By projecting himself into the future, he sees himself not only as the accomplished artist he aspires to be, but also understands that it is in the here and now that the canvases of his dreams are woven. As he closes the capsule, he seals his gratitude to the young dreamer he once was, celebrating the continuity of his passion anchored in the beauty of the present and all the road still to travel.",
    },
  },
  {
    id: "inner-traveller",
    title: "The Rebirth of an Inner Traveller",
    parts: {
      past:
        "At the dawn of a life in search of renewal, a woman, tired of the stifling routine, records her thoughts, doubts and ambitions in a capsule. In those initial moments, she dreamt of escape and exploration, yearning to rediscover herself far from the beaten track.",
      present:
        "Today, as she revisits the words she spoke to herself, she can see the depth of her evolution. Each sentence resonates with the challenges she overcame and the victories that enriched her journey towards a more authentic existence.",
      future:
        "By looking ahead, she sees herself not only as an accomplished traveller, master of herself and the horizons she explores, but also as a woman who savours the present to the full. She understands that every moment is a precious stone on the path to her transformation. When she reopens this capsule, she will be deeply grateful to the young girl on a quest who dared to dream of change, celebrating her inner rebirth and the importance of living fully in the present.",
    },
  },
];

// Composant pour afficher un récit interactif avec timeline
function TimelineStory({ story }: { story: typeof stories[0] }) {
  const [selectedPeriod, setSelectedPeriod] = useState<"past" | "present" | "future">("past");
  const periodOptions = [
    { key: "past", label: "Past" },
    { key: "present", label: "Present" },
    { key: "future", label: "Future" },
  ];
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{story.title}</h3>
      <div className="flex justify-center space-x-4 mb-4">
        {periodOptions.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setSelectedPeriod(key as "past" | "present" | "future")}
            className={`px-4 py-2 rounded-full border transition-colors ${
              selectedPeriod === key
                ? "bg-green-500 text-white"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Partie textuelle stylisée */}
      <div className="p-6 bg-yellow-100 rounded-lg border border-yellow-400 shadow-md">
        <p className="text-lg text-gray-800 text-justify font-pressstart drop-shadow-sm">
          {story.parts[selectedPeriod]}
        </p>
      </div>
    </div>
  );
}

// Section "Histoires du Temps" (Timeline Section)
function TimelineSection() {
  return (
    <ScrollReveal>
      <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-extrabold text-white drop-shadow-xl text-center mb-8 tracking-widest"
          style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" }}
        >
          Stories of Time
        </h2>
        {stories.map((story) => (
          <TimelineStory key={story.id} story={story} />
        ))}
          <div className="text-center mt-12">
            <Link
              to="/signup"
              className="mr-4 inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              Share your story
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white">
      {/* HEADER */}
      <header className="w-full p-6 text-center">
        <h1
          className="text-5xl font-extrabold drop-shadow-xl"
          style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" }}
        >
          Time Capsule
        </h1>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center h-[80vh] px-4 pt-24">
        <div className="text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light drop-shadow-md">
            Step into time&#39;s magic—Unlock your memories, embrace your future.
          </p>
        </div>
        <div className="mt-12 flex gap-6">
          <Link
            to="/login"
            className="px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition"
          >
            Sign Up
          </Link>
        </div>
        {/* Indicateur de scroll animé */}
        <div className="absolute bottom-4">
          <svg
            className="w-8 h-8 animate-bounce text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 -mt-32">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 p-8 bg-yellow-200 rounded-3xl shadow-xl border-4 border-yellow-500 text-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-center drop-shadow-lg">
              About
            </h2>
            <p className="text-base leading-relaxed text-justify">
              Once upon a time, there was a little girl with eyes sparkling with innocence, who dreamt of feeling the salt of the ocean caress her cheeks and hearing the murmur of the waves as a lullaby every day. She imagined herself, a few years later, living by the sea, her feet in the foam, gliding over the waves like a dancer in symphony with the ocean.
            </p>
            <p className="text-base leading-relaxed mt-4 text-justify">
              One day, determined to seal her dreams, she created a time capsule, a message of hope and ambition, destined for her future version. Five years later, after a morning surf session, she found herself facing the ocean — the ocean that had become her daily life over the last year. She felt immense gratitude towards the little girl who had dared to dream. You are where you wanted to be.
            </p>
            <p className="text-base leading-relaxed mt-4 text-justify">
              Time Capsule is much more than an app. Whether you want to send an inspiring, public and accessible capsule to your friends, record your dreams and achievements for yourself, or share a personalised message for a birthday, an amusing anecdote or to comfort a loved one, Time Capsule transforms every moment into a precious bridge between the past and the future. Be creative and let your messages travel through time.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* TIMELINE SECTION */}
      <TimelineSection />

      {/* FOOTER */}
      <footer className="bg-white text-gray-900 py-8 border-t-4 border-sky-500 shadow-xl">
        <div className="container mx-auto px-4">
          {/* Première ligne : Branding et liens principaux */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-700 drop-shadow-md">
                Time Capsule
              </h3>
              <p className="text-sm text-gray-600">
                A journey through time and memories
              </p>
            </div>
            <div className="flex flex-wrap justify-center space-x-4">
              <a
                href="/safety-tips"
                className="font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500"
              >
                Safety Tips
              </a>
              <a
                href="/community-guidelines"
                className="font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500"
              >
                Community Guidelines
              </a>
              <a
                href="/upcoming-updates"
                className="font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500"
              >
                Upcoming Updates
              </a>
              <a
                href="/contact-us"
                className="font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Deuxième ligne : Liens légaux et copyright */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap justify-center space-x-4">
              <a
                href="/privacy-policy"
                className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500"
              >
                Terms of Use
              </a>
            </div>
            <div className="mt-4 md:mt-0 text-xs text-gray-500 text-center">
              © 2025 Time Capsule. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
