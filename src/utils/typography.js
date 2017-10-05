import Typography from "typography"
import sutro from "typography-theme-sutro"

sutro.headerLineHeight = 1.1
sutro.overrideThemeStyles = () => {
  return {
    a: {
      color: `rgb(60,99,243)`
    },
    h1: {
      lineHeight: 1
    }
  }
}

const typography = new Typography(sutro)

export default typography
