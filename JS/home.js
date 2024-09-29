const featuredMuffins = [
  { name: "Blueberry Blast", image: "images/BlueberryBlastMuffin.jpg" },
  { name: "Chocolate Chip", image: "images/ChocolateChip.jpg" },
  { name: "Banana Nut", image: "images/BananaNut.jpg" },
  { name: "Lemon Poppy Seed", image: "images/LemonPoppySeed.jpg" }
];

const featuredMuffinsContainer = document.getElementById('featured-muffins');

featuredMuffins.forEach(muffin => {
  const muffinElement = document.createElement('div');
  muffinElement.classList.add('muffin-item');
  muffinElement.innerHTML = `
    <img src="${muffin.image}" alt="${muffin.name}">
    <h3>${muffin.name}</h3>
    <button onclick="alert('Added ${muffin.name} to cart!')">Add to Cart</button>
  `;
  featuredMuffinsContainer.appendChild(muffinElement);
});