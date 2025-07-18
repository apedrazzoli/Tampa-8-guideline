
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Music, Users, Clock } from 'lucide-react';

const Nightlife = () => {
  const nightlifeSpots = [
    {
      name: "Showbar",
      type: "Club",
      location: "Ybor City",
      district: "Ybor City",
      description: "High-energy club with live performances and dancing",
      features: ["Live Shows", "Dancing", "18+", "High Energy"],
      imagePlaceholder: "Showbar live performance stage with dancing crowd"
    },
    {
      name: "Tangra",
      type: "Nightclub", 
      location: "Ybor City",
      district: "Ybor City",
      description: "Trendy nightclub with DJ sets and modern vibes",
      features: ["DJ Sets", "Modern Atmosphere", "18+", "Trendy"],
      imagePlaceholder: "Tangra modern nightclub with DJ booth"
    },
    {
      name: "Club Prana",
      type: "Multi-Level Club",
      location: "Ybor City",
      district: "Ybor City", 
      description: "Multi-level club with different music styles",
      features: ["Multiple Floors", "Varied Music", "18+", "Large Venue"],
      imagePlaceholder: "Club Prana multi-level interior with different floors"
    },
    {
      name: "HPC",
      type: "Bar/Club",
      location: "SoHo",
      district: "SoHo",
      description: "Popular spot with great music and social atmosphere",
      features: ["Social Scene", "Great Music", "Popular", "Energetic"],
      imagePlaceholder: "HPC bar club with social crowd and music"
    },
    {
      name: "Pete's Place Karaoke Bar",
      type: "Karaoke Bar",
      location: "SoHo", 
      district: "SoHo",
      description: "Local favorite karaoke spot full of friendly faces",
      features: ["Karaoke", "Local Crowd", "Friendly", "Sing-Along Fun"],
      imagePlaceholder: "Pete's Place karaoke stage with singing patrons"
    },
    {
      name: "Ivy Rose",
      type: "Lounge",
      location: "Downtown Tampa",
      district: "Downtown Tampa",
      description: "Upscale lounge with sophisticated atmosphere",
      features: ["Upscale", "Sophisticated", "Cocktails", "Elegant"],
      imagePlaceholder: "Ivy Rose upscale lounge interior with elegant decor"
    },
    {
      name: "Litt Club", 
      type: "Club",
      location: "Downtown Tampa",
      district: "Downtown Tampa",
      description: "High-energy club with top DJs and dancing",
      features: ["Top DJs", "Dancing", "High Energy", "Popular"],
      imagePlaceholder: "Litt Club dance floor with DJ and crowd"
    },
    {
      name: "Eden",
      type: "Nightclub",
      location: "Downtown Tampa", 
      district: "Downtown Tampa",
      description: "Trendy nightspot with modern design and great vibes",
      features: ["Modern Design", "Great Vibes", "Trendy", "Stylish"],
      imagePlaceholder: "Eden nightclub modern stylish interior"
    }
  ];

  const districts = ["Ybor City", "SoHo", "Downtown Tampa"];

  const NightlifeCard = ({ spot }: { spot: any }) => (
    <Card className="bg-white border-tampa-blue/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-6">
        {/* Image placeholder - ready for actual image */}
        <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/60 to-coral-pink/60 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          <div className="relative z-10 bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <p className="text-cloud-white text-center font-medium text-sm">
              📷 {spot.imagePlaceholder}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg text-tampa-dark group-hover:text-purple-600 transition-colors">
            {spot.name}
          </h3>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
            {spot.type}
          </span>
        </div>
        
        <div className="flex items-center text-tampa-gray text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {spot.location}
        </div>
        
        <p className="text-tampa-gray mb-4 leading-relaxed">{spot.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {spot.features.map((feature: string, index: number) => (
            <span key={index} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full border border-purple-200">
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const DistrictSection = ({ district }: { district: string }) => {
    const districtSpots = nightlifeSpots.filter(spot => spot.district === district);
    const districtInfo = {
      "Ybor City": {
        subtitle: "Historic Nightlife District",
        description: "Tampa's historic entertainment district with a vibrant mix of clubs and live music venues."
      },
      "SoHo": {
        subtitle: "Social Hub", 
        description: "South Howard Avenue's trendy nightlife scene with popular bars and social spots."
      },
      "Downtown Tampa": {
        subtitle: "Urban Scene",
        description: "The heart of Tampa's nightlife with upscale lounges and high-energy clubs."
      }
    };

    return (
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-tampa-dark mb-2">{district}</h2>
          <p className="text-lg text-purple-600 font-medium mb-2">{districtInfo[district as keyof typeof districtInfo].subtitle}</p>
          <p className="text-tampa-gray max-w-2xl mx-auto">{districtInfo[district as keyof typeof districtInfo].description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districtSpots.map((spot, index) => (
            <NightlifeCard key={index} spot={spot} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Nightlife & Entertainment"
        subtitle="Experience Tampa's vibrant 18+ nightlife scene. From high-energy clubs to intimate karaoke bars, discover where the night comes alive."
      />

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {districts.map((district, index) => (
            <DistrictSection key={index} district={district} />
          ))}
        </div>
      </div>

      {/* Night Out Tips */}
      <div className="bg-gradient-to-br from-purple-900 to-pink-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Night Out Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-pink-300 mr-3" />
                <h3 className="font-semibold text-white">18+ Venues</h3>
              </div>
              <p className="text-purple-100 text-sm">All listed venues welcome 18+ guests. Always bring valid ID and check specific event requirements.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-pink-300 mr-3" />
                <h3 className="font-semibold text-white">Best Nights</h3>
              </div>
              <p className="text-purple-100 text-sm">Thursday-Saturday are peak nights. Check social media for special events and themed nights.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-pink-300 mr-3" />
                <h3 className="font-semibold text-white">Getting Around</h3>
              </div>
              <p className="text-purple-100 text-sm">Use rideshare apps, designated drivers, or public transit. Many venues are walkable in each district.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nightlife;
