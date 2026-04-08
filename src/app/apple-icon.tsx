import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
          borderRadius: 32,
        }}
      >
        <span
          style={{
            fontSize: 108,
            fontFamily: "Georgia, serif",
            color: "#f5f1eb",
            lineHeight: 1,
          }}
        >
          98
        </span>
      </div>
    ),
    { ...size }
  );
}
