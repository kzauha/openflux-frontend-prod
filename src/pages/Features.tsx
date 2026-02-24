import Navbar from "@/components/landing/Navbar";
import FooterCTA from "@/components/landing/FooterCTA";
import Hyperspeed from "@/components/Hyperspeed";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureGrid from "@/components/features/FeatureGrid";
import ComparisonSection from "@/components/features/ComparisonSection";

const HYPERSPEED_OPTIONS = {
  distortion: "turbulentDistortion",
  length: 500,
  roadWidth: 8,
  islandWidth: 2,
  lanesPerRoad: 2,
  fov: 82,
  fovSpeedUp: 140,
  speedUp: 1.5,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [40, 60],
  movingCloserSpeed: [-80, -120],
  carLightsLength: [12, 80],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0x131318,
    brokenLines: 0x131318,
    leftCars: [0x10b981, 0x059669, 0x34d399],
    rightCars: [0x10b981, 0x059669, 0x34d399],
    sticks: 0x10b981,
  },
};

const Features = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ willChange: "transform" }}
      >
        <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
      </div>
      
      <div className="relative z-10 pointer-events-none [&_*]:pointer-events-auto">
        <Navbar />
        
        <div className="relative z-10 pt-10">
          <FeatureHero />
          
          <div className="bg-black/80 backdrop-blur-3xl border-t border-white/5 relative">
            <div className="absolute inset-0 bg-grid-subtle opacity-[0.03] pointer-events-none" />
            <FeatureGrid />
            <ComparisonSection />
            <FooterCTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
