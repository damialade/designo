import * as React from "react";
const ArrowRight = (props) => (
  <svg
    width={5}
    height={10}
    viewBox="0 0 5 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      width={5}
      height={10}
      fill="#F2F2F2"
      style={{
        fill: "#F2F2F2",
        fill: "color(display-p3 0.9490 0.9490 0.9490)",
        fillOpacity: 1,
      }}
    />
    <rect
      width={1440}
      height={2940}
      transform="translate(-1099 -1140)"
      fill="white"
      style={{ fill: "white", fillOpacity: 1 }}
    />
    <g filter="url(#filter0_dd_0_1)">
      <rect
        x={-364}
        y={-185}
        width={541}
        height={308}
        rx={15}
        fill="#F4F4F4"
        style={{
          fill: "#F4F4F4",
          fill: "color(display-p3 0.9584 0.9584 0.9584)",
          fillOpacity: 1,
        }}
      />
      <mask
        id="mask0_0_1"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x={-364}
        y={-185}
        width={541}
        height={308}
      >
        <rect
          x={-364}
          y={-185}
          width={541}
          height={308}
          rx={15}
          fill="white"
          style={{ fill: "white", fillOpacity: 1 }}
        />
      </mask>
      <g mask="url(#mask0_0_1)">
        <rect
          x={-364}
          y={-185}
          width={640}
          height={308}
          fill="url(#pattern0_0_1)"
          style={{}}
        />
        <rect
          x={-409}
          y={-274}
          width={730}
          height={486}
          fill="url(#pattern1_0_1)"
          style={{}}
        />
      </g>
      <rect
        opacity={0.496884}
        x={-364}
        y={-185}
        width={541}
        height={308}
        rx={15}
        fill="black"
        style={{ fill: "black", fillOpacity: 1 }}
      />
      <mask
        id="mask1_0_1"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x={-364}
        y={-185}
        width={541}
        height={308}
      >
        <rect
          x={-364}
          y={-185}
          width={541}
          height={308}
          rx={15}
          fill="white"
          style={{ fill: "white", fillOpacity: 1 }}
        />
      </mask>
      <g mask="url(#mask1_0_1)" />
      <g clipPath="url(#clip0_0_1)">
        <path
          d="M1 1L5 5L1 9"
          stroke="#E7816B"
          style={{
            stroke: "#E7816B",
            stroke: "color(display-p3 0.9066 0.5042 0.4205)",
            strokeOpacity: 1,
          }}
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_dd_0_1"
        x={-939}
        y={-185}
        width={1120}
        height={648}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_0_1"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_0_1"
          result="effect2_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_0_1"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern0_0_1"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_0_1" transform="scale(0.001)" />
      </pattern>
      <pattern
        id="pattern1_0_1"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image1_0_1"
          transform="scale(0.000684932 0.00102669)"
        />
      </pattern>
      <clipPath id="clip0_0_1">
        <rect
          width={197}
          height={22}
          fill="white"
          style={{ fill: "white", fillOpacity: 1 }}
          transform="translate(-192 -6)"
        />
      </clipPath>
      <image
        id="image0_0_1"
        width={1000}
        height={1000}
      />
      <image
        id="image1_0_1"
        width={1460}
        height={974}
      />
    </defs>
  </svg>
);
export default ArrowRight;