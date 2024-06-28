import React, { useState } from 'react';
import './Wizard.css';

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="wizard">
            {/* Step 1: Select a Theme */}
            {currentStep === 0 && (
              <div className="wizard-step">
                <h2>Step 1: Select a Theme</h2>
                <div className="form-group">
                  <label htmlFor="theme">Choose a Theme:</label>
                  <select className="form-control" id="theme">
                    <option>Theme 1</option>
                    <option>Theme 2</option>
                    <option>Theme 3</option>
                  </select>
                </div>
                
                <button type="button" className="btn btn-primary" onClick={nextStep}> Next</button>
                
              </div>
            )}

            {/* Step 2: Add Product Type and Category */}
            {currentStep === 1 && (
              <div className="wizard-step">
                <h2>Step 2: Add Product Type and Category</h2>
                <div className="form-group">
                  <label htmlFor="product-type">Product Type:</label>
                  <input type="text" className="form-control" id="product-type" required />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category:</label>
                  <input type="text" className="form-control" id="category" required />
                </div>
                
                <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
               
                
                <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
                
              </div>
            )}

            {/* Step 3: Pricing and Additional Information */}
            {currentStep === 2 && (
              <div className="wizard-step">
                <h2>Step 3: Pricing and Additional Information</h2>
                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input type="number" className="form-control" id="price" required />
                </div>
                <div className="form-group">
                  <label htmlFor="additional-info">Additional Information:</label>
                  <textarea className="form-control" id="additional-info" rows="3" required></textarea>
                </div>
                <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
                <button type="button" className="btn btn-success" onClick={() => alert('Onboarding complete!')}>Finish</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
