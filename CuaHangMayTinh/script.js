// Khai báo các sản phẩm:
let products = [
    {
        name: 'Asus Vivobook Go 15 E1504FA R5 7520U',
        image: 'https://cdn.tgdd.vn/Products/Images/44/311178/TimerThumb/asus-vivobook-go-15-e1504fa-r5-nj776w.jpg',
        price: 12490000,
        rating: 2.5
    },
    {
        name: 'Asus Vivobook 16 X1605VA i5 1335U',
        image: 'https://cdn.tgdd.vn/Products/Images/44/309375/asus-vivobook-16-x1605va-i5-mb360w-thumb-laptop-600x600.jpg',
        price: 16190000,
        rating: 4
    },
    {
        name: 'Asus Vivobook 15 OLED A1505ZA',
        image: 'https://cdn.tgdd.vn/Products/Images/44/311180/asus-vivobook-15-oled-a1505za-i5-l1337w-thumb-1-600x600.jpg',
        price: 16490000,
        rating: 3.5
    },

    // Zeenbook 3 sp
    {
        name: 'Asus Zenbook 14 OLED UX3405MA Ultra 7',
        image: 'https://cdn.tgdd.vn/Products/Images/44/321468/asus-zenbook-14-oled-ux3405ma-ultra-7-pp152w-thumb-600x600.jpg',
        price: 32990000,
        rating: 4.5
    },
    {
        name: 'Asus Zenbook 14 Flip OLED UP3404VA',
        image: 'https://cdn.tgdd.vn/Products/Images/44/306070/asus-zenbook-14-flip-oled-up3404va-i5-kn038w-thumb-600x600.jpg',
        price: 24990000,
        rating: 4
    },
    {
        name: 'Asus Zenbook 14 OLED UX3402VA',
        image: 'https://cdn.tgdd.vn/Products/Images/44/304260/asus-zenbook-14-oled-ux3402va-i5-km085w-thumb-1-600x600.jpg',
        price: 22990000,
        rating: 5
    },
    // =================================== End zeenbook =======================================
    // =================================== Gaming =======================================
    {
        name: 'Asus TUF Gaming F15 FX507ZC4',
        image: 'https://cdn.tgdd.vn/Products/Images/44/317709/asus-tuf-gaming-f15-fx507zc4-i5-hn229w-thumb-600x600.jpg',
        price: 20990000,
        rating: 4
    },
    {
        name: 'Asus TUF Gaming F15 FX506HF',
        image: 'https://cdn.tgdd.vn/Products/Images/44/304867/asus-tuf-gaming-f15-fx506hf-i5-hn014w-thumb-600x600.jpg',
        price: 15990000,
        rating: 3.5
    },
    {
        name: 'Asus TUF Gaming A15 FA507NU',
        image: 'https://cdn.tgdd.vn/Products/Images/44/321059/asus-tuf-gaming-a15-fa507nu-r5-lp105w-thumb-600x600.jpg',
        price: 22490000,
        rating: 3.5
    },
    // =================================== End gaming =======================================
    // =================================== Vostro =======================================
    {
        name: 'Dell Vostro 15 3520',
        image: 'https://cdn.tgdd.vn/Products/Images/44/305655/dell-vostro-3520-i3-v5i3614w1-thumb-600x600.jpg',
        price: 10990000,
        rating: 4
    },
    {
        name: 'Dell Vostro 14 3430',
        image: 'https://cdn.tgdd.vn/Products/Images/44/314830/dell-vostro-3430-i5-71011900-glr-thumb-600x600.jpg',
        price: 17990000,
        rating: 4
    },
    {
        name: 'Dell Vostro 15 3530',
        image: 'https://cdn.tgdd.vn/Products/Images/44/315933/dell-vostro-15-3530-i3-v5i3465w1-thumb-600x600.jpg',
        price: 14190000,
        rating: 3.5
    },
    // =================================== End Vostro =======================================
    // ===================================  Inspiron =======================================
    {
        name: 'Dell Inspiron 15 3520 i5 1235U (25P231)',
        image: 'https://cdn.tgdd.vn/Products/Images/44/321192/TimerThumb/dell-inspiron-15-3520-i5-25p231-thumb.jpg',
        price: 15490000,
        rating: 4
    },
    {
        name: 'Dell Inspiron 15 3530 ',
        image: 'https://cdn.tgdd.vn/Products/Images/44/309243/dell-inspiron-3530-i5-1335u-i5u085w11blu-glr-thumb-600x600.jpg',
        price: 17490000,
        rating: 4
    },
    {
        name: 'Dell Inspiron 14 7430 2-in-1',
        image: 'https://cdn.tgdd.vn/Products/Images/44/309305/dell-inspiron-14-7430-2-in-1-i7-i7u165w11slu-glr-thumb-600x600.jpg',
        price: 28990000,
        rating: 3.5
    },
    // =================================== End Inspiron =======================================
    // =================================== XPS =======================================
    {
        name: 'Dell XPS 13 Plus 9320 ',
        image: 'https://cdn.tgdd.vn/Products/Images/44/314838/dell-xps-13-plus-9320-i5-71013325-thumb-1-600x600.jpg',
        price: 54990000,
        rating: 4.5
    },
    {
        name: 'Dell XPS 13 Plus 9320',
        image: 'https://cdn.tgdd.vn/Products/Images/44/318445/dell-xps-13-plus-9320-i7-1y0wg-thumb-600x600.jpg',
        price: 59990000,
        rating: 3.5
    },
    {
        name: 'Dell XPS 15 9530 i7 13700H',
        image: 'https://cdn.tgdd.vn/Products/Images/44/314837/dell-xps-15-9530-i7-71015716-thumb-600x600.jpg',
        price: 74490000,
        rating: 5
    },
    // =================================== End XPS =======================================
    // =================================== Macbook Pro =======================================
    {
        name: 'MacBook Pro 14 inch M3',
        image: 'https://cdn.tgdd.vn/Products/Images/44/320981/macbook-pro-14-inch-m3-2023-16gb-thumb-600x600.jpg',
        price: 44790000,
        rating: 5
    },
    {
        name: 'MacBook Pro 14 inch M3 Pro',
        image: 'https://cdn.tgdd.vn/Products/Images/44/320981/macbook-pro-14-inch-m3-2023-16gb-thumb-600x600.jpg',
        price: 49490000,
        rating: 5
    },
    {
        name: 'MacBook Pro 14 inch M3 Max',
        image: 'https://cdn.tgdd.vn/Products/Images/44/320981/macbook-pro-14-inch-m3-2023-16gb-thumb-600x600.jpg',
        price: 79490000,
        rating: 5
    },
    // =================================== End Macbook Pro =======================================
    // =================================== Macbook Air =======================================
    {
        name: 'MacBook Air 13 inch M1 2020 7-core GPU',
        image: 'https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gray-600x600.jpg',
        price: 18490000,
        rating: 3.5
    },
    {
        name: 'MacBook Air 13 inch M2',
        image: 'https://cdn.tgdd.vn/Products/Images/44/289472/apple-macbook-air-m2-2022-16gb-256gb-thumb-600x600.jpg',
        price: 30290000,
        rating: 5
    },
    {
        name: 'MacBook Air 15 inch M2',
        image: 'https://cdn.tgdd.vn/Products/Images/44/309018/apple-macbook-air-15-inch-m2-2023-midnight-thumb-600x600.jpg',
        price: 34990000,
        rating: 5
    },
    // =================================== End Macbook Air =======================================
    // =================================== Macbook =======================================
   
    {
        name: 'MacBook Pro 14 inch M3',
        image: 'https://cdn.tgdd.vn/Products/Images/44/318228/macbook-pro-14-inch-m3-2023-311023-095050-600x600.jpg',
        price: 38990000,
        rating: 3.5
    },
    // =================================== End Macbook =======================================

    {
        name: 'HP 15s fq5229TU i3 1215U (8U237PA)',
        image: 'https://cdn.tgdd.vn/Products/Images/44/313084/TimerThumb/hp-15s-fq5229tu-i3-8u237pa.jpg',
        price: 9990000,
        rating: 3.5
    },
    
 
    
    {
        name: 'Lenovo IdeaPad 1 15AMN7',
        image: 'https://cdn.tgdd.vn/Products/Images/44/303562/TimerThumb/lenovo-ideapad-1-15amn7-r5-82vg0061vn-(8).jpg',
        price: 10090000,
        rating: 4
    }
];

