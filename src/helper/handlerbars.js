const Handlebars = require("handlebars");
module.exports = {
  // sum: (a, b) => a + b,
  sortable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : "default";
    const icons = {
      default: "fa-solid fa-sort",
      desc: "fas fa-sort-amount-down-alt",
      asc: "fas fa-sort-amount-up-alt",
    };
    const types = {
      default: "asc",
      asc: "desc",
      desc: "asc",
    };
    const prices = {
      default: "Giá từ thấp tới cao"
        ? "Giá từ cao tới thấp"
        : "Giá từ thấp tới cao",
      asc: "Giá từ thấp tới cao",
      desc: "Giá từ cao tới thấp",
    };
    // const icon = icons[sortType];
    const price = prices[sortType];
    const type = types[sortType];
    const address = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`
    );
    const ouput = `<a href="${address}" style="text-decoration: none;">
                 Giá: ${price}
              </a>`;
    return new Handlebars.SafeString(ouput);
  },
};
