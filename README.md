# 🗞️ Trending News - Modern News Aggregator

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.x-5a29e4?style=for-the-badge&logo=axios&logoColor=white)
![NewsAPI](https://img.shields.io/badge/NewsAPI-v2-ff6b00?style=for-the-badge&logo=rss&logoColor=white)

**A modern, responsive news aggregator that brings you trending news from around the world**

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📸 Screenshots

### Homepage
*Browse trending news with a clean, modern interface*

### Category Selection

*Quickly filter news by categories like Sports, Technology, Health, and more*

### Search Functionality

*Search for news on any topic with real-time results*

### Responsive Design

*Fully responsive design that works seamlessly on all devices*

---

## ✨ Features

- 🔍 **Real-time Search** - Search for news articles on any topic instantly
- 📱 **Responsive Design** - Works flawlessly on desktop, tablet, and mobile devices
- 🎯 **Category Filtering** - Quick access to Sports, Entertainment, Technology, Health, and Politics news
- 🎨 **Modern UI** - Clean and intuitive interface built with Tailwind CSS
- ⚡ **Fast Performance** - Optimized React components for smooth user experience
- 🔄 **Live Updates** - Get the latest news articles sorted by publication date
- 🖼️ **Rich Media** - Display news with high-quality images
- 🌐 **External Links** - Direct access to full articles on original sources

---

## 🚀 Demo

Check out the live demo: [**Trending News App**](#)

---

## 🛠️ Built With

- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client for API requests
- **[NewsAPI](https://newsapi.org/)** - API for fetching news articles from various sources
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling (optional, if used)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0 or higher)
- npm or yarn package manager
- A NewsAPI key (get one for free at [newsapi.org](https://newsapi.org/))

---

## ⚙️ Installation & Setup

Follow these steps to get the project running locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/trending-news.git
cd trending-news
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Get your NewsAPI key

1. Visit [NewsAPI.org](https://newsapi.org/)
2. Sign up for a free account
3. Copy your API key

### 4. Configure API key

Open `src/Component/Newsapp.jsx` and replace the API key:

```javascript
const API_KEY = "c4d234da9e644f1582758f26c13432a4";
```

**⚠️ Security Note:** For production, use environment variables instead:

Create a `.env` file in the root directory:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

Then update the code:

```javascript
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
```

### 5. Start the development server

```bash
npm run dev
# or
yarn dev
```

The app will open at `http://localhost:5173` (or your configured port)

---

## 📁 Project Structure

```
trending-news/
├── public/
├── src/
│   ├── Component/
│   │   ├── Newsapp.jsx      # Main news component with search & filters
│   │   └── Card.jsx          # News card component
│   ├── App.jsx               # Root application component
│   ├── index.css             # Global styles
│   └── main.jsx              # Application entry point
├── screenshots/              # Screenshots for README
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 💻 Usage

### Search for News
1. Type your topic in the search bar
2. Click the "Search" button
3. Browse through the results

### Filter by Category
- Click on category buttons: **Sports**, **Entertainment**, **Technology**, **Health**, or **Politics**
- Results are automatically filtered and displayed

### Read Full Articles
- Click on any news card title or the "Read More" button
- Opens the full article in a new tab

---

## 🎨 Customization

### Modify Categories

Edit the category buttons in `Newsapp.jsx`:

```javascript
<button onClick={userInput} value="your-category">
  YOUR CATEGORY
</button>
```

### Change Color Scheme

Update Tailwind classes in the components:

```javascript
// Example: Change navbar color
className="bg-blue-200" // Change to bg-purple-200, bg-green-200, etc.
```

### Adjust Card Layout

Modify the grid in `Card.jsx`:

```javascript
// Current: 3 columns on medium screens
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"

// Example: 4 columns
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
```

---

## 🐛 Known Issues

- Date filter is hardcoded to `2025-12-26` - consider making it dynamic
- No error handling UI for failed API requests
- API key is stored in code (should use environment variables)
- No loading state indicator while fetching data

---

## 🔮 Future Enhancements

- [ ] Add pagination for news results
- [ ] Implement bookmarking/favorites feature
- [ ] Add dark mode toggle
- [ ] Include loading skeletons
- [ ] Add error boundary and better error handling
- [ ] Implement infinite scroll
- [ ] Add news source filtering
- [ ] Create shareable article links
- [ ] Add date range picker for custom date filtering
- [ ] Implement PWA features for offline access

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/Harikesh2343)

- Email: harikesh2343@gmail.com

---

## 🙏 Acknowledgments

- [NewsAPI](https://newsapi.org/) for providing the news data API
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shields.io](https://shields.io/) for the README badges
- All open-source contributors

---

## 📞 Support

If you like this project, please give it a ⭐ on GitHub!

For support, email your.email@example.com or open an issue on GitHub.

---

<div align="center">

**Made with ❤️ and React**

</div>
