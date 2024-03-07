import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostsPage from "./Page/PostsPage";
import PostPage from "./Page/PostPage";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
      <BrowserRouter>
          <DefaultLayout>
              <Routes>
                  <Route path="/" element={<PostsPage />} />
                  <Route path="/post/:postId" element={<PostPage />} />
              </Routes>
          </DefaultLayout>
      </BrowserRouter>
  );
}

export default App;
