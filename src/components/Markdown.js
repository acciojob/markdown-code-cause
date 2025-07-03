import React, { useState, useEffect } from "react";
import "./Markdown.css"; // Import the CSS file for styling

const Markdown = () => {
  const [value, setValue] = useState("");
  const [displayText, setDisplayText] = useState("");

  // Handle textarea input change
  function handleChange(e) {
    setValue(e.target.value);
  }

  // Update displayText whenever value changes
  useEffect(() => {
    setDisplayText(value);
  }, [value]);

  return (
    <div className="markdown-container">
      <div className="input-section">
        <textarea
          className="markdown-textarea"
          placeholder="Type your text here..."
          onChange={handleChange}
          value={value}
        />
      </div>
      <div className="preview-section">
        <h3>Preview:</h3>
        <span className="markdown-preview">{displayText}</span>
      </div>
    </div>
  );
};

export default Markdown;