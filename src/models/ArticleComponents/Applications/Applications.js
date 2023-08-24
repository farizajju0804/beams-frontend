import ApplicationBox from "../ApplicationBox/ApplicationBox";
import "./Applications.css";
const Applications = ({ applicationHeader, applicationHeaderContent,applicationBoxes,order }) => {
  const orderstyle = {
    order: order
  }
  return (
    <div className="applications" style={orderstyle}>
      <div className="application-header-box">
        <b className="application-header">{applicationHeader}</b>
        <div className="application-header-content">
          {applicationHeaderContent}
        </div>
      </div>
      <div className="application-box-container">
      {/* 

      <ApplicationBox
          applicationImg="Assets/images/application-img-2.png"
          applicationtitle="Enhancing Global Wellness"
          outcomeTitle= "outcome"
          outcomeContent=" Increasing wellness & preventing diseases."
          applicationPoints={[
            '<strong>Personalized Medicine:</strong>  Novel drugs, vaccines and on-demand medication',
            '<strong>Gene therapies:</strong> Targeted and personalized gene-editing methods to treat diseases.'
          ]}      
          textAlign="center" 
      />

      <ApplicationBox
          applicationImg="Assets/images/application-img-3.png"
          applicationtitle="Alleviating Climate Change"
          outcomeContent="Getting closer to carbon neutrality."
          outcomeTitle= "outcome"
          applicationPoints={[
            '<strong>Plastic Alternatives:</strong> Bio-based and biodegradable plastics.',
            '<strong>Bioremediation:</strong> Organisms that break down pollutants, capture, and store CO2.'
          ]}   
          textAlign="center"     
      />


      <ApplicationBox
          applicationImg="Assets/images/application-img-4.png"
          applicationtitle="Feeding the World"
          outcomeTitle= "outcome"
          outcomeContent="Our passport to food security."
          applicationPoints={[
            '<strong>Food Security:</strong> Crops resistant to pests and climate change and plant-based meat.',
            '<strong>Precision Agriculture:</strong> Optimizing crop yields to reduce the use of synthetic pesticides.'
          ]}      
          textAlign="center" 
      /> */}
           {applicationBoxes.map((boxProps, index) => (
          <ApplicationBox key={index} {...boxProps} />
        ))}
        
          </div>
        </div>
  );
};

export default Applications;
