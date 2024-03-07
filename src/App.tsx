import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostsPage from "./Page/PostsPage";
import PostPage from "./Page/PostPage";

function App() {
  return (
      <BrowserRouter>
          <div className='container'>
              <Header />
              <main>
                  <Routes>
                      <Route path="/" element={<PostsPage />} />
                      <Route path="/post/:postId" element={<PostPage />} />
                  </Routes>
              </main>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
