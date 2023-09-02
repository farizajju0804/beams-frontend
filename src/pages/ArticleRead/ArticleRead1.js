import ArticleHeader from "../../models/ArticleComponents/ArticleHeader/ArticleHeader";
import SubPara from "../../models/ArticleComponents/SubPara/SubPara";
import StatisticContainer from "../../models/ArticleComponents/StatisticContainer/StatisticContainer";
import Applications from "../../models/ArticleComponents/Applications/Applications";
import Quote from "../../models/ArticleComponents/Quote/Quote";
import Dropdown from "../../models/ArticleComponents/Dropdown/Dropdown"
import "./ArticleRead.css";
import React from "react";
const ArticleRead1 = () => {
  const applicationBoxes = [
    {
      applicationImg :"Assets/images/application-bci-img-1.png",
      applicationtitle:"1. Redefining Communication",
      outcomeTitle: "startup",
      outcomeContent: [
        `<link>Neuralink|https://neuralink.com/</link> has developed implantable brain–machine interface devices. `,
        `Its product, the N1 chip, interfaces with more than 1000 different brain cells, enabling people with paralysis to communicate with machines by using their thoughts<sup><link>4|https://qz.com/2141720/modern-prosthetics-go-beyond-bionic-limbs-and-into-the-brain</link></sup>.`
      ],
      applicationPoints:[
        `Can you imagine a world where​ we won't need language to communicate? I’m not implying we go back to the Stone Ages! I’m talking about BCIs enabling us to communicate with our thoughts.`, 
        `This will totally transform our lives, especially for
        the communication impaired. In 2017, scientists enabled a paralyzed man to use
        his thoughts to communicate with a BCI to feed himself<sup><link>3|https://blackrockneurotech.com/insights/paralysed-man-feeds-himself-with-help-of-implants/</link></sup>.`
      ]
    },
    {
      applicationImg :"Assets/images/application-bci-img-2.png",
      applicationtitle:"2. Augemented Humanity",
      outcomeTitle: "startup",
      outcomeContent: [
        `<link>Kernel|https://www.kernel.com/</link> is developing advanced neural interfaces that will improve cognition and memory, augmenting our mental capabilities.`,
      ],
      applicationPoints:[
        `'Augmented Humanity' is a concept where BCIs will enhance our physical,
            intellectual, and perceptual capabilities<sup><link>5|https://www.avnet.com/wps/portal/silica/resources/article/augmented-humanity-the-man-machine/</link></sup>.`, 
       `They can augment us on a scale we&#39;ve never seen before. For example, prosthetics could augment us and become true extensions of our bodies.`
      ]
    },

    {
      applicationImg :"Assets/images/application-bci-img-3.png",
      applicationtitle:"3. Restoring Health",
      outcomeTitle: "startup",
      outcomeContent: [
        `<link>Ottobock|https://www.ottobock.com/</link> has developed prosthetic limbs that users can control with their thoughts.`,
      ],
      applicationPoints:[
        `BCIs can transform the quality of life for people with neurological disorders and
        physical disabilities<sup><link>6|https://www.avnet.com/wps/portal/silica/resources/article/augmented-humanity-the-man-machine/</link></sup>. Visualize <strong>controlling prosthetics with the same ease as
        we control our biological limbs.</strong>`, 
        `“There are over a million limb amputations annually, one every 30 seconds.” Globally, over 60 million people don’t have limbs.`
      ]
    },{
      applicationImg :"Assets/images/application-bci-img-4.png",
      applicationtitle:"4. Personalized Education ",
      outcomeTitle: "startup",
      outcomeContent: [
        `<link>Neurable|https://neurable.com/</link> translates mental intent into digital commands, enabling teachers to
          customize learning for students&#39; cognitive states.`,
      ],
      applicationPoints:[
        `BCIs can monitor and analyze cognitive states to create personalized learning
        experiences<sup><link>7|https://ieeexplore.ieee.org/document/9547287</link></sup>. This can transform education in the future.`,
      ]
    },
    {
      applicationImg :"Assets/images/application-bci-img-5.png",
      applicationtitle:"5. Military And Defense",
      outcomeTitle: "startup",
      outcomeContent: [
       `<link>DARPA|https://www.darpa.mil/</link> funded the development of non-surgical, high-performance, bi-directional
       BCIs. Bi-directional interfaces can read from and write to the brain.`, 
       `They interpret the user’s thoughts and convey information back to the user's brain.`,
      ],
      applicationPoints:[
        `BCIs can enhance the performance of soldiers and pilots​ by providing real-time
        feedback on cognitive performance<sup><link>8|https://theconversation.com/brain-computer-interfaces-could-allow-soldiers-to-control-weapons-with-their-thoughts-and-turn-off-their-fear-but-the-ethics-of-neurotechnology-lags-behind-the-science-194017</link></sup>.`,
      ]
    },
    {
      applicationImg :"Assets/images/application-bci-img-6.png",
      applicationtitle:"6. Neuro-Gaming",
      outcomeTitle: "startup",
      outcomeContent: [
        `<link>Neurable's|https://neurable.com/</link> thought-controlled game, ‘Awakening,’ enables players to use their
        thoughts to interact with their environment.`
      ],
      applicationPoints:[
        `Imagine controlling video games with just your thoughts<sup><link>9|https://www.bbvaopenmind.com/en/technology/innovation/video-games-controlled-by-thoughts/</link></sup>. BCIs could revolutionize
        gaming by creating immersive and interactive experiences.`, 
       `They could read a player's brain signals and adapt in real-time. Soon players might be able to step
       into a world of gaming that's as limitless as their imagination.`
      ]
    },
  ];


const articleComponents = [
    <ArticleHeader
    category="Science"
    articleTitle="Brain-Computer Interfaces: The Next Frontier in Human Evolution"
    introContentBold="Can you visualize a world where our brain can activate digital devices solely with our thoughts?"
    introContentNormal="Where ​we can trigger actions in the physical world by simply thinking about the action<sup><link>1|https://www.tandfonline.com/doi/full/10.1080/21507740.2019.1704918</link></sup>. It’s real, yet beyond our wildest imagination. Stay with us!"
    introMainImage="Assets/images/bci-header-1.jpg"
    order={1}
  />,

  <SubPara
    subtitle="BRAIN-COMPUTER INTERFACES"
    subParaImg="Assets/images/bci-header.jpg"
    subContent={[
      "Welcome to the world of Brain-Computer Interfaces (BCIs), a technology born from the synthesis of neuroscience and technology.",
      "<strong>Think of this technology as a magical bridge that connects our brains and machines.</strong>",
      "Our brains are abuzz with neurons that transmit messages as electrical patterns. BCIs intercept these electrical patterns and use AI and algorithms to ​convert these patterns into commands for digital devices<sup><link>2|https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface</link></sup>. <strong>In a BCI world, our thoughts won’t just lead to action; our thoughts will become the action!</strong> More on this later."
    
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
      car, or send texts.</strong>`, 
      `This isn’t sci-fi. This is the next evolution of human potential.`
    ]}
    order={4}
    
  />,

<StatisticContainer order={6}
    statisticContent={`​Did you know the BCI market is projected to grow at a CAGR of 16.7%, from $2.13
    billion in 2022 to $9.4 billion in 2032<sup><link>10|https://www.alliedmarketresearch.com/brain-computer-interfaces-market#:~:text=Brain%20Computer%20Interface%20Market%20Statistics,13.9%25%20from%202021%20to%202030.</link></sup>?`}
  />,
<SubPara
    subtitle="A CRITICAL NEED FOR ETHICAL SOLUTIONS"
    subParaImg="Assets/images/sub-img-bci-3.jpg"
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
    or BBCIs<sup><link>12|https://fpf.org/blog/brain-computer-interfaces-data-protection-understanding-the-technology-and-data-flows/</link></sup>.`}
  />,

  <SubPara
    subtitle="READY TO EVOLVE INTO A NEW SPECIES?"
    subParaImg="Assets/images/sub-img-bci-4.jpg"
    subContent={[
      `When we usher in a new frontier of human augmentation by integrating our
      biological intelligence with digital intelligence, our species might change forever.
      <strong>We might then evolve from Homo Sapiens to Homo Deus</strong><sup><link>13|https://www.nbcnews.com/mach/technology/godlike-homo-deus-could-replace-humans-tech-evolves-n757971</link></sup>.`,
      `This is just the beginning–it’s too soon to predict the endless possibilities of mind-
      machine communication. When a flicker of thought sets the world around us into
      motion, we will need to ensure our thoughts are worth translating.`,
      `Let's journey together into this new era where science-fiction becomes reality.
      Embrace the possibilities and prepare to transcend the ordinary with the awe-
      inspiring power of BCIs. <strong>Come back for more fascinating insights.</strong>`
    ]}
    order={9}
    
  />,
  <Applications
  applicationHeader="BCI’s Hidden Potential"
  applicationHeaderContent="Let’s explore 6 incredible applications of BCIs."
  applicationBoxes={applicationBoxes}
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
    `<strong>Six Powerful BCI Applications</strong><br>
    4.1  <italic>Revolutionizing Communication:</italic> BCIs could make language redundant providing a transformative solution for those with communication impairments.<br><br>
    4.2  <italic>Augmented Humanity:</italic> By turning prosthetics into true extensions of our bodies, they could enhance our physical and intellectual capabilities.<br><br>
    4.3  <italic>Restoring Health:</italic>They can control prosthetic limbs as naturally as biological ones, a boon for neurologically and physically challenged people.<br><br>
    4.4  <italic>Personalized Education:</italic> Customized learning experiences based on an individual's cognitive state could become the norm.<br><br>
    4.5  <italic>Military and Defense:</italic> Real-time cognitive performance feedback through BCIs could enhance the capabilities of soldiers and pilots.<br><br>
    4.6  <italic>Neuro-Gaming:</italic> Video gaming could become an immersive and responsive experience that adapts to players&#39; mental states in real-time.<br>


    `,
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

/>,
<Dropdown
  dropdownTitle="References"
  dropdownContent={[
    `<link>When Thinking is Doing: Responsibility for BCI-Mediated Action|https://www.tandfonline.com/doi/full/10.1080/21507740.2019.1704918</link>`,
    `<link>Brain–computer interface|https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface</link>`,
    `<link>Paralysed Man Feeds Himself with Help of Implants|https://blackrockneurotech.com/insights/paralysed-man-feeds-himself-with-help-of-implants/</link>`,
    `<link>Modern prosthetics go beyond artificial limbs—and into the human brain|https://qz.com/2141720/modern-prosthetics-go-beyond-bionic-limbs-and-into-the-brain</link>`,
    `<link>Augmented Humanity: The Man Machine|https://www.avnet.com/wps/portal/silica/resources/article/augmented-humanity-the-man-machine/</link>`,
    `<link>Augmented Humanity: The Man Machine|https://www.avnet.com/wps/portal/silica/resources/article/augmented-humanity-the-man-machine/</link>`,
    `<link>Cognitive and Affective Brain–Computer Interfaces for Improving Learning Strategies|https://ieeexplore.ieee.org/document/9547287</link>`,
    `<link>Brain-computer interfaces could allow soldiers to control weapons with their thoughts and turn off their fear|https://theconversation.com/brain-computer-interfaces-could-allow-soldiers-to-control-weapons-with-their-thoughts-and-turn-off-their-fear-but-the-ethics-of-neurotechnology-lags-behind-the-science-194017</link>`,
    `<link>Video Games Controlled by Thoughts|https://www.bbvaopenmind.com/en/technology/innovation/video-games-controlled-by-thoughts/</link>`,
    `<link>The Ethical Implications of Brain-Computer Interfaces|https://originstamp.com/blog/the-ethical-implications-of-brain-computer-interfaces/#:~:text=Ethical%20Concerns%20Regarding%20Privacy%20and%20Data%20Security,-As%20with%20any&amp;text=BCIs%20collect%20sensitive%20information%20directly,will%20be%20used%20and%20protected.</link>`,
    `<link>Brain Computer Interface Market Brain Computer Interface Market by Component|https://www.alliedmarketresearch.com/brain-computer-interfaces-market#:~:text=Brain%20Computer%20Interface%20Market%20Statistics,13.9%25%20from%202021%20to%202030.</link>`,
    `<link>BRAIN-COMPUTER INTERFACES & DATA PROTECTION: UNDERSTANDING THE TECHNOLOGY AND DATA FLOWS|https://fpf.org/blog/brain-computer-interfaces-data-protection-understanding-the-technology-and-data-flows/</link>`,
    `<link>Godlike 'Homo Deus' Could Replace Humans as Tech Evolves|https://www.nbcnews.com/mach/technology/godlike-homo-deus-could-replace-humans-tech-evolves-n757971</link>`
  
    



    
  ]}
  dropdownIcon="Assets/images/references.png"
  order={11}
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
// const dataCards = [
  //   {
  //     yearData: "In  2021",
  //     incidentData: "828 Million People",
  //     verbData: "SUFFERED FROM HUNGER.",
  //     linkData:
  //       "https://www.who.int/news/item/06-07-2022-un-report--global-hunger-numbers-rose-to-as-many-as-828-million-in-2021",
  //     organization: "United Nations",
  //   },
  //   {
  //     yearData: "In  2022",
  //     incidentData: "THE FIRST TRUE ENERGY CRISIS",
  //     verbData: "OCCURRED.",
  //     linkData: "https://www.iea.org/reports/world-energy-outlook-2022/the-global-energy-crisis",
  //     organization: "International Energy Association",
  //     backgroundColor: "#FFFFFE",
  //     textColor: "#161616",
  //   },
  //   {
  //     yearData: "Between 2030-2052",
  //     incidentData: "A 1.5°C INCREASE in temperatures likely",
  //     verbData: "by current estimates.",
  //     linkData: "https://www.ipcc.ch/sr15/chapter/spm/",
  //     organization: "Intergovernmental Panel On Climate Change",
  //   },
  // ];
  // const startupContents1 = [
  //   {
  //     startupContent:
  //       "1. <link>Ginkgo Bioworks|https://www.ginkgobioworks.com/</link> makes living medication <strong>“that can sense and respond to symptoms directly in our gut.”</strong>",
  //     relevanceContent:
  //       "<strong>Over 40%</strong> of people have gastrointestinal diseases affecting quality of their life<sup><link>12|https://pubmed.ncbi.nlm.nih.gov/32294476/</link></sup>.",
  //   },
  //   {
  //     startupContent:
  //       "2. <link>Twist Biosciences|https://www.twistbioscience.com/</link> makes synthetic DNA that can speed up antibody discovery <strong>to less than 60 days.</strong>",
  //     relevanceContent:
  //       "It takes <strong>over a year</strong> to discover antibodies<sup><link>13|https://blog.cellsignal.com/antibody-essentials-part-3-how-antibody-technologies-evolved</link></sup>. Rapid discovery will accelerate cures.",
  //   },
  //   {
  //     startupContent:
  //       "3. <link>Mammoth Biosciences|https://mammoth.bio/</link> uses the CRISPR gene editing technology to revolutionize early disease detection and treatment.",
  //     relevanceContent:
  //       "Millions of lives are lost every year because of late detection of diseases<sup><link>14|https://eppi.ioe.ac.uk/cms/Default.aspx?tabid=3367</link></sup>.",
  //   },
  // ];

  // const startupContents2 = [
  //   {
  //     startupContent:
  //       "1. <link>Modern Meadow|https://www.modernmeadow.com//</link> uses bacteria to make collagen, which is bundled to make leather hides.",
  //     relevanceContent:
  //       "The leather industry sacrifices animals, promotes deforestation, and produces methane<sup><link>15|https://www.somewhatgreener.com/articles/animal-rights/the-environmental-impact-of-leather/</link></sup>.",
  //   },
  //   {
  //     startupContent:
  //       "2. <link>Bolt Threads|https://boltthreads.com/</link> uses silk yeast to create sustainable and biodegradable textiles.",
  //     relevanceContent:
  //       "Sustainable and biodegradable textiles are cost-effective and environmentally friendly<sup><link>16|https://www.scientificamerican.com/article/the-environments-new-clothes-biodegradable-textiles-grown-from-live-organisms/</link></sup>.",
  //   },
  //   {
  //     startupContent:
  //       "3. <link>Perfect Day|https://perfectday.com/</link> uses microflora to produce cow-free proteins and casein.",
  //     relevanceContent:
  //       "Cow-free protein will reduce greenhouse gases, protect animals and enable resource efficiency<sup><link>17|https://gfi.org/resource/environmental-impact-of-meat-vs-plant-based-meat/</link></sup>.",
  //   },
  // ];

  // const applicationBoxes = [
  //   {
  //     applicationImg: "Assets/images/application-img-1.png",
  //     applicationtitle: "Energizing The World",
  //     outcomeTitle: "outcome",
  //     outcomeContent: "Getting closer to sustainable energy.",
  //     applicationPoints: [
  //       "<strong>Sustainable Biofuels:</strong> Algae and bacteria that can produce everything from ethanol and biodiesel to jet fuel. They offer a promising solution to reduce our dependence on fossil fuels and combat climate change.",
  //       "<strong>Bio-based chemicals:</strong> Organisms that generate industrial chemicals with less energy and fewer resources.",
  //     ],
  //     textAlign: "center",
  //   },
  //   {
  //     applicationImg: "Assets/images/application-img-2.png",
  //     applicationtitle: "Enhancing Global Wellness",
  //     outcomeTitle: "outcome",
  //     outcomeContent: "Increasing wellness & preventing diseases.",
  //     applicationPoints: [
  //       "<strong>Personalized Medicine:</strong> Novel drugs, vaccines and on-demand medication",
  //       "<strong>Gene therapies:</strong> Targeted and personalized gene-editing methods to treat diseases.",
  //     ],
  //     textAlign: "center",
  //   },
  //   {
  //     applicationImg: "Assets/images/application-img-3.png",
  //     applicationtitle: "Alleviating Climate Change",
  //     outcomeContent: "Getting closer to carbon neutrality.",
  //     outcomeTitle: "outcome",
  //     applicationPoints: [
  //       "<strong>Plastic Alternatives:</strong> Bio-based and biodegradable plastics.",
  //       "<strong>Bioremediation:</strong> Organisms that break down pollutants, capture, and store CO2.",
  //     ],
  //     textAlign: "center",
  //   },
  //   {
  //     applicationImg: "Assets/images/application-img-4.png",
  //     applicationtitle: "Feeding the World",
  //     outcomeTitle: "outcome",
  //     outcomeContent: "Our passport to food security.",
  //     applicationPoints: [
  //       "<strong>Food Security:</strong> Crops resistant to pests and climate change and plant-based meat.",
  //       "<strong>Precision Agriculture:</strong> Optimizing crop yields to reduce the use of synthetic pesticides.",
  //     ],
  //     textAlign: "center",
  //   },
  // ];

  //   const articleComponents = [
  //     // <ArticleHeader
  //     //   category={articleData.ArticleHeader[0].category}
  //     //   articleTitle={articleData.ArticleHeader[0].articleTitle}
  //     //   introContentBold={articleData.ArticleHeader[0].introContentBold}
  //     //   introContentNormal={articleData.ArticleHeader[0].introContentNormal}
  //     //   introMainImage={articleData.ArticleHeader[0].introMainImage}
  //     //   order={articleData.ArticleHeader[0].order}
  //     // />,

  //     // <SubPara
  //     //   subtitle="From Waste To Wonders "
  //     //   subParaImg="Assets/images/sub-para-img-1.png"
  //     //   subContent={[
  //     //     `Can you imagine a world where we won’t need to discard
  //     //   waste? By genetically altering microorganisms, startups
  //     //   are repurposing waste into valuable products like plastic
  //     //   and fuel.`,
  //     //     `Humor me, visualize combatting climate change using giant
  //     //   microorganisms. Microorganisms can be programmed to gulp CO2 or
  //     //   methane 24/7<sup><link>2|https://www.news-medical.net/life-sciences/How-Could-Microbes-Help-to-Solve-Climate-Change.aspx</link></sup>. This is not a plot from a Stephen King novel. This is slowly
  //     //   becoming a reality, and it heralds <strong>a new epoch in human history.</strong>`,
  //     //   ]}
  //     //   order={2}
  //     // />,
  //     // <SubPara
  //     //   subtitle="The Dawn Of Synthetic Biology"
  //     //   subContent={[
  //     //     `Welcome to <strong>the amazing world of synthetic biology where scientists are
  //     //   repurposing life itself</strong><sup><link>3|https://www.cbsnews.com/news/scientists-build-dna-from-scratch-to-alter-lifes-blueprint/</link></sup>. It’s a dynamic field that combines biology, engineering,
  //     //   and computer science to alter existing organisms and create new ones.`,
  //     //     `Think of synthetic biology as rearranging the code in a software program to
  //     //   improve its performance and functionality.<strong> An organism's DNA works like a
  //     //   computer program.</strong> We can upload new code, redesign existing code, and even
  //     //   <strong>create DNA programs to create new life-forms.</strong>`,
  //     //     `Synthetic biology will disrupt trillion-dollar industries.`,
  //     //   ]}
  //     //   order={3}
  //     // />,

  //     <StatisticContainer
  //       statisticContent={`Did you know the synthetic biology market is expected to grow over
  // 6x, from $10.4 billion in 2022 to $63.8 billion by 2030<sup><link>4|https://news.berkeley.edu/2021/10/14/synthetic-biology-moves-into-the-realm-of-the-unnatural/</link></sup>?`}
  //       order={4}
  //     />,

  //     <SubPara
  //       subtitle="A SUPERHERO HAS ARRIVED"
  //       subParaImg="Assets/images/sub-para-img-2.png"
  //       subContent={[
  //         `<strong>Think of synthetic biology as a large box of LEGO
  //       bricks.</strong> Scientists use different LEGO bricks to create
  //       remarkable organisms and products in labs. They
  //       modify DNA to induce behaviors in living organisms that
  //       don’t occur naturally<sup><link>5|https://www.ncbi.nlm.nih.gov/books/NBK215771/</link></sup>.`,
  //         `For example, <strong>scientists are using bacteria to make insulin</strong><sup><link>6|https://microbialcellfactories.biomedcentral.com/articles/10.1186/s12934-014-0141-0</link></sup><strong>; and algae to convert sunlight into clean
  //       energy.</strong> Synthetic Biology is an emerging area of science with transformative
  //       potential to enhance our future.`,
  //       ]}
  //       order={5}
  //     />,

  //     <StartBox
  //       startContent="Let’s take a voyage to the future and see what a ‘synthetic biology’ world might look like."
  //       order={6}
  //     />,

  //     <SubPara
  //       subtitle="ENGINEERING A BETTER TOMORROW"
  //       subParaImg="Assets/images/sub-para-img-3.png"
  //       subContent={[
  //         `Picture this, it’s 2025, you’re beaming after having a
  //       delicious meal that was made from crops that
  //       require 50% less water than conventional crops. As
  //       you read this, synthetic biologists are creating
  //       drought-resistant crops<sup><link>7|https://onlinelibrary.wiley.com/doi/full/10.1002/sae2.12014</link></sup>.`,
  //         `They’re also using <strong>cells to custom-design organisms that will fuel, feed, and
  //       clothe humanity sustainably</strong><sup><link>8|https://news.climate.columbia.edu/2019/08/14/synthetic-biology-help-environment/</link></sup>. <italic>This is the promise of synthetic biology. And it doesn't stop here.</italic>`,
  //         `The future is about harnessing synthetic biology to solve global problems and
  //       sustain our world. <italic>To understand the significance of the problems confronting us, let’s look at data.</italic>`,
  //       ]}
  //       order={7}
  //     />,

  //     <DataCardBox dataCards={dataCards} order={8} />,
  //     <SubPara
  //       subContent={[
  //         `Synthetic Biology can enable revolutionary solutions for these global issues. Can
  //       you imagine an abundance of crops that yield higher nutrition and alleviate hunger<sup><link>9|https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8421571/</link></sup>? How about cures for diseases like sickle cell anemia, once deemed
  //       untreatable? And modified bacteria that produce sustainable energy, like biofuels<sup><link>10|https://arpa-e.energy.gov/technologies/projects/turning-bacteria-biofuel</link></sup>? <strong>Synthetic organisms could make scarcity and ecological decay relics of our past.</strong>`,
  //       ]}
  //       order={9}
  //     />,

  //     <SubPara
  //       subtitle="MOTHER NATURE HAS RETIRED"
  //       subContent={[
  //         `We are no longer constrained by the whims of Mother Nature. <strong>Global biofuel
  //       production increased 9 times between 2000 and 2020</strong><sup><link>11|https://www.enerdata.net/publications/executive-briefing/biofuels-market-dynamics.html</link></sup>.`,
  //         `When artificial life merges with artificial intelligence, it will unleash possibilities we
  //       can barely dream of today. We’re penning the narrative of life itself, instead of
  //       Mother Nature doing so. <strong>Mother Nature has retired!</strong>`,
  //       ]}
  //       order={10}
  //     />,

  //     <StartupContainer
  //       productCategory="Healthcare Products"
  //       startupContainerTitle="Top Synthetic Biology Startups"
  //       order={11}
  //       startupContents={startupContents1}
  //     />,

  //     <Quote
  //       quoteContent="“Biology is the most advanced manufacturing technology on the planet. Cells can be programmed to make everything from food to materials to therapeutics.”"
  //       personName="Ginkgo Bioworks"
  //       bgcolor="#fffffe"
  //       color="161616"
  //       order={12}
  //     />,

  //     <StartupContainer
  //       productCategory="Consumer Products"
  //       startupContainerTitle="Top Synthetic Biology Startups"
  //       startupContents={startupContents2}
  //       order={13}
  //     />,

  //     <StatisticContainer
  //       statisticContent={`
  //     Did you know by 2030, about 10% of global pharmaceutical products might be
  //     made using synthetic biology?
  // `}
  //       order={14}
  //     />,

  //     <Applications
  //       applicationHeader="Synthetic Biology’s Hidden Potential"
  //       applicationHeaderContent="Explore these innovative solutions to humanity’s biggest challenges."
  //       applicationBoxes={applicationBoxes}
  //       order={15} // Pass the array here
  //     />,

  //     <SubPara
  //       subtitle="YOUR NEXT HARD DRIVE MIGHT BE MADE OF DNA"
  //       subContent={[
  //         `Believe it or not, synthetic biology could create a ‘data storage revolution’ <strong>by
  //       enabling the storage of data in DNA, instead of in data centers</strong><sup><link>18|https://onlinelibrary.wiley.com/doi/full/10.1002/nano.202100275</link></sup>. DNA is a
  //       very stable medium for data storage, and it can store and preserve data for
  //       millennia.`,
  //         `<strong>“All the data that humanity might generate by 2025 can be stored in DNA
  //       the size of a ping-pong ball, with room to spare</strong><sup><link>19|https://www.scientificamerican.com/article/dna-the-ultimate-data-storage-solution/</link></sup>." <link>The Los Alamos National Laboratory has|https://en.wikipedia.org/wiki/Los_Alamos_National_Laboratory</link> developed software that “translates data files from the binary
  //       language of zeroes and ones that computers understand into the four-letter code
  //       biology understands.”`,
  //       ]}
  //       order={16}
  //     />,

  //     <SubPara
  //       subtitle="TO INFINITY AND BEYOND"
  //       subContent={[
  //         `Prepare to be swept away by innovation in the coming years. Mother Nature gave
  //       us a precious inheritance: the blueprint of life itself. A wonderful life awaits each
  //       one of us. The palette of life is in our hands. What will you create?`,
  //       ]}
  //       order={17}
  //     />,

  //     <Dropdown
  //       dropdownTitle="INSIGHTS"
  //       dropdownContent={[
  //         "Synthetic Biology is a fusion of biology and engineering.",
  //         "It Can Solve Global Problems with solutions to issues like climate change, disease, food shortage, etc.",
  //         "Promising Sectors include healthcare, renewable energy, and material sciences.",
  //         "A Healthcare Revolution will include transformative solutions to improve and save lives.",
  //         "Personalized Medicine with novel and targeted treatments for diseases will be the norm in the future.",
  //         "Transforming Drug Development through potent, cost-efficient, and rapid pharmaceutical production.",
  //         "Real-time Disease Detection using biosensors within our body that will monitor and detect diseases.",
  //         "Next-Gen Antibiotics will solve for antibiotics resistance using drugs that target only harmful bacteria.",
  //         "Supercharged Immunity through system boosts to augment our disease-fighting ability, potentially making chemotherapy obsolete.",
  //         "End of Organ Shortage resulting from lab-made tissues and organs that will revolutionize treatment protocols.",
  //       ]}
  //       dropdownIcon="Assets/images/insights.png"
  //       order={18}
  //     />,
  //     <Dropdown
  //       dropdownTitle="References"
  //       dropdownContent={[
  //         "<link>Scientists build DNA from scratch to alter life’s blueprint.|https://www.statnews.com/2017/07/26/scientists-build-dna-scratch-alter-lifes-blueprint</link>",
  //         "<link>How Could Microbes Help to Solve Climate Change?|https://www.news-medical.net/life-sciences/How-Could-Microbes-Help-to-Solve-Climate-Change.aspx</link>",
  //         "<link>Scientists build DNA from scratch to alter life’s blueprint.|https://www.statnews.com/2017/07/26/scientists-build-dna-scratch-alter-lifes-blueprint</link>",
  //         "<link>Synthetic Biology Moves into the Realm of the Unnatural.|https://news.berkeley.edu/2021/10/14/synthetic-biology-moves-into-the-realm-of-the-unnatural/</link>",
  //         "<link>Methods and Mechanisms for Genetic Manipulation of Plants, Animals, and Microorganisms.|https://www.ncbi.nlm.nih.gov/books/NBK215771/</link>",
  //         "<link>Cell factories for insulin production.|https://microbialcellfactories.biomedcentral.com/articles/10.1186/s12934-014-0141-0</link>",
  //         "<link>Synthetic biology and opportunities within agricultural crops.|https://onlinelibrary.wiley.com/doi/full/10.1002/sae2.12014</link>",
  //         "<link>Synthetic biology: How it can help the environment.|https://news.climate.columbia.edu/2019/08/14/synthetic-biology-help-environment/</link>",
  //         "<link>Utilizing Plant Synthetic Biology to Improve Human Health and Wellness.|https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8421571/</link>",
  //         "<link>ARPA-E Energy.|https://arpa-e.energy.gov/technologies/projects/turning-bacteria-biofuel</link>",
  //         "<link>Biofuels evolution perspectives.|https://www.enerdata.net/publications/executive-briefing/biofuels-market-dynamics.html</link>",
  //         "<link>Worldwide Prevalence and Burden of Functional Gastrointestinal Disorders.|https://pubmed.ncbi.nlm.nih.gov/32294476/</link>",
  //         "<link>Antibody Essentials Part 3: How Antibody Technologies Evolved.|https://blog.cellsignal.com/antibody-essentials-part-3-how-antibody-technologies-evolved</link>",
  //         "<link>A systematic rapid evidence assessment of late diagnosis.|https://eppi.ioe.ac.uk/cms/Default.aspx?tabid=3367</link>",
  //         "<link>The Environmental Impact Of Leather.|https://www.somewhatgreener.com/articles/animal-rights/the-environmental-impact-of-leather/</link>",
  //         "<link>The Environment’s New Clothes: Biodegradable Textiles Grown from Live Organisms.|https://www.scientificamerican.com/article/the-environments-new-clothes-biodegradable-textiles-grown-from-live-organisms/</link>",
  //         "<link>Plant-based meat for a growing world.|https://gfi.org/resource/environmental-impact-of-meat-vs-plant-based-meat/</link>",
  //         "<link>Current and emerging opportunities in biological medium-based computing and digital data storage.|https://onlinelibrary.wiley.com/doi/full/10.1002/nano.202100275</link>",
  //         "<link>DNA: The Ultimate Data Storage Solution.|https://www.scientificamerican.com/article/dna-the-ultimate-data-storage-solution/</link>",
  //       ]}
  //       dropdownIcon="Assets/images/references.png"
  //       order={19}
  //     />,
  //   ];
