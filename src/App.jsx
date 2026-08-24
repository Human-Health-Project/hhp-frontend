import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/global.css"

import { AuthProvider } from "./context/AuthContext"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import ScrollToTop from "./components/ScrollToTop";
/* Pages */
import Home from "./pages/Home"
import MedicalDisclaimer from "./pages/MedicalDisclaimer"
import AboutUs from "./pages/AboutUs"
import MeetTheTeam from "./pages/MeetTheTeam"
import WhoWeServe from "./pages/WhoWeServe"
import SupportHHP from "./pages/HowToHelp"
import Volunteer from "./pages/Volunteer"
import Intern from "./pages/Intern"
import BecomePartner from "./pages/BecomePartner"
import MatchingDonations from "./pages/MatchingDonations"
import Donate from "./pages/Donate"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import HowToHelp from "./pages/HowToHelp"
import HealthcareAccessIntro from "./pages/HealthcareAccessIntro";
import PatientAdvocacyNI from "./pages/PatientAdvocacyNI";
import PatientAdvocacyLA from "./pages/PatientAdvocacyLA";
import LearningAcademyVideos from "./pages/LearningAcademyVideos";
import LearningAcademyEnglish from "./pages/LearningAcademyEnglish";
import LearningAcademySpanish from "./pages/LearningAcademySpanish";
import LearningAcademyMandarin from "./pages/LearningAcademyMandarin";
import OnlineEvents from "./pages/OnlineEvents";
import StopType2Diabetes from "./pages/StopType2Diabetes";
import SharedPatientInformation from "./pages/SharedPatientInformation";
import MigraineReports from "./pages/MigraineReports";
import LupusReports from "./pages/LupusReports";
import ProgramCouncil from "./pages/ProgramCouncil";
import MeetTeamAdvisoryBoard from "./pages/MeetTeamAdvisoryBoard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import JoinPatientAdvisoryBoard from "./pages/JoinPatientAdvisoryBoard";
import SPINarratives from "./pages/SPINarratives";
import LatestNews from "./pages/LatestNews";
import VolunteerWithUs from "./pages/VolunteerWithUs";

function App() {
  return (
    <Router>
        <ScrollToTop />
        <AuthProvider>
          <div className="app">
            <Header />

            <main>
              <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />

                {/* Legal */}
                <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />

                {/* Who We Are */}
                <Route path="/who-we-are/about-us" element={<AboutUs />} />
                <Route path="/who-we-are/meet-the-team" element={<MeetTheTeam />} />

                {/* Why HHP */}
                <Route path="/why-hhp/who-we-serve" element={<WhoWeServe />} />
                {/* What We Do */}
                <Route
                  path="/what-we-do/healthcare-access/introduction"
                  element={<HealthcareAccessIntro />}
                />

                <Route
                  path="/what-we-do/patient-advocacy/northern-ireland"
                  element={<PatientAdvocacyNI />}
                />

                <Route
                  path="/what-we-do/patient-advocacy/los-angeles"
                  element={<PatientAdvocacyLA />}
                />

                <Route path="/what-we-do/learning-academy/videos" element={<LearningAcademyVideos />} />
                <Route path="/what-we-do/learning-academy/english" element={<LearningAcademyEnglish />} />
                <Route path="/what-we-do/learning-academy/spanish" element={<LearningAcademySpanish />} />
                <Route path="/what-we-do/learning-academy/mandarin" element={<LearningAcademyMandarin />} />


                <Route
                  path="/what-we-do/online-events"
                  element={<OnlineEvents />}
                />

                <Route
                  path="/what-we-do/stop-type-2-diabetes/introduction"
                  element={<StopType2Diabetes />}
                />

                <Route
                  path="/what-we-do/shared-patient-information"
                  element={<SharedPatientInformation />}
                />
                <Route
                  path="/shared-patient-information/migraine"
                  element={<MigraineReports />}
                />

                <Route
                  path="/shared-patient-information/lupus"
                  element={<LupusReports />}
                />
                {/* How to Help */}
                <Route path="/how-to-help/" element={<HowToHelp />} /> 
                {/* <Route path="/how-to-help/support-hhp" element={<SupportHHP />} /> */}
                {/* <Route path="/how-to-help/volunteer" element={<Volunteer />} /> */}
                <Route path="/how-to-help/intern" element={<Intern />} />
                <Route
                  path="/how-to-help/become-hhp-partner"
                  element={<BecomePartner />}
                />
                <Route
                  path="/how-to-help/matching-donations"
                  element={<MatchingDonations />}
                />

                {/* Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Donate */}
                <Route path="/donate" element={<Donate />} />

                <Route path="/about/program-council" element={<ProgramCouncil />} />
                <Route
                  path="/meet-team-advisory-board"
                  element={<MeetTeamAdvisoryBoard />}
                />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/join-patient-advisory-board" element={<JoinPatientAdvisoryBoard />} />
                <Route path="/shared-patient-information/narratives" element={<SPINarratives />} />
                <Route path="/latest-news" element={<LatestNews />} />
                <Route path="/how-to-help/volunteer-with-us" element={<VolunteerWithUs />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </AuthProvider>
    </Router>
  )
}

export default App

