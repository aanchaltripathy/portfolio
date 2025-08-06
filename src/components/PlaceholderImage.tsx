interface PlaceholderImageProps {
  width: number;
  height: number;
  className?: string;
}

export default function PlaceholderImage({ width, height, className = "" }: PlaceholderImageProps) {
  return (
    <div 
      className={`bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span className="text-gray-400 text-sm">Project Image</span>
    </div>
  );
}
