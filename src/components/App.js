
import Center from './center/Center'
import Surah from './Surah'
import CenterMobile from './mobile/CenterMobile';
import Footer from './Footer'
import { Routes, Route,Navigate} from "react-router-dom";
import Admin from './admin/Admin'





//Admin Link
import Book from "./admin/adminPost/Book.js";
import Quran from "./admin/adminPost/Quran.js"
import Subject from "./admin/adminPost/Subject.js";
import View from './admin/adminBody/Views'

//Edite Link
import EditeSurah from './admin/edites/EditeSurah'
import EditeBook from './admin/edites/EditeBook'
import EditeSubject from './admin/edites/EditeSubject'



let Md = 992;

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={Md > window.outerWidth ? <CenterMobile /> : <Center />}
        />
        <Route path="/surah" element={<Surah />} />

        <Route path="/admin" element={<Navigate to="quran" />} />
        <Route path="/admin" element={<Admin />}>
       
          <Route path="view/:al" element={<View />} />
         
         

           
          <Route path="book" element={<Book />} />
          <Route path="quran" element={<Quran />} />
          <Route path="subject" element={<Subject />} />
        </Route>
        {/* edite */}
        <Route path="/edite/surah/:al" element={<EditeSurah />} />
        <Route path="/edite/book/:bo" element={<EditeBook />} />
        <Route path="/edite/subject/:s" element={<EditeSubject />} />

    

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
