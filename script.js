function insert_Row() {
    //Write your code here
	const table=document.getElementById("sampleTable");
    const row=document.createElement("tr");
    const cell1=document.createElement("td");
    const cell2=document.createElement("td");
    cell1.innerText="New Cell1";
    cell2.innerText="New Cell2";
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.insertBefore(row, table.firstChild);
  
}
