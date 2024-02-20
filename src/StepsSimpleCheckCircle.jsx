import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import Step1Content from './Content/Step1Content'
import Step2Content from './Content/Step2Content'
import Step3Content from './Content/Step3Content'

export default function StepsSimpleCheck() {
  const [steps, setSteps] = useState([
    { id: 'Step 1', name: 'Job details', href: '#', status: 'complete', component: Step1Content },
    { id: 'Step 2', name: 'Application form', href: '#', status: 'current', component: Step2Content },
    { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming', component: Step3Content },
  ]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleFinish = () => {
    setCurrentStep(0); // Regresar al primer paso
  };

  const StepComponent = steps[currentStep].component;

  return (
    <div>
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1" onClick={() => handleStepClick(index)}>
              <a
                href={step.href}
                className={`group flex flex-col border-l-4 ${
                  (index <= currentStep) ? 'border-indigo-600' : 'border-gray-300'
                } py-2 pl-4 ${
                  (index <= currentStep) ? 'md:border-indigo-800 group-hover:border-indigo-800' : 'hover:border-gray-300 group-hover:border-gray-300'
                } md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4`}
              >
                <div className="grid grid-cols-2 items-center">
                  <div className="flex flex-col">
                    <span className={`text-sm font-medium ${
                      (index === currentStep || (index === currentStep - 1 && currentStep !== 0)) ? 'text-indigo-600 group-hover:text-indigo-800' : 'text-gray-500 group-hover:text-gray-700'
                    }`}>{step.id}</span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                  <div className="flex items-center justify-end pr-4">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full ${ currentStep >= index ? 'bg-indigo-600' : 'bg-gray-300' } ${ currentStep >= index ? 'group-hover:bg-indigo-800' : '' }`}>
                      <CheckIcon
                        className={`h-6 w-6 text-white ${
                          currentStep >= index ? '' : 'text-gray-300'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                </div>
              </a>
            </li>
          ))}
        </ol>
      </nav>


      <div className="mt-8">
        <StepComponent />
      </div>

      <div className="mt-4">
        {currentStep !== 0 && (
          <button onClick={handlePrevious} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md mr-4">
            Anterior
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button onClick={handleNext} className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md mr-4">
            Siguiente
          </button>
        ) : (
          <button onClick={handleFinish} className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md mr-4">
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
}
