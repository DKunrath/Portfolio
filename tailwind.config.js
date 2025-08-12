module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			  },
		  },
		},
  plugins: [],
};
