const userData = [
  {
    firstName: 'sachin',
    lastName: 'nishad',
    email: 'xyz@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'jatin',
    lastName: 'nishad',
    email: 'xyz1@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'ankit',
    lastName: 'nishad',
    email: 'xyz2@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'himanshu',
    lastName: 'nishad',
    email: 'xyz3@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'amit',
    lastName: 'nishad',
    email: 'xyz4@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'kamlesh',
    lastName: 'nishad',
    email: 'xyz5@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
];

const roleData = {
  name: 'developer',
  slug: 'developer',
};

const categoryData = {
  name: 'phone',
  slug: 'phone',
  image: 'phone image url',
  description: 'phone des',
};

const tagData = {
  name: 'phone',
  slug: 'phone',
};

const productData = [
  {
    name: 'poco x3 pro',
    thumbnail: 'thumbnail url',
    productGallery: 'poco gallery url',
    description: 'nice phone',
    basePrice: 23000,
    sellPrice: 18999,
    categoryName: 'phone',
    additionalInfo: 'nothing',
  },
  {
    name: 'redmi note 3',
    thumbnail: 'thumbnail url',
    productGallery: 'redmi gallery url',
    description: 'nice phone',
    basePrice: 13999,
    sellPrice: 11999,
    categoryName: 'phone',
    additionalInfo: 'nothing',
  },
  {
    name: 'acer predator',
    thumbnail: 'thumbnail url',
    productGallery: 'acer gallery url',
    description: 'nice laptop',
    basePrice: 79999,
    sellPrice: 69999,
    categoryName: 'laptop',
    additionalInfo: 'nothing',
  },
  {
    name: 'redmi note 5',
    thumbnail: 'thumbnail url',
    productGallery: 'redmi gallery url',
    description: 'nice phone',
    basePrice: 11999,
    sellPrice: 10999,
    categoryName: 'phone',
    additionalInfo: 'nothing',
  },
  {
    name: 'redmi note 5 pro',
    thumbnail: 'thumbnail url',
    productGallery: 'redmi gallery url',
    description: 'nice phone',
    basePrice: 15999,
    sellPrice: 14999,
    categoryName: 'phone',
    additionalInfo: 'nothing',
  },
  {
    name: 'oneplus 8t',
    thumbnail: 'thumbnail url',
    productGallery: 'oneplus gallery url',
    description: 'nice phone',
    basePrice: 34999,
    sellPrice: 30999,
    categoryName: 'phone',
    additionalInfo: 'nothing',
  },
  {
    name: 'hp omen',
    thumbnail: 'thumbnail url',
    productGallery: 'hp gallery url',
    description: 'nice laptop',
    basePrice: 69999,
    sellPrice: 65999,
    categoryName: 'laptop',
    additionalInfo: 'nothing',
  },
  {
    name: 'mi tv',
    thumbnail: 'thumbnail url',
    productGallery: 'mi gallery url',
    description: 'nice tv',
    basePrice: 14999,
    sellPrice: 12999,
    categoryName: 'tv',
    additionalInfo: 'nothing',
  },
  {
    name: 'oneplus tv',
    thumbnail: 'thumbnail url',
    productGallery: 'oneplus gallery url',
    description: 'nice tv',
    basePrice: 15999,
    sellPrice: 12999,
    categoryName: 'tv',
    additionalInfo: 'nothing',
  },
  {
    name: 'realme tv',
    thumbnail: 'thumbnail url',
    productGallery: 'realme gallery url',
    description: 'nice tv',
    basePrice: 13999,
    sellPrice: 12999,
    categoryName: 'tv',
    additionalInfo: 'nothing',
  },
];

const cartData = {
  product: 'poco x3 pro',
  user: 'sachin',
  productQuantity: 1,
  basePrice: 23000,
  sellPrice: 16000,
  totalPrice: 16000,
};

const orderData = {
  userId: new mongoose.Types.ObjectId(),
  totalItems: [{ name: 'poco' }],
  products: [{ name: 'poco x3 pro' }],
  billingAddress: 'mumbai',
  shippingAddress: 'mumbai',
  transactionStatus: true,
  paymentMode: 'paytm',
  PaymentStatus: true,
  orderStatus: true,
};

module.exports = {
  userData,
  roleData,
  categoryData,
  tagData,
  productData,
  cartData,
  orderData,
};
