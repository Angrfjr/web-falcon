import React from 'react'
import { Routes, Route } from "react-router-dom";
import AppLayout from '../components/AppLayout';
import AppLayoutInves from '../components/AppLayoutInves';
import AppLayoutBlank from '../components/AppLayoutBlank';
import AppLayoutNotFooter from '../components/AppLayoutNotFooter';
import FaqsLayout from '../components/FaqsLayout';
import ComingSoon from '../components/ComingSoon';
import NotFond from '../components/NotFond';
import LayoutAuth from '../components/auth/LayoutAuth';

import Home from '../views/Home';
import About from '../views/About';
import Article from '../views/article/Article';
import News1 from '../views/article/News1';
import News2 from '../views/article/News2';
import News3 from '../views/article/News3';
import News4 from '../views/article/News4';
import News5 from '../views/article/News5';
import Privacy  from '../views/Privacy';
import Partnership  from '../views/Partnership';

import Shop from '../views/Shop';
import Tnc from '../views/Tnc';
import Investment from '../views/investment';
import OurFounder from '../views/investment/OurFounder';
import MarketStrategy from '../views/investment/MarketStrategy';
import Presentation from '../views/investment/Presentation';
import CTnc from '../views/confirm/CTnc';
import MembershipForm from '../views/confirm/MembershipForm';
import Faqs from '../views/faqs';
import Faq from '../views/faqs/Faq';
import FaqLayouts from '../components/FaqLayouts';
import ClubAndFasility from '../views/faqs/ClubAndFasility';
import SafetyHealth from '../views/faqs/SafetyHealth';
import Workouts from '../views/workouts/Workouts';
import WeightLost from '../views/workouts/WeightLost';
import Endurance from '../views/workouts/Endurance';
import ToneMuscle from '../views/workouts/ToneMuscle';
import Flexibility from '../views/workouts/Flexibility';
import Strength from '../views/workouts/Strength';
import StrongNation from '../views/workouts/StrongNation';
import FitBall from '../views/workouts/FitBall';
import Trx from '../views/workouts/Trx';

import Circuit from '../views/workouts/Circuit';
import BodyPump from '../views/workouts/BodyPump';
import BodyCombat from '../views/workouts/BodyCombat';
import VinyasaYoga from '../views/workouts/VinyasaYoga';
import YogaWheel from '../views/workouts/YogaWheel';
import MembershipSelect from '../views/membership/Select';
import FitnessworksApps from '../views/FitnessworksApps';
import ContactUs from '../views/ContactUs';
import PersonalTrainer from '../views/PersonalTrainer';
import FormFreeTrial from '../views/FormFreeTrial';
import AppLayoutTimeTable from '../components/AppLayoutTimeTable';
import TimeTable from '../views/TimeTable';
import OnlineClasses from '../views/OnlineClasses';
import Near from '../views/Near';

// function WorkoutsLayout() {
  
// }

function Router(props) {
  return (
    <Routes>
      <Route element={<AppLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="article">
          <Route index element={<Article />} />
          <Route path='news1' element={<News1 />} />
          <Route path='news2' element={<News2 />} />
          <Route path='news3' element={<News3 />} />
          <Route path='news4' element={<News4 />} />
          <Route path='news5' element={<News5 />} />
        </Route>
        <Route path="shop" element={<Shop />} />
        <Route path="near" element={<Near />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="partnership" element={<Partnership />} />
        <Route path="membership-form" element={<MembershipForm />} />
        <Route path="fitnessworks-apps" element={<FitnessworksApps />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="personal-trainer" element={<PersonalTrainer />} />
        <Route path="time-table" element={<AppLayoutTimeTable />}>
          <Route index element={<TimeTable />} />
          <Route path="online-class" element={<OnlineClasses />} />
        </Route>
        <Route path="online-class" element={<AppLayoutTimeTable />}>
          <Route index element={<OnlineClasses />} />
        </Route>
        <Route path="virtual-class" element={<ComingSoon />} />
        <Route path="on-demand" element={<ComingSoon />} />
        <Route path="workouts">
          <Route index element={<Workouts />} />
          <Route path="weight-lost" element={<WeightLost />} />
          <Route path="endurance" element={<Endurance/>} />
          <Route path="circuit" element={<Circuit />} />
          <Route path="bodypump" element={<BodyPump />} />
          <Route path="bodycombat" element={<BodyCombat />} />
          <Route path="tone-muscle" element={<ToneMuscle />} />
          <Route path="flexibility" element={<Flexibility />} />
          <Route path="fitball" element={<FitBall />} />
          <Route path="strength" element={<Strength />} />
          <Route path="strong-nation" element={<StrongNation />} />
          <Route path="trx" element={<Trx />} />
          <Route path="vinyasa-yoga" element={<VinyasaYoga />} />
          <Route path="yoga-wheel" element={<YogaWheel />} />
        </Route>
        <Route path="faqs" element={<FaqsLayout />} >
          <Route index element={<Faqs />} />
          <Route element={<FaqLayouts />}>
            <Route path="faq" element={<Faq />} />
            <Route path="club-and-fasility" element={<ClubAndFasility />} />
            <Route path="safety-health" element={<SafetyHealth />} />
          </Route>
        </Route>
        <Route path="membership" >
          <Route index element={<MembershipSelect />} />
        </Route>
      </Route>

      <Route path='tnc' element={<AppLayout />} >
        <Route index element={<Tnc />} />
      </Route>
      
      <Route path="invesment" element={<AppLayoutInves />}>
        <Route index element={<Investment />} />
        <Route path="our-founder" element={<OurFounder />} />
        <Route path="market-strategy" element={<MarketStrategy />} />
        <Route path="presentation" element={<Presentation />} />
      </Route>

      <Route path="confirm" element={<AppLayoutBlank />}>
        <Route index element={<CTnc />} />
      </Route>
      
      <Route path="login" element={<AppLayoutNotFooter />}>
        <Route index element={<LayoutAuth />} />
      </Route>

      <Route path="form-free-trial" element={<AppLayoutNotFooter />}>
        <Route index element={<FormFreeTrial />} />
      </Route>
      
      <Route path="*" element={<NotFond />} />
    </Routes>
  )
}

export default Router