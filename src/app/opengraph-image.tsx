import { ImageResponse } from "next/og";

export const alt = "Sanjay Hulagur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3EEE4",
          color: "#1C2524",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4 }}>
          SANJAYHULAGUR.IN
        </div>
        <div style={{ display: "flex", fontSize: 84, lineHeight: 1 }}>Sanjay Hulagur</div>
        <div style={{ display: "flex", fontSize: 28, color: "#123C3A" }}>
          AI Product Manager · Dharwad
        </div>
      </div>
    ),
    size,
  );
}
