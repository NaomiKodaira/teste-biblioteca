const ch = {
  grid: {
    default: {
      body: `
          display: grid;
        `,
        sm: `
            width: calc(100vw - 32px);
            grid-template-columns: repeat(4, 1fr);
            column-gap: 20px;
            padding: 0 16px;
          `,
        md: `
            width: calc(100vw - 64px);
            grid-template-columns: repeat(6, 1fr);
            column-gap: 24px;
            padding: 0 32px;
          `,
        lg: `
            width: calc(100vw - 72px);
            grid-template-columns: repeat(8, 1fr);
            column-gap: 24px;
            padding: 0 36px;
          `,
        xl: `
            width: calc(100vw - 84px);
            grid-template-columns: repeat(12, 1fr);
            column-gap: 24px;
            padding: 0 42px;
          `,
        xxl: `
            width: fit-content;
            grid-template-columns: repeat(12, 91px);
            column-gap: 24px;
            padding: 0;
            margin: auto;
          `
    }
  },
  breakpoint: {
    sm: {
      min: 360,
      max: 599
    },
    md: {
      min: 600,
      max: 904
    },
    lg: {
      min: 905,
      max: 1239
    },
    xl: {
      min: 1240,
      max: 1439
    },
    xxl: {
      min: 1440
    }
  }
};
export default ch;
