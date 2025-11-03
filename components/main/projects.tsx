"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zpcjcjqhhswcyaygtmxh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2pjanFoaHN3Y3lheWd0bXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTM0MDQsImV4cCI6MjA3NTg2OTQwNH0.dkVfgXIyg9dJvu8-DQRK7RN7tWR4zwPLeQa5b1HrojM";
export const supabase = createClient(supabaseUrl, supabaseKey);

const ArrowRightIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ExternalLinkIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ReactIcon = () => (
  <svg
    className="w-4 h-4 text-cyan-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const NodeJSIcon = () => (
  <svg
    className="w-4 h-4 text-green-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 10h6c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2z" />
  </svg>
);

const FirebaseIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 10c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" />
    <path d="M22 10a12 12 0 0 1-2.8 7.8A12 12 0 0 1 10 22" />
  </svg>
);

const TensorFlowIcon = () => (
  <svg
    className="w-4 h-4 text-orange-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const MongoDBIcon = () => (
  <svg
    className="w-4 h-4 text-green-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 6v12" />
    <path d="M12 6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
  </svg>
);

const PostgreSQLIcon = () => (
  <svg
    className="w-4 h-4 text-blue-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </svg>
);

const SocketIOIcon = () => (
  <svg
    className="w-4 h-4 text-purple-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6.34 17.66l-1.41 1.41" />
    <path d="M19.07 4.93l-1.41 1.41" />
  </svg>
);

const NextJSIcon = () => (
  <svg
    className="w-4 h-4 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M15 9l-6 6" />
    <path d="M9 9h6v6H9z" />
  </svg>
);

const TailwindIcon = () => (
  <svg
    className="w-4 h-4 text-cyan-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg
    className="w-4 h-4 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
    <path d="M12 16l4-4-4-4" />
  </svg>
);

const ReactNativeIcon = () => (
  <svg
    className="w-4 h-4 text-blue-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
  </svg>
);

const HTMLIcon = () => (
  <svg
    className="w-4 h-4 text-orange-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const CSSIcon = () => (
  <svg
    className="w-4 h-4 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 7l8 0" />
    <path d="M8 12l6 0" />
    <path d="M8 17l4 0" />
  </svg>
);

const JavaScriptIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M16 8l-8 8" />
  </svg>
);

const CPlusPlusIcon = () => (
  <svg
    className="w-4 h-4 text-blue-700"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M16 8l-8 8" />
    <path d="M12 6v12" />
  </svg>
);

const PythonIcon = () => (
  <svg
    className="w-4 h-4 text-blue-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l2 2-2 2" />
    <path d="M16 8l-2 2 2 2" />
  </svg>
);

const GitIcon = () => (
  <svg
    className="w-4 h-4 text-orange-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 12l2-2 2 2-2 2-2-2z" />
    <path d="M16 12l-2-2-2 2 2 2 2-2z" />
  </svg>
);

const DockerIcon = () => (
  <svg
    className="w-4 h-4 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8h8v8H8z" />
    <path d="M8 8l4 4 4-4" />
  </svg>
);

const CIcon = () => (
  <svg
    className="w-4 h-4 text-blue-800"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M8 16l8-8" />
  </svg>
);

const JavaIcon = () => (
  <svg
    className="w-4 h-4 text-red-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 12l2 2 2-2-2-2-2 2z" />
    <path d="M16 12l-2 2-2-2 2-2 2 2z" />
  </svg>
);

const SupabaseIcon = () => (
  <svg
    className="w-4 h-4 text-green-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M16 8l-8 8" />
    <path d="M12 6v12" />
  </svg>
);

const LinuxIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l2 2-2 2" />
    <path d="M16 8l-2 2 2 2" />
    <path d="M12 6v12" />
  </svg>
);

const ExpressJSIcon = () => (
  <svg
    className="w-4 h-4 text-gray-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M8 16l8-8" />
  </svg>
);

const ReduxIcon = () => (
  <svg
    className="w-4 h-4 text-purple-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 12l2 2 2-2-2-2-2 2z" />
    <path d="M16 12l-2 2-2-2 2-2 2 2z" />
  </svg>
);

const FramerMotionIcon = () => (
  <svg
    className="w-4 h-4 text-purple-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M8 16l8-8" />
  </svg>
);

