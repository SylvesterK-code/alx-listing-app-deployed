# alx-listing-app-deployed
Deploy your application


# alx-listing-app-00

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.





..........................................................................................



# ALX Listing App

This project is a simple Airbnb clone focused on building a scalable and responsive property listing page using Next.js, TypeScript, TailwindCSS, and reusable components.

## Folder Structure

- `components/`: Reusable UI components like Card and Button.
- `interfaces/`: TypeScript interfaces for props and data.
- `constants/`: App-wide constants like API base URLs.
- `public/assets/`: Images and icons used across the app.

## How to Run Locally

```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
npm install
npm run dev









responsive listing page

mkdir -p components/layout
ni components/layout/Header.tsx 
ni components/layout/Footer.tsx 
ni components/layout/Layout.tsx

................................................
mkdir -p components/layout
ni components/layout/Header.tsx 
ni components/layout/Footer.tsx 
ni components/layout/Layout.tsx


mkdir constants 
mkdir interfaces
ni constants/index.ts 
ni interfaces/index.ts


✅ Complete Steps from Start to Finish
🔧 1. Project Setup
Created a Next.js 13+ app with TypeScript, Tailwind CSS, and ESLint.

Set up a clean directory structure:

/components

/constants

/interfaces

/pages

/public/assets (for images)

📁 2. Defined Property Interface
Created a file interfaces/index.ts:

ts
Copy
Edit
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount?: string;
}
📦 3. Created Property Listing Sample
Created a file constants/index.ts:

ts
Copy
Edit
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/your-hero-bg.jpg",
    discount: ""
  },
  // Add more properties here...
];
🧱 4. Built Reusable Components
✅ 4.1 PropertyCard.tsx in /components/PropertyCard.tsx
tsx
Copy
Edit
import { PropertyProps } from "@/interfaces";

const PropertyCard = ({ name, address, image, rating, price }: PropertyProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{`${address.city}, ${address.country}`}</p>
      <div className="mt-2">
        <span className="text-yellow-500">★ {rating}</span>
        <span className="ml-2 text-gray-700">${price}/night</span>
      </div>
    </div>
  </div>
);

export default PropertyCard;
✅ 4.2 Pill.tsx in /components/Pill.tsx
tsx
Copy
Edit
interface PillProps {
  label: string;
  onClick: () => void;
  active?: boolean;
}

const Pill = ({ label, onClick, active = false }: PillProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium border ${
      active ? "bg-blue-600 text-white" : "bg-white text-gray-800"
    }`}
  >
    {label}
  </button>
);

