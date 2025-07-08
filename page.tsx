import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Calendar, Star } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-teal-50 to-cyan-50 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Fun and The City
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-700">
            Your guide to Tampa Bay's best 18+ spots, activities, and experiences. No fake ID required – just pure fun
            and adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 px-8 py-4 text-lg shadow-lg"
            >
              <Link href="/explore">Start Exploring</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg"
            >
              <Link href="/about">My Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-teal-500 mb-3">4</div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-cyan-500 mb-3">50+</div>
              <div className="text-gray-600 font-medium">Restaurants</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-teal-600 mb-3">15+</div>
              <div className="text-gray-600 font-medium">Beaches</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-cyan-600 mb-3">18+</div>
              <div className="text-gray-600 font-medium">Age Friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">Explore Tampa Bay</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white">
              <Link href="/restaurants#tampa">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Tampa skyline"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <MapPin className="w-6 h-6 mb-2" />
                  </div>
                </div>
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl group-hover:text-teal-500 transition-colors">Tampa</CardTitle>
                  <CardDescription className="text-gray-600">
                    The heart of the bay with vibrant dining and nightlife
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white">
              <Link href="/st-petersburg">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="St. Petersburg waterfront"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Star className="w-6 h-6 mb-2" />
                  </div>
                </div>
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl group-hover:text-cyan-500 transition-colors">St. Petersburg</CardTitle>
                  <CardDescription className="text-gray-600">
                    Artsy downtown with waterfront dining and culture
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white">
              <Link href="/clearwater">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Clearwater Beach"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-400/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Users className="w-6 h-6 mb-2" />
                  </div>
                </div>
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl group-hover:text-teal-400 transition-colors">Clearwater</CardTitle>
                  <CardDescription className="text-gray-600">
                    Beautiful beaches and laid-back coastal vibes
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white">
              <Link href="/dunedin">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Dunedin downtown"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Calendar className="w-6 h-6 mb-2" />
                  </div>
                </div>
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl group-hover:text-cyan-400 transition-colors">Dunedin</CardTitle>
                  <CardDescription className="text-gray-600">
                    Charming small town with unique dining experiences
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">What You'll Find</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/restaurants" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden bg-white">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Restaurant dining"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-teal-500 transition-colors">Restaurants</CardTitle>
                  <CardDescription>
                    From upscale dining to casual hangouts, discover the best eats across Tampa Bay
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/beaches" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden bg-white">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Beach scene"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-cyan-500 transition-colors">Beaches</CardTitle>
                  <CardDescription>
                    Sun, sand, and endless activities at the most beautiful beaches in Florida
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/nightlife" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden bg-white">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Nightlife scene"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-teal-600 transition-colors">Nightlife</CardTitle>
                  <CardDescription>
                    18+ clubs, karaoke bars, and late-night spots for unforgettable nights out
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/activities" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden bg-white">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Fun activities"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-cyan-600 transition-colors">Activities</CardTitle>
                  <CardDescription>
                    Adventure sports, arcades, mini golf, and unique experiences for every mood
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-900">Ready to Explore Tampa Bay?</h2>
          <p className="text-xl mb-12 text-gray-700">
            Join the community of young adults discovering the best 18+ experiences in Tampa Bay
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 px-8 py-4 text-lg shadow-lg"
          >
            <Link href="/explore">Start Your Adventure</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
