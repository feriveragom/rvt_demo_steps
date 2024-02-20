import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import Step1Content from './Content/Step1Content';
import Step2Content from './Content/Step2Content';
import Step3Content from './Content/Step3Content';

export default function StepsPanels() {
  const [steps, setSteps] = useState([
    { id: '01', name: 'Job details', href: '#', status: 'complete', component: Step1Content },
    { id: '02', name: 'Application form', href: '#', status: 'upcoming', component: Step2Content },
    { id: '03', name: 'Preview', href: '#', status: 'upcoming', component: Step3Content },
  ]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index) => {
    setCurrentStep(index);
    updateStepsStatus(index);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    updateStepsStatus(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    updateStepsStatus(currentStep - 1);
  };

  const handleFinish = () => {
    setCurrentStep(0); // Regresar al primer paso
    updateStepsStatus(0);
  };

  const updateStepsStatus = (index) => {
    const updatedSteps = steps.map((step, stepIdx) => ({
      ...step,
      status: stepIdx === index ? 'current' : stepIdx < index ? 'complete' : 'upcoming',
    }));
    setSteps(updatedSteps);
  };

  const StepComponent = steps[currentStep].component;

  return (
    <div>
      <nav aria-label="Progress">
        <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={`relative md:flex md:flex-1 ${step.status === 'current' ? 'bg-indigo-100' : 'bg-gray-100'}`} onClick={() => handleStepClick(stepIdx)}>
              {step.status === 'complete' ? (
                <a href={step.href} className="group flex w-full items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                  </span>
                </a>
              ) : (
                <a href={step.href} className="flex items-center px-6 py-4 text-sm font-medium" aria-current={step.status === 'current' ? 'step' : undefined}>
                  <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 ${step.status === 'current' ? 'border-indigo-600' : 'border-gray-300'}`}>
                    <span className={step.status === 'current' ? 'text-indigo-600' : 'text-gray-500'}>{step.id}</span>
                  </span>
                  <span className={`ml-4 text-sm font-medium ${step.status === 'current' ? 'text-indigo-600' : 'text-gray-500'}`}>{step.name}</span>
                </a>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div className="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-8">
        {/* Renderiza el componente correspondiente al paso actual */}
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