const MySQLIcon = () => (
  <svg
    className="w-4 h-4 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M8 16l8-8" />
    <path d="M12 6v12" />
  </svg>
);

const GraphQLIcon = () => (
  <svg
    className="w-4 h-4 text-pink-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M8 16l8-8" />
    <path d="M12 6v12" />
  </svg>
);

const FigmaIcon = () => (
  <svg
    className="w-4 h-4 text-purple-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M8 16l8-8" />
  </svg>
);

const Twilio = () => (
  <svg
    className="w-6 h-6 text-red-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M7 12l5 5L17 8" />
  </svg>
);
const speech_recognition = () => (
  <svg
    className="w-6 h-6 text-purple-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 4C6.48 4 2 6.48 2 10v4c0 3.52 4.48 6 10 6s10-2.48 10-6V10c0-3.52-4.48-6-10-6z" />
    <path d="M12 16v4" />
    <path d="M12 4v4" />
  </svg>
);

const pyautogui = () => (
  <svg
    className="w-6 h-6 text-gray-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8h8v8H8z" />
    <path d="M12 8v8" />
  </svg>
);
const Android = () => (
  <svg
    className="w-6 h-6 text-green-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 2L4 4V20L6 22H18L20 20V4L18 2H6ZM12 4C12 5.1 11.1 6 10 6C8.9 6 8 5.1 8 4C8 2.9 8.9 2 10 2C11.1 2 12 2.9 12 4Z" />
  </svg>
);

const pyttsx3 = () => (
  <svg
    className="w-6 h-6 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M15 9l-3 3-3-3" />
    <path d="M9 15l3-3 3 3" />
  </svg>
);
const SQLiteIcon = () => (
  <svg
    className="w-4 h-4 text-blue-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M8 16l8-8" />
  </svg>
);

const VercelIcon = () => (
  <svg
    className="w-4 h-4 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M8 16l8-8" />
  </svg>
);

const AWSIcon = () => (
  <svg
    className="w-4 h-4 text-orange-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 8l8 8" />
    <path d="M8 16l8-8" />
    <path d="M12 6v12" />
  </svg>
);

const mapTechNameToIcon = (techName: string) => {
  switch (techName.toLowerCase()) {
    case "react":
      return { name: techName, icon: ReactIcon };
    case "react native":
      return { name: techName, icon: ReactNativeIcon };
    case "nextjs":
      return { name: techName, icon: NextJSIcon };
    case "typescript":
      return { name: techName, icon: TypeScriptIcon };
    case "node.js":
    case "nodejs":
      return { name: techName, icon: NodeJSIcon };
    case "mongodb":
      return { name: techName, icon: MongoDBIcon };
    case "tensorflow.js":
    case "tensorflow":
      return { name: techName, icon: TensorFlowIcon };
    case "firebase":
      return { name: techName, icon: FirebaseIcon };
    case "tailwind css":
    case "tailwind":
      return { name: techName, icon: TailwindIcon };
    case "postgresql":
      return { name: techName, icon: PostgreSQLIcon };
    case "socket.io":
    case "socketio":
      return { name: techName, icon: SocketIOIcon };
    case "html":
      return { name: techName, icon: HTMLIcon };
    case "css":
      return { name: techName, icon: CSSIcon };
    case "javascript":
      return { name: techName, icon: JavaScriptIcon };
    case "typescript":
      return { name: techName, icon: TypeScriptIcon };
    case "c++":
      return { name: techName, icon: CPlusPlusIcon };
    case "python":
      return { name: techName, icon: PythonIcon };
    case "git":
      return { name: techName, icon: GitIcon };
    case "docker":
      return { name: techName, icon: DockerIcon };
    case "c":
      return { name: techName, icon: CIcon };
    case "java":
      return { name: techName, icon: JavaIcon };
    case "supabase":
      return { name: techName, icon: SupabaseIcon };
    case "linux":
      return { name: techName, icon: LinuxIcon };
    case "react native":
      return { name: techName, icon: ReactNativeIcon };
    case "react":
      return { name: techName, icon: ReactIcon };
    case "next.js":
      return { name: techName, icon: NextJSIcon };
    case "tailwind css":
      return { name: techName, icon: TailwindIcon };
    case "node.js":
      return { name: techName, icon: NodeJSIcon };
    case "express.js":
      return { name: techName, icon: ExpressJSIcon };
    case "redux":
      return { name: techName, icon: ReduxIcon };
    case "framer motion":
      return { name: techName, icon: FramerMotionIcon };
    case "mongodb":
      return { name: techName, icon: MongoDBIcon };
    case "mysql":
      return { name: techName, icon: MySQLIcon };
    case "graphql":
      return { name: techName, icon: GraphQLIcon };
    case "firebase":
      return { name: techName, icon: FirebaseIcon };
    case "figma":
      return { name: techName, icon: FigmaIcon };
    case "sqlite":
      return { name: techName, icon: SQLiteIcon };
    case "vercel":
      return { name: techName, icon: VercelIcon };
    case "aws":
      return { name: techName, icon: AWSIcon };
    case "Android":
      return { name: techName, icon: Android };
    case "Twilio":
      return { name: techName, icon: Twilio };
    case "pyttsx3":
      return { name: techName, icon: pyttsx3 };
    case "pyautogui":
      return { name: techName, icon: pyautogui };
    case "speech recognition":
      return { name: techName, icon: speech_recognition };
    default:
      return {
        name: techName,
        icon: () => <div className="w-4 h-4 rounded-full bg-gray-500"></div>,
      };
  }
};

