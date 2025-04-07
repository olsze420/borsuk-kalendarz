import React, { useState, useEffect } from 'react';
import './global.css';
import MonthlyCalendar from './Calendar';
// Import the logo
import borsukLogo from '../images/borsuk-logo.png'; // Adjust path as needed

const MainWebsite = () => {
 
  const mainContentStyle = {
    backgroundColor: '#6b6b47', // bg-earth-300 equivalent
    backgroundImage: 'none', // Override any background image
  };

  const headerStyle = {
    backgroundColor: '#334119', // forest-500 equivalent
    backgroundImage: 'none',
  };

  const ctaStyle = {
    backgroundColor : '#334119',
  }

  const footerStyle = {
    backgroundColor: '#32440f', // forest-700 equivalent
    backgroundImage: 'none',
  };

  const buttonStyle = {
    backgroundColor : '#32440f',
    hover : '##003300'
  }

  const clearButtonStyle = {
    backgroundColor : '604020'
  }

  

  return (
    <div className="text-gray-800" style={mainContentStyle}>
      {/* Header */}
      <header className="text-white px-4 py-3 shadow-lg" style={headerStyle}>
        <div className="container mx-auto flex flex-col items-center">
            <div style={{display: "inline"}}>
                <img src={borsukLogo} alt="Logo Klubu Strzeleckiego" className="h-20 mr-5" />
            </div>
            <div className="mb-4 text-center" style={{display: "inline"}}>
                <h1 className="text-4xl font-bold tracking-wider">KSK BORSUK</h1>
            </div>
            <nav className="mb-4">
                <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
                    <li><a href="/" className="text-2xl hover:text-yellow-300 transition-colors duration-300">O nas</a></li>
                    <li><a href="#" className="text-2xl hover:text-yellow-300 transition-colors duration-300">Dołącz</a></li>
                    <li><a href="#" className="text-2xl hover:text-yellow-300 transition-colors duration-300">Szkolenia</a></li>
                    <li><a href="/nauka/" className="text-2xl hover:text-yellow-300 transition-colors duration-300">Nauka</a></li>
                    <li><a href="/calendar" className="text-2xl hover:text-yellow-300 transition-colors duration-300">Kalendarz</a></li>
                    <li><a href="#" className="text-2xl hover:text-yellow-300 transition-colors duration-300">Imprezy</a></li>
                </ul>
            </nav>
            <div class="flex flex-col md:flex-row gap-2 md:gap-4">
                <a href="mailto:ksk.borsuk@gmail.com" class="bg-forest-700 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
                    Napisz do nas
                </a>
                <a href="tel:+48506983203" class="bg-forest-700 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
                    Zadźwoń do nas
                </a>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">KSK BORSUK WITA!</h2>
          <p className="mb-4">
          <MonthlyCalendar />
          </p>
        </div>

        

       
        
       
        
        {/* Call to Action Section */}
        <section class="cta py-12 px-4 bg-forest-500 text-white" >
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Dołącz do nas</h2>
            <p class="max-w-2xl mx-auto mb-8 text-lg">Zostań członkiem KSK BORSUK i korzystaj z naszych obiektów, szkoleń i wydarzeń. Oferujemy różne pakiety członkowskie dopasowane do Twoich potrzeb.</p>
            <a href="#" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full text-lg transition-colors duration-300">
                Dowiedz się więcej
            </a>
        </div>
    </section>
      </main>

      {/* Footer */}
      <footer className="text-white py-8 px-4" style={footerStyle}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src={borsukLogo} alt="Logo Klubu Strzeleckiego" className="h-20 mr-5" />
              <p>&copy; 2025 KSK Borsuk. Wszelkie prawa zastrzeżone.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div>
                <h3 className="text-lg font-bold mb-2">Kontakt</h3>
                <p className="mb-1">Email: ksk.borsuk@gmail.com</p>
                <p>Tel: +48 506 983 203</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Śledź nas</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61556571794422" className="text-white hover:text-yellow-300">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainWebsite;