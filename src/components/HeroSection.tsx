
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imagePlaceholder?: string;
}

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imagePlaceholder
}: HeroSectionProps) => {
  return (
    <div className="relative bg-gradient-to-br from-tampa-blue-light to-white min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-tampa-dark leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-tampa-gray leading-relaxed">
              {subtitle}
            </p>
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryButtonText && primaryButtonLink && (
                  <Link to={primaryButtonLink}>
                    <Button className="bg-tampa-blue hover:bg-tampa-blue/80 text-tampa-dark font-semibold px-8 py-3 rounded-lg transition-all duration-200 w-full sm:w-auto">
                      {primaryButtonText}
                    </Button>
                  </Link>
                )}
                {secondaryButtonText && secondaryButtonLink && (
                  <Link to={secondaryButtonLink}>
                    <Button variant="outline" className="border-tampa-blue text-tampa-dark hover:bg-tampa-blue-light px-8 py-3 rounded-lg transition-all duration-200 w-full sm:w-auto">
                      {secondaryButtonText}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
          
          {imagePlaceholder && (
            <div className="relative">
              <div className="aspect-[4/3] bg-tampa-blue/20 rounded-lg flex items-center justify-center">
                <p className="text-tampa-gray text-center p-4">
                  Image placeholder: {imagePlaceholder}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
