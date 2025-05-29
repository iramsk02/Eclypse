export default function Footer(){
    return(
         <footer className="mt-16 border-t border-gray-800 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Navigation */}
            <div>
              <div className="text-2xl font-bold mb-8">
                <span className="text-white">Eclypse</span>
                <span className="text-xs align-super">®</span>
              </div>
              <nav className="space-y-3">
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Buy</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Customers</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacts</a></div>
              </nav>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">CONTACT</h4>
                <p className="text-white text-lg">+91 123-456-7890</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">EMAIL</h4>
                <p className="text-white">eclypse@gmail.com</p>
              </div>
            </div>

            {/* Copyright and Back to Top */}
            <div className="flex flex-col justify-between">
              <div></div>
              <div className="flex justify-between items-end">
                <p className="text-gray-500 text-sm">© Eclypse 2025</p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </footer>
    )
}