const giohang = [
    {
        name: 'Lenovo IdeaPad 1 15AMN7',
        image: 'https://cdn.tgdd.vn/Products/Images/44/303562/TimerThumb/lenovo-ideapad-1-15amn7-r5-82vg0061vn-(8).jpg',
        price: 10090000,
        quantity: 1
    },
    {
        name: 'MacBook Air 13 inch M2',
        image: 'https://cdn.tgdd.vn/Products/Images/44/289472/apple-macbook-air-m2-2022-16gb-256gb-thumb-600x600.jpg',
        price: 30290000,
        quantity: 3
    },
    {
        name: 'Dell XPS 13 Plus 9320 ',
        image: 'https://cdn.tgdd.vn/Products/Images/44/314838/dell-xps-13-plus-9320-i5-71013325-thumb-1-600x600.jpg',
        price: 54990000,
        quantity: 5
    },
];


function preloadImages(products){
    products.forEach(function(product){
        let img = new Image();
        img.src = product.image;
    });
}

preloadImages(products);

function muahang(button) {
    var item = button.parentElement.parentElement.cloneNode(true);
}

function chitiet(div){
   
    // Lấy các phần tử trong thẻ 
    var  imgSrc = div.querySelector('img').src;
    var productName = div.querySelector('p').innerText;
    var price = div.querySelector('span').innerText;
    window.location.href = 'chitietsanpham.html?img=' + encodeURIComponent(imgSrc) + '&name=' + encodeURIComponent(productName) + '&price=' + encodeURIComponent(price);
    
}

