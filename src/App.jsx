import React from 'react';
import { Header } from './Components/Header';
import { ItWorks } from './Components/ItWorksSection';
import { AboutUS } from './Components/AboutUsSection';
import {GlobalStyle} from './styles/globalstyle';
import { Features } from './Components/FeaturesSection';
import { Partners } from './Components/PartnersSection';
import { Popular } from './Components/PopularCitiesSection';
import { Testimonials } from './Components/TestimonialsSection';
import { Footer } from './Components/FooterSection';
import { ModalProvider } from './Contexts/ModalContext';
import { CreateModal } from './Components/CreateAccountModal';

import Modal from 'react-modal';
Modal.setAppElement('#root');

function App() {
  return (
    <ModalProvider>

      <Header/>
      <CreateModal/>
      <ItWorks/>
      <AboutUS/>
      <Features/>
      <Partners/>
      <Popular/>
      <Testimonials/>
      <Footer/>
      <GlobalStyle/>

    </ModalProvider>
  );
}

export default App;
