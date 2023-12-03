// Mảng chứa thông tin các slider
var sliders = [
    {
        imageSrc: "images/A3.jpeg",
        label: "Đảo Phú Quốc",
        content: "Bức tranh kiệt tác của thiên nhiên."
    },
    {
        imageSrc: "images/cat ba.jpeg",
        label: "Đảo Cát Bà",
        content: "Các địa điểm không thể bỏ lỡ khi đi du lịch Cát Bà Hải Phòng"
    },
    {
        imageSrc: "images/ly son.jpeg",
        label: "Đảo Lý Sơn",
        content: "Khám phá đảo Lý Sơn  Thiên đường hoang sơ giữa lòng biển"
    },
    {
        imageSrc: "images/phu quy.jpg",
        label: "Đảo Phú Quý",
        content: "Khám phá bãi biển Phú Quý"
    },
];


// Lấy các phần tử DOM
var carouselIndicators = document.querySelector(".carousel-indicators");
var carouselInner = document.querySelector(".carousel-inner");

// Tạo các slide indicators và slide items
for (var i = 0; i < sliders.length; i++) {
    var slider = sliders[i];

    // Tạo slide indicator
    var button = document.createElement("button");
    button.type = "button";
    button.setAttribute("data-bs-target", "#carouselExampleDark");
    button.setAttribute("data-bs-slide-to", i);
    if (i === 0) {
        button.className = "active";
        button.setAttribute("aria-current", "true");
    }
    button.setAttribute("aria-label", "Slide " + (i + 1));
    carouselIndicators.appendChild(button);

    // Tạo slide item
    var slideItem = document.createElement("div");
    slideItem.className = "carousel-item";
    if (i === 0) {
        slideItem.classList.add("active");
    }

    // Tạo hình ảnh slide
    var image = document.createElement("img");
    image.src = slider.imageSrc;
    image.className = "d-block w-100";
    image.alt = "Slide " + (i + 1);
    slideItem.appendChild(image);

    // Tạo caption của slide
    var caption = document.createElement("div");
    caption.className = "carousel-caption d-none d-md-block text-success bg-light opacity-75 rounded-4";
    var title = document.createElement("h4");
    title.textContent = slider.label;
    var content = document.createElement("p");
    content.textContent = slider.content;
    caption.appendChild(title);
    caption.appendChild(content);
    slideItem.appendChild(caption);

    carouselInner.appendChild(slideItem);
}
for (var i = 0; i < sliders.length; i++) {
    var img = new Image();
    img.src = sliders[i].imageSrc;
    img.width = 900;
    img.height = 100;
    sliders[i].imageSrc = img.src;
}