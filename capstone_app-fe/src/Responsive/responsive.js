import { css } from "styled-components"

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 639px) {
      ${props}
    }
  `
}
export const medium = (props) => {
  return css`
    @media only screen and (max-width: 1798px) {
      ${props}
    }
  `
}
