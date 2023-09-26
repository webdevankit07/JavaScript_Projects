(async() => {

    const productContainerEl = document.getElementById('productContainer');
    const searchInputEl = document.getElementById('searchInput');


    const fetchProducts = async () => {
        try{
            productContainerEl.style.justifyContent = "center";
            productContainerEl.innerHTML = '<div class="loader"></div>';
            productContainerEl.innerHTML += '<p id="loadItem"> Loading Items.....</p>';

            const res = await fetch("https://fakestoreapi.com/products");
            return await res.json();

        }catch(error){
            console.log(error);
        }
    }
    const products = await fetchProducts();



    
    const generateProducts = (product) => {
        return `
        <div class="product_card">
            <div class="image_container">
                <img src="${product.image}"/>
            </div>
            <div class="product_content">
                <h2>${product.title}</h2>
                <p>${product.description.split(" ").slice(0,20).join(" ")}</p>
                <button class="btn">${product.price}$</button>
            </div>
        </div>`
    }




    const renderProducts = (allProducts) => {
        productContainerEl.innerHTML = "";
        allProducts.forEach( product =>{
            productContainerEl.innerHTML += generateProducts(product);
        })
    }
    renderProducts(products);






    // ............... products Filtration ............

    const checkTextContain = (productText, searchText) => {
        return productText.toString().toLowerCase().includes(searchText);
    }

    const filterHandler = (event) =>{
        const searchText = event.target.value.toLowerCase();

        const filterProducts = products.filter(product => {
            return (
                checkTextContain(product.title, searchText)||
                checkTextContain(product.description, searchText)||
                checkTextContain(product.price, searchText)
            )
        })
        productContainerEl.style.justifyContent = "";
        renderProducts(filterProducts);
    }
    searchInputEl.addEventListener("keyup", filterHandler)


})()



















































































