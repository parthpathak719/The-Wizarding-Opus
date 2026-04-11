# 🧙‍♂️ The Wizarding Opus

A cinematic, full-stack web experience inspired by the magical world of Harry Potter.

The Wizarding Opus is a dynamic Laravel-based web application featuring an immersive journey through the wizarding world — from Platform 9¾ to Hogwarts with interactive sorcerer archives, a magical quiz, cinematic video transitions, and session-based authentication.

---

## ✨ Features

- 🏰 Cinematic multi-page journey through the wizarding world
- 🎬 Video-based immersive transitions and animations
- 📜 Dynamic sorcerer archives with full CRUD operations
- 🔐 Session-based ownership and admin authentication
- 🧪 Interactive Harry Potter quiz with scoring
- ☁️ Cloud-based media delivery (Bunny.net CDN)
- 🌍 Full-stack deployment workflow

---

## 🛠️ Tech Stack

- **Laravel 12** - PHP web framework
- **Blade** - Templating engine
- **PostgreSQL (Supabase)** - Cloud database
- **GeminiPro** - AI-generated videos
- **Bunny.net** - CDN for video and audio streaming
- **Cloudinary** - Image hosting
- **Render** - App hosting and deployment
- **XAMPP** - Local development environment
- **CSS** - Styling and animations
- **JavaScript** - Cinematic interactions and animations

---

## 📄 Pages

| Page | Description |
|------|-------------|
| Invitation | Animated Hogwarts letter with typewriter effect |
| Platform 9¾ | Video-based interactive platform experience |
| King Cross | Transitional cinematic scene |
| Hogwarts | Castle entry with wand interaction |
| Houses | Browse the four Hogwarts houses |
| Sorcerers | View, add, edit and delete sorcerers |
| Conjure | Add your own sorcerer to the archives |
| Cast | Meet the magical cast of Harry Potter |
| Quiz | Test your Harry Potter knowledge |

---

## 🔐 Authentication

- Admin login at `/admin/login` with full access to all records
- Session-based ownership — users can only edit and delete sorcerers they conjured
- Pre-seeded sorcerers are view-only for regular users

---

## 🚀 Deployment

- App hosted on **Render**
- Database hosted on **Supabase** PostgreSQL
- Media served via **Bunny.net** CDN with allowed domain restrictions
