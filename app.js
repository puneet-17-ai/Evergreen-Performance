// Minimal progressive enhancement: no framework and no third-party requests.
const products = [
  {name:"Sage ceramic vase",description:"Hand-finished shape for stems or display.",price:"₹1,290",tag:"Bestseller",shape:"vase",color:"#b7c7a8"},
  {name:"Everyday planter",description:"A simple home for leafy companions.",price:"₹890",tag:"Natural",shape:"pot",color:"#c4a68b"},
  {name:"Quiet table lamp",description:"Soft light with a clean silhouette.",price:"₹2,490",tag:"New",shape:"lamp",color:"#d9c58c"}
];
const shapes = {
  vase: '<path d="M44 15h38l-5 28 16 53c5 17-4 28-30 28S28 113 33 96l16-53z" fill="COLOR"/><ellipse cx="63" cy="15" rx="19" ry="5" fill="#f5f7f2"/><path d="M49 53h28" stroke="#fff" stroke-opacity=".55" stroke-width="3"/>',
  pot: '<path d="M25 38h76l-9 70c-2 14-56 14-58 0z" fill="COLOR"/><rect x="20" y="29" width="86" height="14" rx="3" fill="#8c9b80"/><path d="M63 30V5m0 22C35 18 32 5 43 4c12-1 20 14 20 23m0-5c7-20 28-23 29-10 1 11-17 14-29 15" fill="none" stroke="#476b50" stroke-width="4" stroke-linecap="round"/>',
  lamp: '<path d="M32 37h62L80 71H46z" fill="COLOR"/><path d="M60 71h8l6 39H54z" fill="#8b9a83"/><ellipse cx="64" cy="114" rx="30" ry="6" fill="#8b9a83"/>'
};
const grid = document.querySelector("#product-grid");
if (grid) {
  const fragment = document.createDocumentFragment();
  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    const visual = document.createElement("div");
    visual.className = "product-visual";
    visual.setAttribute("aria-hidden", "true");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 128 145");
    svg.setAttribute("focusable", "false");
    svg.innerHTML = shapes[product.shape].replaceAll("COLOR", product.color);
    visual.append(svg);
    const heading = document.createElement("h3");
    heading.textContent = product.name;
    const description = document.createElement("p");
    description.textContent = product.description;
    const row = document.createElement("div");
    row.className = "price-row";
    const price = document.createElement("span");
    price.className = "price";
    price.textContent = product.price;
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = product.tag;
    row.append(price, tag);
    card.append(visual, heading, description, row);
    fragment.append(card);
  });
  grid.append(fragment);
}
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
