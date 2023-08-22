import React, { useState } from 'react';
import { TickCircle } from 'iconsax-react';
import './Benefits.css'; // Import your CSS file

const Benefits = () => {
  const [activeBenefit, setActiveBenefit] = useState(1);

  const handleBenefitClick = (benefitNumber) => {
    setActiveBenefit(benefitNumber);
  };

  const benefitsData = [
    {
      number: 1,
      title: 'Access to wide ranges of topics',
    },
    {
      number: 2,
      title: 'Stay Updated',
    },
    {
      number: 3,
      title: 'Time Management',
    },
    {
      number: 4,
      title: 'Personal Growth',
    },
    {
      number: 5,
      title: 'Multiple formats',
    },
  ];

  return (
    <div className="benefits">
      <div className="benefit-container">
        <div className="benefit-title">How Beams Enlightens you?</div>
        <div className="benefit-content">
          <div className="benefit-img-box">
            <img
              className={`benefit-img benefit-img-${activeBenefit}`}
              src={`Assets/images/benefit-img${activeBenefit}.png`}
              alt=""
            />
          </div>

          <div className="benefits-points">
            {benefitsData.map((benefit) => (
              <div
                key={benefit.number}
                className={`point ${activeBenefit === benefit.number ? 'active' : ''}`}
                onClick={() => handleBenefitClick(benefit.number)}
              >
                {`${benefit.number}. ${benefit.title}`}
                <div className="check">
                  <TickCircle size="24" color="#161616" variant="Bold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
