import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-7xl md:text-9xl tracking-tight mb-8">
            REPUBLIC AI
          </h1>
          <p className="text-lg md:text-xl max-w-4xl leading-relaxed">
            We build products we need in our day to day businesses to solve our problems. 
            We invite you to solve your problems with our products as well.
          </p>
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-8 h-8 md:w-10 md:h-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-16 text-center">
            OUR PRODUCTS
          </h2>
          
          <div className="space-y-16">
            {/* SimpleAIAssistant */}
            

            {/* LeadRadar */}
            <div className="border-2 border-white p-8 md:p-12 hover:bg-white hover:text-black transition-all duration-300">
              <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl mb-4">
                    LeadRadar
                  </h3>
                  <p className="text-sm mb-4 text-gray-400 font-medium">iOS Mobile App</p>
                  <p className="text-lg leading-relaxed">
                    Helps you find leads at your current location
                  </p>
                </div>
                <a
                  href="https://apps.apple.com/us/app/leadradar/id6745357957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-base font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap uppercase tracking-wide"
                >
                  GET APP →
                </a>
              </div>
            </div>

            {/* AdRadar */}
            <div className="border-2 border-white p-8 md:p-12 hover:bg-white hover:text-black transition-all duration-300">
              <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl mb-4">
                    AdRadar
                  </h3>
                  <p className="text-sm mb-4 text-gray-400 font-medium">Chrome Extension</p>
                  <p className="text-lg leading-relaxed">
                    Let's you see the ads and social media content any website is running/posting
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://chromewebstore.google.com/detail/adradar/igmdeikcmjcihljfmdobjnbfaedcamjc?hl=en-US&utm_source=ext_sidebar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border-2 border-white text-base font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap uppercase tracking-wide"
                  >
                    ADD TO CHROME →
                  </a>
                  <a
                    href="https://www.adradar.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border-2 border-white text-base font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap uppercase tracking-wide text-center"
                  >
                    MANAGE ACCOUNT →
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 border-white p-8 md:p-12 hover:bg-white hover:text-black transition-all duration-300">
              <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl mb-4">
                    The Friendswood App
                  </h3>
                  <p className="text-sm mb-4 text-gray-400 font-medium">iOS Mobile App</p>
                  <p className="text-lg leading-relaxed">
                    A mobile app for The Friendswood community
                  </p>
                </div>
                <a
                  href="https://apps.apple.com/us/app/friendswood/id6741590679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-base font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap uppercase tracking-wide"
                >
                  GET APP →
                </a>
              </div>
            </div>
            <div className="border-2 border-white p-8 md:p-12 hover:bg-white hover:text-black transition-all duration-300">
              <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl mb-4">
                    SimpleAIAssistant.com
                  </h3>
                  <p className="text-sm mb-4 text-gray-400 font-medium">Website</p>
                  <p className="text-lg leading-relaxed">
                    AI voice receptionist for your business
                  </p>
                </div>
                <a
                  href="https://simpleaiassistant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-base font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap uppercase tracking-wide"
                >
                  VISIT SITE →
                </a>
              </div>
            </div>
            <div className="border-2 border-white p-8 md:p-12 hover:bg-white hover:text-black transition-all duration-300">
              <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl mb-4">
                    OpenSora.fun
                  </h3>
                  <p className="text-sm mb-4 text-gray-400 font-medium">Website</p>
                  <p className="text-lg leading-relaxed">
                    BYOK - (Bring Your Own Key) Sora video generator
                  </p>
                </div>
                <a
                  href="https://www.opensora.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-base font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap uppercase tracking-wide"
                >
                  VISIT SITE →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-12 px-6 border-t-2 border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-lg font-semibold">
            © 2025 REPUBLIC AI
          </p>
          <div className="flex gap-8 text-base">
            <Link 
              href="/privacy" 
              className="hover:underline font-semibold"
            >
              PRIVACY POLICY
            </Link>
            <Link 
              href="/terms" 
              className="hover:underline font-semibold"
            >
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
