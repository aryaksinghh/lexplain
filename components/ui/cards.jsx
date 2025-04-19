import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo() {
  return (
    <div className="py-10 px-5 lg:py-15 ">
      <div
        className="intersect-once intersect:motion-preset-slide-up motion-delay-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature, index) => (
          <div
            key={index}
            className="relative bg-black bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
            <Grid size={20} />
            <p
              className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p
              className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "AI-Powered Legal Simplification",
    description:
      "Our advanced AI breaks down complex legal language into plain, everyday English—so you know exactly what you&apos;r reading.",
  },
  {
    title: "Instant PDF Upload & Analysis",
    description:
      "Just upload your legal document and let the app instantly extract and explain key clauses, terms, and risks. No need to copy-paste or scroll endlessly.",
  },
  {
    title: "Customizable Tone & Context",
    description:
      "Select the tone of AI responses—from professional to beginner-friendly. Whether you're a student, startup founder, or curious reader, the AI adjusts to your understanding level.",
  },
  {
    title: " Clause Highlighting & Risk Alerts",
    description:
      "Our system highlights important clauses like cancellation terms, fees, or risks—so you can avoid surprises and make smarter decisions.",
  },
  {
    title: "AI-Powered Legal Chat Assistant",
    description:
      "Not sure about a term? Chat directly with the AI to get context, comparisons, and definitions—all tailored to your document.",
  },
  {
    title: "Powered by Groq + LLaMA 3 for Lightning Fast Responses",
    description:
      "We use cutting-edge AI models deployed on Groq’s blazing fast infrastructure—delivering insightful answers in milliseconds with unmatched accuracy.",
  },
];

export const Grid = ({
  pattern,
  size
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div
        className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10" />
      </div>
    </div>
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}` + Math.random()}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}
