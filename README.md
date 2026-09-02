# 🔗 URL Shortener

A modern **full-stack MERN URL Shortener** that converts long URLs into short, clean, and shareable links.

The application provides a simple user interface for generating shortened URLs, copying them instantly, and creating QR codes for easy sharing.

## 🚀 Live Demo

🌐 **Live Website:** https://frontend-xh77.onrender.com/

## ✨ Features

* 🔗 Convert long URLs into short and shareable links
* ⚡ Fast URL redirection
* ✏️ Custom URL aliases
* 📋 One-click copy shortened URLs
* 📱 QR code generation for shortened links
* 📊 Link tracking and analytics support
* 🎨 Clean and responsive user interface
* 🔒 Backend API with database integration
* ☁️ Full-stack deployment

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React QR Code / QR Code Generator

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## 📂 Project Structure

```text
URL-Shortener/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── ...
│
└── README.md
```

## ⚙️ Installation and Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Manikanta420m/URL-Shortener.git
```

### 2️⃣ Navigate to the project

```bash
cd URL-Shortener
```

## 💻 Backend Setup

Navigate to the backend folder:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your environment variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
BASE_URL=http://localhost:5000
```

Start the backend server:

```bash
npm run dev
```

## 🎨 Frontend Setup

Navigate to the frontend folder:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🔗 How It Works

1. Enter a long URL.
2. The application sends the URL to the backend.
3. The backend generates a unique short code.
4. The original and shortened URLs are stored in MongoDB.
5. A short URL is returned to the frontend.
6. Users can copy the URL or generate a QR code.
7. When the short URL is visited, the user is redirected to the original URL.

## 📸 Screenshots

You can add screenshots of your application here.

```md
![Home Page](./screenshots/home.png)
```

## 🎯 Future Improvements

* 👤 User authentication
* 📊 Advanced click analytics
* 🌍 Location-based analytics
* 📅 Link expiration
* 🔐 Password-protected URLs
* 🗑️ URL management dashboard
* 🌙 Dark mode
* 📱 Improved mobile experience

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add your feature"
```

5. Push to your branch.

```bash
git push origin feature/your-feature
```

6. Create a Pull Request.

## 👨‍💻 Author

**Manikanta**

GitHub: https://github.com/Manikanta420m

## ⭐ Support

If you like this project, consider giving it a **⭐ star** on GitHub!

---

Built with ❤️ using the MERN Stack.
