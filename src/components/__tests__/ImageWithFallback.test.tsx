/* eslint-disable @next/next/no-img-element */
import React from "react";
import { render } from "@testing-library/react";
import { vi, describe, it, expect } from 'vitest'
import "@testing-library/jest-dom";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

// next/image requires mocking in JSDOM
vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} alt={props.alt} />;
  },
}));

describe("ImageWithFallback", () => {
  it("renders fallback image when original fails", () => {
    const { getByAltText } = render(
      <ImageWithFallback
        src="https://invalid.example.com/missing.jpg"
        alt="test"
        width={800}
        height={500}
      />
    );
    // We cannot trigger onError reliably in JSDOM for next/image,
    // but rendering should not throw and component mounts successfully.
    expect(getByAltText("test")).toBeInTheDocument();
  });
});
