
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import CitiesSection from '@/components/CitiesSection';
import FeaturesSection from '@/components/FeaturesSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Fun and The City"
        subtitle="Your guide to Tampa Bay's best 18+ spots, activities, and experiences. No fake ID required – just pure fun and adventure waiting to be discovered."
        primaryButtonText="Start Exploring"
        primaryButtonLink="/activities"
        secondaryButtonText="My Story"
        secondaryButtonLink="/about"
        imagePlaceholder="Beautiful Tampa Bay skyline with vibrant sunset colors"
      />
      
      <StatsSection />
      
      <CitiesSection />
      
      <FeaturesSection />
      
      {/* Modern CTA Section */}
      <div className="relative bg-gradient-ocean py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-sm font-medium text-cloud-white mb-6 animate-scale-in">
            <Sparkles className="w-4 h-4" />
            <span>Join thousands of adventurers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-cloud-white mb-6 animate-fade-in-up">
            Ready to Explore Tampa Bay?
          </h2>
          
          <p className="text-xl text-ocean-blue-light mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join the community of young adults discovering the best 18+ experiences in Tampa Bay. 
            Your next adventure is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link to="/activities">
              <Button className="group bg-cloud-white text-ocean-blue-dark hover:bg-sand-beige font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Your Adventure
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <div className="flex items-center space-x-4 text-ocean-blue-light">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-sunset border-2 border-white"></div>
                ))}
              </div>
              <span className="text-sm font-medium">10,000+ happy explorers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
