
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';

const Activities = () => {
  const outdoorAdventures = [
    {
      name: 'Elite Water Sports',
      type: 'Water Sports',
      description: 'Jet skiing, parasailing, and water adventures',
      features: ['Jet Skiing', 'Parasailing', 'Boat Rentals', 'Gulf Access'],
      website: '#'
    },
    {
      name: 'Empower Adventures Tampa Bay',
      type: 'Adventure Park',
      description: 'Zip lining and outdoor adventure courses',
      features: ['Zip Lines', 'Obstacle Courses', 'Team Building', 'Nature'],
      website: '#'
    }
  ];

  const sportsRecreation = [
    {
      name: 'PopStroke Tampa',
      type: 'Mini Golf',
      description: 'Premium mini golf experience with food and drinks',
      features: ['Premium Course', 'Food & Drinks', 'Social Atmosphere', 'Modern Design'],
      website: '#'
    },
    {
      name: 'TB Pickleball Oldsmar',
      type: 'Pickleball',
      description: 'Indoor pickleball courts and leagues',
      features: ['Indoor Courts', 'Leagues', 'Equipment Rental', 'All Levels'],
      website: '#'
    },
    {
      name: 'Pickleheads at Rowlett Park',
      type: 'Outdoor Pickleball',
      description: 'Outdoor pickleball courts in Tampa',
      features: ['Outdoor Courts', 'Free Play', 'Community', 'Tampa Location'],
      website: '#'
    }
  ];

  const gamingArcades = [
    {
      name: '1UP Arcade Bar',
      type: 'Arcade',
      description: 'Classic arcade games and modern gaming',
      features: ['Classic Games', 'Modern Gaming', 'Social Atmosphere', 'Tournaments'],
      website: '#'
    },
    {
      name: 'Reboot Amusements',
      type: 'Retro Arcade',
      description: 'Retro arcade with pinball and classic games',
      features: ['Pinball', 'Retro Games', 'Nostalgic Vibes', 'All Ages'],
      website: '#'
    },
    {
      name: 'GameTime Players',
      type: 'Gaming Lounge',
      description: 'Gaming lounge with console and PC gaming',
      features: ['Console Gaming', 'PC Gaming', 'Tournaments', 'Social Gaming'],
      website: '#'
    },
    {
      name: 'Elev8 Fun',
      type: 'Entertainment Center',
      description: 'Multi-level entertainment with arcade and activities',
      features: ['Multi-Level', 'Arcade', 'Activities', 'Group Fun'],
      website: '#'
    },
    {
      name: 'Lowry Arcade',
      type: 'Local Arcade',
      description: 'Local arcade with classic and modern games',
      features: ['Classic Games', 'Modern Games', 'Local Favorite', 'Affordable'],
      website: '#'
    }
  ];

  const actionAdventure = [
    {
      name: 'LaserOps',
      type: 'Laser Tag',
      description: 'High-tech laser tag arena with multiple game modes',
      features: ['High-Tech Arena', 'Multiple Game Modes', 'Team Building', 'Competitive'],
      website: '#'
    }
  ];

  const placesToBe = [
    {
      name: 'Armature Works',
      description: 'Food hall and event space with river views',
      imagePlaceholder: 'Armature Works interior'
    },
    {
      name: 'Water Street Tampa',
      description: 'Entertainment District - Modern district with dining, entertainment, and bowling',
      imagePlaceholder: 'Water Street Tampa'
    },
    {
      name: 'Downtown St. Petersburg',
      description: 'Arts & Culture - Arts district with galleries, restaurants, and nightlife',
      imagePlaceholder: 'Downtown St. Petersburg'
    },
    {
      name: 'Clearwater Beach',
      description: 'Beach Town - Beach town with shops, restaurants, and activities',
      imagePlaceholder: 'Clearwater Beach boardwalk'
    }
  ];

  const ActivityCard = ({ activity }: { activity: any }) => (
    <Card className="bg-white border-tampa-blue/20 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-tampa-dark">{activity.name}</CardTitle>
        <p className="text-sm text-tampa-blue font-medium">{activity.type}</p>
      </CardHeader>
      <CardContent>
        <p className="text-tampa-gray mb-4">{activity.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {activity.features.map((feature: string, index: number) => (
            <span key={index} className="bg-tampa-blue-light text-tampa-dark text-xs px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
        <Button className="w-full bg-tampa-blue hover:bg-tampa-blue/80 text-tampa-dark">
          <ExternalLink className="w-4 h-4 mr-2" />
          Visit Website
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Activities & Adventures"
        subtitle="From water sports and laser tag to arcade gaming and mini golf, discover endless ways to have fun in Tampa Bay."
      />

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Outdoor Adventures */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tampa-dark mb-8">Outdoor Adventures</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outdoorAdventures.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </section>

          {/* Sports & Recreation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tampa-dark mb-8">Sports & Recreation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsRecreation.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </section>

          {/* Gaming & Arcades */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tampa-dark mb-8">Gaming & Arcades</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gamingArcades.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </section>

          {/* Action & Adventure */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tampa-dark mb-8">Action & Adventure</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {actionAdventure.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </section>

          {/* Places to Be */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tampa-dark mb-8">Places to Be</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {placesToBe.map((place, index) => (
                <Card key={index} className="bg-tampa-blue-light/50 border-tampa-blue/20">
                  <CardContent className="p-6">
                    <div className="aspect-[16/9] bg-tampa-blue/20 rounded-lg mb-4 flex items-center justify-center">
                      <p className="text-tampa-gray text-center text-sm p-2">
                        {place.imagePlaceholder}
                      </p>
                    </div>
                    <h3 className="font-bold text-lg text-tampa-dark mb-2">{place.name}</h3>
                    <p className="text-tampa-gray">{place.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Activity Tips */}
          <section className="bg-tampa-blue-light/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-tampa-dark mb-6">Activity Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-tampa-dark mb-2">Book Ahead</h3>
                <p className="text-tampa-gray text-sm">Popular activities like water sports and adventure courses fill up quickly, especially on weekends.</p>
              </div>
              <div>
                <h3 className="font-semibold text-tampa-dark mb-2">Group Discounts</h3>
                <p className="text-tampa-gray text-sm">Many venues offer group rates for parties of 6+. Perfect for birthday celebrations or friend outings.</p>
              </div>
              <div>
                <h3 className="font-semibold text-tampa-dark mb-2">Mix & Match</h3>
                <p className="text-tampa-gray text-sm">Combine activities for the perfect day out - mini golf followed by arcade games, or water sports then beach dining.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Activities;
