import { useState } from 'react';
import StepsSimple from './StepsSimple';
import StepsPanels from './StepsPanels';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('StepsSimple');

  const renderComponent = (option) => {
    switch (option) {
      case 'StepsSimple':
        return <StepsSimple />;
      case 'StepsPanels':
        return <StepsPanels />;
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
      </div>
      {selectedOption && renderComponent(selectedOption)}
    </div>
  );
}
