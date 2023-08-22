import "./StatisticContainer.css";
const StatisticContainer = ({ statisticContent }) => {
    const processContent = (content) => {
      let formattedContent = content.replace(/<strong>(.*?)<\/strong>/g, '<strong>$1</strong>');
      formattedContent = formattedContent.replace(/<italic>(.*?)<\/italic>/g, '<em>$1</em>');
      formattedContent = formattedContent.replace(
        /<sup><link>(.*?)<\/link><\/sup>/g,
        (_, link) => {
          const linkParts = link.split('|');
          if (linkParts.length === 2) {
            const [number, url] = linkParts;
            return `<sup><a class="superscript-link" href="${url}" target="_blank" rel="noopener noreferrer">${number}</a></sup>`;
          }
          return '';
        }
      );
      formattedContent = formattedContent.replace(
        /<link>(.*?)<\/link>/g,
        (_, link) => {
          const linkParts = link.split('|');
          if (linkParts.length === 2) {
            const [text, url] = linkParts;
            return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
          }
          return '';
        }
      );
      return <span dangerouslySetInnerHTML={{ __html: formattedContent }} />;
    };
  
    return (
      <div className="statistic-container1">
        <div className="statistic1">
          <div className="statistic-title1">
            <img className="statistic-icon1" alt="" src="Assets/images/Statistic-icon.png" />
            <div className="statistic-title-text1">STATISTIC</div>
          </div>
          <div className="statistic-content1">
            <div className="statistic-content-text1">
              <span className="span34">{processContent(statisticContent)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  
export default StatisticContainer;