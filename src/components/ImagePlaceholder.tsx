import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
}

const ImagePlaceholder = ({ alt, className = "" }: ImagePlaceholderProps) => (
  <div
    className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 p-8 ${className}`}
    role="img"
    aria-label={alt}
  >
    <ImageIcon className="h-12 w-12 text-muted-foreground mb-2" />
    <span className="text-xs text-muted-foreground text-center">TODO: {alt}</span>
  </div>
);

export default ImagePlaceholder;
