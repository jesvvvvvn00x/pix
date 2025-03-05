import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Pixabay</h3>
            <p className="text-gray-600 mb-4">
              Over 2.7 million+ high quality stock images, videos and music shared by our talented community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-500">Editor's Choice</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Curated Collections</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Popular Images</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Popular Videos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Popular Music</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-500">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Forum</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Creators</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Cameras</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">License</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-600">
            This is a clone of Pixabay created for educational purposes. All images are from Unsplash.
          </p>
          <p className="text-center text-gray-600 mt-2">
            © 2025 Pixabay Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;