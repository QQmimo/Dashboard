import React from "react";
import { createRoot } from "react-dom/client";
import BlockManager from "./Components/BlockManager/BlockManager";

window.addEventListener('load', () => {
	createRoot(document.body).render(<BlockManager />);
});