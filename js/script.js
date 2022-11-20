// Main function
function main() {

    // Page navigation

    let activePageId = "pageHome";

    const boxes = document.querySelectorAll('.pageLink');
    boxes.forEach(box => {
        box.addEventListener('click', function handleClick(event) {
            document.getElementById(activePageId).style.display = "none"
            activePageId = box.name;
            document.getElementById(activePageId).style.display = "block"
        });
    });

    // Table
    let pathCupcake = "pics/products/cupcake";
    let pathWeddingcake = "pics/products/weddingcake";

    // Content of Cupcake table
    let tableCupcake = [
        {
            image: pathCupcake + "/" + "cc1.jpg", title: 'Cupcake 1', price: '$1.00'
        },
        {
            image: pathCupcake + "/" + "cc2.jpg", title: 'Cupcake 2', price: '$2.00'
        },
        {
            image: pathCupcake + "/" + "cc3.jpg", title: 'Cupcake 3', price: '$3.00'
        },
        {
            image: pathCupcake + "/" + "cc4.jpg", title: 'Cupcake 4', price: '$4.00'
        },
        {
            image: pathCupcake + "/" + "cc5.jpg", title: 'Cupcake 5', price: '$5.00'
        },
        {
            image: pathCupcake + "/" + "cc6.jpg", title: 'Cupcake 6', price: '$6.00'
        },
        {
            image: pathCupcake + "/" + "cc7.jpg", title: 'Cupcake 7', price: '$7.00'
        },
        {
            image: pathCupcake + "/" + "cc8.jpg", title: 'Cupcake 8', price: '$8.00'
        },
    ];

    // Content of Wedding cake table
    let tableWeddingcake = [
        {
            image: pathWeddingcake + "/" + "wc1.jpg", title: 'Wedding cake 1', price: '$10.00'
        },
        {
            image: pathWeddingcake + "/" + "wc2.jpg", title: 'Wedding cake 2', price: '$20.00'
        },
        {
            image: pathWeddingcake + "/" + "wc3.jpg", title: 'Wedding cake 3', price: '$30.00'
        },
        {
            image: pathWeddingcake + "/" + "wc4.jpg", title: 'Wedding cake 4', price: '$40.00'
        },
        {
            image: pathWeddingcake + "/" + "wc5.jpg", title: 'Wedding cake 5', price: '$50.00'
        },
        {
            image: pathWeddingcake + "/" + "wc6.jpg", title: 'Wedding cake 6', price: '$60.00'
        },
        {
            image: pathWeddingcake + "/" + "wc7.jpg", title: 'Wedding cake 7', price: '$70.00'
        },
        {
            image: pathWeddingcake + "/" + "wc8.jpg", title: 'Wedding cake 8', price: '$80.00'
        },
    ];

    // Create Cupcake table
    makeTable("productTableCupCake", tableCupcake);
    // Create Wedding cake table
    makeTable("productTableWeddingCake", tableWeddingcake);
}

// Create table
function makeTable(tableId, tableData) {

    let table = document.getElementById(tableId);
    let tr = document.createElement('tr');
    for (let item of tableData) {

        let td = document.createElement('td');
        td.className = "tableCell";
        tr.appendChild(td);

        let td1div = document.createElement('div');
        td1div.className = "tableImage";
        td.appendChild(td1div);

        let tdImage = document.createElement('img');
        tdImage.className = "productTableItem";
        tdImage.src = item.image;
        td1div.appendChild(tdImage);

        let td2div = document.createElement('div');
        td2div.className = "tableTitle";
        td2div.textContent = item.title;
        td.appendChild(td2div);

        let td3div = document.createElement('div');
        td3div.className = "tablePrice";
        td3div.textContent = item.price;
        td.appendChild(td3div);
    }
    table.appendChild(tr);
}

// IIFE
(function () {
    // Add eventlistener for onload
    window.addEventListener('load', function () {
        // Run main when page is loaded
        main();
    })
})();
