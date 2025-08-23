# 🪙 Cryptoplace

A modern, responsive cryptocurrency marketplace application built with React and Vite that provides real-time cryptocurrency data, interactive charts, and comprehensive market information.

## 🌟 Features

### 🏠 **Homepage**
- **Live Cryptocurrency Data**: Real-time prices, market caps, and 24-hour price changes for top 10 cryptocurrencies
- **Search Functionality**: Search and filter cryptocurrencies by name
- **Multi-Currency Support**: View prices in USD, EUR, and INR
- **Responsive Design**: Fully responsive layout optimized for desktop and mobile devices
- **Clean UI**: Modern, intuitive interface with Tailwind CSS styling

### 📊 **Individual Coin Pages**
- **Detailed Market Data**: Comprehensive cryptocurrency information including market cap rank, current price, 24-hour high/low
- **Interactive Price Charts**: Historical price data visualization using Google Charts
- **10-Day Price History**: Tabular and graphical representation of recent price trends
- **Dynamic Routing**: Individual pages for each cryptocurrency with URL-based navigation

### 🔧 **Technical Features**
- **Context API**: Centralized state management for cryptocurrency data and currency selection
- **Error Handling**: Robust API error handling with user-friendly feedback
- **Loading States**: Smooth loading indicators for better user experience
- **Environment Variables**: Secure API key management
- **Modern React Patterns**: Uses React hooks, context, and functional components

## 🚀 Live Demo

**[Visit Cryptoplace](https://cryptoplace-delta-drab.vercel.app/)**

Experience the app live on Vercel with real-time cryptocurrency data.

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18** - Modern React with hooks and context
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing for navigation

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **CSS Modules** - Scoped styling

### **Data Visualization**
- **React Google Charts** - Interactive charts for price visualization

### **API Integration**
- **CoinGecko API** - Real-time cryptocurrency market data
- **Fetch API** - Modern promise-based HTTP requests

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Vite Dev Server** - Hot module replacement for development

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component with currency selector
│   ├── Footer.jsx          # Footer component
│   └── LineChart.jsx       # Price chart visualization component
├── pages/
│   ├── Home.jsx           # Homepage with cryptocurrency list
│   └── Coin.jsx           # Individual coin detail page
├── context/
│   └── CoinContext.jsx    # Global state management for crypto data
├── App.jsx                # Main app component with routing
└── main.jsx              # Application entry point
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn package manager
- CoinGecko API key (optional for enhanced rate limits)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vedant1607/Cryptoplace.git
   cd Cryptoplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔗 API Integration

### **CoinGecko API Endpoints**

- **Market Data**: `/coins/markets` - Fetches cryptocurrency market data
- **Individual Coin**: `/coins/{id}` - Retrieves detailed information for a specific cryptocurrency
- **Historical Data**: `/coins/{id}/market_chart` - Gets historical price data for charts

### **Supported Currencies**
- **USD** - US Dollar ($)
- **EUR** - Euro (€)
- **INR** - Indian Rupee (₹)

## 📱 Responsive Design

The application is fully responsive and provides optimal viewing experience across:
- **Desktop** - Full feature set with comprehensive data tables
- **Tablet** - Adapted layouts with essential information
- **Mobile** - Streamlined interface with core functionality

## 🎨 Key Components

### **CoinContext**
Global state management providing:
- Cryptocurrency data fetching
- Currency selection (USD/EUR/INR)
- Error handling and loading states

### **Home Page**
- Top 10 cryptocurrency listing
- Search and filter functionality
- Real-time price updates
- Responsive data table

### **Coin Detail Page**
- Individual cryptocurrency information
- Interactive price charts
- Historical data visualization
- Market statistics

### **LineChart Component**
- Google Charts integration
- 10-day historical price data
- Responsive chart design
- Date-formatted x-axis

## 🚀 Deployment

The application is deployed on **Vercel** with:
- Automatic deployments from the main branch
- Environment variable management
- CDN optimization for fast loading
- SSL certificate for secure connections

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### **Development Guidelines**
1. Follow React best practices and hooks patterns
2. Maintain responsive design principles
3. Add appropriate error handling for API calls
4. Write descriptive commit messages
5. Test functionality across different screen sizes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Vedant** - [GitHub Profile](https://github.com/Vedant1607)

---

**Built using React, Vite, and the CoinGecko API**