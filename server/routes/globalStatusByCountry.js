var express = require('express');
var router = express.Router();
const GlobalStatusByCountry = require('../schemas/globalStatusByCountry');

router.get('/total', function(req, res, next) {
  GlobalStatusByCountry.find()
    .sort({ date: 'desc' })
    .limit(1)
    .select({ _id: 0, __v: 0, date: 0 })
    .then(result => {
      globalStatus = {};
      let temp = result[0].toObject();
      console.log(temp);
      globalStatus.confirmator = temp.Total.confirmator;
      globalStatus.isolate = temp.Total.isolate;
      globalStatus.dead = temp.Total.dead;
      globalStatus.numbers = Object.keys(temp).length - 2;
      res.json(globalStatus);
    });
});

router.get('/', function(req, res, next) {
  GlobalStatusByCountry.find()
    .sort({ date: 'desc' })
    .limit(1)
    .select({ _id: 0, __v: 0, date: 0, Total: 0 })
    .then(result => {
      let globalStatus = result[0].toObject();
      let parseGlobalStatus = {};
      for (let g in globalStatus) {
        parseGlobalStatus[countryParse(g)] = globalStatus[g];
      }
      res.json(parseGlobalStatus);
    });
});

router.get('/mix', function(req, res, next) {
  GlobalStatusByCountry.find()
    .sort({ date: 'desc' })
    .limit(1)
    .select({ _id: 0, __v: 0, date: 0, Total: 0 })
    .then(result => {
      let globalStatus = result[0].toObject();
      let parseGlobalStatus = {};
      for (let g in globalStatus) {
        parseGlobalStatus[`${g},${countryParse(g)}`] = globalStatus[g];
      }
      res.json(parseGlobalStatus);
    });
});

router.get('/english', function(req, res, next) {
  GlobalStatusByCountry.find()
    .sort({ date: 'desc' })
    .limit(1)
    .select({ _id: 0, __v: 0, date: 0 })
    .then(result => {
      let globalStatus = result[0].toObject();
      res.json(globalStatus);
    });
});

