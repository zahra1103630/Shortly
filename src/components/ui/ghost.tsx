"use client";

import { motion } from "framer-motion";

const GREEN = "#8FE388";

interface GhostProps {
  size?: number;
  mood?: "happy" | "sleepy" | "thinking";
  className?: string;
  rotate?: number;
  glow?: boolean;
}

export default function Ghost({
  size = 64,
  mood = "happy",
  className = "",
  rotate = 0,
  glow = false,
}: GhostProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size * 1.05,
        rotate,
        filter: glow
          ? "drop-shadow(0 0 30px rgba(143,227,136,0.35))"
          : undefined,
      }}
    >
      <svg viewBox="0 0 100 110" width="100%" height="100%" overflow="visible">
        {/* Ghost body */}
        <path
          d="M50 4C25.7 4 6 23.7 6 48v50c0 3 3.4 4.7 5.8 2.9l8-6a6 6 0 0 1 7.2 0l6.6 5a6 6 0 0 0 7.2 0l6.6-5a6 6 0 0 1 7.2 0l6.6 5a6 6 0 0 0 7.2 0l6.6-5a6 6 0 0 1 7.2 0l8 6c2.4 1.8 5.8.1 5.8-2.9V48C94 23.7 74.3 4 50 4z"
          fill={GREEN}
        />

        {/* Sleepy */}
        {mood === "sleepy" && (
          <>
            <path
              d="M28 50 Q34 44 40 50"
              stroke="#1E2A17"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M60 50 Q66 44 72 50"
              stroke="#1E2A17"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M42 66 Q50 62 58 66"
              stroke="#1E2A17"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Thinking */}
        {mood === "thinking" && (
          <>
            <circle cx="34" cy="50" r="8" fill="#1E2A17" />
            <circle cx="66" cy="50" r="8" fill="#1E2A17" />

            <circle cx="31.5" cy="47" r="2.4" fill="white" />
            <circle cx="63.5" cy="47" r="2.4" fill="white" />

            <circle cx="42" cy="70" r="3" fill="#1E2A17" opacity="0.6" />
            <circle cx="50" cy="70" r="3" fill="#1E2A17" opacity="0.8" />
            <circle cx="58" cy="70" r="3" fill="#1E2A17" />

            <circle
              cx="18"
              cy="60"
              r="10"
              fill="#F7B6C2"
              opacity="0.45"
              filter="blur(3px)"
            />

            <circle
              cx="82"
              cy="60"
              r="10"
              fill="#F7B6C2"
              opacity="0.45"
              filter="blur(3px)"
            />
          </>
        )}

        {/* Happy */}
        {mood === "happy" && (
          <>
            <circle cx="34" cy="50" r="9" fill="#1E2A17" />
            <circle cx="66" cy="50" r="9" fill="#1E2A17" />

            <circle cx="31.5" cy="47" r="2.8" fill="white" />
            <circle cx="63.5" cy="47" r="2.8" fill="white" />

            <path
              d="M38 68 Q50 78 62 68"
              stroke="#1E2A17"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Soft blush */}
            <circle
              cx="18"
              cy="60"
              r="10"
              fill="#F7B6C2"
              opacity="0.45"
              filter="blur(3px)"
            />

            <circle
              cx="82"
              cy="60"
              r="10"
              fill="#F7B6C2"
              opacity="0.45"
              filter="blur(3px)"
            />
          </>
        )}
      </svg>
    </motion.div>
  );
}
