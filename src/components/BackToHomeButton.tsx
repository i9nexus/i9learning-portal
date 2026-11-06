import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackToHomeButtonProps {
  className?: string;
  label?: string;
}

export const BackToHomeButton = ({
  className = "",
  label = "Voltar à página inicial",
}: BackToHomeButtonProps) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md py-1.5 ${className}`}
    >
      <ArrowLeft
        size={18}
        className="transition-transform duration-200 group-hover:-translate-x-1 text-primary/80 group-hover:text-primary"
        aria-hidden="true"
      />
      <span>{label}</span>
    </Link>
  );
};

export default BackToHomeButton;
