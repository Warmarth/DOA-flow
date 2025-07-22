import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  glowColor?: "primary" | "secondary" | "accent";
}

const FeatureCard = ({ icon: Icon, title, description, glowColor = "primary" }: FeatureCardProps) => {
  const glowClasses = {
    primary: "hover:shadow-glow-primary",
    secondary: "hover:shadow-glow-secondary", 
    accent: "hover:shadow-glow-accent"
  };

  return (
    <div className={`group relative p-6 rounded-xl bg-gradient-card border border-border/50 transition-all duration-300 hover:scale-105 ${glowClasses[glowColor]} hover:border-${glowColor}/50`}>
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${glowColor}/20 mb-4 group-hover:bg-${glowColor}/30 transition-colors`}>
        <Icon className={`h-6 w-6 text-${glowColor}`} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;