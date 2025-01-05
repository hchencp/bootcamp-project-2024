import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Main Content */}
      <main
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "50px auto",
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <p style={{ fontSize: "24px", color: "#333", textAlign: "center" }}>
          Contact Form
        </p>
        <form>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontWeight: "bold",
              margin: "10px 0 5px",
              color: "#333",
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <label
            htmlFor="email"
            style={{
              display: "block",
              fontWeight: "bold",
              margin: "10px 0 5px",
              color: "#333",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <label
            htmlFor="password"
            style={{
              display: "block",
              fontWeight: "bold",
              margin: "10px 0 5px",
              color: "#333",
            }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <label
            htmlFor="select"
            style={{
              display: "block",
              fontWeight: "bold",
              margin: "10px 0 5px",
              color: "#333",
            }}
          >
            Position
          </label>
          <select
            id="select"
            name="select"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          >
            <option value="software">Software Developer</option>
            <option value="product">Product Manager</option>
            <option value="design">Designer</option>
          </select>

          <label
            htmlFor="comments"
            style={{
              display: "block",
              fontWeight: "bold",
              margin: "10px 0 5px",
              color: "#333",
            }}
          >
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Comments"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          ></textarea>

          <input
            type="submit"
            value="Submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          />
        </form>
      </main>
    </div>
  );
};

export default Contact;
