
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const adventures = [
    { title: 'Exploring Tampa', image: 'Exploring Tampa' },
    { title: 'Beach Adventures', image: 'Beach day adventures' },
    { title: 'Food Discoveries', image: 'Food discoveries' }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Hi, I'm Alessia"
        subtitle="From New York to Tampa – discovering fun without limits"
        primaryButtonText="Explore My Discoveries"
        primaryButtonLink="/activities"
        imagePlaceholder="Alessia Pedrazzoli photo"
      />

      {/* Profile Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-tampa-dark mb-2">Alessia Pedrazzoli</h2>
            <p className="text-tampa-gray">📍 Tampa, FL</p>
            <p className="text-tampa-gray">Originally from NYC 🗽</p>
          </div>

          <div className="prose prose-lg max-w-none text-tampa-gray">
            <h3 className="text-2xl font-bold text-tampa-dark mb-4">My Journey</h3>
            <p className="mb-6">
              I'm Alessia Pedrazzoli, and like a lot of people my age, I found myself in a new city—excited, curious, and unsure of what to expect. I grew up in New York—the Big Apple—where something's always happening and the pace never slows down. When I moved to Tampa just before starting college, I was ready for sunshine, palm trees, and a new chapter full of fun and adventure.
            </p>
            
            <p className="mb-6">
              But once I got here, I quickly realized that being 18 to 20 came with unexpected limitations. So much of the social scene in Tampa revolves around bars and clubs that are 21 and up. I didn't know where to go or what to do without feeling like I either had to stay home or pretend to be older just to be part of the fun.
            </p>
            
            <p className="mb-8">
              What struck me most was the pervasive culture that equates fun with drinking. There's this unspoken idea that to enjoy yourself—especially on weekends—alcohol has to be involved. I found that mindset limiting and, honestly, disheartening. I didn't want to feel like I had to drink just to fit in or have a good time.
            </p>

            <h3 className="text-2xl font-bold text-tampa-dark mb-4">A Different Perspective</h3>
            <p className="mb-6">
              That's part of why I created this site—not just because of what I was missing in Tampa, but also because of what I've experienced elsewhere. I'm Swiss, and I've traveled extensively throughout Europe, where the mindset around going out is completely different. In many places, young people can go out as early as 16, and there isn't the same pressure to "drink to have fun." Social life isn't limited by age or alcohol—it's about freedom, connection, and genuinely enjoying the moment.
            </p>
            
            <p className="mb-8">
              That sense of liberty stuck with me, and it made the contrast here in the U.S. even more glaring. So, I wanted to challenge that idea and prove that alcohol isn't a requirement for connection, fun, or unforgettable memories.
            </p>

            <h3 className="text-2xl font-bold text-tampa-dark mb-4">The Mission</h3>
            <p className="mb-6">
              Tampa—and the surrounding areas like St. Pete and Dunedin—actually have a lot to offer for the 18+ crowd. From 18+ clubs and live music venues to outdoor adventures, late-night food spots, and creative hangouts, there are countless ways to enjoy yourself without relying on alcohol or a fake ID.
            </p>
            
            <p className="mb-6">
              This site is about embracing that lifestyle. It's here to show you the experiences, spots, and vibes that don't center around drinking but still deliver everything you're looking for—energy, connection, adventure, and fun. Whether you're new to the area or just want something different, I hope this platform helps you discover the other side of Tampa Bay's social scene.
            </p>
            
            <p className="mb-8 text-lg font-medium text-tampa-dark">
              You don't need to wait until you're 21 to live your life—and you definitely don't need a drink in your hand to enjoy it.
            </p>
          </div>
        </div>
      </div>

      {/* Adventures Gallery */}
      <div className="bg-tampa-blue-light py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-tampa-dark text-center mb-8">
            My Tampa Bay Adventures
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {adventures.map((adventure, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-tampa-blue/20">
                <CardContent className="p-4">
                  <div className="aspect-square bg-tampa-blue/20 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-tampa-gray text-center text-sm p-2">
                      {adventure.image}
                    </p>
                  </div>
                  <h4 className="font-semibold text-tampa-dark text-center">
                    {adventure.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
