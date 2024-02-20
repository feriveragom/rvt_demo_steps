import { useState } from 'react';
import StepsSimple from './StepsSimple';
import StepsPanels from './StepsPanels';
// import StepsBullets from './StepsBullets';
// import StepsPanelsBorder from './StepsPanelsBorder';
// import StepsCircles from './StepsCircles';
// import StepsBulletsText from './StepsBulletsText';
// import StepsCirclesText from './StepsCirclesText';
// import StepsProgressBar from './StepsProgressBar';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('StepsSimple');

  const renderComponent = (option) => {
    switch (option) {
      case 'StepsSimple':
        return <StepsSimple />;
      case 'StepsPanels':
        return <StepsPanels />;
      case 'StepsBullets':
        return <></>;
      case 'StepsPanelsBorder':
        return <></>;
      case 'StepsCircles':
        return <></>;
      case 'StepsBulletsText':
        return <></>;
      case 'StepsCirclesText':
        return <></>;
      case 'StepsProgressBar':
        return <></>;
      default:
        return <StepsSimple />;
    }
  };

  return (
    <div className="mx-10 mt-5 space-y-10">
      <div className="grid grid-cols-4 gap-1">
        <div
          onClick={() => setSelectedOption('StepsSimple')}
          className={`cursor-pointer p-4 rounded-md ${
            selectedOption === 'StepsSimple' ? 'bg-gray-400' : 'bg-gray-200'
          }`}
        >
          Steps/Simple
        </div>
        <div
          onClick={() => setSelectedOption('StepsPanels')}
          className={`cursor-pointer p-4 rounded-md ${
            selectedOption === 'StepsPanels' ? 'bg-gray-400' : 'bg-gray-200'
          }`}
        >
          Steps/Panels
        </div>
        <div
          onClick={() => setSelectedOption('StepsBullets')}
          className={`cursor-pointer p-4 rounded-md ${
            selectedOption === 'StepsBullets' ? 'bg-gray-400' : 'bg-gray-200'
          }`}
        >
          Steps/Bullets
        </div>
        <div
          onClick={() => setSelectedOption('StepsPanelsBorder')}
          className={`cursor-pointer p-4 rounded-md ${
            selectedOption === 'StepsPanelsBorder' ? 'bg-gray-400' : 'bg-gray-200'
          }`}
        >
          Steps/Panels with border
        </div>
        <div
          onClick={() => setSelectedOption('StepsCircles')}
          className={`cursor-pointer p-4 rounded-md ${
            selectedOption === 'StepsCircles' ? 'bg-gray-400' : 'bg-gray-200'
          }`}
        >
          Steps/Circles
        </div>

        <div
          onClick={() => setSelectedOption('StepsBulletsText')}
          className={`cursor-pointer p-4 rounded-md ${
            selectedOption === 'StepsBulletsText' ? 'bg-gray-400' : 'bg-gray-200'
          }`}
        >
          Steps/Bullets and text
        </div>

        <div
          onClick={() => setSelectedOption('StepsCirclesText')}
          className={`cursor-pointer p-4 rounded-md ${
            selectedOption === 'StepsCirclesText' ? 'bg-gray-400' : 'bg-gray-200'
          }`}
        >
          Steps/Circles with text
        </div>

        <div
          onClick={() => setSelectedOption('StepsProgressBar')}
          className={`cursor-pointer p-4 rounded-md ${
            selectedOption === 'StepsProgressBar' ? 'bg-gray-400' : 'bg-gray-200'
          }`}
        >
          Steps/Progress bar
        </div>

      </div>
      {selectedOption && renderComponent(selectedOption)}
    </div>
  );
}
