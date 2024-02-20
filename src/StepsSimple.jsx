import { useState } from 'react';

export default function StepsSimple() {
  const [steps, setSteps] = useState([
    { id: 'Step 1', name: 'Job details', href: '#', status: 'complete', component: Step1Content },
    { id: 'Step 2', name: 'Application form', href: '#', status: 'current', component: Step2Content },
    { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming', component: Step3Content },
  ]);
  const [currentStep, setCurrentStep] = useState(0);

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
    <div className="m-10 p-10 space-y-10">
      <div>Simple</div>
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              <a
                href={step.href}
                className={`group flex flex-col border-l-4 ${
                  index <= currentStep ? 'border-indigo-600' : 'border-gray-200'
                } py-2 pl-4 ${
                  index <= currentStep ? 'md:border-indigo-800 group-hover:border-indigo-800' : 'hover:border-gray-300 group-hover:border-gray-300'
                } md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4`}
              >
                <span className={`text-sm font-medium ${
                  index <= currentStep ? 'text-indigo-600 group-hover:text-indigo-800' : 'text-gray-500 group-hover:text-gray-700'
                }`}>{step.id}</span>
                <span className="text-sm font-medium">{step.name}</span>
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

function Step1Content({ onNext }) {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    jobLocation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna lógica con los datos del formulario si es necesario
    onNext();
  };

  return (
    <div className='m-10 p-10 border'>
      <h2>Step 1 Content</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
          <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea id="jobDescription" name="jobDescription" value={formData.jobDescription} onChange={handleChange} rows="3" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="jobLocation" className="block text-sm font-medium text-gray-700">Job Location</label>
          <input type="text" id="jobLocation" name="jobLocation" value={formData.jobLocation} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">Submit</button>
      </form>
    </div>
  );
}


function Step2Content() {
  return (
    <div>
      <h2>Step 2 Content</h2>
      <p>This is the content of Step 2.</p>
    </div>
  );
}

function Step3Content() {
  return (
    <div>
      <h2>Step 3 Content</h2>
      <p>This is the content of Step 3.</p>
    </div>
  );
}
