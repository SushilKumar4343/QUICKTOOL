function toUpper() {
  const textArea = document.getElementById("textInput");
  textArea.value = textArea.value.toUpperCase();
}

function toLower() {
  const textArea = document.getElementById("textInput");
  textArea.value = textArea.value.toLowerCase();
}

function clearText() {
  document.getElementById("textInput").value = "";
}


// word-counter

function countText() {
  const text = document.getElementById("counterInput").value;

  const charactersWithSpace = text.length;
  const charactersWithoutSpace = text.replace(/\s/g, "").length;

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const lines = text.split(/\n/).filter(line => line.trim() !== "").length;

  document.getElementById("wordCount").innerText = words;
  document.getElementById("charCount").innerText = charactersWithSpace;
  document.getElementById("charNoSpace").innerText = charactersWithoutSpace;
  document.getElementById("lineCount").innerText = lines;
}

// remove extra space

function removeExtraSpaces() {
  const textarea = document.getElementById("spaceInput");
  let text = textarea.value;

  // Remove leading & trailing spaces
  text = text.trim();

  // Replace multiple spaces with single space
  text = text.replace(/\s+/g, " ");

  textarea.value = text;
}

function clearSpaceText() {
  document.getElementById("spaceInput").value = "";
}

//line sorter

function sortLinesAsc() {
  const textarea = document.getElementById("sortInput");
  let lines = textarea.value.split("\n");

  lines = lines
    .map(line => line.trim())
    .filter(line => line !== "")
    .sort((a, b) => a.localeCompare(b));

  textarea.value = lines.join("\n");
}

function sortLinesDesc() {
  const textarea = document.getElementById("sortInput");
  let lines = textarea.value.split("\n");

  lines = lines
    .map(line => line.trim())
    .filter(line => line !== "")
    .sort((a, b) => b.localeCompare(a));

  textarea.value = lines.join("\n");
}

function clearSortText() {
  document.getElementById("sortInput").value = "";
}

//remove duplicate line

function removeDuplicateLines() {
  const textarea = document.getElementById("duplicateInput");
  const lines = textarea.value.split("\n");

  const uniqueLines = [...new Set(
    lines.map(line => line.trim()).filter(line => line !== "")
  )];

  textarea.value = uniqueLines.join("\n");
}

function clearDuplicateText() {
  document.getElementById("duplicateInput").value = "";
}

//text reverse
function reverseText() {
  const textarea = document.getElementById("reverseInput");
  textarea.value = textarea.value.split("").reverse().join("");
}

function clearReverseText() {
  document.getElementById("reverseInput").value = "";
}
