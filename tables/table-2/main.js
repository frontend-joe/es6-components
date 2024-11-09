let dragSrc = null;
const thead = document.querySelector("thead"),
  tbody = document.querySelector("tbody"),
  theadCells = thead.rows[0].cells;

const dragStart = (e) => {
  e.target.classList.add("drag");
  Array.from(theadCells).forEach((th) => th.classList.remove("drop"));
  dragSrc = e.target;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", e.target.cellIndex);
};

const dragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
};

const dragEnter = (e) => e.target.classList.add("over");

const dragLeave = (e) => e.target.classList.remove("over");

const dragEnd = (e) => {
  e.target.classList.remove("drag");
  const headers = Array.from(theadCells);
  headers.forEach((th) => th.classList.remove("over"));
};

const drop = (e) => {
  e.stopPropagation();
  e.target.classList.add("drop");

  if (!e.target.isSameNode(dragSrc)) {
    const headers = Array.from(theadCells);
    const targetCellIndex = e.target.cellIndex;
    const cellIndex = e.dataTransfer.getData("text/plain");
    const insertPosition =
      targetCellIndex > cellIndex ? "afterend" : "beforebegin";

    headers[targetCellIndex].insertAdjacentElement(
      insertPosition,
      headers[cellIndex]
    );

    Array.from(tbody.rows).forEach((tr) => {
      tr.cells[targetCellIndex].insertAdjacentElement(
        insertPosition,
        tr.cells[cellIndex]
      );
    });
  }
};

Array.from(theadCells).forEach((th) => {
  th.addEventListener("dragstart", dragStart);
  th.addEventListener("dragover", dragOver);
  th.addEventListener("dragenter", dragEnter);
  th.addEventListener("dragleave", dragLeave);
  th.addEventListener("dragend", dragEnd);
  th.addEventListener("drop", drop);
});
