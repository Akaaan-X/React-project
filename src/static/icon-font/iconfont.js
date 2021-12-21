import { createGlobalStyle } from "styled-components";

export const GlobalFontStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* Project id 3016492 */
  src: url('//at.alicdn.com/t/font_3016492_pq5ub0s59nr.woff2?t=1639746095094') format('woff2'),
       url('//at.alicdn.com/t/font_3016492_pq5ub0s59nr.woff?t=1639746095094') format('woff'),
       url('//at.alicdn.com/t/font_3016492_pq5ub0s59nr.ttf?t=1639746095094') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
