import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Index from "./componets/pages/home";
import About from "./componets/pages/about/About";
import Shop from "./componets/pages/shop/Shop";
import Shop_singel from "./componets/pages/shop/shop_singel/Shop_singel";
import Service from "./componets/pages/service/Service";
import Service_single from "./componets/pages/service/service_single/Service_single";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./componets/pages/Our Team/Team";
import Blog_news from "./componets/pages/Blog_news/Blog_news";
import Project from "../src/./componets/pages/Portfolio_Standard/Project";
import Portfolio_Single from "./componets/pages/Portfolio_Standard/project_componets/Portfolio_Single";
import Contact from "./componets/pages/Contact Us/Contact";
import Error from "./componets/pages/error/Error";
import Licenses from "./componets/pages/Licenses/Licenses";
import Changelog from "./componets/pages/Changelog/Changelog";
import Password from "./componets/pages/Protected/Password";
import Blog_single from "./componets/pages/blog-single/Blog_single";
import Header from "./componets/commen coponet/header/Header";
import Footer from "./componets/commen coponet/Footer_lastCom/footer";
import Total from "./componets/pages/Total/Total";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop_singel" element={<Shop_singel />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service_single" element={<Service_single />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog_news" element={<Blog_news />} />
          <Route path="/project" element={<Project />} />
          <Route path="/portfolio_Single" element={<Portfolio_Single />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/blog_single" element={<Blog_single />} />
          <Route path="/password" element={<Password />} />
          <Route path="/total" element={<Total />} />
          <Route path="*" element={<Error />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
