const DATA = {
  'GSX400': {
    'ModelF_1983': {
      imageCount: 8,
      file: 'gsx400_1983.json'
    },
  },
  'GSXR-400': {
    'GK71B_1984': {
      imageCount: 24,
      file: 'gsxr400_1984.json',
    },
    'GK71F_1986': {
      imageCount: 8,
      file: 'gsxr400_1986.json',
    },
  },
  'GSXR-750': {
    'GR71F_1985': {
      imageCount: 24,
      file: 'gsxr750_1985.json',
    },
    'GR77A_1989': {
      imageCount: 8,
      file: 'gsxr750_1989.json',
    },
  },
  'GS1000': {
    '1978': {
      imageCount: 0,
      file: 'gs1000_1978.json',
    },
    'ModelS_1979': {
      imageCount: 16,
      file: 'gs1000_1979.json',
    },
    'ModelG_1981': {
      imageCount: 0,
      file: 'gs1000_1981.json',
    },
  }
};

const MAGAZINES = {
  'GSX400': {
    'Two_Wheels_1982': 'gsx400apr1982.html',
  },
  'GSXR-400': {
    "AMCN_1984": 'gsxr400nov1984.html',
    "Two_Wheels_Jan_85": 'gsxr400jan1985.html',
    "Two_Wheels_Jul_85": 'gsxr400jul1985.html',
  },
  'GSXR-750': {
    "Two_Wheels_1985": 'gsxr750aug1985.html',
  },
  'GS1000': {
    'Two_Wheels_1980': 'gs1000feb1980.html',
    'Classic_Motor_Bikes': 'gs1000mar2012.html',
    'Sports_Bike': 'gs1000may1984.html',
  }
};

const SEARCH_INDEX = [{
        query: 'suzuki gsx400, suzuki gsx 400',
        articles: [{title: 'Two Wheels 1982', lnk: '#/articles/GSX400/Two_Wheels_1982'}],
    }, {
        query: 'suzuki gsxr400, suzuki gsxr 400, suzuki gsx-r400, suzuki gsx-r 400',
        articles: [ {
                title: 'AMCN 1984',
                lnk: '#/articles/GSXR-400/AMCN_1984'
            }, {
                title: 'Two Wheels Jan 85',
                lnk: '#/articles/GSXR-400/Two_Wheels_Jan_85',
            }, {
                title: "Two Wheels Jul 85",
                lnk: '#/articles/GSXR-400/Two_Wheels_Jul_85'
            }]
    }, {
        query: 'suzuki gsxr750, suzuki gsxr 750, suzuki gsx-r750, suzuki gsx-r 750',
        articles: [{title: 'Two Wheels Aug 85', lnk: '#/articles/GSXR-750/Two_Wheels_1985'}],
    }, {
        query: 'suzuki gs1000, suzuki gs 1000',
        articles: [{
                title: 'Classic Motor Bikes',
                lnk: '#/articles/GS1000/Classic_Motor_Bikes'
            }, {
                title: 'Two Wheels 1980',
                lnk: '#/articles/GS1000/Two_Wheels_1980'
            }, {
                title: 'Sports Bike',
                lnk: '#/articles/GS1000/Sports_Bike'
        }],
    }
];