interface MobileScreenProps {
  images: string[];
  title: string;
  currentIndex: number;
  onSwipe: (direction: "next" | "prev") => void;
  projectType?: "mobile" | "web" | "desktop";
}

const MobileScreen: React.FC<MobileScreenProps> = ({
  images,
  title,
  currentIndex,
  onSwipe,
  projectType = "web"
}) => {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSwipe = useCallback((direction: "next" | "prev") => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    onSwipe(direction);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, onSwipe]);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      handleSwipe("next");
    }, 3000);

    return () => clearInterval(interval);
  }, [images, handleSwipe]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      handleSwipe(diff > 0 ? "next" : "prev");
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  if (projectType === "mobile") {
    return (
      <div className="relative">
        <div className="relative w-32 sm:w-40 md:w-48 h-64 sm:h-80 md:h-96 mx-auto border-4 border-gray-800 rounded-[2rem] bg-gray-900 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 bg-gray-800 rounded-b-2xl z-20"></div>

          <div
            className="w-full h-full pt-4 sm:pt-6 md:pt-8 relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images && images.length > 0 && (
              <Image
                src={images[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                width={192}
                height={384}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isTransitioning ? 'opacity-90 scale-105' : 'opacity-100 scale-100'
                }`}
              />
            )}

            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 flex justify-center space-x-1">
              {images &&
                images.map((_: any, index: React.Key | null | undefined) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => handleSwipe("prev")}
          className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
        >
          ←
        </button>
        <button
          onClick={() => handleSwipe("next")}
          className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
        >
          →
        </button>
      </div>
    );
  } else if (projectType === "desktop") {
    return (
      <div className="relative">
        <div className="relative w-48 sm:w-64 md:w-72 lg:w-80 mx-auto transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 sm:p-4 shadow-2xl border border-gray-700">
            <div className="flex space-x-1.5 sm:space-x-2 mb-3 sm:mb-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full hover:scale-110 transition-transform"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full hover:scale-110 transition-transform"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full hover:scale-110 transition-transform"></div>
              <div className="flex-1 bg-gray-700 rounded-full px-2 sm:px-3 py-0.5 sm:py-1">
                <div className="text-[10px] sm:text-xs text-gray-300 truncate">
                  {title}
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border-2 border-gray-600 rounded-lg overflow-hidden h-40 sm:h-48 md:h-56 shadow-inner">
              {images && images.length > 0 && (
                <Image
                  src={images[currentIndex]}
                  alt={`${title} screenshot ${currentIndex + 1}`}
                  width={320}
                  height={224}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isTransitioning ? 'opacity-90 scale-105' : 'opacity-100 scale-100'
                  }`}
                />
              )}
            </div>
          </div>
          <div className="absolute -bottom-4 sm:-bottom-6 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
            {images &&
              images.map((_: any, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-400" : "bg-gray-500"
                  }`}
                />
              ))}
          </div>
        </div>

        <button
          onClick={() => handleSwipe("prev")}
          className="absolute -left-3 sm:-left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
        >
          ←
        </button>
        <button
          onClick={() => handleSwipe("next")}
          className="absolute -right-3 sm:-right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
        >
          →
        </button>
      </div>
    );
  } else {
    return (
      <div className="relative">
        <div className="relative w-48 sm:w-64 md:w-72 lg:w-80 mx-auto transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-3 sm:p-4 pb-2 sm:pb-3 shadow-2xl border border-gray-700">
            <div className="flex space-x-1.5 sm:space-x-2 mb-3 sm:mb-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full hover:scale-110 transition-transform"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full hover:scale-110 transition-transform"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full hover:scale-110 transition-transform"></div>
              <div className="flex-1 bg-gray-700 rounded-full px-2 sm:px-3 py-0.5 sm:py-1">
                <div className="text-[10px] sm:text-xs text-gray-300 truncate">
                  {title}
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border-2 border-gray-600 rounded-lg overflow-hidden h-32 sm:h-40 md:h-48 shadow-inner">
              {images && images.length > 0 && (
                <Image
                  src={images[currentIndex]}
                  alt={`${title} screenshot ${currentIndex + 1}`}
                  width={320}
                  height={192}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isTransitioning ? 'opacity-90 scale-105' : 'opacity-100 scale-100'
                  }`}
                />
              )}
            </div>
          </div>
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-3 sm:h-4 rounded-b-2xl shadow-lg relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-gray-600 rounded-b-lg"></div>
          </div>
          <div className="absolute -bottom-4 sm:-bottom-6 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
            {images &&
              images.map((_: any, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-cyan-400" : "bg-gray-500"
                  }`}
                />
              ))}
          </div>
        </div>

        <button
          onClick={() => handleSwipe("prev")}
          className="absolute -left-3 sm:-left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
        >
          ←
        </button>
        <button
          onClick={() => handleSwipe("next")}
          className="absolute -right-3 sm:-right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
        >
          →
        </button>
      </div>
    );
  }
};

interface TechBadgeProps {
  name: string;
  icon: () => JSX.Element;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon: Icon }) => (
  <span className="flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-lg text-xs font-medium text-gray-200 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
    <Icon />
    <span className="text-xs">{name}</span>
  </span>
);

interface Project {
  images?: string[];
  title: string;
  tagline?: string;
  links_github?: string;
  links_live?: string;
  description?: string;
  features?: string[];
  techStack?: { name: string; icon: () => JSX.Element }[];
  stats?: { [key: string]: string | number };
  project_type?: "mobile" | "web" | "desktop";
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSwipe = useCallback((direction: "next" | "prev") => {
    if (!project.images || project.images.length === 0 || isTransitioning) return;

    setIsTransitioning(true);
    
    if (direction === "next") {
      setCurrentImageIndex((prev) =>
        project.images && project.images.length > 0
          ? (prev + 1) % project.images.length
          : 0
      );
    } else {
      setCurrentImageIndex((prev) =>
        project.images && project.images.length > 0
          ? (prev - 1 + project.images.length) % project.images.length
          : 0
      );
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [project.images, isTransitioning]);

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case "mobile":
        return "bg-purple-500/20 text-purple-300 border border-purple-500/30";
      case "desktop":
        return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
      default:
        return "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30";
    }
  };

  const getProjectTypeLabel = (type: string) => {
    switch (type) {
      case "mobile":
        return "📱 Mobile App";
      case "desktop":
        return "💻 Windows Desktop";
      default:
        return "🌐 Web Application";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
        <div className="lg:w-2/5 space-y-4 sm:space-y-6">
          <div className="text-center">
            <span
              className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getProjectTypeColor(project.project_type || "web")}`}
            >
              {getProjectTypeLabel(project.project_type || "web")}
            </span>
          </div>

          <MobileScreen
            images={project.images || []}
            title={project.title}
            currentIndex={currentImageIndex}
            onSwipe={handleSwipe}
            projectType={project.project_type}
          />
          {project.stats && (
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              {Object.entries(project.stats).map(([key, value]: any) => (
                <div
                  key={key}
                  className="bg-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-sm sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                    {value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 capitalize">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:w-3/5 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                {project.title}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {project.tagline}
              </p>
            </div>
            <div className="flex space-x-2 self-start">
              <a
                href={project.links_github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <GithubIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </a>
              <a
                href={project.links_live || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg text-white text-xs sm:text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Live Demo</span>
                <ExternalLinkIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </a>
            </div>
          </div>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-1.5 sm:space-y-2">
            <h4 className="text-white font-semibold text-xs sm:text-sm">
              Key Features:
            </h4>
            <ul className="space-y-1 sm:space-y-1.5">
              {project.features &&
                project.features.map(
                  (feature: string, idx: React.Key | null | undefined) => (
                    <li
                      key={idx}
                      className="flex items-start text-xs sm:text-sm text-gray-300 hover:text-gray-200 transition-colors duration-300"
                    >
                      <span className="text-green-500 font-bold text-base sm:text-lg mr-1.5 sm:mr-2">
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  )
                )}
            </ul>
          </div>

          <div className="pt-1 sm:pt-2">
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">
              Built With:
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack &&
                project.techStack.map(
                  (
                    tech: { name: string; icon: () => JSX.Element },
                    idx: React.Key | null | undefined
                  ) => <TechBadge key={idx} name={tech.name} icon={tech.icon} />
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type FilterType = "all" | "mobile" | "web" | "desktop";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const applyFilter = useCallback((filter: FilterType, projectsList: Project[]) => {
    if (filter === "all") {
      return projectsList;
    } else {
      return projectsList.filter((project) => project.project_type === filter);
    }
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        let { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("id", { ascending: true });

        if (error) {
          console.error("Supabase fetch error:", error);
          setError(`Fetch Error: ${error.message}. (Check you policy)`);
        } else {
          const transformedProjects = Array.isArray(data)
            ? data.map((project) => ({
                ...project,
                techStack: (project.tech_stack_names || []).map(
                  mapTechNameToIcon
                ),
                project_type: project.project_type || "web",
              }))
            : [];

          setProjects(transformedProjects as Project[]);
          setFilteredProjects(applyFilter(activeFilter, transformedProjects as Project[]));
          setError(null);
        }
      } catch (err: any) {
        console.error("General network error:", err);
        setError(err.message || "An unknown network error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [activeFilter, applyFilter]);

  const handleFilterChange = useCallback((filter: FilterType) => {
    setActiveFilter(filter);
    setFilteredProjects(applyFilter(filter, projects));
  }, [applyFilter, projects]);

  if (loading) {
    return (
      <section
        id="projects"
        className="flex flex-col items-center justify-center py-12 sm:py-16 min-h-screen font-sans text-white"
      >
        <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-2 border-b-2 border-cyan-500"></div>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400">
          Loading projects...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="projects"
        className="flex flex-col items-center justify-center py-12 sm:py-16 min-h-screen font-sans text-red-400"
      >
        <p className="text-lg sm:text-xl font-bold">Failed to Fetch Projects</p>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm max-w-lg text-center">
          **Check RLS Policy:** Ensure the `SELECT` policy for the `projects`
          table is enabled for the `anon` role.
        </p>
        <p className="text-xs sm:text-sm text-red-300 mt-2 max-w-lg text-center">
          Details: {error}
        </p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-12 sm:py-16 min-h-screen font-sans"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 sm:mb-4">
            Projects
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Interactive showcase of my latest work with mobile-first experiences
            and web applications.
          </p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white/5 rounded-2xl p-1.5 sm:p-2 border border-white/10 backdrop-blur-sm">
            <div className="flex space-x-1 sm:space-x-2">
              {[
                { key: "all", label: "All Projects" },
                { key: "mobile", label: "Mobile Apps" },
                { key: "web", label: "Web Apps" },
                { key: "desktop", label: "Windows Desktop" },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => handleFilterChange(filter.key as FilterType)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            {activeFilter !== 'all' && ` (${activeFilter} apps)`}
          </span>
        </div>

        <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project: Project, idx: number) => (
              <ProjectCard key={idx} project={project} />
            ))
          ) : (
            <div className="text-center text-gray-500 pt-8 sm:pt-10 text-sm sm:text-base">
              {activeFilter === "all" 
                ? "No projects loaded."
                : `No ${activeFilter} projects found.`
              }
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
