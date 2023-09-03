import ArticleHeader from "../../models/ArticleComponents/ArticleHeader/ArticleHeader";
import SubPara from "../../models/ArticleComponents/SubPara/SubPara";
import StatisticContainer from "../../models/ArticleComponents/StatisticContainer/StatisticContainer";
import StartBox from "../../models/ArticleComponents/StartBox/StartBox";
import DataCardBox from "../../models/ArticleComponents/DataCardBox/DataCardBox";
import Applications from "../../models/ArticleComponents/Applications/Applications";
import Quote from "../../models/ArticleComponents/Quote/Quote";
import StartupContainer from "../../models/ArticleComponents/StartupContainer/StartupContainer";
import Dropdown from "../../models/ArticleComponents/Dropdown/Dropdown";
import { BsPencilSquare } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import "./ArticleRead.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaHighlighter } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { toast, Toaster } from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import { Popupnotes } from "../../models/Popupnotes/Popupnotes";

const ArticleRead = () => {
  let { id:Aid } = useParams();

  const [dataCards, setdataCards] = useState([]);
  const [articleData, setarticleData] = useState({});
  const [applicationBoxes, setapplicationBoxes] = useState([]);
  const [startupContents1, setstartupContents1] = useState([]);
  const [startupContents2, setstartupContents2] = useState([]);
  const [articleComponents, setarticleComponents] = useState([]);

  const { token, hightlights, setHighlights,firsthightlight, setFirsthightlight } = useContext(AuthContext);
	const [microbeams, setMicrobeams] = useState({});
	const [microbeamsload, setMicrobeamsload] = useState(false);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [displayPopUp, setDisplayPopUp] = useState(false);
	const [selectedText, setSelectedText] = useState("");
	const [fontSize, setfontSize] = useState(20);
	const [lineHeight, setlineHeight] = useState();
	const [settingPopup, setSettingPopup] = useState(false);
	const [notesPopup, setNotesPopup] = useState(false);
	const [notepopupdata, setNotepopupdata] = useState({});
  const {id}=useParams()
 

  const handleMouseUp = (e) => {
		var selectedtext = window.getSelection().toString().trim();

		if (selectedtext) {
			setSelectedText(window.getSelection().toString().trim());
			setX(e.pageX);
			setY(e.pageY);
			console.log(e.pageX);
			console.log(e.pageY);
			setDisplayPopUp(true);
			console.log(displayPopUp);
			console.log(e);
			console.log(`${window.getSelection().toString().trim()}`);
		}
	};

  const opennotePopup = (data) => {
		setNotesPopup(true);
	};
  const getArticleByID = async (id) => {
    fetch(
      `http://localhost:1337/api/article-components/?populate[DataCardBox][populate]=*&populate[StartupContainer][populate]=*&populate[ArticleHeader]=*&populate[SubPara]=*&populate[StatisticContainer]=*&populate[Quote]=*&populate[Applications][populate]=*&populate[Dropdown]=*&populate[StartBox]=*`
    )
      .then((res) => res.json())
      .then((articles) => {
        const index=articles.data.findIndex((el)=>el.attributes.articleId===Aid)

        const articleComponent = [];

        const articleData = articles.data[index].attributes;
        console.log(articleData)
        setNotepopupdata({id:Aid,title:articleData.ArticleHeader[0].articleTitle})
        // console.log(articleData);
        articleComponent.push(
          <ArticleHeader
            category={articleData.ArticleHeader[0].category}
            articleTitle={articleData.ArticleHeader[0].articleTitle}
            introContentBold={articleData.ArticleHeader[0].introContentBold}
            introContentNormal={articleData.ArticleHeader[0].introContentNormal}
            introMainImage={articleData.ArticleHeader[0].introMainImage}
            order={articleData.ArticleHeader[0].order}
          />
        );
        articleData.SubPara.map((para) => {
          articleComponent.push(
            <SubPara
              subtitle={para.subtitle}
              subParaImg={para.subParaImg}
              subContent={para.subContent}
              order={para.order}
            />
          );
        });
        articleData.StartBox.map((sb) => {
          articleComponent.push(<StartBox startContent={sb.startContent} order={sb.order} />);
        });
        articleData.Applications.map((ap) => {
          articleComponent.push(
            <Applications
              applicationHeader={ap.applicationHeader}
              applicationHeaderContent={ap.applicationHeaderContent}
              applicationBoxes={ap.applicationBoxes}
              order={ap.order} // Pass the array here
            />
          );
        });
        articleData.StatisticContainer.map((sc) => {
          articleComponent.push(<StatisticContainer statisticContent={sc.statisticContent} order={sc.order} statImg={sc.statImg}/>);
        });
        // articleData.StartBox.map((sc) => {
        //   articleComponent.push(<StartBox startContent={sc.statisticContent} order={sc.order} />);
        // });
        articleData.StartupContainer.map((sc) => {
          articleComponent.push(
            <StartupContainer
              productCategory={sc.productCategory}
              startupContainerTitle={sc.startupContainerTitle}
              startupContents={sc.startupContents}
              order={sc.order}
            />
          );
        });
        articleData.DataCardBox.map((dc) => {
          articleComponent.push(<DataCardBox dataCards={dc.dataCards} order={dc.order} />);
        });
        articleData.Dropdown.map((dd) => {
          articleComponent.push(
            <Dropdown
              dropdownTitle={dd.dropdownTitle}
              dropdownContent={dd.dropdownContent}
              dropdownIcon={dd.dropdownIcon}
              order={dd.order}
            />
          );
        });
        articleData.Quote.map((q) => {
          articleComponent.push(
            <Quote
              quoteContent={q.quoteContent}
              personName={q.personName}
              bgcolor={q.bgcolor}
              color={q.color}
              order={q.order}
            />
          );
        });

        setarticleComponents(articleComponent);
      });
  };

  // const getHighlightedData = () => {
	// 	if (!hightlights.length) {
  //     console.log("no highlights")
	// 		return;
	// 	}
	// 	var items = document.getElementById("readtext");
	// 	if (!items) {
  //     console.log("no items")
	// 		return;
	// 	}
	// 	var ptags = items.getElementsByTagName("span");
  //   console.log(ptags)
	// 	for (let i = 0; i < ptags.length; i++) {
	// 		hightlights.forEach((element) => {
	// 			console.log(element.HighlightedText);
	// 			if (ptags[i].innerText.includes(element.HighlightedText)) {
	// 				console.log("match");
	// 				ptags[i].innerHTML = ptags[i].innerHTML.replace(
	// 					element.HighlightedText,
	// 					`<span class="hightobjs" style="color:blue">${element.HighlightedText}</span>`
	// 				);
	// 			}
	// 		});
	// 	}

	// 	return items;
	// };

  useEffect(() => {
    getArticleByID(Aid);
  }, []);

  // useEffect(() => {

	// 	getHighlightedData();
	// }, [hightlights]);

  const closenotePopup = () => setNotesPopup(false);

  const sortedComponents = articleComponents.sort((comp1, comp2) => comp1.props.order - comp2.props.order);

  return (
    <>

    

{/* {displayPopUp && (
				<div
					className="highlightop"
					style={{ left: `${x}px`, top: `${y - 100}px ` }}
				>
					<div
						className="highlightopinner"
						onClick={() => {
							if (selectedText.split(" ").length > 5) {
								setHighlights({
									HighlightedText: selectedText,
									BeamName: microbeams.Title,
								});
								setDisplayPopUp(false);
								setSelectedText("");
							} else {
								toast.error("Select more than 4 words to highlight");
								setDisplayPopUp(false);
								setSelectedText("");
							}
						}}
					>
						<FaHighlighter size={22} />
						<span>Highlight</span>
					</div>
					<div
						className="highlightopinner"
						onClick={() => {
							opennotePopup();
						}}
					>
						<GrNotes size={22} />
						<span>Note</span>
					</div>
				</div>
			)} */}

  
{notesPopup && (
						<Popupnotes
							data={notepopupdata}
							handleClose={closenotePopup}
						></Popupnotes>
					)}
<div className="article-read" onMouseUp={handleMouseUp} onMouseDown={() => {
      setSelectedText("");
      setDisplayPopUp(false);
      
    }}
    >
      
      <div className="article-content-container" >
      <div
						className="highlightopinner"
						onClick={() => {
							opennotePopup();
						}}
					>
						<BsPencilSquare size={20} />
						<span>Note</span>
					</div>
      <Toaster></Toaster>
        {sortedComponents.map((component, index) => (
          <React.Fragment key={index}>{component}</React.Fragment>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default ArticleRead;
