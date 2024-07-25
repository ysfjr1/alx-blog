/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                /* Backgrounds */
                BG_WHITE: "#FFFFFF", //white

                /* Borders */
                BORDER_MAIN: "#e5e7eb", //gray-200
                BORDER_DARK: "#9ca3af", // gray-400
                BORDER_DARK_SEC: "#4b5563", // gray-600

                /* Texts */
                TEXT_MAIN: "#1f2937", //gray-800
                TEXT_SEC: "#6b7280", //gray-500
                TEXT_THIRD: "#374151", //gray-700
                TEXT_WHITE: "#FFFFFF", //white
                TEXT_DARK_SEC: "#e5e7eb", //gray-200
                TEXT_LINK: "#3b82f6", //blue-500
                TEXT_ERROR: "#ef4444", //red-500

                /* Forms */
                FORM_INPUT_BG: "#f9fafb", //gray-50
                FORM_INPUT_BORDER: "#d1d5db", //gray-300
                FORM_FOCUS_OUTLINE: "#d1d5db", //gray-300
                FORM_ERROR_BORDER: "#ef4444", //red-500

                /* Buttons */
                BTN_DARK: "#1f2937", //gray-800
                BTN_DARK_HOVER: "#374151", //gray-700

                /* Menu */
                MENU_HOVER: "#f3f4f6", //gray-100
            },
        },
    },
    plugins: [],
};
