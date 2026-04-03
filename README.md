# Team 305106 Frontend

CasaVista is a frontend-only real estate marketplace built as a multi-page project.

## Structure

- `html/` contains the independent pages
- `css/` contains shared and page-specific styles
- `js/` contains the shared store plus page-specific logic
- `img/` contains the demo property images

## Pages

- `html/index.html` landing page
- `html/login.html` login and register page
- `html/buy.html` marketplace and filters
- `html/sell.html` seller listing form
- `html/details.html` property details and inquiry flow
- `html/dashboard.html` analytics dashboard

The root `index.html` redirects to `html/index.html`, which makes the project easier to use with GitHub Pages.

## Demo Accounts

- Buyer: `demo@casavista.com` / `demo123`
- Seller: `seller@casavista.com` / `seller123`

## Run Locally

Open the root `index.html` in a browser.

## Features

- Buy, rent, and favorite properties
- Register or log in with demo data stored in local storage
- Create new property listings from the seller page
- Open a dedicated details page for each property
- Send viewing requests that appear in the dashboard inbox
- Update listing status from the dashboard and watch analytics refresh
