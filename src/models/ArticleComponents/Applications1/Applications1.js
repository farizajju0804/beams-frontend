import ApplicationBox from "../ApplicationBox/ApplicationBox";
import "./Applications1.css";
const Applications = ({
  applicationHeader,
  applicationHeaderContent,
  order,
}) => {
  const orderstyle = {
    order: order,
  };
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
          applicationImg="Assets/images/application-bci-img-1.png"
          applicationtitle="1. Redefining Communication"
          outcomeTitle= "startup"
          outcomeContent={[
            `<link>Neuralink|https://neuralink.com/</link> has developed implantable brain–machine interface devices. `,
            `Its product, the N1 chip, interfaces with more than 1000 different brain cells, enabling people
          with paralysis to communicate with machines by using their thoughts<sup><link>4|https://qz.com/2141720/modern-prosthetics-go-beyond-bionic-limbs-and-into-the-brain</link></sup>.`
          ]}
          applicationPoints={[
            `Can you imagine a world where​ we won't need language to communicate? I’m not implying we go back to the Stone Ages! I’m talking about BCIs enabling us to communicate with our thoughts.`, 
            `This will totally transform our lives, especially for
            the communication impaired. In 2017, scientists enabled a paralyzed man to use
            his thoughts to communicate with a BCI to feed himself<sup><link>3|https://blackrockneurotech.com/insights/paralysed-man-feeds-himself-with-help-of-implants/</link></sup>.`
          ]}
        />
        <ApplicationBox
          applicationImg="Assets/images/application-bci-img-2.png"
          applicationtitle="2. Augmented Humanity"
          outcomeTitle= "startup"
          outcomeContent={[
            `<link>Kernel|https://www.kernel.com/</link> is developing advanced neural interfaces that will improve cognition and
          memory, augmenting our mental capabilities.`,
          ]}
          applicationPoints={[
            `'Augmented Humanity' is a concept where BCIs will enhance our physical,
            intellectual, and perceptual capabilities<sup><link>5|https://www.avnet.com/wps/portal/silica/resources/article/augmented-humanity-the-man-machine/</link></sup>.`, 
            `They can augment us on a scale we&#39;ve never seen before. For example, prosthetics could augment us and become true
            extensions of our bodies.`,
          ]}
        />
        <ApplicationBox
          applicationImg="Assets/images/application-bci-img-3.png"
          applicationtitle="3. Restoring Health"
          outcomeTitle= "startup"
          applicationPoints={[
            `BCIs can transform the quality of life for people with neurological disorders and
          physical disabilities<sup><link>6|https://www.avnet.com/wps/portal/silica/resources/article/augmented-humanity-the-man-machine/</link></sup>. Visualize <strong>controlling prosthetics with the same ease as
          we control our biological limbs.</strong>`, 
          `“There are over a million limb amputations annually, one every 30 seconds.” Globally, over 60 million people don’t have limbs.`,
          ]}
          outcomeContent={[
            `<link>Ottobock|https://www.ottobock.com/</link> has developed prosthetic limbs that users can control with their
            thoughts.`,
          ]}
        />
        <ApplicationBox
          applicationImg="Assets/images/application-bci-img-4.png"
          applicationtitle="4. Personalized Education"
          outcomeTitle= "startup"
          outcomeContent={[
            `<link>Neurable|https://neurable.com/</link> translates mental intent into digital commands, enabling teachers to
          customize learning for students&#39; cognitive states.`,
          ]}
          applicationPoints={[
            `BCIs can monitor and analyze cognitive states to create personalized learning
            experiences<sup><link>7|https://ieeexplore.ieee.org/document/9547287</link></sup>. This can transform education in the future.`,
          ]}
        />

        <ApplicationBox
          applicationImg="Assets/images/application-bci-img-5.png"
          applicationtitle="5. Military And Defense"
          outcomeTitle= "startup"
          outcomeContent={[
            `<link>DARPA|https://www.darpa.mil/</link> funded the development of non-surgical, high-performance, bi-directional
            BCIs. Bi-directional interfaces can read from and write to the brain.`, 
            `They interpret the user’s thoughts and convey information back to the user's brain.`,
          ]}
          applicationPoints={[
            `BCIs can enhance the performance of soldiers and pilots​ by providing real-time
            feedback on cognitive performance<sup><link>8|https://theconversation.com/brain-computer-interfaces-could-allow-soldiers-to-control-weapons-with-their-thoughts-and-turn-off-their-fear-but-the-ethics-of-neurotechnology-lags-behind-the-science-194017</link></sup>.`,
          ]}
        />
        <ApplicationBox
          applicationImg="Assets/images/application-bci-img-6.png"
          applicationtitle="6. Neuro-Gaming"
          outcomeTitle= "startup"
          outcomeContent={[
            `<link>Neurable's|https://neurable.com/</link> thought-controlled game, ‘Awakening,’ enables players to use their
            thoughts to interact with their environment.`,
          ]}
          applicationPoints={[
            `Imagine controlling video games with just your thoughts<sup><link>9|https://www.bbvaopenmind.com/en/technology/innovation/video-games-controlled-by-thoughts/</link></sup>. BCIs could revolutionize
            gaming by creating immersive and interactive experiences.`, 
            `They could read a player's brain signals and adapt in real-time. Soon players might be able to step
            into a world of gaming that's as limitless as their imagination.`,
          ]}
        />
      </div>
    </div>
  );
};

export default Applications;