function countryParse(data) {
  const country = [
    ['China', '중국'],
    ['Italy', '이탈리아'],
    ['Iran', '이란'],
    ['S Korea', '대한민국'],
    ['Spain', '스페인'],
    ['Germany', '독일'],
    ['France', '프랑스'],
    ['USA', '미국'],
    ['Switzerland', '스위스'],
    ['Denmark', '덴마크'],
    ['UK', '영국'],
    ['Norway', '노르웨이'],
    ['Netherlands', '네덜란드'],
    ['Sweden', '스웨덴'],
    ['Belgium', '벨기에'],
    ['Austria', '오스트리아'],
    ['Japan', '일본'],
    ['Diamond Princess', '일본 크루즈'],
    ['Hong Kong', '홍콩'],
    ['Malaysia', '말레이시아'],
    ['Qatar', '카타르'],
    ['Canada', '캐나다'],
    ['Greece', '그리스'],
    ['Australia', '호주'],
    ['Czechia', '체코'],
    ['Israel', '이스라엘'],
    ['Portugal', '포루투갈'],
    ['Finland', '핀란드'],
    ['Singapore', '싱가포르'],
    ['Slovenia', '슬로베니아'],
    ['Bahrain', '바레인'],
    ['Brazil', '브라질'],
    ['Iceland', '아이슬란드'],
    ['Estonia', '에스토니아'],
    ['Philippines', '필리핀'],
    ['Romania', '루마니아'],
    ['Ireland', '아일랜드'],
    ['Egypt', '이집트'],
    ['Poland', '폴란드'],
    ['Iraq', '이라크'],
    ['Saudi Arabia', '사우디 아라비아'],
    ['Indonesia', '인도네시아'],
    ['Thailand', '태국'],
    ['India', '인도'],
    ['Kuwait', '쿠웨이트'],
    ['San Marino', '산 마리노'],
    ['Lebanon', '레바논'],
    ['UAE', '아랍 에미리트'],
    ['Luxembourg', '룩셈부르크'],
    ['Chile', '칠레'],
    ['Peru', '페루'],
    ['Russia', '러시아'],
    ['Slovakia', '슬로바키아'],
    ['South Africa', '남아프리카'],
    ['Taiwan', '대만'],
    ['Vietnam', '베트남'],
    ['Pakistan', '파키스탄'],
    ['Bulgaria', '불가리아'],
    ['Brunei', '부르나이'],
    ['Croatia', '크로아티아'],
    ['Algeria', '알제리'],
    ['Serbia', '세르비아'],
    ['Argentina', '아르헨티나'],
    ['Panama', '파나마'],
    ['Mexico', '멕시코'],
    ['Albania', '알바니아'],
    ['Ecuador', '에콰도르'],
    ['Costa Rica', '코스타리카'],
    ['Colombia', '콜롬비아'],
    ['Georgia', '조지아'],
    ['Cyprus', '키프로스'],
    ['Hungary', '헝가리'],
    ['Latvia', '라트비아'],
    ['Morocco', '모로코'],
    ['Belarus', '벨로루시'],
    ['Armenia', '아르메니아'],
    ['Bosnia and Herzegovina', '보스니아 헤르체고비나'],
    ['Senegal', '세네갈'],
    ['Azerbaijan', '아제르바이잔'],
    ['Moldova', '몰도바'],
    ['Oman', '오만'],
    ['Malta', '몰타'],
    ['Tunisia', '튀니지'],
    ['Turkey', '터키'],
    ['Sri Lanka', '스리랑카'],
    ['Venezuela', '베네수엘라'],
    ['Afghanistan', '아프가니스탄'],
    ['Palestine', '팔레스타인'],
    ['North Macedonia', '북 마케토니아'],
    ['Maldives', '몰디브'],
    ['Lithuania', '리투아니아'],
    ['Jordan', '요르단'],
    ['Dominican Republic', '도미니카 공화국'],
    ['Bolivia', '볼리비아'],
    ['Jamaica', '자메이카'],
    ['Martinique', '마르티니크'],
    ['Kazakhstan', '카자흐스탄'],
    ['New Zealand', '뉴질랜드'],
    ['Cambodia', '캄보디아'],
    ['Burkina Faso', '브르 키나 파소'],
    ['Réunion', '레위니옹'],
    ['Macao', '마카오'],
    ['Paraguay', '파라과이'],
    ['Ghana', '가나'],
    ['Bangladesh', '방글라데시'],
    ['French Guiana', '프랑스령 기아나'],
    ['Rwanda', '르완다'],
    ['Ethiopia', '이디오피아'],
    ['Cameroon', '카메룬'],
    ['Uruguay', '우루과이'],
    ['Cuba', '쿠바'],
    ['Liechtenstein', '리히텐슈타인'],
    ['Guyana', '가이아나'],
    ['Guam', '괌'],
    ['Kenya', '케냐'],
    ['Ukraine', '우크라이나'],
    ['Seychelles', '세이셸'],
    ['Guadeloupe', '과들루프'],
    ['Honduras', '온두라스'],
    ['Aruba', '아루바'],
    ['Monaco', '모나코'],
    ['Channel Islands', '저지섬'],
    ['Saint Lucia', '세인트 루시아'],
    ['Andorra', '안도라'],
    ['Nigeria', '나이지리아'],
    ['Niger', '니제르'],
    ['Namibia', '나미비아'],
    ['Kosovo', '코소보'],
    ['Congo', '콩고민주공화국'],
    ['Trinidad and Tobago', '트리니다드 토바고'],
    ['Guatemala', '과테말라'],
    ['Gabon', '가봉'],
    ['Congo (Brazzaville)', '콩고(브라자빌)'],
    ['Saint Vincent and the Grenadines', '세인트빈센트 그레나딘'],
    ['Mongolia', '몽골'],
    ['Republic of the Congo', '콩고 공화국'],
    ['DRC', '콩고 민주 공화국'],
    ['Togo', '토고'],
    ['CAR', '중앙아프리카 공화국'],
    ['Cayman Islands', '케이맨 제도'],
    ['Guinea', '기니'],
    ['The Bahamas', '바하마'],
    ['Guernsey', '건지 섬'],
    ['Uzbekistan', '우즈베키스탄'],
    ['Antigua and Barbuda', '앤티가 바부다'],
    ['Eswatini', '에스와티니'],
    ['Bhutan', '부탄'],
    ['Sudan', '수단'],
    ['Nepal', '네팔'],
    ['Suriname', '수리남'],
    ['Holy See', '바티칸 시국'],
    ["Cote d'Ivoire", '코트디부아르'],
    ['Mauritania', '모리타니'],
    ['Equatorial Guinea', '적도 기니'],
    ['Montenegro', '몬테네그로'],
    ['Ivory Coast', '코트디부아르'],
    ['Gibraltar', '지브롤터'],
    ['Mauritius', '모리셔스'],
    ['French Polynesia', '프랑스령 폴리네시아'],
    ['Puerto Rico', '푸에르토리코'],
    ['Tanzania', '탄자니아'],
    ['Barbados', '바베이도스'],
    ['Curaçao', '퀴라소'],
    ['Bahamas', '바하마'],
    ['Faeroe Islands', '페로 제도'],
    ['Kyrgyzstan', '키르기스스탄'],
    ['Mayotte', '마요트'],
    ['St Barth', '생바르텔레미'],
    ['Saint Martin', '세인트마틴'],
    ['US Virgin Islands', '미국령 버진 아일랜드'],
    ['Benin', '베냉'],
    ['Bermuda', '버뮤다'],
    ['Greenland', '그린란드'],
    ['Liberia', '라이베리아'],
    ['New Caledonia', '누벨칼레도니'],
    ['Zambia', '잠비아'],
    ['Chad', '차드'],
    ['Djibouti', '지부티'],
    ['El Salvador', '엘살바도르'],
    ['Fiji', '피지'],
    ['Gambia', '감비아'],
    ['Vatican City', '바티칸 시국'],
    ['Montserrat', '몬세라트'],
    ['Nicaragua', '니카라과'],
    ['St Vincent Grenadines', '세인트빈센트 그레나딘'],
    ['Sint Maarten', '신트마르턴'],
    ['Somalia', '소말리아']
  ];
  for (let c of country) {
    if (c[0] == data) {
      return c[1];
    }
  }
  return data;
}

module.exports = router;
