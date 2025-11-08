import { required } from "./validation";

export const paymentFields = {
    cardNumber: {
        label: "Card number",
        value: "",
        placeholder: "4242 4242 4242 4242",
        validateFunction: (v) =>
            required("Card number is required")(v) ||
            (String(v).replace(/\s+/g, "").length < 12 ? "Too short" : null),
        type: "text",
    },
    exp: {
        label: "Expiry",
        value: "",
        placeholder: "MM/YY",
        validateFunction: (v) =>
            required("Expiry date is required")(v) ||
            (!/^\d{4}$/.test(v) ? "Expiry must be 4 digits (MMYY)" : null),

    },
    cvc: {
        label: "CVC",
        value: "",
        placeholder: "123",
        validateFunction: (v) =>
            required("CVC is required")(v) ||
            (String(v).length < 3 ? "Too short" : null),
        type: "password",
    },
};
