"use client";

import { useState, useEffect, ReactNode } from "react";

interface PasswordProtectionProps {
  children: ReactNode;
}

const AUTH_KEY = "volvo_reverse_project_authenticated";
const PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || "Volvo@2025"; // Default password, should be set in .env

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem(AUTH_KEY);
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password === PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      setPassword("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#3f3f40",
        }}>
        <div style={{ color: "#fff", fontSize: "16px" }}>Loading...</div>
      </div>
    );
  }

  // Show password prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#3f3f40",
          padding: "20px",
        }}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "8px",
            maxWidth: "400px",
            width: "100%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <img
              src="/images/reverse-project-logo.png"
              alt="The Reverse Project"
              style={{ maxWidth: "200px", marginBottom: "20px" }}
            />
            <h2 style={{ margin: "0 0 10px 0", color: "#3f3f40", fontSize: "24px" }}>Password Protected</h2>
            <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>Please enter the password to access this site</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
                autoFocus
              />
              {error && <p style={{ color: "#d32f2f", fontSize: "14px", marginTop: "8px", marginBottom: "0" }}>{error}</p>}
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                backgroundColor: "#9FCE69",
                color: "#000",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#8bb85a";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#9FCE69";
              }}>
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Show protected content if authenticated
  return <>{children}</>;
}
