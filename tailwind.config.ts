import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  safelist: [
    // Background colors
    "bg-background", "bg-gray-900", "bg-gray-800", "bg-gray-700",
    "bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-green-500",
    // Text colors
    "text-foreground", "text-white", "text-gray-300", "text-gray-400",
    "text-blue-400", "text-purple-400", "text-pink-400", "text-green-400",
    // Borders
    "border-gray-700", "border-gray-600",
    // Hover states
    "hover:border-blue-500", "hover:text-blue-400", "hover:text-white", "hover:bg-gray-800", "hover:glow",
    // Gradients
    "bg-gradient-to-r", "bg-gradient-to-br", "from-blue-500", "to-purple-600", "from-blue-500/20", "to-purple-600/20",
    // Spacing
    "px-4", "py-2", "px-8", "py-3", "mb-4", "mb-6", "mb-8", "mb-16", "mt-6", "mt-12", "pt-4",
    "space-y-2", "space-y-3", "space-y-4", "space-y-6", "space-y-12", "gap-2", "gap-4", "gap-6", "gap-8",
    // Typography
    "text-sm", "text-xs", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl",
    "font-bold", "font-semibold", "font-medium",
    // Layout
    "flex", "flex-col", "flex-wrap", "items-center", "justify-center", "justify-between", "text-center",
    // Sizing
    "w-full", "h-2", "h-16", "w-24", "w-80", "h-80", "w-96", "h-96", "max-w-2xl", "max-w-3xl", "max-w-4xl", "mx-auto",
    // Positioning
    "relative", "absolute", "top-0", "left-0", "right-0", "bottom-0", "z-10", "z-50",
    // Borders
    "rounded-full", "rounded-lg", "rounded-xl", "rounded-2xl",
    // Effects
    "transition-all", "duration-300", "glow",
    // Container
    "container"
  ],
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        ".glow": {
          boxShadow: "0 0 20px rgba(59,130,246,0.3)",
        },
        ".hover\\:glow:hover": {
          boxShadow: "0 0 30px rgba(147,51,234,0.4)",
        },
      });
    },
  ],
};

export default config;