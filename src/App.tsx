import "./App.css";
import { Sphere } from "./shapes/sphere";

function App() {
  const handlePatternGenerate = (pattern: string[]) => {
    console.log("Generated pattern:", pattern);
  };

  return (
    <>
      <div className="p-4">
        <Sphere initialRadius={3} onPatternGenerate={handlePatternGenerate} />
      </div>
    </>
  );
}

export default App;
