import { required } from "./validation";

export const addressFields = {
    street: {
        label: "Street",
        value: "",
        validateFunction: required("Street is required"),
    },
    city: {
        label: "City",
        value: "",
        validateFunction: required("City is required"),
    },
    zip: {
        label: "ZIP / Postal code",
        value: "",
        validateFunction: required("ZIP is required"),
    },
    country: {
        label: "Country",
        value: "",
        validateFunction: required("Country is required"),
    },
    deliveryType: {
        label: "Delivery type",
        value: "standard",
        type: "select",
        placeholder: "Choose delivery type",
        validateFunction: (v) =>
            !v ? "Please choose a delivery type" : null,
        options: [
            { value: "standard", label: "Standard (4–10 days)" },
            { value: "express", label: "Express (1–3 days) + 15$" },
        ],
    },
};
