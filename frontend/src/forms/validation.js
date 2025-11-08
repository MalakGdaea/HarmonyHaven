export const required = (msg = "This field is required") => (v) =>
    !String(v || "").trim() ? msg : null;

export const email = (msg = "Enter a valid email") => (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "")) ? null : msg;
