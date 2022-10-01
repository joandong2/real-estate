import './App.css';
import Layout from './components/Layout';
import Home from './components/Home'
import { Routes, Route, Navigate } from 'react-router-dom';
import SingleProperty from './components/SingleProperty';
import PropertyLists from './components/PropertyLists';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<PostsList />} /> */}

        {/* <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route> */}

        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="property/:id" element={<SingleProperty />} />
          <Route path="property-type/:name" element={<PropertyLists />} /> 
          <Route path="property-type/all" element={<PropertyLists />} /> 
          <Route path="property-type/" element={<PropertyLists />} /> 
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes>
  );
}

export default App;
