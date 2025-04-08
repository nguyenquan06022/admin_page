import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./page/DashBoard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Analytics from "./page/Analytics.jsx";
import Integrations from "./page/Integrations.jsx";
import Message from "./page/Message.jsx";
import Project from "./page/Project.jsx";
import Team from "./page/Team.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DashBoard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="message" element={<Message />} />
          <Route path="project" element={<Project />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
