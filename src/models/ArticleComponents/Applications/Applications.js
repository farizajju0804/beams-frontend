import ApplicationBox from "../ApplicationBox/ApplicationBox";
import "./Applications.css";
const Applications = ({ applicationHeader, applicationHeaderContent,order }) => {
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
      <ApplicationBox
          applicationImg="Assets/images/application-img-1.png"
          applicationtitle="Energizing The World"
          outcomeTitle= "outcome"
          outcomeContent="Getting closer to sustainable energy."
          applicationPoints={[
            '<strong>Sustainable Biofuels:</strong> Algae and bacteria that can produce everything from ethanol and biodiesel to jet fuel. They offer a promising solution to reduce our dependence on fossil fuels and combat climate change.',
            '<strong>Bio-based chemicals:</strong> Organisms that generate industrial chemicals with less energy and fewer resources.'
          ]}   
          textAlign="center"  
      />

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
      />

        
          </div>
        </div>
  );
};

export default Applications;
