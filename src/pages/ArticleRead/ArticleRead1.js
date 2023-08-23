import ArticleHeader from "../../models/ArticleComponents/ArticleHeader/ArticleHeader";
import SubPara from "../../models/ArticleComponents/SubPara/SubPara";
import StatisticContainer from "../../models/ArticleComponents/StatisticContainer/StatisticContainer";
import DataCardBox from "../../models/ArticleComponents/DataCardBox/DataCardBox";
import Applications1 from "../../models/ArticleComponents/Applications1/Applications1";
import Quote from "../../models/ArticleComponents/Quote/Quote";
import Dropdown from "../../models/ArticleComponents/Dropdown/Dropdown"
import "./ArticleRead.css";
import React from "react";
const ArticleRead1 = () => {

const articleComponents = [
    <ArticleHeader
    category="Science"
    articleTitle="Brain-Computer Interfaces: The Next Frontier in Human Evolution"
    introContentBold="Can you visualize a world where our brain can activate digital devices solely with our thoughts?"
    introContentNormal="Where ​we can trigger actions in the physical world by simply thinking about the action<sup><link>1|https://www.tandfonline.com/doi/full/10.1080/21507740.2019.1704918</link></sup>. It’s real, yet beyond our wildest imagination. Stay with us!"
    introMainImage="Assets/images/sub-img-bci-1.jpg"
    bgcolor="#17cd92"
    order={1}
  />,

  <SubPara
    subtitle="BRAIN-COMPUTER INTERFACES"
    subParaImg="Assets/images/bci-header.jpg"
    subContent={[
      `Welcome to the world of Brain-Computer Interfaces (BCIs), a
      technology born from the synthesis of neuroscience and technology. <strong>Think of this
      technology as a magical bridge that connects our brains and machines.</strong>`,
      `Our brains are abuzz with neurons that transmit messages as electrical patterns.
      BCIs intercept these electrical patterns and use AI and algorithms to ​convert these
      patterns into commands for digital devices<sup><link>2|https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface</link></sup>. <strong>In a BCI world, our thoughts won’t
      just lead to action; our thoughts will become the action!</strong> More on this later.`,
    
    ]}
    order={2}
  />,

  <Quote
    quoteContent="“The brain is the final frontier of computing.”"
    personName="Elon Musk"
    bgcolor="#fffffe"
    color="161616"
    order={3}
  />,


  <SubPara
    subtitle="OUR NEW SUPERPOWER"
    subParaImg="Assets/images/sub-img-bci-2.jpg"
    subContent={[
      `Meet your new superpower- it’s called a BCI. Ever dreamed of
      controlling the world with a mere thought? <strong>Picture this, no hands and no voice
      needed; you can just use your thoughts to turn on lights, navigate your
      car, or send texts.</strong> This isn’t sci-fi. This is the next evolution of human potential.`
    ]}
    order={4}
    
  />,

<StatisticContainer order={6}
    statisticContent={`​Did you know the BCI market is projected to grow at a CAGR of 16.7%, from $2.13
    billion in 2022 to $9.4 billion in 2032<sup><link>10|https://www.alliedmarketresearch.com/brain-computer-interfaces-market#:~:text=Brain%20Computer%20Interface%20Market%20Statistics,13.9%25%20from%202021%20to%202030.</link></sup>?`}
  />,
<SubPara
    subtitle="A CRITICAL NEED FOR ETHICAL SOLUTIONS"
    subContent={[
      `The rapid growth and transformative potential of BCIs cannot be underestimated.
      They promise a future where direct brain-to-device communication could reshape
      our world.`,
      `But as we stand on the cusp of this technological revolution, we have to navigate
      responsibly and address ethical challenges and considerations. We have to address
      societal implications and promote responsible and equitable use of this technology<sup><link>11|https://originstamp.com/blog/the-ethical-implications-of-brain-computer-interfaces/#:~:text=Ethical%20Concerns%20Regarding%20Privacy%20and%20Data%20Security,-As%20with%20any&amp;text=BCIs%20collect%20sensitive%20information%20directly,will%20be%20used%20and%20protected.</link></sup>.`,
      `<italic>The following points delve into the critical need for ethical solutions.</italic>`,
      `<strong>1. Privacy and Data Security:</strong> BCIs can read, interpret, and use users&#39; brain
      signals. They could hack users&#39; thoughts, feelings, and information, resulting
      in breaches of privacy or harm to the users. Ensuring secure data handling
      and protection is vital.`,
      `<strong>2. Informed Consent:</strong> Users should fully understand the risks and benefits of
      their neural data being used. The government needs to mandate that users
      are fully informed about the procedures, applications, data collection, and
      usage, and companies get users’ consent voluntarily.`,
      `<strong>3. Access and Equity:</strong> BCIs might be accessible only to the wealthy,
      exacerbating societal divides. Ethical considerations should include ensuring
      equitable access and distribution of BCI technologies.`,
      `<strong>4. Human Enhancement and Identity:</strong> BCIs might enhance our cognitive,
      sensory, or physical capabilities beyond the typical human range. We need to
      understand and explore the ethical implications of creating "superhumans" or
      "cyborgs."`,
      `<strong>5. Autonomy and Control:</strong> BCIs can influence actions or thoughts, so
      questions of personal autonomy might arise. BCIs can directly control of
      devices through brain signals. There's a risk of devices being manipulated for
      malicious purposes or users losing control of their actions. It's essential to
      establish guidelines to ensure the autonomy and control of BCI users.`,
      `<strong>6. Long-term Effects and Harm:</strong> Prolonged BCI use might cause brain
      adaptations, possibly leading to reliance on the technology. We don’t know
      the long-term effects of using BCIs yet. To ensure the safety of prolonged use, companies should conduct short-term and longitudinal studies of BCIs,
      and they should share this data publicly.`
    ]}
    order={7}
    
  />,
  <StatisticContainer order={8}
    statisticContent={`BCI’s can be classified into three categories, those that record brain activity, those
    that modulate brain activity, and those that do both, also called bi-directional BCIs
    or BBCIs<sup><link>11|https://fpf.org/blog/brain-computer-interfaces-data-protection-understanding-the-technology-and-data-flows/</link></sup>.`}
  />,

  <SubPara
    subtitle="READY TO EVOLVE INTO A NEW SPECIES?"
    subContent={[
      `When we usher in a new frontier of human augmentation by integrating our
      biological intelligence with digital intelligence, our species might change forever.
      <strong>We might then evolve from Homo Sapiens to Homo Deus</strong><sup><link>12|https://www.nbcnews.com/mach/technology/godlike-homo-deus-could-replace-humans-tech-evolves-n757971</link></sup>.`,
      `This is just the beginning–it’s too soon to predict the endless possibilities of mind-
      machine communication. When a flicker of thought sets the world around us into
      motion, we will need to ensure our thoughts are worth translating.`,
      `Let's journey together into this new era where science-fiction becomes reality.
      Embrace the possibilities and prepare to transcend the ordinary with the awe-
      inspiring power of BCIs. <strong>Come back for more fascinating insights.</strong>`
    ]}
    order={9}
    
  />,
  <Applications1
  applicationHeader="BCI’s Hidden Potential"
  applicationHeaderContent="Let’s explore 6 incredible applications of BCIs."
  order={5}
/>,
<Dropdown
  dropdownTitle="INSIGHTS"
  dropdownContent={[
    `<strong>The Magic of Brain-Computer Interfaces (BCIs):</strong> BCIs are a synthesis of
    neuroscience and technology. Think of them as a magical bridge between our brains
    and machines.`,
    `<strong>Decoding Our Thoughts:</strong> BCIs can decode our thoughts by converting them
    into commands for digital devices, blurring the boundary between humans and
    machines.`,
    `<strong>Our New Superpower:</strong> Someday we might interact with our devices, homes,
    and cars solely through our thoughts.`,
    ``,
    `<strong>Industry Size:</strong> The BCI market is expected to grow from $2.13 billion in 2022
    to $9.4 billion in 2032.`,
    `<strong>BCI Categories:</strong> There are three categories of BCIs, those that record brain
    activity, those that modulate brain activity, and those that do both, also called bi-
    directional BCIs or BBCIs.`,
    `<strong>An Ethical Imperative:</strong> As we tread into the uncharted territory of BCIs,
    privacy and data security, users&#39; consent, equitable access, human enhancement,
    and long-term effects are key ethical issues we need to address urgently.`,
    `<strong>From Home Sapiens to Homo Deus:</strong> Integrating our biological intelligence
    with digital intelligence could lead to a new phase of human evolution, where
    science fiction becomes reality.`,
    `<strong>The Future:</strong> It’s too soon to predict the endless possibilities of mind-machine
    communication. Let&#39;s prepare to transcend the ordinary with the awe-inspiring
    power of BCIs.`
    
  ]}
  dropdownIcon="Assets/images/insights.png"
  order={10}

/>





]

const sortedComponents = articleComponents.sort((comp1, comp2) =>
comp1.props.order - comp2.props.order
);

  return (
    <div className="article-read">
      <div className="article-content-container">
      {sortedComponents.map((component, index) => (
          <React.Fragment key={index}>{component}</React.Fragment>
        ))}

      </div>
    </div>
  );
};

export default ArticleRead1;
