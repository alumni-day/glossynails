function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const images = [
  {
    "desc": "Strawberries nails",
    "link": "https://farm8.staticflickr.com/7639/17101096322_34e34e4b46_b.jpg"
  },
  {
    "desc": "Painting strawberries",
    "link": "https://farm8.staticflickr.com/7690/16914825068_8ec1850a01_b.jpg"
  },
  {
    "desc": "Artificial nails",
    "link": "https://farm9.staticflickr.com/8770/16895200997_47a641978f_b.jpg"
  },
  {
    "desc": "3 seats",
    "link": "https://farm9.staticflickr.com/8780/16914801568_e25d8d3717_b.jpg"
  },
  {
    "desc": "7 Seats",
    "link": "https://farm8.staticflickr.com/7652/17101064842_958d91d047_b.jpg"
  },
  {
    "desc": "Vases",
    "link": "https://farm9.staticflickr.com/8768/17101050442_85da4418c4_b.jpg"
  },
  {
    "desc": "Flavors",
    "link": "https://farm9.staticflickr.com/8756/17101882641_8039d3ae88_b.jpg"
  },
  {
    "desc": "Flowers",
    "link": "https://farm8.staticflickr.com/7654/17076591916_3b737ddfcc_b.jpg"
  },
  {
    "desc": "Front view",
    "link": "https://farm9.staticflickr.com/8726/17101874161_2ba67ab0fa_b.jpg"
  },
  {
    "desc": "Manicure chairs",
    "link": "https://farm9.staticflickr.com/8717/16895155317_91dfaaf550_b.jpg"
  },
  {
    "desc": "Nail polish",
    "link": "https://farm8.staticflickr.com/7643/16482393243_188fedd7ca_b.jpg"
  },
  {
    "desc": "Nail wall",
    "link": "https://farm9.staticflickr.com/8778/17076573866_360b2b9e65_b.jpg"
  },
  {
    "desc": "Spa",
    "link": "https://farm9.staticflickr.com/8788/16916316759_4cde0e9c43_b.jpg"
  },
  {
    "desc": "Seat spa",
    "link": "https://farm9.staticflickr.com/8746/16895126477_f15617e24e_b.jpg"
  },
  {
    "desc": "Seat spa angled",
    "link": "https://farm9.staticflickr.com/8749/17101834661_de05516bbe_b.jpg"
  },
  {
    "desc": "7 Spas angled",
    "link": "https://farm9.staticflickr.com/8693/17100990012_2c541c1f65_b.jpg"
  },
  {
    "desc": "Comfort chair",
    "link": "https://farm8.staticflickr.com/7649/17100985092_e3ce0d3f92_b.jpg"
  },
  {
    "desc": "Font desk",
    "link": "https://farm9.staticflickr.com/8704/17076534036_2b0af7fa38_b.jpg"
  },
  {
    "desc": "Reds",
    "link": "https://farm9.staticflickr.com/8701/17076575936_2ea4bc1420_b.jpg"
  },
  {
    "desc": "Pink nails",
    "link": "https://farm8.staticflickr.com/7718/17399786379_af43532aa0_b.jpg"
  },
  {
    "desc": "Sera",
    "link": "https://farm6.staticflickr.com/5457/17586045815_c8b6a86f17_b.jpg"
  },
  {
    "desc": "Manicure chairs",
    "link": "https://farm9.staticflickr.com/8724/16916338969_d2f345d4f5_b.jpg"
  }
];

function timeout(list) {
  const raw = list.pop();
  if (raw) {
    const img = new Image();
    img.addEventListener('load', () => {
      document.body.style.backgroundImage = `url('${img.src}')`;
      list.unshift(raw);
      setTimeout(() => timeout(list), 10000);
    });
    img.src = raw.link;
  }
}

(function () {
  const img = shuffle(images);
  timeout(img);
})();
