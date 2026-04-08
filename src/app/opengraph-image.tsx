import { ImageResponse } from "next/og";

export const alt = "98 Advisors — Strategic Advisory for Founders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1a1a1a",
          padding: 80,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 96,
            color: "#f5f1eb",
            fontWeight: 400,
            marginBottom: 24,
          }}
        >
          98 Advisors
        </span>
        <div
          style={{
            width: 80,
            height: 1,
            backgroundColor: "#b08d57",
            marginBottom: 24,
          }}
        />
        <span
          style={{
            fontSize: 24,
            color: "#999",
            letterSpacing: 4,
            textTransform: "uppercase" as const,
          }}
        >
          Strategic Advisory for Founders
        </span>
      </div>
    ),
    { ...size }
  );
}
