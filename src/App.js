import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import NotFound from "./Pages/NotFound/NotFound";
import QuestionForm from "./Components/QuestionForm/QuestionForm";
import StoryInput from "./Components/StoryInput/StoryInput";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import PreviewCv from "./Pages/PreviewCv";
import CvPreview from "./Components/CV/CvPreview/CvPreview";
import ModifyCv from "./Pages/ModifyCv/ModifyCv";
import NotAvailable from "./Pages/NotAvailable/NotAvailable";

function App() {
  return (
    <>
      <Layout>
        <div className="mobile-tablet-only">
          <NotAvailable />
        </div>
        <div className="desktop-only">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />}>
              <Route index element={<StoryInput />} />
              <Route path="storycv" element={<StoryInput />} />
              <Route path="questioncv" element={<QuestionForm />} />
            </Route>
            <Route path="/features/previewcv" element={<PreviewCv />}>
              <Route index element={<CvPreview />} />
              <Route path="modifycv" element={<ModifyCv />} />
            </Route>
            <Route path="/uploadcv" element={<ComingSoon />} />
            <Route path="/notfound" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;
