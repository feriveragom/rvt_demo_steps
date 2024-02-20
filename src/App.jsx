import { useState } from 'react';
import StepsSimple from './StepsSimple';
// import StepsPanels from './StepsPanels';
// import StepsBullets from './StepsBullets';
// import StepsPanelsBorder from './StepsPanelsBorder';
// import StepsCircles from './StepsCircles';
// import StepsBulletsText from './StepsBulletsText';
// import StepsCirclesText from './StepsCirclesText';
// import StepsProgressBar from './StepsProgressBar';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderComponent = (option) => {
    switch (option) {
      case 'StepsSimple':
        return <StepsSimple />;
      case 'StepsPanels':
        return <StepsPanels />;
      case 'StepsBullets':
        return <StepsBullets />;
      case 'StepsPanelsBorder':
        return <StepsPanelsBorder />;
      case 'StepsCircles':
        return <StepsCircles />;
      case 'StepsBulletsText':
        return <StepsBulletsText />;
      case 'StepsCirclesText':
        return <StepsCirclesText />;
      case 'StepsProgressBar':
        return <StepsProgressBar />;
      default:
        return <Simple />;
    }
  };

  return (
    <div className="m-10 space-y-10">
      <div className="grid grid-cols-4 gap-1">
        <div onClick={() => setSelectedOption('StepsSimple')} className="cursor-pointer bg-gray-200 p-4 rounded-md">Steps/Simple</div>
        <div onClick={() => setSelectedOption('StepsPanels')} className="cursor-pointer bg-gray-200 p-4 rounded-md">Steps/Panels</div>
        <div onClick={() => setSelectedOption('StepsBullets')} className="cursor-pointer bg-gray-200 p-4 rounded-md">Steps/Bullets</div>
        <div onClick={() => setSelectedOption('StepsPanelsBorder')} className="cursor-pointer bg-gray-200 p-4 rounded-md">Steps/Panels with border</div>
        <div onClick={() => setSelectedOption('StepsCircles')} className="cursor-pointer bg-gray-200 p-4 rounded-md">Steps/Circles</div>
        <div onClick={() => setSelectedOption('StepsBulletsText')} className="cursor-pointer bg-gray-200 p-4 rounded-md">Steps/Bullets and text</div>
        <div onClick={() => setSelectedOption('StepsCirclesText')} className="cursor-pointer bg-gray-200 p-4 rounded-md">Steps/Circles with text</div>
        <div onClick={() => setSelectedOption('StepsProgressBar')} className="cursor-pointer bg-gray-200 p-4 rounded-md">Steps/Progress bar</div>
      </div>
      {selectedOption && renderComponent(selectedOption)}
    </div>
  );

}
