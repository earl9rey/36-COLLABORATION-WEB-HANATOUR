export const regions = [
  {
    id: 'asia',
    label: '동남아/대만/서남아',
    active: true,
    countries: [
      {
        id: 'vietnam',
        name: '베트남',
        cities: [
          { id: 'danang', name: '다낭', hot: true },
          { id: 'nhatrang', name: '나트랑', hot: true },
          { id: 'phuquoc', name: '푸꾸옥', hot: true },
          { id: 'hanoi', name: '하노이', hot: false },
          { id: 'halongbay', name: '하롱베이', hot: false },
          { id: 'dalat', name: '달랏', hot: false },
          { id: 'sapa', name: '사파', hot: true },
          { id: 'hochiminh', name: '호치민/판티엣(무이네)', hot: false },
        ],
      },
      {
        id: 'thailand',
        name: '태국',
        cities: [],
      },
      {
        id: 'taiwan',
        name: '대만',
        cities: [],
      },
      {
        id: 'singapore',
        name: '싱가포르',
        cities: [],
      },
      {
        id: 'malaysia',
        name: '말레이시아',
        cities: [],
      },
      {
        id: 'cambodia',
        name: '캄보디아',
        cities: [],
      },
      {
        id: 'laos',
        name: '라오스',
        cities: [],
      },
      {
        id: 'indonesia',
        name: '인도네시아',
        cities: [],
      },
      {
        id: 'india',
        name: '인도',
        cities: [],
      },
      {
        id: 'maldives',
        name: '몰디브',
        cities: [],
      },
      {
        id: 'srilanka',
        name: '스리랑카',
        cities: [],
      },
      {
        id: 'philippines',
        name: '필리핀',
        cities: [],
      },
      {
        id: 'brunei',
        name: '브루나이',
        cities: [],
      },
    ],
  },
  {
    id: 'japan',
    label: '일본',
    active: false,
    countries: [],
  },
  {
    id: 'china',
    label: '중국/홍콩/마카오/몽골/중앙아시아',
    active: false,
    countries: [],
  },
  {
    id: 'europe',
    label: '유럽/아프리카',
    active: false,
    countries: [],
  },
  {
    id: 'oceania',
    label: '괌/사이판/호주/뉴질랜드',
    active: false,
    countries: [],
  },
  {
    id: 'north_america',
    label: '미주/하와이/캐나다/중남미',
    active: false,
    countries: [
      {
        id: 'usa',
        name: '미국',
        cities: [
          { id: 'west_usa', name: '미서부', hot: true },
          { id: 'east_usa', name: '미동부', hot: true },
          { id: 'central_usa', name: '미중남부', hot: false },
          { id: 'hawaii_oahu', name: '하와이(오아후)', hot: true },
          { id: 'hawaii_maui', name: '하와이(마우이)', hot: false },
          { id: 'hawaii_bigisland', name: '하와이(빅아일랜드)', hot: false },
          { id: 'honolulu', name: '호놀룰루', hot: false },
          { id: 'los_angeles', name: '로스앤젤레스', hot: false },
        ],
      },
      {
        id: 'canada',
        name: '캐나다',
        cities: [],
      },
      {
        id: 'mexico',
        name: '멕시코',
        cities: [],
      },
      {
        id: 'brazil',
        name: '브라질',
        cities: [],
      },
      {
        id: 'argentina',
        name: '아르헨티나',
        cities: [],
      },
      {
        id: 'peru',
        name: '페루',
        cities: [],
      },
      {
        id: 'chile',
        name: '칠레',
        cities: [],
      },
      {
        id: 'bolivia',
        name: '볼리비아',
        cities: [],
      },
    ],
  },
];
