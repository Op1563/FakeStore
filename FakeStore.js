let leftaside = document.getElementById('left');
let rightaside = document.getElementById('right');

let fetchdata = async function () {
    let res = await fetch('https://fakestoreapi.com/products');
    console.log(res);
    let data = await res.json();
    console.log(data);
    displaydata(data);
}

fetchdata();

function displaydata(fetcheddata) {
    fetcheddata.forEach(element => {
        console.log(element);
        let div = document.createElement('div');
        div.setAttribute('class', 'leftdiv');

        let img = document.createElement('img');
        if (!element.image || element.image === "") {
            img.src = "default-image.jpg";
        } else {
            img.src = element.image;
        }
        img.style.height = "350px";
        img.style.width = "290px";

        div.appendChild(img);

        let title = document.createElement('h4');
        title.textContent = element.title;
        title.style.fontSize = "18px"; // Set initial font size
        div.appendChild(title);

        let price = document.createElement('p');
        price.textContent = `price:${element.price}$`;
        price.style.fontSize = "14px"; // Set initial font size
        price.style.fontWeight = "normal"; // Set initial font weight
        div.appendChild(price);

        let shopNowButton = document.createElement('button');
        shopNowButton.textContent = 'Shop Now';
        shopNowButton.style.fontSize = '14px';
        shopNowButton.style.marginTop = '10px';
        shopNowButton.style.padding = '15px 60px';
        shopNowButton.style.backgroundColor = '#4CAF50';
        shopNowButton.style.color = 'white';
        shopNowButton.style.border = 'none';
        shopNowButton.style.borderRadius = '5px';
        shopNowButton.style.cursor = 'pointer';
        div.appendChild(shopNowButton);

        shopNowButton.addEventListener('click', function() {
            // Remove any existing selected item
            let existingSelectedItem = document.querySelector('.selected-item');
            if (existingSelectedItem) {
                rightaside.removeChild(existingSelectedItem);
            }

            // Create a new div forthe selected item
            let selectedDiv = document.createElement('div');
            selectedDiv.setAttribute('class', 'selected-item');

            // Create an image element for the selected item
            let selectedImg = document.createElement('img');
            if (!element.image || element.image === "") {
                selectedImg.src = "default-image.jpg";
            } else {
                selectedImg.src = element.image;
            }
            selectedImg.style.height = "400px";
            selectedImg.style.width = "300px";

            // Create a title element for the selected item
            let selectedTitle = document.createElement('h4');
            selectedTitle.textContent = element.title;
            selectedTitle.style.fontSize = "36px"; // Increase font size for selected item

            // Create a price element for the selected item
            let selectedPrice = document.createElement('p');
            selectedPrice.textContent = `price:${element.price}$`;
            selectedPrice.style.fontSize = "24px"; // Increase font size for selected item
            selectedPrice.style.fontWeight = "bold"; // Set font weight to bold for selected item

            // Append the elements to the selected div
            selectedDiv.appendChild(selectedImg);
            selectedDiv.appendChild(selectedTitle);
            selectedDiv.appendChild(selectedPrice);

            // Append the selected div to the right side
            rightaside.appendChild(selectedDiv);

            // Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Add click event listener to the selected div to remove it from the right side
            selectedDiv.addEventListener('click', function(){
                rightaside.removeChild(selectedDiv);
            });
        });

        leftaside.appendChild(div);
    });
}