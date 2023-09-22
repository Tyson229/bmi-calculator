
import Hero from "./components/hero/Hero";
import { Limitations } from "./components/limitations/Limitations";
import Tips from "./components/tips/Tips";
import YourResult from "./components/your-result/YourResult";

function App() {
  return (
    <div className="grid place-items-center gap-[72px] font-sans">
      
      <Hero />
      <YourResult />
      <Tips />
      <Limitations />
    </div>
  );
}

export default App;
