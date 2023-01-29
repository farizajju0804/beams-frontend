import { fromRange } from "xpath-range"
import { v4 as uuidv4 } from "uuid"

function getSelection() {
  if (window.getSelection) {
    return window.getSelection()
  }

  if (document.selection) {
    return document.selection
  }

  return null
}

const getXpathParameters = xpath => {
  const startOffset = xpath.startOffset
  const endOffset = xpath.endOffset
  let startContainer = xpath.start
  startContainer = startContainer.replace(/\(|\)/g, "")
  let endContainer = xpath.end
  endContainer = endContainer.replace(/\(|\)/g, "")
  return { startOffset, endOffset, startContainer, endContainer }
}

export function onHighlightAction(
  colorName,
  decision,
  setShowToolTip,
  userAnnotations,
) {
  let text =
    (ContentSelector.getSelection() &&
      ContentSelector.getSelection().toString()) ||
    ""

  if (!text || text === " ") {
    setShowToolTip(false)
    return
  }

  const selection = getSelection()
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0)
    const content = document.getElementById("decision-reader-body-root")
    let xpath = null
    if (content) {
      xpath = fromRange(range, content)
    }
    if (xpath) {
      try {
        let {
          startOffset,
          endOffset,
          startContainer,
          endContainer,
        } = getXpathParameters(xpath)
        const highlightId = uuidv4()
        const typename = "highlight"
        userAnnotations.saveUserAnnotation(
          text,
          colorName,
          decision.id,
          highlightId,
          startOffset,
          endOffset,
          startContainer,
          endContainer,
          typename
        )
      } catch (e) {
        console.error("user highlight failed: ", e)
      }
    }
  }
  setShowToolTip(false)
}