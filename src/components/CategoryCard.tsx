import { Link } from "react-router-dom";
import { 
  BookOpen, 
  MessageCircle, 
  Bell, 
  HandHeart, 
  Shield, 
  Heart, 
  CloudMoon,
  Sun
} from "lucide-react";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  quoteCount: number;
}

const iconMap: { [key: string]: React.ReactNode } = {
  "quran-quotes": <BookOpen className="w-8 h-8" />,
  "hadith-quotes": <MessageCircle className="w-8 h-8" />,
  "islamic-reminders": <Bell className="w-8 h-8" />,
  "duas": <HandHeart className="w-8 h-8" />,
  "sabr-patience": <Shield className="w-8 h-8" />,
  "love-in-islam": <Heart className="w-8 h-8" />,
  "death-akhirah": <CloudMoon className="w-8 h-8" />,
  "morning-evening-duas": <Sun className="w-8 h-8" />,
};

const CategoryCard = ({ name, slug, description, quoteCount }: CategoryCardProps) => {
  return (
    <Link to={`/category/${slug}`} className="block">
      <div className="category-card">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {iconMap[slug] || <BookOpen className="w-8 h-8" />}
        </div>
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <span className="text-xs font-medium text-primary">{quoteCount} Quotes</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