function clickChiTiet() {
    var items = document.querySelectorAll('.item');

    // Lặp qua từng phần tử và thêm bộ lắng nghe sự kiện click
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            // Gọi hàm chitiet và truyền vào phần tử được click
            chitiet(this);
        });
    });
    
}


function taosp(product, parentElement) {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    let img = document.createElement('img');
    img.src = product.image;
    itemDiv.appendChild(img);

    let productName = document.createElement('p');
    productName.textContent = product.name;
    itemDiv.appendChild(productName);

    let price = document.createElement('span');
    price.textContent =  new Intl.NumberFormat().format(product.price)  + 'đ';
    itemDiv.appendChild(price);

    // Tạo phần tử div cho star rating
    let starDiv = document.createElement('div');
    starDiv.classList.add('star');

    // Thêm các sao vào div star rating
    for (let i = 0; i < 5; ++i) {
        let starIcon = document.createElement('i');
        if (i < product.rating) {
            starIcon.classList.add('fa-solid', 'fa-star');
        } else {
            if (i - 0.5  == product.rating )
            {
                starIcon.classList.add('fa-solid', 'fa-star-half-stroke');
            }
            else {
                starIcon.classList.add('fa-regular', 'fa-star');
            }
        }
        starDiv.appendChild(starIcon);
    }
    itemDiv.appendChild(starDiv);

    let btn = document.createElement('button');
    btn.textContent = 'Mua hàng';
    itemDiv.appendChild(btn);

    // Thêm sản phẩm vào thẻ div chứa sản phẩm ngẫu nhiên
    parentElement.appendChild(itemDiv);
}

function layNgauNhienSP(arr, n) {
    // Tạo một bản sao của mảng để tránh ảnh hưởng đến mảng gốc
    let shuffled = arr.slice(0);
    
    // xáo trộn mảng đã sao chép
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Kiểm tra xem người dùng nhập vào là email hay sđt
function validateInput(inputValue) {
    // Biểu thức chính quy để kiểm tra số điện thoại
    let phoneRegex = /^\d{10,11}$/; // Số điện thoại có 10 hoặc 11 chữ số
  
    // Biểu thức chính quy để kiểm tra địa chỉ email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email đúng định dạng
  
    // Kiểm tra nếu inputValue là số điện thoại hoặc email
    if (phoneRegex.test(inputValue)) {
      return 'Số điện thoại hợp lệ';
    } else if (emailRegex.test(inputValue)) {
      return 'Email hợp lệ';
    } else {
      return 'Số điện thoại hoặc Email không hợp lệ';
    }
}


function showpassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
          passwordInput.type = "password";
    }
}

function sendOTP() {
        // Send OTP to the user's phone number
        alert("Mã OTP đã được gửi đến số điện thoại của bạn.");
}

