
import Center from './Center'
import Surah from './Surah'
import CenterMobile from './CenterMobile';
import Footer from './Footer'
import { Routes, Route,Navigate} from "react-router-dom";
import Admin from './admin/Admin'


//Admin Link
import Book from "./admin/adminPost/Book.js";
import Quran from "./admin/adminPost/Quran.js"
import Subject from "./admin/adminPost/Subject.js";
import View from './admin/adminBody/Views'

let Md = 992;

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={Md > window.outerWidth ? <CenterMobile /> : <Center />}
        />
        <Route path="/admin" element={<Navigate to="quran"/>}/>
        <Route path="/admin" element={<Admin/>}>
        <Route path="view" element={<View />} /> 
          <Route path="book" element={<Book />} />
          <Route path="quran" element={<Quran />} />
          <Route path="subject" element={<Subject />} />
        </Route>
        <Route path="*" element={<Navigate to="/"/>} />
        <Route path="/surah" element={<Surah />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
