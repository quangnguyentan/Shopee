$("#paging").pagination({
  dataSource: "/server?page=1",
  locator: "data",
  totalNumberLocator: function (response) {
    // console.log(response.total);
    return response.total;
  },
  // dataSource: [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10],
  pageSize: 10,
  afterPageOnClick: function (event, pageNumber) {
    loadPage(pageNumber);
  },
  afterPreviousOnClick: function (event, pageNumber) {
    loadPage(pageNumber);
    console.log(pageNumber);
  },
  afterNextOnClick: function (event, pageNumber) {
    loadPage(pageNumber);
  },
});

function loadPage(page) {
  $("#list-product").html("");
  $.ajax({
    url: "/server?page=" + page,
  }).then((rs) => {
    console.log(rs);
    console.log(rs.tongSoPage);
    for (let i = 0; i < rs.data.length; i++) {
      const element = rs.data[i];
      console.log(element);
      var item = $(`
        <div data="${element.id}" class="col l-2-4 m-3 c-6 home-product-item">
          <a id="${element.name}" class="home-product-item-link" href="/detail/${element.name}">
          <div id="${element.name}" class="home-product-item__img" style="background-image: url(/img/home/${element.image}" >
        </div>
        <div class="home-product-item__info">
          <h4 id="name" class="home-product-item__name " style="text-decoration : none">${element.name}</h4>
            <div class="home-product-item__price">
                <p class="home-product-item__price-old">${element.oldPrice}đ</p>
                <p class="home-product-item__price-new">${element.newPrice}đ
                </p>
                <i class="home-product-item__ship fas fa-shipping-fast"></i>
            </div>
            <div class="home-product-item__footer">
                <div class="home-product-item__save">
                    <input type="checkbox" id="heart-save-{{this.id}}">
                    <label for="heart-save-{{this.id}}" class="far fa-heart"></label>
                </div>
                <div class="home-product-item__rating-star">
                    <i class="star-checked far fa-star"></i>
                    <i class="star-checked far fa-star"></i>
                    <i class="star-checked far fa-star"></i>
                    <i class="star-checked far fa-star"></i>
                    <i class="star-uncheck far fa-star"></i>
                </div>
                <div class="home-product-item__saled">Đã bán ${element.saled}</div>
            </div>
            <div class="home-product-item__origin">${element.origin}</div>
            <div class="home-product-item__favourite">
                Yêu thích
            </div>
            <div class="home-product-item__sale-off">
                <div class="home-product-item__sale-off-value">${element.saleOff}%</div>
                <div class="home-product-item__sale-off-label">GIẢM</div>
            </div>
        </div>
        <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
    </a>
    </div>
          `);
      $("#list-product").append(item);
    }
  });
}
loadPage(1);
