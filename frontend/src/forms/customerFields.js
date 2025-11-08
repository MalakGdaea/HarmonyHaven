import { required, email } from "./validation";


export const customerFields = {
    fullName: {
        label: "Full name",
        value: "",
        placeholder: "Full name",
        validateFunction: (v) => required("Full name is required")(v),
        type: "text",
    },
    email: {
        label: "Email",
        value: "",
        placeholder: "you@example.com",
        validateFunction: (v) => required("Email is required")(v) || email()(v),
        type: "email",
    },
    phone: {
        label: "Phone (optional)",
        value: "",
        placeholder: "+972…",
        validateFunction: (v) => {
            const s = String(v || "").trim();
            if (!s) return null;
            return s.length < 7 ? "Phone looks too short" : null;
        },
        type: "tel",
    },
};
