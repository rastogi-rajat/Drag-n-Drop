let box = document.getElementsByClassName('Box')[0];
function main() {
    const dataList = [{
        title: "Title 1",
        content: "Test content"
    }, {
        title: "Title 2",
        content: "Test content"
    }];
    const containers = document.getElementsByClassName('Col');
    const boxes = document.getElementsByClassName('Box');
    function dragover(e) {
        e.preventDefault();
    }
    function dragenter(e) {
        e.preventDefault();
        this.className = `${this.className} selected`;
    }
    function dragleave(e) {
        e.preventDefault();
        this.className = this.className.replace(' selected', '');
    }
    function drop() {
        const parentDrop = this.parentElement;
        const parent = box.parentElement.parentElement;
        if(parent == parentDrop){
            this.append(box);
        }
        this.className = this.className.replace(' selected', '')
    }
    function dragStartBox(e) {
        box = e.target;
    }
    const boxLength = boxes.length;
    for(let i = 0; i<boxLength; i++){
        let header = document.createElement("h1");
        header.innerHTML = dataList[i].title;
        let paragraph = document.createElement("p");
        paragraph.innerHTML = dataList[i].content;
        boxes[i].append(header);
        boxes[i].append(paragraph);
        boxes[i].addEventListener("dragstart", dragStartBox);
    }
    for(const container of containers) {
        container.addEventListener("dragover", dragover);
        container.addEventListener("dragenter", dragenter);
        container.addEventListener("dragleave", dragleave);
        container.addEventListener("drop", drop);
    }
}
document.addEventListener("DOMContentLoaded", main);