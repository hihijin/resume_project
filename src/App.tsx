import "./App.css";

import { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import ChannelTalk from "./components/ChannelTalk";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./pages/Loading";

const MainPage = lazy(() => import("./pages/MainPage"));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
      <ChannelTalk />
      <Footer />
    </div>
  );
}

export default App;
