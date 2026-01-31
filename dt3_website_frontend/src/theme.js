export const styleThemeData = {
  name: "Custom Theme",
  description: "Custom user-defined colors",
  primary: "#79f471",
  secondary: "#F59E0B",
  success: "#F59E0B",
  error: "#42f09f",
  gradient: "from-rose-50 to-purple-50",
  background: "#FDF2F8",
  surface: "#FFFFFF",
  text: "#374151",
};

/**
 * A small set of derived design tokens to keep CSS consistent and readable.
 * We keep this as JS so components can reference the same values (e.g. focus ring),
 * while the bulk of styling still lives in plain CSS.
 */
export const tokens = {
  radiusSm: "10px",
  radiusMd: "16px",
  radiusLg: "24px",
  shadowSm: "0 6px 18px rgba(17, 24, 39, 0.08)",
  shadowMd: "0 10px 30px rgba(17, 24, 39, 0.10)",
  maxWidth: "1120px",
};