function searchProduct(){
        // Lấy giá trị nhập vào từ ô input tìm kiếm
        var input = document.getElementById('searchInput').value.toLowerCase();
        var nametitle = document.getElementById('tenloaisp');
        
        var elements = document.getElementsByClassName("title");

        var img = document.getElementById("img_an");
        if (img){
            img.remove();
        }
        if (input) {
            if (elements){
                elements[2].style.display = 'none';
                elements[1].innerHTML = "Tìm kiếm";
            }
            
    
            var productDivs = document.querySelectorAll(".product");
            if (productDivs) {
                productDivs.forEach(function(div) {
                    div.innerHTML = "";
                });
            }
            
             // Lặp qua từng sản phẩm để tìm kiếm        
            products.forEach(function (product) {
                var productName = product.name.toLowerCase();
                if (productName.includes(input)) {
                    taosp(product, productDivs[1]);
                } 
            });
        }
        else{
            if (elements) {
                elements[2].style.display = 'none';
                elements[1].innerHTML = "Tất cả các sản phẩm"
            }
        }
        clickChiTiet();
}

function clearSeach(){
    var searchInput = document.getElementById("searchInput");
    searchInput.value = "";
}







// Phàn mua hàng:
const muaHangButton = document.getElementById('mua-hang');
// Thêm sự kiện click cho nút "Mua hàng"
muaHangButton.addEventListener('click', function() {
    // Lấy thông tin sản phẩm
    let tenSanPham = document.getElementById('product-name').innerText;
    let giaSanPham = document.getElementById('product-price').innerText;
    let soLuong = parseInt(document.getElementById('soluong').value);
    let hinhAnh = document.getElementById('product-img').src;

    // Nếu người dùng đã mua sp này rồi thì tăng số lượng
    // Xử lý giá sản phẩm để lấy số tiền (loại bỏ dấu chấm và đổi sang kiểu số)
    let gia = parseInt(giaSanPham.replace(/\./g, '').replace('đ', ''));

    // Tạo đối tượng sản phẩm mới
    let sanPham = {
        name: tenSanPham,
        price: gia,
        quantity: soLuong,
        image: hinhAnh
    };

    // Thêm sản phẩm vào giỏ hàng
    giohang.push(sanPham);

    loadGioHang();

    alert("Sản phẩm đã được thêm" );
});

function loadGioHang(){
    const bodygiohang = document.getElementById("gio_hang");

    bodygiohang.innerHTML = "<p></p>";

    for(i = 0 ; i < giohang.length ; i++){
        bodygiohang.innerHTML = "<td>ADU</td>"
    }

}

// function loadgiohang() {
//     let tbody = document.querySelector('tbody');
//     tbody.innerHTML = '';
//     let i = 0;
//     giohang.forEach(function(product){
//         i = i + 1;
//         let row = document.createElement('tr');

//         let stt = document.createElement('td');
//         stt.textContent = i;
//         row.appendChild(stt);

//         let imgtd = document.createElement('td');
//         let img = document.createElement('img');
//         img.src = product.image;
//         imgtd.appendChild(img);
//         row.appendChild(imgtd);

//         let name = document.createElement('td');
//         name.textContent = product.name;
//         row.appendChild(name);

//         let quantity = document.createElement('td');
//         quantity.textContent = product.quantity;
//         row.appendChild(quantity);

//         tongtien = product.quantity * parseFloat(product.price);

//         let total = document.createElement('td');
//         total.textContent = total;


//         let btn = document.createElement('button');
//         let btn_td = document.createElement('td');
//         btn.innerHTML = "Xóa";
//         btn.setAttribute("onclick", "xoa(this)");
//         btn_td.appendChild(btn);
//         row.appendChild(btn_td);

//         row.innerHTML = `
//             <td>1</td>
//             <td><img src="${product.image}" alt="${product.name}"></td>
//             <td>${product.name}</td>
//             <td>${product.quantity}</td>
//             <td>${product.price}</td>
//             <td>${product.quantity * parseFloat(product.price.replace(/\D/g, ''))} đ</td>
//             <td><button class="delete-button" onclick="deleteRow(${index})">Xóa</button></td>
//         `;
//         alert("Chạy");
//         tbody.appendChild(row);
//     });
// }

// function deleteRow(index) {
//     let tbody = document.querySelector('tbody');
//     tbody.deleteRow(index);
// }