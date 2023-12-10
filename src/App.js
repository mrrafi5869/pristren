import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import FAQS from './components/FAQ/FAQS';
import MeetThePoint from './components/MeetThePoint/MeetThePoint';
import Members from './components/Members/Members';
function App() {
  return (
    <div>
      <Members></Members>
      <AboutUs></AboutUs>
      <MeetThePoint></MeetThePoint>
      <FAQS></FAQS>
    </div>
  );
}

export default App;