export default Pill;
🌟 5. Built the Listing Page (Milestone 2 - Task 0)
/pages/index.tsx
tsx
Copy
Edit
import { useState } from "react";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const filters = ["All", "Top Villa", "Self Checkin", "Free WiFi", "Beachfront", "Mountain View"];

  const filteredProperties = selectedFilter === "All"
    ? PROPERTYLISTINGSAMPLE
    : PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.includes(selectedFilter)
      );

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white p-20"
        style={{ backgroundImage: `url('/assets/your-hero-bg.jpg')` }}
      >
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Pills */}
      <section className="flex flex-wrap gap-2 px-6 py-4">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            onClick={() => setSelectedFilter(filter)}
            active={filter === selectedFilter}
          />
        ))}
      </section>

      {/* Property Listing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.name} {...property} />
        ))}
      </section>
    </>
  );
};

export default Home;
🧼 6. Fixed All Errors
Removed duplicate export default statements.

Removed unused Hero component.

Removed extra PropertyCard and PropertyProps declarations.

Corrected all image paths to use /assets/... (not public/assets/...).

✅ Final Output:
You now have:

A hero section with a background image and welcome message.

A filter pill section to filter properties by category.

A responsive grid of property cards dynamically rendered from your sample data.






















✅ Full Summary: Responsive Listing Page Setup (Milestone 2 - Task 0)
🔧 1. Project Initialization
Set up a Next.js 13+ project with:

TypeScript

Tailwind CSS

ESLint

Organized a clean project structure:

bash
Copy
Edit
/components
/constants
/interfaces
/pages
/public/assets  ← For images




Under components/, create layout folder and files:

bash
Copy
Edit
mkdir -p components/layout
touch components/layout/Header.tsx
touch components/layout/Footer.tsx
touch components/layout/Layout.tsx
Also:

bash
Copy
Edit
mkdir constants interfaces
touch constants/index.ts interfaces/index.ts


## ✅ Milestone 2: Responsive Property Listing Page — Full Implementation Guide

---

## 🗂️ Project Structure

```
alx-listing-app-00/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── PropertyCard.tsx
│   └── Pill.tsx
├── constants/
│   └── index.ts
├── interfaces/
│   └── index.ts
├── pages/
│   └── posts/
│       └── index.tsx
│   └── index.tsx
├── public/
│   └── assets/
│       ├── logo.jpg
│       ├── house1.jpg
│       ├── house2.jpg
│       └── your-hero-bg.jpg
```

---

## ✅ Step-by-Step Implementation

### 1. **Set Up Interfaces** (`interfaces/index.ts`)

```ts
export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OfferProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: OfferProps;
  image: string;
  discount: string;
}
```

---

### 2. **Define Sample Data** (`constants/index.ts`)

```ts
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/your-hero-bg.jpg",
    discount: ""
  }
];
```

---

### 3. **Create Reusable Components**

#### `components/common/Button.tsx`

```tsx
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    {label}
  </button>
);

export default Button;
```

#### `components/common/Card.tsx`

```tsx
interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card = ({ title, image, description }: CardProps) => (
  <div className="bg-white rounded shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Card;
```

#### `components/PropertyCard.tsx`

```tsx
import { PropertyProps } from "@/interfaces";

const PropertyCard = ({ name, address, image, rating, price }: PropertyProps) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-500">{address.city}, {address.country}</p>
      <p className="text-yellow-500 font-semibold">⭐ {rating}</p>
      <p className="text-blue-700 font-bold mt-2">${price}/night</p>
    </div>
  </div>
);

export default PropertyCard;
```

#### `components/Pill.tsx`

```tsx
interface PillProps {
  label: string;
  onClick: () => void;
  active: boolean;
}

const Pill = ({ label, onClick, active }: PillProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-1 rounded-full border text-sm ${
      active ? "bg-blue-600 text-white" : "bg-white text-gray-700 border-gray-300"
    }`}
  >
    {label}
  </button>
);

export default Pill;
```

---

### 4. **Create Layout Components** (`components/layout/`)

#### `Header.tsx`

```tsx
const Header = () => (
  <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
    <div className="text-xl font-bold text-blue-700">StayEase</div>
    <nav className="space-x-4">
      <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
      <a href="#" className="text-gray-700 hover:text-blue-600">Listings</a>
      <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
    </nav>
  </header>
);

export default Header;
```

#### `Footer.tsx`

```tsx
const Footer = () => (
  <footer className="bg-gray-100 text-center py-4 mt-10 text-gray-600">
    © 2025 StayEase. All rights reserved.
  </footer>
);

export default Footer;
```

#### `Layout.tsx`

```tsx
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
```

---

### 5. **Create Listing Page** (`pages/index.tsx`)

```tsx
import { useState } from "react";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Layout from "@/components/layout/Layout";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const filters = ["All", "Top Villa", "Self Checkin", "Free WiFi", "Beachfront", "Mountain View"];

  const filteredProperties = selectedFilter === "All"
    ? PROPERTYLISTINGSAMPLE
    : PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.includes(selectedFilter)
      );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white p-20"
        style={{ backgroundImage: `url('/assets/your-hero-bg.jpg')` }}>
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Pills */}
      <section className="flex flex-wrap gap-2 px-6 py-4">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            onClick={() => setSelectedFilter(filter)}
            active={filter === selectedFilter}
          />
        ))}
      </section>

      {/* Property Listing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.name} {...property} />
        ))}
      </section>
    </Layout>
  );
};

export default Home;
```

---

### 6. ✅ Public Assets Used (Saved in `public/assets/`)

- logo.jpg
- house1.jpg
- house2.jpg
- your-hero-bg.jpg

---

✅ You're now set with a modular, styled, filterable property listing page using Next.js + TypeScript + Tailwind CSS!


































Tasks
0. Prepare for Deployment
mandatory
Duplicate the Repository

Duplicate alx-listing-app-04 and rename it to alx-listing-app-deployed.
Configure Environment Variables

Create a .env.local file in the root directory.
Store API base URLs and any required keys:
 NEXT_PUBLIC_API_BASE_URL=https://your-api-endpoint.com
Add .env.local to .gitignore.
Update API Calls

Modify API calls to use process.env.NEXT_PUBLIC_API_BASE_URL:
 const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
Run a Production Build

Test the build locally:
 npm run build
 npm run start
Fix any build errors before proceeding.
Repo:

GitHub repository: alx-listing-app-deployed
File: .gitignore
1. Deploy to Vercel (Recommended)
mandatory
Sign Up / Log In

Create a free account at Vercel if you don’t have one.
Connect GitHub Repository

Go to the Vercel dashboard and click “Add New Project”.
Select your alx-listing-app-deployed repository.
Configure Deployment Settings

Framework Preset: Next.js
Root Directory: /
Environment Variables: Add the same variables from .env.local.
Deploy

Click “Deploy” and wait for the build process to complete.
Vercel will provide a live URL (e.g., https://alx-listing-app-[STUDENT_ID].vercel.app).
Modify the url to contain your student id as shown above.