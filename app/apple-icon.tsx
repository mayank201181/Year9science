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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #15803d 0%, #0d9488 100%)",
        }}
      >
        <div style={{ color: "#ffffff", fontSize: 78, fontWeight: 900, lineHeight: 1 }}>⚗</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 12,
            padding: "3px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#15803d",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 1.2,
          }}
        >
          Y9 SCI
        </div>
      </div>
    ),
    { ...size },
  );
}
