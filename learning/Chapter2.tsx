import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  const messages = ["Message 1", "Message 2", "Message 3"];
  const stepsAmount = 3;

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < stepsAmount) setStep((s) => s + 1);
  }

  return (
    <section>
      <button
        onClick={() => setOpen(!isOpen)}
        className="m-2 p-2 border border-black"
      >
        Open/Close
      </button>

      {isOpen && (
        <>
          <div className="flex gap-4">
            {Array.from(Array(stepsAmount).keys()).map((i) => (
              <div
                className={`${
                  step >= i + 1 ? "bg-blue-500" : "bg-blue-200"
                } flex w-12 h-12 rounded-full justify-center items-center`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p>Step {step}</p>
            <h1 className="text-3xl">{messages[step - 1]}</h1>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handlePrevious}
              className="p-2 bg-slate-200 rounded-xl"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-slate-200 rounded-xl"
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}
