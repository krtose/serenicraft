import Head from 'next/head'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>SereniCraft - Health First. Crafted for Peace of Mind.</title>
        <meta name="description" content="SereniCraft specializes in premium, healthy, non-toxic kitchenware with safe materials like titanium and 316 stainless steel." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-green-200 rounded-full blur-2xl"></div>
            <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-200 rounded-full blur-2xl"></div>
          </div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `url("/images/hero-banner.png")`
          }}></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              SereniCraft
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Health First. Crafted for Peace of Mind.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Premium kitchenware designed with the finest materials for your health and culinary excellence.
            </p>
            <a 
              href="https://amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Buy on Amazon
            </a>
          </div>
        </section>

        {/* Brand Introduction */}
        <section className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
            <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-300 to-green-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose SereniCraft?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe that exceptional kitchenware should never compromise on health, safety, or beauty.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Health */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Health First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product is crafted with non-toxic, food-safe materials that prioritize your family's wellbeing above all else.
                </p>
              </div>

              {/* Safety */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Premium Safety</h3>
                <p className="text-gray-600 leading-relaxed">
                  Using only the finest materials like titanium and 316 stainless steel, ensuring durability and complete peace of mind.
                </p>
              </div>

              {/* Aesthetics */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Timeless Beauty</h3>
                <p className="text-gray-600 leading-relaxed">
                  Elegant design that transforms everyday cooking into a ritual of beauty, bringing sophistication to your kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L60.876 39.124L100 50L60.876 60.876L50 100L39.124 60.876L0 50L39.124 39.124z' fill='%23000000' fill-opacity='0.4'/%3E%3C/svg%3E")`
          }}></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Crafted for Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our collection represents the perfect harmony of form and function, where every piece is meticulously designed to elevate your culinary experience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Premium Materials</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We source only the finest materials - from medical-grade titanium to premium 316 stainless steel - ensuring each piece meets the highest standards of safety and durability.
                  </p>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Artisan Craftsmanship</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Every detail is carefully considered and expertly executed by skilled artisans who share our commitment to excellence and precision.
                  </p>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lifestyle Aesthetics</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our designs seamlessly blend into modern living spaces, creating an atmosphere of refined elegance that enhances your daily rituals.
                  </p>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mindful Living</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Each piece is designed to bring intention and mindfulness to your cooking, transforming meal preparation into a meditative practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-12 relative overflow-hidden">
          {/* Footer Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M40 0L50 30L80 40L50 50L40 80L30 50L0 40L30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Subtle Glow Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">SereniCraft</h3>
              <p className="text-gray-400 mb-6 text-lg">
                Health First, Always
              </p>
              <div className="border-t border-gray-700 pt-6">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} SereniCraft. All rights reserved. Crafted with care for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default HomePage