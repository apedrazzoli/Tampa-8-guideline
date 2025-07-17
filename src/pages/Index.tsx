
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import CitiesSection from '@/components/CitiesSection';
import FeaturesSection from '@/components/FeaturesSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Fun and The City"
        subtitle="Your guide to Tampa Bay's best 18+ spots, activities, and experiences. No fake ID required – just pure fun and adventure."
        primaryButtonText="Start Exploring"
        primaryButtonLink="/activities"
        secondaryButtonText="My Story"
        secondaryButtonLink="/about"
      />
      
      <StatsSection />
      
      <CitiesSection />
      
      <FeaturesSection />
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-tampa-blue to-tampa-blue-light py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-tampa-dark mb-4">
            Ready to Explore Tampa Bay?
          </h2>
          <p className="text-lg text-tampa-gray mb-8">
            Join the community of young adults discovering the best 18+ experiences in Tampa Bay
          </p>
          <Link to="/activities">
            <Button className="bg-white text-tampa-dark hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg transition-all duration-200">
              Start Your Adventure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
