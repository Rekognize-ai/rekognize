import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  end: number;
  suffix?: string;
  decimals?: number;
  label: string;
  description?: string;
}

const StatCard = ({ end, suffix = '', decimals = 0, label, description }: StatCardProps) => {
  const animation = useScrollAnimation();
  const count = useCountUp({ end, suffix, decimals }, animation.isVisible);

  return (
    <div ref={animation.ref}>
      <Card className="border-border hover:border-brand-cyan/50 transition-all hover:shadow-lg hover:-translate-y-1">
        <CardContent className="pt-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-brand-cyan mb-2">
            {count}
          </div>
          <div className="text-lg font-semibold text-foreground mb-1">{label}</div>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCard;
