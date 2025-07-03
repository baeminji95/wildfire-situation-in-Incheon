/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1fr-250': 'minmax(0,1fr), 250px',
        'info': '260px, minmax(0,1fr)',
        'sminfo': '300px, minmax(0,1fr)',
        'lginfo': 'minmax(0,1fr), 385px',
      },
      gridTemplateRows: {
        '80-1fr': '80px, minmax(0,1fr)',
        'info': '64px 300px minmax(0,1fr)',
        '24-1fr-1fr': '24px minmax(0,1fr) minmax(0,1fr)'
      },
      backgroundImage: {
        'guide1': "url('/public/img/guide_1.png')",
        'guide2': "url('/public/img/guide_2.png')",
        'guide3_1': "url('/public/img/guide_3_1.png')",
        'guide3_2': "url('/public/img/guide_3_2.png')",
        'guide3_3': "url('/public/img/guide_3_3.png')",
        'guide4_1': "url('/public/img/guide_4_1.png')",
        'guide4_3': "url('/public/img/guide_4_3.png')",

        'chart1_1' : "url('/public/img/chart1-1.png')",
        'chart1_2' : "url('/public/img/chart1-2.png')",
        'chart1_3' : "url('/public/img/chart1-3.png')",
  
        'chart2_1' : "url('/public/img/chart2-1.png')",
        'chart2_2' : "url('/public/img/chart2-2.png')",
        'chart2_3' : "url('/public/img/chart2-3.png')",
      },
      zIndex: {
        '999': '999',
      },
      screens: {
        "smPlus": "700px",
      },
      boxShadow: {
        all : "0 5px 20px rgba(0, 0, 0, 0.8)"
      }
    },
  },
  plugins: [],
}

