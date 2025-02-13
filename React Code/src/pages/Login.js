import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BusinessLogo from "../assets/Images/BusinessLogo.png";

const Login = () => {
  const { login, user, isAdmin, isVendor } = useAuth();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [currentForm, setCurrentForm] = useState("options");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (isAdmin()) {
        navigate("/admin");
      } else if (isVendor()) {
        navigate("/vendor-dashboard");
      } else {
        navigate("/userhome");
      }
    }
  }, [user, isAdmin, isVendor, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setError("");
      toast.success("Login successful!", { autoClose: 2000 });
      setTimeout(() => {
        navigate(
          storedUser.role === "admin"
            ? "/admin"
            : storedUser.role === "vendor"
            ? "/vendor-dashboard"
            : "/userhome"
        );
      }, 2000);
    } else {
      setError("Invalid credentials!");
      toast.error("Invalid credentials!", { autoClose: 2000 });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!role) {
      setError("Please select a role");
      toast.error("Please select a role", { autoClose: 2000 });
      return;
    }
    const newUser = { fullName, phoneNumber, email, password, role };
    localStorage.setItem("user", JSON.stringify(newUser));
    toast.success("Signup successful! Please log in.", { autoClose: 2000 });
    setTimeout(() => setCurrentForm("login"), 2000);
  };

  // Internal CSS
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#eef2f3",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      width: "100%",
      maxWidth: "450px",
      background: "#ffffff",
      borderRadius: "15px",
      padding: "30px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "0.3s",
      textAlign: "center",
    },
    cardHover: {
      transform: "scale(1.03)",
      boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      transition: "0.3s",
    },
    inputFocus: {
      borderColor: "#007bff",
      outline: "none",
      boxShadow: "0px 0px 5px rgba(0, 123, 255, 0.5)",
    },
    button: {
      padding: "12px",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s",
      width: "100%",
      marginBottom: "12px",
    },
    btnPrimary: {
      background: "#007bff",
      color: "white",
    },
    btnPrimaryHover: {
      background: "#0056b3",
    },
    btnSuccess: {
      background: "#28a745",
      color: "white",
    },
    btnSuccessHover: {
      background: "#218838",
    },
    btnWarning: {
      background: "#ff9800",
      color: "white",
    },
    btnWarningHover: {
      background: "#e68900",
    },
    formCheckInput: {
      marginRight: "10px",
    },
    textDanger: {
      fontSize: "14px",
      marginTop: "10px",
    },
    logo: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #007bff",
      marginBottom: "20px",
    },

    //
    radioGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "10px",
    },
    radioLabel: {
      padding: "8px 15px",
      borderRadius: "20px",
      border: "2px solidrgb(252, 135, 127)",
      cursor: "pointer",
      transition: "0.3s",
      fontWeight: "bold",
      color: "#007bff",
      background: "white",
    },
    radioLabelSelected: {
      background: "#007bff",
      color: "white",
    },
    hiddenRadio: {
      display: "none",
    },
  };

  return (
    <div style={styles.container}>
      <ToastContainer />
      <div
        style={{
          ...styles.card,
          ...(currentForm !== "options" ? styles.cardHover : {}),
        }}
      >
        <img src={BusinessLogo} alt="Logo" style={styles.logo} />
        {currentForm === "options" && (
          <div>
            <button
              className="btn"
              style={{ ...styles.button, ...styles.btnPrimary }}
              onClick={() => setCurrentForm("signup")}
            >
              Sign up
            </button>
            <button
              className="btn"
              style={{ ...styles.button, ...styles.btnSuccess }}
              onClick={() => setCurrentForm("login")}
            >
              Log in
            </button>
            <button
              className="btn"
              style={{ ...styles.button, ...styles.btnWarning }}
              onClick={() => setCurrentForm("vendorLogin")}
            >
              Vendor Login
            </button>
          </div>
        )}
        {currentForm === "login" && (
          <div>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                style={styles.input}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                style={{ ...styles.button, ...styles.btnPrimary }}
              >
                Login
              </button>
              {error && <div style={styles.textDanger}>{error}</div>}
            </form>
          </div>
        )}
        {currentForm === "signup" && (
          <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSignUp}>
              <input
                type="text"
                style={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="tel"
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="email"
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                style={styles.input}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <h3>Select Role:</h3>
              <div style={styles.radioGroup}>
                <label
                  style={{
                    ...styles.radioLabel,
                    ...(role === "user" ? styles.radioLabelSelected : {}),
                  }}
                >
                  <input
                    type="radio"
                    value="user"
                    checked={role === "user"}
                    onChange={(e) => setRole(e.target.value)}
                    style={styles.hiddenRadio}
                  />
                  User
                </label>

                <label
                  style={{
                    ...styles.radioLabel,
                    ...(role === "vendor" ? styles.radioLabelSelected : {}),
                  }}
                >
                  <input
                    type="radio"
                    value="vendor"
                    checked={role === "vendor"}
                    onChange={(e) => setRole(e.target.value)}
                    style={styles.hiddenRadio}
                  />
                  Vendor
                </label>

                <label
                  style={{
                    ...styles.radioLabel,
                     ...(role === "admin" ? styles.radioLabelSelected : {}),
                  }}
                >
                  <input
                    type="radio"
                    value="admin"
                    checked={role === "admin"}
                    onChange={(e) => setRole(e.target.value)}
                    style={styles.hiddenRadio}
                  />
                  Admin
                </label>
              </div>

              <button
                type="submit"
                style={{ ...styles.button, ...styles.btnSuccess }}
              >
                Create account
              </button>
              {error && <div style={styles.textDanger}>{error}</div>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
