import ArticleHeader from "../../models/ArticleComponents/ArticleHeader/ArticleHeader";
import SubPara from "../../models/ArticleComponents/SubPara/SubPara";
import StatisticContainer from "../../models/ArticleComponents/StatisticContainer/StatisticContainer";
import StartBox from "../../models/ArticleComponents/StartBox/StartBox";
import DataCardBox from "../../models/ArticleComponents/DataCardBox/DataCardBox";
import Applications from "../../models/ArticleComponents/Applications/Applications";
import Quote from "../../models/ArticleComponents/Quote/Quote";
import StartupContainer from "../../models/ArticleComponents/StartupContainer/StartupContainer";
import Dropdown from "../../models/ArticleComponents/Dropdown/Dropdown";
import React from "react";
import "./ArticleRead.css";
const ArticleRead = () => {
  const startupContents1 = [
    {
      startupContent:
        "1. <link>Ginkgo Bioworks|https://www.ginkgobioworks.com/</link> makes living medication <strong>“that can sense and respond to symptoms directly in our gut.”</strong>",
      relevanceContent:
        "<strong>Over 40%</strong> of people have gastrointestinal diseases affecting quality of their life<sup><link>12|https://pubmed.ncbi.nlm.nih.gov/32294476/</link></sup>.",
    },
    {
      startupContent:
        "2. <link>Twist Biosciences|https://www.twistbioscience.com/</link> makes synthetic DNA that can speed up antibody discovery <strong>to less than 60 days.</strong>",
      relevanceContent:
        "It takes <strong>over a year</strong> to discover antibodies<sup><link>13|https://blog.cellsignal.com/antibody-essentials-part-3-how-antibody-technologies-evolved</link></sup>. Rapid discovery will accelerate cures.",
    },
    {
      startupContent:
        "3. <link>Mammoth Biosciences|https://mammoth.bio/</link> uses the CRISPR gene editing technology to revolutionize early disease detection and treatment.",
      relevanceContent:
        "Millions of lives are lost every year because of late detection of diseases<sup><link>14|https://eppi.ioe.ac.uk/cms/Default.aspx?tabid=3367</link></sup>.",
    },
  ];

  const startupContents2 = [
    {
      startupContent:
        "1. <link>Modern Meadow|https://www.modernmeadow.com//</link> uses bacteria to make collagen, which is bundled to make leather hides.",
      relevanceContent:
        "The leather industry sacrifices animals, promotes deforestation, and produces methane<sup><link>15|https://www.somewhatgreener.com/articles/animal-rights/the-environmental-impact-of-leather/</link></sup>.",
    },
    {
      startupContent:
        "2. <link>Bolt Threads|https://boltthreads.com/</link> uses silk yeast to create sustainable and biodegradable textiles.",
      relevanceContent:
        "Sustainable and biodegradable textiles are cost-effective and environmentally friendly<sup><link>16|https://www.scientificamerican.com/article/the-environments-new-clothes-biodegradable-textiles-grown-from-live-organisms/</link></sup>.",
    },
    {
      startupContent:
        "3. <link>Perfect Day|https://perfectday.com/</link> uses microflora to produce cow-free proteins and casein.",
      relevanceContent:
        "Cow-free protein will reduce greenhouse gases, protect animals and enable resource efficiency<sup><link>17|https://gfi.org/resource/environmental-impact-of-meat-vs-plant-based-meat/</link></sup>.",
    },
  ];

  const applicationBoxes = [
    {
      applicationImg: "Assets/images/application-img-1.png",
      applicationtitle: "Energizing The World",
      outcomeTitle: "outcome",
      outcomeContent: "Getting closer to sustainable energy.",
      applicationPoints: [
        "<strong>Sustainable Biofuels:</strong> Algae and bacteria that can produce everything from ethanol and biodiesel to jet fuel. They offer a promising solution to reduce our dependence on fossil fuels and combat climate change.",
        "<strong>Bio-based chemicals:</strong> Organisms that generate industrial chemicals with less energy and fewer resources.",
      ],
      textAlign: "center",
    },
    {
      applicationImg: "Assets/images/application-img-2.png",
      applicationtitle: "Enhancing Global Wellness",
      outcomeTitle: "outcome",
      outcomeContent: "Increasing wellness & preventing diseases.",
      applicationPoints: [
        "<strong>Personalized Medicine:</strong> Novel drugs, vaccines and on-demand medication",
        "<strong>Gene therapies:</strong> Targeted and personalized gene-editing methods to treat diseases.",
      ],
      textAlign: "center",
    },
    {
      applicationImg: "Assets/images/application-img-3.png",
      applicationtitle: "Alleviating Climate Change",
      outcomeContent: "Getting closer to carbon neutrality.",
      outcomeTitle: "outcome",
      applicationPoints: [
        "<strong>Plastic Alternatives:</strong> Bio-based and biodegradable plastics.",
        "<strong>Bioremediation:</strong> Organisms that break down pollutants, capture, and store CO2.",
      ],
      textAlign: "center",
    },
    {
      applicationImg: "Assets/images/application-img-4.png",
      applicationtitle: "Feeding the World",
      outcomeTitle: "outcome",
      outcomeContent: "Our passport to food security.",
      applicationPoints: [
        '<strong>Food Security:</strong> Crops resistant to pests and climate change and plant-based meat.',
        '<strong>Precision Agriculture:</strong> Optimizing crop yields to reduce the use of synthetic pesticides.'
      ],
      textAlign: "center",
    },
  ];

  const articleComponents = [
    <ArticleHeader
      category="Science"
      articleTitle="The Fascinating World of Synthetic Biology"
      introContentBold="Do you know our lives are about to be transformed forever?"
      introContentNormal="Unknown to most of us, scientists are silently rewriting the blueprint of our lives and re-sculpting our DNA<sup><link>1|https://www.statnews.com/2017/07/26/scientists-build-dna-scratch-alter-lifes-blueprint/</link></sup>. Intrigued? Stay with us."
      introMainImage="Assets/images/intro-main-image-synthetic-bio.png"
    />,

    <SubPara
      subtitle="From Waste To Wonders "
      subParaImg="Assets/images/sub-para-img-1.png"
      subContent={[
        `Can you imagine a world where we won’t need to discard
      waste? By genetically altering microorganisms, startups
      are repurposing waste into valuable products like plastic
      and fuel.`,
        `Humor me, visualize combatting climate change using giant
      microorganisms. Microorganisms can be programmed to gulp CO2 or
      methane 24/7<sup><link>2|https://www.news-medical.net/life-sciences/How-Could-Microbes-Help-to-Solve-Climate-Change.aspx</link></sup>. This is not a plot from a Stephen King novel. This is slowly
      becoming a reality, and it heralds <strong>a new epoch in human history.</strong>`,
      ]}
    />,
    <SubPara
      subtitle="The Dawn Of Synthetic Biology"
      subContent={[
        `Welcome to <strong>the amazing world of synthetic biology where scientists are
      repurposing life itself</strong><sup><link>3|https://www.cbsnews.com/news/scientists-build-dna-from-scratch-to-alter-lifes-blueprint/</link></sup>. It’s a dynamic field that combines biology, engineering,
      and computer science to alter existing organisms and create new ones.`,
        `Think of synthetic biology as rearranging the code in a software program to
      improve its performance and functionality.<strong> An organism's DNA works like a
      computer program.</strong> We can upload new code, redesign existing code, and even
      <strong>create DNA programs to create new life-forms.</strong>`,
        `Synthetic biology will disrupt trillion-dollar industries.`,
      ]}
    />,

    <StatisticContainer
      statisticContent={`Did you know the synthetic biology market is expected to grow over
6x, from $10.4 billion in 2022 to $63.8 billion by 2030<sup><link>4|https://news.berkeley.edu/2021/10/14/synthetic-biology-moves-into-the-realm-of-the-unnatural/</link></sup>?`}
    />,

    <SubPara
      subtitle="A SUPERHERO HAS ARRIVED"
      subParaImg="Assets/images/sub-para-img-2.png"
      subContent={[
        `<strong>Think of synthetic biology as a large box of LEGO
      bricks.</strong> Scientists use different LEGO bricks to create
      remarkable organisms and products in labs. They
      modify DNA to induce behaviors in living organisms that
      don’t occur naturally<sup><link>5|https://www.ncbi.nlm.nih.gov/books/NBK215771/</link></sup>.`,
        `For example, <strong>scientists are using bacteria to make insulin</strong><sup><link>6|https://microbialcellfactories.biomedcentral.com/articles/10.1186/s12934-014-0141-0</link></sup><strong>; and algae to convert sunlight into clean
      energy.</strong> Synthetic Biology is an emerging area of science with transformative
      potential to enhance our future.`,
      ]}
    />,

    <StartBox startContent="Let’s take a voyage to the future and see what a ‘synthetic biology’ world might look like." />,

    <SubPara
      subtitle="ENGINEERING A BETTER TOMORROW"
      subParaImg="Assets/images/sub-para-img-3.png"
      subContent={[
        `Picture this, it’s 2025, you’re beaming after having a
      delicious meal that was made from crops that
      require 50% less water than conventional crops. As
      you read this, synthetic biologists are creating
      drought-resistant crops<sup><link>7|https://onlinelibrary.wiley.com/doi/full/10.1002/sae2.12014</link></sup>.`,
        `They’re also using <strong>cells to custom-design organisms that will fuel, feed, and
      clothe humanity sustainably</strong><sup><link>8|https://news.climate.columbia.edu/2019/08/14/synthetic-biology-help-environment/</link></sup>. <italic>This is the promise of synthetic biology. And it doesn't stop here.</italic>`,
        `The future is about harnessing synthetic biology to solve global problems and
      sustain our world. <italic>To understand the significance of the problems confronting us, let’s look at data.</italic>`,
      ]}
    />,

    <DataCardBox />,
    <SubPara
      subContent={[
        `Synthetic Biology can enable revolutionary solutions for these global issues. Can
      you imagine an abundance of crops that yield higher nutrition and alleviate hunger<sup><link>9|https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8421571/</link></sup>? How about cures for diseases like sickle cell anemia, once deemed
      untreatable? And modified bacteria that produce sustainable energy, like biofuels<sup><link>10|https://arpa-e.energy.gov/technologies/projects/turning-bacteria-biofuel</link></sup>? <strong>Synthetic organisms could make scarcity and ecological decay relics of our past.</strong>`,
      ]}
    />,

    <SubPara
      subtitle="MOTHER NATURE HAS RETIRED"
      subContent={[
        `We are no longer constrained by the whims of Mother Nature. <strong>Global biofuel
      production increased 9 times between 2000 and 2020</strong><sup><link>11|https://www.enerdata.net/publications/executive-briefing/biofuels-market-dynamics.html</link></sup>.`,
        `When artificial life merges with artificial intelligence, it will unleash possibilities we
      can barely dream of today. We’re penning the narrative of life itself, instead of
      Mother Nature doing so. <strong>Mother Nature has retired!</strong>`,
      ]}
    />,

    <StartupContainer
      productCategory="Healthcare Products"
      startupContainerTitle="Top Synthetic Biology Startups"
      startupContents={startupContents1}
    />,

    <Quote
      quoteContent="“Biology is the most advanced manufacturing technology on the planet. Cells can be programmed to make everything from food to materials to therapeutics.”"
      personName="Ginkgo Bioworks"
      bgcolor="#fffffe"
      color="161616"
    />,

    <StartupContainer
      productCategory="Consumer Products"
      startupContainerTitle="Top Synthetic Biology Startups"
      startupContents={startupContents2}
    />,

    <StatisticContainer
      statisticContent={`
    Did you know by 2030, about 10% of global pharmaceutical products might be
    made using synthetic biology? 
`}
    />,

    <Applications
      applicationHeader="Synthetic Biology’s Hidden Potential"
      applicationHeaderContent="Explore these innovative solutions to humanity’s biggest challenges."
      applicationBoxes={applicationBoxes} // Pass the array here
    />,

    <SubPara
      subtitle="YOUR NEXT HARD DRIVE MIGHT BE MADE OF DNA"
      subContent={[
        `Believe it or not, synthetic biology could create a ‘data storage revolution’ <strong>by
      enabling the storage of data in DNA, instead of in data centers</strong><sup><link>18|https://onlinelibrary.wiley.com/doi/full/10.1002/nano.202100275</link></sup>. DNA is a
      very stable medium for data storage, and it can store and preserve data for
      millennia.`,
        `<strong>“All the data that humanity might generate by 2025 can be stored in DNA
      the size of a ping-pong ball, with room to spare</strong><sup><link>19|https://www.scientificamerican.com/article/dna-the-ultimate-data-storage-solution/</link></sup>." <link>The Los Alamos National Laboratory has|https://en.wikipedia.org/wiki/Los_Alamos_National_Laboratory</link> developed software that “translates data files from the binary
      language of zeroes and ones that computers understand into the four-letter code
      biology understands.”`,
      ]}
    />,

    <SubPara
      subtitle="TO INFINITY AND BEYOND"
      subContent={[
        `Prepare to be swept away by innovation in the coming years. Mother Nature gave
      us a precious inheritance: the blueprint of life itself. A wonderful life awaits each
      one of us. The palette of life is in our hands. What will you create?`,
      ]}
    />,

    <Dropdown
      dropdownTitle="INSIGHTS"
      dropdownContent={[
        "Synthetic Biology is a fusion of biology and engineering.",
        "It Can Solve Global Problems with solutions to issues like climate change, disease, food shortage, etc.",
        "Promising Sectors include healthcare, renewable energy, and material sciences.",
        "A Healthcare Revolution will include transformative solutions to improve and save lives.",
        "Personalized Medicine with novel and targeted treatments for diseases will be the norm in the future.",
        "Transforming Drug Development through potent, cost-efficient, and rapid pharmaceutical production.",
        "Real-time Disease Detection using biosensors within our body that will monitor and detect diseases.",
        "Next-Gen Antibiotics will solve for antibiotics resistance using drugs that target only harmful bacteria.",
        "Supercharged Immunity through system boosts to augment our disease-fighting ability, potentially making chemotherapy obsolete.",
        "End of Organ Shortage resulting from lab-made tissues and organs that will revolutionize treatment protocols.",
      ]}
      dropdownIcon="Assets/images/insights.png"
    />,
    <Dropdown
      dropdownTitle="References"
      dropdownContent={[
        "<link>Scientists build DNA from scratch to alter life’s blueprint.|https://www.statnews.com/2017/07/26/scientists-build-dna-scratch-alter-lifes-blueprint</link>",
        "<link>How Could Microbes Help to Solve Climate Change?|https://www.news-medical.net/life-sciences/How-Could-Microbes-Help-to-Solve-Climate-Change.aspx</link>",
        "<link>Scientists build DNA from scratch to alter life’s blueprint.|https://www.statnews.com/2017/07/26/scientists-build-dna-scratch-alter-lifes-blueprint</link>",
        "<link>Synthetic Biology Moves into the Realm of the Unnatural.|https://news.berkeley.edu/2021/10/14/synthetic-biology-moves-into-the-realm-of-the-unnatural/</link>",
        "<link>Methods and Mechanisms for Genetic Manipulation of Plants, Animals, and Microorganisms.|https://www.ncbi.nlm.nih.gov/books/NBK215771/</link>",
        "<link>Cell factories for insulin production.|https://microbialcellfactories.biomedcentral.com/articles/10.1186/s12934-014-0141-0</link>",
        "<link>Synthetic biology and opportunities within agricultural crops.|https://onlinelibrary.wiley.com/doi/full/10.1002/sae2.12014</link>",
        "<link>Synthetic biology: How it can help the environment.|https://news.climate.columbia.edu/2019/08/14/synthetic-biology-help-environment/</link>",
        "<link>Utilizing Plant Synthetic Biology to Improve Human Health and Wellness.|https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8421571/</link>",
        "<link>ARPA-E Energy.|https://arpa-e.energy.gov/technologies/projects/turning-bacteria-biofuel</link>",
        "<link>Biofuels evolution perspectives.|https://www.enerdata.net/publications/executive-briefing/biofuels-market-dynamics.html</link>",
        "<link>Worldwide Prevalence and Burden of Functional Gastrointestinal Disorders.|https://pubmed.ncbi.nlm.nih.gov/32294476/</link>",
        "<link>Antibody Essentials Part 3: How Antibody Technologies Evolved.|https://blog.cellsignal.com/antibody-essentials-part-3-how-antibody-technologies-evolved</link>",
        "<link>A systematic rapid evidence assessment of late diagnosis.|https://eppi.ioe.ac.uk/cms/Default.aspx?tabid=3367</link>",
        "<link>The Environmental Impact Of Leather.|https://www.somewhatgreener.com/articles/animal-rights/the-environmental-impact-of-leather/</link>",
        "<link>The Environment’s New Clothes: Biodegradable Textiles Grown from Live Organisms.|https://www.scientificamerican.com/article/the-environments-new-clothes-biodegradable-textiles-grown-from-live-organisms/</link>",
        "<link>Plant-based meat for a growing world.|https://gfi.org/resource/environmental-impact-of-meat-vs-plant-based-meat/</link>",
        "<link>Current and emerging opportunities in biological medium-based computing and digital data storage.|https://onlinelibrary.wiley.com/doi/full/10.1002/nano.202100275</link>",
        "<link>DNA: The Ultimate Data Storage Solution.|https://www.scientificamerican.com/article/dna-the-ultimate-data-storage-solution/</link>",
      ]}
      dropdownIcon="Assets/images/references.png"
    />,
  ];

  const sortedComponents = articleComponents.sort(
    (comp1, comp2) => comp1.props.order - comp2.props.order
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

export default ArticleRead;
