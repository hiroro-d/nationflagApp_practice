const countries = [
  {
      "ja_name": "アイスランド",
      "en_name": "Iceland",
      "numeric": "352",
      "alpha3": "ISL",
      "alpha2": "IS",
      "location": "北ヨーロッパ",
      "subdivision": "ISO 3166-2:IS"
  },
  {
      "ja_name": "アイルランド",
      "en_name": "Ireland",
      "numeric": "372",
      "alpha3": "IRL",
      "alpha2": "IE",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:IE"
  },
  {
      "ja_name": "アゼルバイジャン",
      "en_name": "Azerbaijan",
      "numeric": "31",
      "alpha3": "AZE",
      "alpha2": "AZ",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:AZ"
  },
  {
      "ja_name": "アフガニスタン",
      "en_name": "Afghanistan",
      "numeric": "4",
      "alpha3": "AFG",
      "alpha2": "AF",
      "location": "中東",
      "subdivision": "ISO 3166-2:AF"
  },
  {
      "ja_name": "アメリカ合衆国",
      "en_name": "United States",
      "numeric": "840",
      "alpha3": "USA",
      "alpha2": "US",
      "location": "北アメリカ",
      "subdivision": "ISO 3166-2:US"
  },
  {
      "ja_name": "アメリカ領ヴァージン諸島",
      "en_name": "Virgin Islands, U.S.",
      "numeric": "850",
      "alpha3": "VIR",
      "alpha2": "VI",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:VI"
  },
  {
      "ja_name": "アメリカ領サモア",
      "en_name": "American Samoa",
      "numeric": "16",
      "alpha3": "ASM",
      "alpha2": "AS",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:AS"
  },
  {
      "ja_name": "アラブ首長国連邦",
      "en_name": "United Arab Emirates",
      "numeric": "784",
      "alpha3": "ARE",
      "alpha2": "AE",
      "location": "中東",
      "subdivision": "ISO 3166-2:AE"
  },
  {
      "ja_name": "アルジェリア",
      "en_name": "Algeria",
      "numeric": "12",
      "alpha3": "DZA",
      "alpha2": "DZ",
      "location": "北アフリカ",
      "subdivision": "ISO 3166-2:DZ"
  },
  {
      "ja_name": "アルゼンチン",
      "en_name": "Argentina",
      "numeric": "32",
      "alpha3": "ARG",
      "alpha2": "AR",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:AR"
  },
  {
      "ja_name": "アルバ",
      "en_name": "Aruba",
      "numeric": "533",
      "alpha3": "ABW",
      "alpha2": "AW",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:AW"
  },
  {
      "ja_name": "アルバニア",
      "en_name": "Albania",
      "numeric": "8",
      "alpha3": "ALB",
      "alpha2": "AL",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:AL"
  },
  {
      "ja_name": "アルメニア",
      "en_name": "Armenia",
      "numeric": "51",
      "alpha3": "ARM",
      "alpha2": "AM",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:AM"
  },
  {
      "ja_name": "アンギラ",
      "en_name": "Anguilla",
      "numeric": "660",
      "alpha3": "AIA",
      "alpha2": "AI",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:AI"
  },
  {
      "ja_name": "アンゴラ",
      "en_name": "Angola",
      "numeric": "24",
      "alpha3": "AGO",
      "alpha2": "AO",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:AO"
  },
  {
      "ja_name": "アンティグア・バーブーダ",
      "en_name": "Antigua and Barbuda",
      "numeric": "28",
      "alpha3": "ATG",
      "alpha2": "AG",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:AG"
  },
  {
      "ja_name": "アンドラ",
      "en_name": "Andorra",
      "numeric": "20",
      "alpha3": "AND",
      "alpha2": "AD",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:AD"
  },
  {
      "ja_name": "イエメン",
      "en_name": "Yemen",
      "numeric": "887",
      "alpha3": "YEM",
      "alpha2": "YE",
      "location": "中東",
      "subdivision": "ISO 3166-2:YE"
  },
  {
      "ja_name": "イギリス",
      "en_name": "United Kingdom",
      "numeric": "826",
      "alpha3": "GBR",
      "alpha2": "GB",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:GB"
  },
  {
      "ja_name": "イギリス領インド洋地域",
      "en_name": "British Indian Ocean Territory",
      "numeric": "86",
      "alpha3": "IOT",
      "alpha2": "IO",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:IO"
  },
  {
      "ja_name": "イギリス領ヴァージン諸島",
      "en_name": "Virgin Islands, British",
      "numeric": "92",
      "alpha3": "VGB",
      "alpha2": "VG",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:VG"
  },
  {
      "ja_name": "イスラエル",
      "en_name": "Israel",
      "numeric": "376",
      "alpha3": "ISR",
      "alpha2": "IL",
      "location": "中東",
      "subdivision": "ISO 3166-2:IL"
  },
  {
      "ja_name": "イタリア",
      "en_name": "Italy",
      "numeric": "380",
      "alpha3": "ITA",
      "alpha2": "IT",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:IT"
  },
  {
      "ja_name": "イラク",
      "en_name": "Iraq",
      "numeric": "368",
      "alpha3": "IRQ",
      "alpha2": "IQ",
      "location": "中東",
      "subdivision": "ISO 3166-2:IQ"
  },
  {
      "ja_name": "イラン・イスラム共和国",
      "en_name": "Iran, Islamic Republic of",
      "numeric": "364",
      "alpha3": "IRN",
      "alpha2": "IR",
      "location": "中東",
      "subdivision": "ISO 3166-2:IR"
  },
  {
      "ja_name": "インド",
      "en_name": "India",
      "numeric": "356",
      "alpha3": "IND",
      "alpha2": "IN",
      "location": "南アジア",
      "subdivision": "ISO 3166-2:IN"
  },
  {
      "ja_name": "インドネシア",
      "en_name": "Indonesia",
      "numeric": "360",
      "alpha3": "IDN",
      "alpha2": "ID",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:ID"
  },
  {
      "ja_name": "ウォリス・フツナ",
      "en_name": "Wallis and Futuna",
      "numeric": "876",
      "alpha3": "WLF",
      "alpha2": "WF",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:WF"
  },
  {
      "ja_name": "ウガンダ",
      "en_name": "Uganda",
      "numeric": "800",
      "alpha3": "UGA",
      "alpha2": "UG",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:UG"
  },
  {
      "ja_name": "ウクライナ",
      "en_name": "Ukraine",
      "numeric": "804",
      "alpha3": "UKR",
      "alpha2": "UA",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:UA"
  },
  {
      "ja_name": "ウズベキスタン",
      "en_name": "Uzbekistan",
      "numeric": "860",
      "alpha3": "UZB",
      "alpha2": "UZ",
      "location": "中央アジア",
      "subdivision": "ISO 3166-2:UZ"
  },
  {
      "ja_name": "ウルグアイ",
      "en_name": "Uruguay",
      "numeric": "858",
      "alpha3": "URY",
      "alpha2": "UY",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:UY"
  },
  {
      "ja_name": "エクアドル",
      "en_name": "Ecuador",
      "numeric": "218",
      "alpha3": "ECU",
      "alpha2": "EC",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:EC"
  },
  {
      "ja_name": "エジプト",
      "en_name": "Egypt",
      "numeric": "818",
      "alpha3": "EGY",
      "alpha2": "EG",
      "location": "北アフリカ",
      "subdivision": "ISO 3166-2:EG"
  },
  {
      "ja_name": "エストニア",
      "en_name": "Estonia",
      "numeric": "233",
      "alpha3": "EST",
      "alpha2": "EE",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:EE"
  },
  {
      "ja_name": "エチオピア",
      "en_name": "Ethiopia",
      "numeric": "231",
      "alpha3": "ETH",
      "alpha2": "ET",
      "location": "東アフリカ",
      "subdivision": "ISO 3166-2:ET"
  },
  {
      "ja_name": "エリトリア",
      "en_name": "Eritrea",
      "numeric": "232",
      "alpha3": "ERI",
      "alpha2": "ER",
      "location": "東アフリカ",
      "subdivision": "ISO 3166-2:ER"
  },
  {
      "ja_name": "エルサルバドル",
      "en_name": "El Salvador",
      "numeric": "222",
      "alpha3": "SLV",
      "alpha2": "SV",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:SV"
  },
  {
      "ja_name": "オーストラリア",
      "en_name": "Australia",
      "numeric": "36",
      "alpha3": "AUS",
      "alpha2": "AU",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:AU"
  },
  {
      "ja_name": "オーストリア",
      "en_name": "Austria",
      "numeric": "40",
      "alpha3": "AUT",
      "alpha2": "AT",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:AT"
  },
  {
      "ja_name": "オーランド諸島",
      "en_name": "Åland Islands",
      "numeric": "248",
      "alpha3": "ALA",
      "alpha2": "AX",
      "location": "北ヨーロッパ",
      "subdivision": "ISO 3166-2:AX"
  },
  {
      "ja_name": "オマーン",
      "en_name": "Oman",
      "numeric": "512",
      "alpha3": "OMN",
      "alpha2": "OM",
      "location": "中東",
      "subdivision": "ISO 3166-2:OM"
  },
  {
      "ja_name": "オランダ",
      "en_name": "Netherlands",
      "numeric": "528",
      "alpha3": "NLD",
      "alpha2": "NL",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:NL"
  },
  {
      "ja_name": "ガーナ",
      "en_name": "Ghana",
      "numeric": "288",
      "alpha3": "GHA",
      "alpha2": "GH",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:GH"
  },
  {
      "ja_name": "カーボベルデ",
      "en_name": "Cape Verde",
      "numeric": "132",
      "alpha3": "CPV",
      "alpha2": "CV",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:CV"
  },
  {
      "ja_name": "ガーンジー",
      "en_name": "Guernsey",
      "numeric": "831",
      "alpha3": "GGY",
      "alpha2": "GG",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:GG"
  },
  {
      "ja_name": "ガイアナ",
      "en_name": "Guyana",
      "numeric": "328",
      "alpha3": "GUY",
      "alpha2": "GY",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:GY"
  },
  {
      "ja_name": "カザフスタン",
      "en_name": "Kazakhstan",
      "numeric": "398",
      "alpha3": "KAZ",
      "alpha2": "KZ",
      "location": "中央アジア",
      "subdivision": "ISO 3166-2:KZ"
  },
  {
      "ja_name": "カタール",
      "en_name": "Qatar",
      "numeric": "634",
      "alpha3": "QAT",
      "alpha2": "QA",
      "location": "中東",
      "subdivision": "ISO 3166-2:QA"
  },
  {
      "ja_name": "合衆国領有小離島",
      "en_name": "United States Minor Outlying Islands",
      "numeric": "581",
      "alpha3": "UMI",
      "alpha2": "UM",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:UM"
  },
  {
      "ja_name": "カナダ",
      "en_name": "Canada",
      "numeric": "124",
      "alpha3": "CAN",
      "alpha2": "CA",
      "location": "北アメリカ",
      "subdivision": "ISO 3166-2:CA"
  },
  {
      "ja_name": "ガボン",
      "en_name": "Gabon",
      "numeric": "266",
      "alpha3": "GAB",
      "alpha2": "GA",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:GA"
  },
  {
      "ja_name": "カメルーン",
      "en_name": "Cameroon",
      "numeric": "120",
      "alpha3": "CMR",
      "alpha2": "CM",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:CM"
  },
  {
      "ja_name": "ガンビア",
      "en_name": "Gambia",
      "numeric": "270",
      "alpha3": "GMB",
      "alpha2": "GM",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:GM"
  },
  {
      "ja_name": "カンボジア",
      "en_name": "Cambodia",
      "numeric": "116",
      "alpha3": "KHM",
      "alpha2": "KH",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:KH"
  },
  {
      "ja_name": "北マリアナ諸島",
      "en_name": "Northern Mariana Islands",
      "numeric": "580",
      "alpha3": "MNP",
      "alpha2": "MP",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:MP"
  },
  {
      "ja_name": "ギニア",
      "en_name": "Guinea",
      "numeric": "324",
      "alpha3": "GIN",
      "alpha2": "GN",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:GN"
  },
  {
      "ja_name": "ギニアビサウ",
      "en_name": "Guinea-Bissau",
      "numeric": "624",
      "alpha3": "GNB",
      "alpha2": "GW",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:GW"
  },
  {
      "ja_name": "キプロス",
      "en_name": "Cyprus",
      "numeric": "196",
      "alpha3": "CYP",
      "alpha2": "CY",
      "location": "地中海地域",
      "subdivision": "ISO 3166-2:CY"
  },
  {
      "ja_name": "キューバ",
      "en_name": "Cuba",
      "numeric": "192",
      "alpha3": "CUB",
      "alpha2": "CU",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:CU"
  },
  {
      "ja_name": "キュラソー",
      "en_name": "Curaçao",
      "numeric": "531",
      "alpha3": "CUW",
      "alpha2": "CW",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:CW"
  },
  {
      "ja_name": "ギリシャ",
      "en_name": "Greece",
      "numeric": "300",
      "alpha3": "GRC",
      "alpha2": "GR",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:GR"
  },
  {
      "ja_name": "キリバス",
      "en_name": "Kiribati",
      "numeric": "296",
      "alpha3": "KIR",
      "alpha2": "KI",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:KI"
  },
  {
      "ja_name": "キルギス",
      "en_name": "Kyrgyzstan",
      "numeric": "417",
      "alpha3": "KGZ",
      "alpha2": "KG",
      "location": "中央アジア",
      "subdivision": "ISO 3166-2:KG"
  },
  {
      "ja_name": "グアテマラ",
      "en_name": "Guatemala",
      "numeric": "320",
      "alpha3": "GTM",
      "alpha2": "GT",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:GT"
  },
  {
      "ja_name": "グアドループ",
      "en_name": "Guadeloupe",
      "numeric": "312",
      "alpha3": "GLP",
      "alpha2": "GP",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:GP"
  },
  {
      "ja_name": "グアム",
      "en_name": "Guam",
      "numeric": "316",
      "alpha3": "GUM",
      "alpha2": "GU",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:GU"
  },
  {
      "ja_name": "クウェート",
      "en_name": "Kuwait",
      "numeric": "414",
      "alpha3": "KWT",
      "alpha2": "KW",
      "location": "中東",
      "subdivision": "ISO 3166-2:KW"
  },
  {
      "ja_name": "クック諸島",
      "en_name": "Cook Islands",
      "numeric": "184",
      "alpha3": "COK",
      "alpha2": "CK",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:CK"
  },
  {
      "ja_name": "グリーンランド",
      "en_name": "Greenland",
      "numeric": "304",
      "alpha3": "GRL",
      "alpha2": "GL",
      "location": "北ヨーロッパ",
      "subdivision": "ISO 3166-2:GL"
  },
  {
      "ja_name": "クリスマス島",
      "en_name": "Christmas Island",
      "numeric": "162",
      "alpha3": "CXR",
      "alpha2": "CX",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:CX"
  },
  {
      "ja_name": "グレナダ",
      "en_name": "Grenada",
      "numeric": "308",
      "alpha3": "GRD",
      "alpha2": "GD",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:GD"
  },
  {
      "ja_name": "クロアチア",
      "en_name": "Croatia",
      "numeric": "191",
      "alpha3": "HRV",
      "alpha2": "HR",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:HR"
  },
  {
      "ja_name": "ケイマン諸島",
      "en_name": "Cayman Islands",
      "numeric": "136",
      "alpha3": "CYM",
      "alpha2": "KY",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:KY"
  },
  {
      "ja_name": "ケニア",
      "en_name": "Kenya",
      "numeric": "404",
      "alpha3": "KEN",
      "alpha2": "KE",
      "location": "東アフリカ",
      "subdivision": "ISO 3166-2:KE"
  },
  {
      "ja_name": "コートジボワール",
      "en_name": "Côte d'Ivoire",
      "numeric": "384",
      "alpha3": "CIV",
      "alpha2": "CI",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:CI"
  },
  {
      "ja_name": "ココス（キーリング）諸島",
      "en_name": "Cocos (Keeling) Islands",
      "numeric": "166",
      "alpha3": "CCK",
      "alpha2": "CC",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:CC"
  },
  {
      "ja_name": "コスタリカ",
      "en_name": "Costa Rica",
      "numeric": "188",
      "alpha3": "CRI",
      "alpha2": "CR",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:CR"
  },
  {
      "ja_name": "コモロ",
      "en_name": "Comoros",
      "numeric": "174",
      "alpha3": "COM",
      "alpha2": "KM",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:KM"
  },
  {
      "ja_name": "コロンビア",
      "en_name": "Colombia",
      "numeric": "170",
      "alpha3": "COL",
      "alpha2": "CO",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:CO"
  },
  {
      "ja_name": "コンゴ共和国",
      "en_name": "Congo",
      "numeric": "178",
      "alpha3": "COG",
      "alpha2": "CG",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:CG"
  },
  {
      "ja_name": "コンゴ民主共和国",
      "en_name": "Congo, the Democratic Republic of the",
      "numeric": "180",
      "alpha3": "COD",
      "alpha2": "CD",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:CD"
  },
  {
      "ja_name": "サウジアラビア",
      "en_name": "Saudi Arabia",
      "numeric": "682",
      "alpha3": "SAU",
      "alpha2": "SA",
      "location": "中東",
      "subdivision": "ISO 3166-2:SA"
  },
  {
      "ja_name": "サウスジョージア・サウスサンドウィッチ諸島",
      "en_name": "South Georgia and the South Sandwich Islands",
      "numeric": "239",
      "alpha3": "SGS",
      "alpha2": "GS",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:GS"
  },
  {
      "ja_name": "サモア",
      "en_name": "Samoa",
      "numeric": "882",
      "alpha3": "WSM",
      "alpha2": "WS",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:WS"
  },
  {
      "ja_name": "サントメ・プリンシペ",
      "en_name": "Sao Tome and Principe",
      "numeric": "678",
      "alpha3": "STP",
      "alpha2": "ST",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:ST"
  },
  {
      "ja_name": "サン・バルテルミー",
      "en_name": "Saint Barthélemy",
      "numeric": "652",
      "alpha3": "BLM",
      "alpha2": "BL",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:BL"
  },
  {
      "ja_name": "ザンビア",
      "en_name": "Zambia",
      "numeric": "894",
      "alpha3": "ZMB",
      "alpha2": "ZM",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:ZM"
  },
  {
      "ja_name": "サンピエール島・ミクロン島",
      "en_name": "Saint Pierre and Miquelon",
      "numeric": "666",
      "alpha3": "SPM",
      "alpha2": "PM",
      "location": "北アメリカ",
      "subdivision": "ISO 3166-2:PM"
  },
  {
      "ja_name": "サンマリノ",
      "en_name": "San Marino",
      "numeric": "674",
      "alpha3": "SMR",
      "alpha2": "SM",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:SM"
  },
  {
      "ja_name": "サン・マルタン（フランス領）",
      "en_name": "Saint Martin (French part)",
      "numeric": "663",
      "alpha3": "MAF",
      "alpha2": "MF",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:MF"
  },
  {
      "ja_name": "シエラレオネ",
      "en_name": "Sierra Leone",
      "numeric": "694",
      "alpha3": "SLE",
      "alpha2": "SL",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:SL"
  },
  {
      "ja_name": "ジブチ",
      "en_name": "Djibouti",
      "numeric": "262",
      "alpha3": "DJI",
      "alpha2": "DJ",
      "location": "東アフリカ",
      "subdivision": "ISO 3166-2:DJ"
  },
  {
      "ja_name": "ジブラルタル",
      "en_name": "Gibraltar",
      "numeric": "292",
      "alpha3": "GIB",
      "alpha2": "GI",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:GI"
  },
  {
      "ja_name": "ジャージー",
      "en_name": "Jersey",
      "numeric": "832",
      "alpha3": "JEY",
      "alpha2": "JE",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:JE"
  },
  {
      "ja_name": "ジャマイカ",
      "en_name": "Jamaica",
      "numeric": "388",
      "alpha3": "JAM",
      "alpha2": "JM",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:JM"
  },
  {
      "ja_name": "ジョージア",
      "en_name": "Georgia",
      "numeric": "268",
      "alpha3": "GEO",
      "alpha2": "GE",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:GE"
  },
  {
      "ja_name": "シリア・アラブ共和国",
      "en_name": "Syrian Arab Republic",
      "numeric": "760",
      "alpha3": "SYR",
      "alpha2": "SY",
      "location": "中東",
      "subdivision": "ISO 3166-2:SY"
  },
  {
      "ja_name": "シンガポール",
      "en_name": "Singapore",
      "numeric": "702",
      "alpha3": "SGP",
      "alpha2": "SG",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:SG"
  },
  {
      "ja_name": "シント・マールテン（オランダ領）",
      "en_name": "Sint Maarten (Dutch part)",
      "numeric": "534",
      "alpha3": "SXM",
      "alpha2": "SX",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:SX"
  },
  {
      "ja_name": "ジンバブエ",
      "en_name": "Zimbabwe",
      "numeric": "716",
      "alpha3": "ZWE",
      "alpha2": "ZW",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:ZW"
  },
  {
      "ja_name": "スイス",
      "en_name": "Switzerland",
      "numeric": "756",
      "alpha3": "CHE",
      "alpha2": "CH",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:CH"
  },
  {
      "ja_name": "スウェーデン",
      "en_name": "Sweden",
      "numeric": "752",
      "alpha3": "SWE",
      "alpha2": "SE",
      "location": "北ヨーロッパ",
      "subdivision": "ISO 3166-2:SE"
  },
  {
      "ja_name": "スーダン",
      "en_name": "Sudan",
      "numeric": "729",
      "alpha3": "SDN",
      "alpha2": "SD",
      "location": "東アフリカ",
      "subdivision": "ISO 3166-2:SD"
  },
  {
      "ja_name": "スヴァールバル諸島およびヤンマイエン島",
      "en_name": "Svalbard and Jan Mayen",
      "numeric": "744",
      "alpha3": "SJM",
      "alpha2": "SJ",
      "location": "北ヨーロッパ",
      "subdivision": "ISO 3166-2:SJ"
  },
  {
      "ja_name": "スペイン",
      "en_name": "Spain",
      "numeric": "724",
      "alpha3": "ESP",
      "alpha2": "ES",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:ES"
  },
  {
      "ja_name": "スリナム",
      "en_name": "Suriname",
      "numeric": "740",
      "alpha3": "SUR",
      "alpha2": "SR",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:SR"
  },
  {
      "ja_name": "スリランカ",
      "en_name": "Sri Lanka",
      "numeric": "144",
      "alpha3": "LKA",
      "alpha2": "LK",
      "location": "南アジア",
      "subdivision": "ISO 3166-2:LK"
  },
  {
      "ja_name": "スロバキア",
      "en_name": "Slovakia",
      "numeric": "703",
      "alpha3": "SVK",
      "alpha2": "SK",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:SK"
  },
  {
      "ja_name": "スロベニア",
      "en_name": "Slovenia",
      "numeric": "705",
      "alpha3": "SVN",
      "alpha2": "SI",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:SI"
  },
  {
      "ja_name": "スワジランド",
      "en_name": "Swaziland",
      "numeric": "748",
      "alpha3": "SWZ",
      "alpha2": "SZ",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:SZ"
  },
  {
      "ja_name": "セーシェル",
      "en_name": "Seychelles",
      "numeric": "690",
      "alpha3": "SYC",
      "alpha2": "SC",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:SC"
  },
  {
      "ja_name": "赤道ギニア",
      "en_name": "Equatorial Guinea",
      "numeric": "226",
      "alpha3": "GNQ",
      "alpha2": "GQ",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:GQ"
  },
  {
      "ja_name": "セネガル",
      "en_name": "Senegal",
      "numeric": "686",
      "alpha3": "SEN",
      "alpha2": "SN",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:SN"
  },
  {
      "ja_name": "セルビア",
      "en_name": "Serbia",
      "numeric": "688",
      "alpha3": "SRB",
      "alpha2": "RS",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:RS"
  },
  {
      "ja_name": "セントクリストファー・ネイビス",
      "en_name": "Saint Kitts and Nevis",
      "numeric": "659",
      "alpha3": "KNA",
      "alpha2": "KN",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:KN"
  },
  {
      "ja_name": "セントビンセントおよびグレナディーン諸島",
      "en_name": "Saint Vincent and the Grenadines",
      "numeric": "670",
      "alpha3": "VCT",
      "alpha2": "VC",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:VC"
  },
  {
      "ja_name": "セントヘレナ・アセンションおよびトリスタンダクーニャ",
      "en_name": "Saint Helena, Ascension and Tristan da Cunha",
      "numeric": "654",
      "alpha3": "SHN",
      "alpha2": "SH",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:SH"
  },
  {
      "ja_name": "セントルシア",
      "en_name": "Saint Lucia",
      "numeric": "662",
      "alpha3": "LCA",
      "alpha2": "LC",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:LC"
  },
  {
      "ja_name": "ソマリア",
      "en_name": "Somalia",
      "numeric": "706",
      "alpha3": "SOM",
      "alpha2": "SO",
      "location": "東アフリカ",
      "subdivision": "ISO 3166-2:SO"
  },
  {
      "ja_name": "ソロモン諸島",
      "en_name": "Solomon Islands",
      "numeric": "90",
      "alpha3": "SLB",
      "alpha2": "SB",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:SB"
  },
  {
      "ja_name": "タークス・カイコス諸島",
      "en_name": "Turks and Caicos Islands",
      "numeric": "796",
      "alpha3": "TCA",
      "alpha2": "TC",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:TC"
  },
  {
      "ja_name": "タイ",
      "en_name": "Thailand",
      "numeric": "764",
      "alpha3": "THA",
      "alpha2": "TH",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:TH"
  },
  {
      "ja_name": "大韓民国",
      "en_name": "Korea, Republic of",
      "numeric": "410",
      "alpha3": "KOR",
      "alpha2": "KR",
      "location": "東アジア",
      "subdivision": "ISO 3166-2:KR"
  },
  {
      "ja_name": "台湾",
      "en_name": "Taiwan, Province of China",
      "numeric": "158",
      "alpha3": "TWN",
      "alpha2": "TW",
      "location": "東アジア",
      "subdivision": "ISO 3166-2:TW"
  },
  {
      "ja_name": "タジキスタン",
      "en_name": "Tajikistan",
      "numeric": "762",
      "alpha3": "TJK",
      "alpha2": "TJ",
      "location": "中央アジア",
      "subdivision": "ISO 3166-2:TJ"
  },
  {
      "ja_name": "タンザニア",
      "en_name": "Tanzania, United Republic of",
      "numeric": "834",
      "alpha3": "TZA",
      "alpha2": "TZ",
      "location": "東アフリカ",
      "subdivision": "ISO 3166-2:TZ"
  },
  {
      "ja_name": "チェコ",
      "en_name": "Czechia",
      "numeric": "203",
      "alpha3": "CZE",
      "alpha2": "CZ",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:CZ"
  },
  {
      "ja_name": "チャド",
      "en_name": "Chad",
      "numeric": "148",
      "alpha3": "TCD",
      "alpha2": "TD",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:TD"
  },
  {
      "ja_name": "中央アフリカ共和国",
      "en_name": "Central African Republic",
      "numeric": "140",
      "alpha3": "CAF",
      "alpha2": "CF",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:CF"
  },
  {
      "ja_name": "中華人民共和国",
      "en_name": "China",
      "numeric": "156",
      "alpha3": "CHN",
      "alpha2": "CN",
      "location": "東アジア",
      "subdivision": "ISO 3166-2:CN"
  },
  {
      "ja_name": "チュニジア",
      "en_name": "Tunisia",
      "numeric": "788",
      "alpha3": "TUN",
      "alpha2": "TN",
      "location": "北アフリカ",
      "subdivision": "ISO 3166-2:TN"
  },
  {
      "ja_name": "朝鮮民主主義人民共和国",
      "en_name": "Korea, Democratic People's Republic of",
      "numeric": "408",
      "alpha3": "PRK",
      "alpha2": "KP",
      "location": "東アジア",
      "subdivision": "ISO 3166-2:KP"
  },
  {
      "ja_name": "チリ",
      "en_name": "Chile",
      "numeric": "152",
      "alpha3": "CHL",
      "alpha2": "CL",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:CL"
  },
  {
      "ja_name": "ツバル",
      "en_name": "Tuvalu",
      "numeric": "798",
      "alpha3": "TUV",
      "alpha2": "TV",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:TV"
  },
  {
      "ja_name": "デンマーク",
      "en_name": "Denmark",
      "numeric": "208",
      "alpha3": "DNK",
      "alpha2": "DK",
      "location": "北ヨーロッパ",
      "subdivision": "ISO 3166-2:DK"
  },
  {
      "ja_name": "ドイツ",
      "en_name": "Germany",
      "numeric": "276",
      "alpha3": "DEU",
      "alpha2": "DE",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:DE"
  },
  {
      "ja_name": "トーゴ",
      "en_name": "Togo",
      "numeric": "768",
      "alpha3": "TGO",
      "alpha2": "TG",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:TG"
  },
  {
      "ja_name": "トケラウ",
      "en_name": "Tokelau",
      "numeric": "772",
      "alpha3": "TKL",
      "alpha2": "TK",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:TK"
  },
  {
      "ja_name": "ドミニカ共和国",
      "en_name": "Dominican Republic",
      "numeric": "214",
      "alpha3": "DOM",
      "alpha2": "DO",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:DO"
  },
  {
      "ja_name": "ドミニカ国",
      "en_name": "Dominica",
      "numeric": "212",
      "alpha3": "DMA",
      "alpha2": "DM",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:DM"
  },
  {
      "ja_name": "トリニダード・トバゴ",
      "en_name": "Trinidad and Tobago",
      "numeric": "780",
      "alpha3": "TTO",
      "alpha2": "TT",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:TT"
  },
  {
      "ja_name": "トルクメニスタン",
      "en_name": "Turkmenistan",
      "numeric": "795",
      "alpha3": "TKM",
      "alpha2": "TM",
      "location": "中央アジア",
      "subdivision": "ISO 3166-2:TM"
  },
  {
      "ja_name": "トルコ",
      "en_name": "Turkey",
      "numeric": "792",
      "alpha3": "TUR",
      "alpha2": "TR",
      "location": "中東",
      "subdivision": "ISO 3166-2:TR"
  },
  {
      "ja_name": "トンガ",
      "en_name": "Tonga",
      "numeric": "776",
      "alpha3": "TON",
      "alpha2": "TO",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:TO"
  },
  {
      "ja_name": "ナイジェリア",
      "en_name": "Nigeria",
      "numeric": "566",
      "alpha3": "NGA",
      "alpha2": "NG",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:NG"
  },
  {
      "ja_name": "ナウル",
      "en_name": "Nauru",
      "numeric": "520",
      "alpha3": "NRU",
      "alpha2": "NR",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:NR"
  },
  {
      "ja_name": "ナミビア",
      "en_name": "Namibia",
      "numeric": "516",
      "alpha3": "NAM",
      "alpha2": "NA",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:NA"
  },
  {
      "ja_name": "南極",
      "en_name": "Antarctica",
      "numeric": "10",
      "alpha3": "ATA",
      "alpha2": "AQ",
      "location": "南極",
      "subdivision": "ISO 3166-2:AQ"
  },
  {
      "ja_name": "ニウエ",
      "en_name": "Niue",
      "numeric": "570",
      "alpha3": "NIU",
      "alpha2": "NU",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:NU"
  },
  {
      "ja_name": "ニカラグア",
      "en_name": "Nicaragua",
      "numeric": "558",
      "alpha3": "NIC",
      "alpha2": "NI",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:NI"
  },
  {
      "ja_name": "ニジェール",
      "en_name": "Niger",
      "numeric": "562",
      "alpha3": "NER",
      "alpha2": "NE",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:NE"
  },
  {
      "ja_name": "日本",
      "en_name": "Japan",
      "numeric": "392",
      "alpha3": "JPN",
      "alpha2": "JP",
      "location": "東アジア",
      "subdivision": "ISO 3166-2:JP"
  },
  {
      "ja_name": "西サハラ",
      "en_name": "Western Sahara",
      "numeric": "732",
      "alpha3": "ESH",
      "alpha2": "EH",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:EH"
  },
  {
      "ja_name": "ニューカレドニア",
      "en_name": "New Caledonia",
      "numeric": "540",
      "alpha3": "NCL",
      "alpha2": "NC",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:NC"
  },
  {
      "ja_name": "ニュージーランド",
      "en_name": "New Zealand",
      "numeric": "554",
      "alpha3": "NZL",
      "alpha2": "NZ",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:NZ"
  },
  {
      "ja_name": "ネパール",
      "en_name": "Nepal",
      "numeric": "524",
      "alpha3": "NPL",
      "alpha2": "NP",
      "location": "南アジア",
      "subdivision": "ISO 3166-2:NP"
  },
  {
      "ja_name": "ノーフォーク島",
      "en_name": "Norfolk Island",
      "numeric": "574",
      "alpha3": "NFK",
      "alpha2": "NF",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:NF"
  },
  {
      "ja_name": "ノルウェー",
      "en_name": "Norway",
      "numeric": "578",
      "alpha3": "NOR",
      "alpha2": "NO",
      "location": "北ヨーロッパ",
      "subdivision": "ISO 3166-2:NO"
  },
  {
      "ja_name": "ハード島とマクドナルド諸島",
      "en_name": "Heard Island and McDonald Islands",
      "numeric": "334",
      "alpha3": "HMD",
      "alpha2": "HM",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:HM"
  },
  {
      "ja_name": "バーレーン",
      "en_name": "Bahrain",
      "numeric": "48",
      "alpha3": "BHR",
      "alpha2": "BH",
      "location": "中東",
      "subdivision": "ISO 3166-2:BH"
  },
  {
      "ja_name": "ハイチ",
      "en_name": "Haiti",
      "numeric": "332",
      "alpha3": "HTI",
      "alpha2": "HT",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:HT"
  },
  {
      "ja_name": "パキスタン",
      "en_name": "Pakistan",
      "numeric": "586",
      "alpha3": "PAK",
      "alpha2": "PK",
      "location": "南アジア",
      "subdivision": "ISO 3166-2:PK"
  },
  {
      "ja_name": "バチカン市国",
      "en_name": "Holy See (Vatican City State)",
      "numeric": "336",
      "alpha3": "VAT",
      "alpha2": "VA",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:VA"
  },
  {
      "ja_name": "パナマ",
      "en_name": "Panama",
      "numeric": "591",
      "alpha3": "PAN",
      "alpha2": "PA",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:PA"
  },
  {
      "ja_name": "バヌアツ",
      "en_name": "Vanuatu",
      "numeric": "548",
      "alpha3": "VUT",
      "alpha2": "VU",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:VU"
  },
  {
      "ja_name": "バハマ",
      "en_name": "Bahamas",
      "numeric": "44",
      "alpha3": "BHS",
      "alpha2": "BS",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:BS"
  },
  {
      "ja_name": "パプアニューギニア",
      "en_name": "Papua New Guinea",
      "numeric": "598",
      "alpha3": "PNG",
      "alpha2": "PG",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:PG"
  },
  {
      "ja_name": "バミューダ",
      "en_name": "Bermuda",
      "numeric": "60",
      "alpha3": "BMU",
      "alpha2": "BM",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:BM"
  },
  {
      "ja_name": "パラオ",
      "en_name": "Palau",
      "numeric": "585",
      "alpha3": "PLW",
      "alpha2": "PW",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:PW"
  },
  {
      "ja_name": "パラグアイ",
      "en_name": "Paraguay",
      "numeric": "600",
      "alpha3": "PRY",
      "alpha2": "PY",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:PY"
  },
  {
      "ja_name": "バルバドス",
      "en_name": "Barbados",
      "numeric": "52",
      "alpha3": "BRB",
      "alpha2": "BB",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:BB"
  },
  {
      "ja_name": "パレスチナ",
      "en_name": "Palestinian Territory, Occupied",
      "numeric": "275",
      "alpha3": "PSE",
      "alpha2": "PS",
      "location": "中東",
      "subdivision": "ISO 3166-2:PS"
  },
  {
      "ja_name": "ハンガリー",
      "en_name": "Hungary",
      "numeric": "348",
      "alpha3": "HUN",
      "alpha2": "HU",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:HU"
  },
  {
      "ja_name": "バングラデシュ",
      "en_name": "Bangladesh",
      "numeric": "50",
      "alpha3": "BGD",
      "alpha2": "BD",
      "location": "南アジア",
      "subdivision": "ISO 3166-2:BD"
  },
  {
      "ja_name": "東ティモール",
      "en_name": "Timor-Leste",
      "numeric": "626",
      "alpha3": "TLS",
      "alpha2": "TL",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:TL"
  },
  {
      "ja_name": "ピトケアン",
      "en_name": "Pitcairn",
      "numeric": "612",
      "alpha3": "PCN",
      "alpha2": "PN",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:PN"
  },
  {
      "ja_name": "フィジー",
      "en_name": "Fiji",
      "numeric": "242",
      "alpha3": "FJI",
      "alpha2": "FJ",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:FJ"
  },
  {
      "ja_name": "フィリピン",
      "en_name": "Philippines",
      "numeric": "608",
      "alpha3": "PHL",
      "alpha2": "PH",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:PH"
  },
  {
      "ja_name": "フィンランド",
      "en_name": "Finland",
      "numeric": "246",
      "alpha3": "FIN",
      "alpha2": "FI",
      "location": "北ヨーロッパ",
      "subdivision": "ISO 3166-2:FI"
  },
  {
      "ja_name": "ブータン",
      "en_name": "Bhutan",
      "numeric": "64",
      "alpha3": "BTN",
      "alpha2": "BT",
      "location": "南アジア",
      "subdivision": "ISO 3166-2:BT"
  },
  {
      "ja_name": "ブーベ島",
      "en_name": "Bouvet Island",
      "numeric": "74",
      "alpha3": "BVT",
      "alpha2": "BV",
      "location": "南極",
      "subdivision": "ISO 3166-2:BV"
  },
  {
      "ja_name": "プエルトリコ",
      "en_name": "Puerto Rico",
      "numeric": "630",
      "alpha3": "PRI",
      "alpha2": "PR",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:PR"
  },
  {
      "ja_name": "フェロー諸島",
      "en_name": "Faroe Islands",
      "numeric": "234",
      "alpha3": "FRO",
      "alpha2": "FO",
      "location": "北ヨーロッパ",
      "subdivision": "ISO 3166-2:FO"
  },
  {
      "ja_name": "フォークランド（マルビナス）諸島",
      "en_name": "Falkland Islands (Malvinas)",
      "numeric": "238",
      "alpha3": "FLK",
      "alpha2": "FK",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:FK"
  },
  {
      "ja_name": "ブラジル",
      "en_name": "Brazil",
      "numeric": "76",
      "alpha3": "BRA",
      "alpha2": "BR",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:BR"
  },
  {
      "ja_name": "フランス",
      "en_name": "France",
      "numeric": "250",
      "alpha3": "FRA",
      "alpha2": "FR",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:FR"
  },
  {
      "ja_name": "フランス領ギアナ",
      "en_name": "French Guiana",
      "numeric": "254",
      "alpha3": "GUF",
      "alpha2": "GF",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:GF"
  },
  {
      "ja_name": "フランス領ポリネシア",
      "en_name": "French Polynesia",
      "numeric": "258",
      "alpha3": "PYF",
      "alpha2": "PF",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:PF"
  },
  {
      "ja_name": "フランス領南方・南極地域",
      "en_name": "French Southern Territories",
      "numeric": "260",
      "alpha3": "ATF",
      "alpha2": "TF",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:TF"
  },
  {
      "ja_name": "ブルガリア",
      "en_name": "Bulgaria",
      "numeric": "100",
      "alpha3": "BGR",
      "alpha2": "BG",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:BG"
  },
  {
      "ja_name": "ブルキナファソ",
      "en_name": "Burkina Faso",
      "numeric": "854",
      "alpha3": "BFA",
      "alpha2": "BF",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:BF"
  },
  {
      "ja_name": "ブルネイ・ダルサラーム",
      "en_name": "Brunei Darussalam",
      "numeric": "96",
      "alpha3": "BRN",
      "alpha2": "BN",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:BN"
  },
  {
      "ja_name": "ブルンジ",
      "en_name": "Burundi",
      "numeric": "108",
      "alpha3": "BDI",
      "alpha2": "BI",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:BI"
  },
  {
      "ja_name": "ベトナム",
      "en_name": "Viet Nam",
      "numeric": "704",
      "alpha3": "VNM",
      "alpha2": "VN",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:VN"
  },
  {
      "ja_name": "ベナン",
      "en_name": "Benin",
      "numeric": "204",
      "alpha3": "BEN",
      "alpha2": "BJ",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:BJ"
  },
  {
      "ja_name": "ベネズエラ・ボリバル共和国",
      "en_name": "Venezuela, Bolivarian Republic of",
      "numeric": "862",
      "alpha3": "VEN",
      "alpha2": "VE",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:VE"
  },
  {
      "ja_name": "ベラルーシ",
      "en_name": "Belarus",
      "numeric": "112",
      "alpha3": "BLR",
      "alpha2": "BY",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:BY"
  },
  {
      "ja_name": "ベリーズ",
      "en_name": "Belize",
      "numeric": "84",
      "alpha3": "BLZ",
      "alpha2": "BZ",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:BZ"
  },
  {
      "ja_name": "ペルー",
      "en_name": "Peru",
      "numeric": "604",
      "alpha3": "PER",
      "alpha2": "PE",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:PE"
  },
  {
      "ja_name": "ベルギー",
      "en_name": "Belgium",
      "numeric": "56",
      "alpha3": "BEL",
      "alpha2": "BE",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:BE"
  },
  {
      "ja_name": "ポーランド",
      "en_name": "Poland",
      "numeric": "616",
      "alpha3": "POL",
      "alpha2": "PL",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:PL"
  },
  {
      "ja_name": "ボスニア・ヘルツェゴビナ",
      "en_name": "Bosnia and Herzegovina",
      "numeric": "70",
      "alpha3": "BIH",
      "alpha2": "BA",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:BA"
  },
  {
      "ja_name": "ボツワナ",
      "en_name": "Botswana",
      "numeric": "72",
      "alpha3": "BWA",
      "alpha2": "BW",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:BW"
  },
  {
      "ja_name": "ボネール、シント・ユースタティウスおよびサバ",
      "en_name": "Bonaire, Saint Eustatius and Saba",
      "numeric": "535",
      "alpha3": "BES",
      "alpha2": "BQ",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:BQ"
  },
  {
      "ja_name": "ボリビア多民族国",
      "en_name": "Bolivia, Plurinational State of",
      "numeric": "68",
      "alpha3": "BOL",
      "alpha2": "BO",
      "location": "南アメリカ",
      "subdivision": "ISO 3166-2:BO"
  },
  {
      "ja_name": "ポルトガル",
      "en_name": "Portugal",
      "numeric": "620",
      "alpha3": "PRT",
      "alpha2": "PT",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:PT"
  },
  {
      "ja_name": "香港",
      "en_name": "Hong Kong",
      "numeric": "344",
      "alpha3": "HKG",
      "alpha2": "HK",
      "location": "東アジア",
      "subdivision": "ISO 3166-2:HK"
  },
  {
      "ja_name": "ホンジュラス",
      "en_name": "Honduras",
      "numeric": "340",
      "alpha3": "HND",
      "alpha2": "HN",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:HN"
  },
  {
      "ja_name": "マーシャル諸島",
      "en_name": "Marshall Islands",
      "numeric": "584",
      "alpha3": "MHL",
      "alpha2": "MH",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:MH"
  },
  {
      "ja_name": "マカオ",
      "en_name": "Macau",
      "numeric": "446",
      "alpha3": "MAC",
      "alpha2": "MO",
      "location": "東アジア",
      "subdivision": "ISO 3166-2:MO"
  },
  {
      "ja_name": "マケドニア旧ユーゴスラビア共和国",
      "en_name": "Macedonia, the former Yugoslav Republic of",
      "numeric": "807",
      "alpha3": "MKD",
      "alpha2": "MK",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:MK"
  },
  {
      "ja_name": "マダガスカル",
      "en_name": "Madagascar",
      "numeric": "450",
      "alpha3": "MDG",
      "alpha2": "MG",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:MG"
  },
  {
      "ja_name": "マヨット",
      "en_name": "Mayotte",
      "numeric": "175",
      "alpha3": "MYT",
      "alpha2": "YT",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:YT"
  },
  {
      "ja_name": "マラウイ",
      "en_name": "Malawi",
      "numeric": "454",
      "alpha3": "MWI",
      "alpha2": "MW",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:MW"
  },
  {
      "ja_name": "マリ",
      "en_name": "Mali",
      "numeric": "466",
      "alpha3": "MLI",
      "alpha2": "ML",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:ML"
  },
  {
      "ja_name": "マルタ",
      "en_name": "Malta",
      "numeric": "470",
      "alpha3": "MLT",
      "alpha2": "MT",
      "location": "地中海地域",
      "subdivision": "ISO 3166-2:MT"
  },
  {
      "ja_name": "マルティニーク",
      "en_name": "Martinique",
      "numeric": "474",
      "alpha3": "MTQ",
      "alpha2": "MQ",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:MQ"
  },
  {
      "ja_name": "マレーシア",
      "en_name": "Malaysia",
      "numeric": "458",
      "alpha3": "MYS",
      "alpha2": "MY",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:MY"
  },
  {
      "ja_name": "マン島",
      "en_name": "Isle of Man",
      "numeric": "833",
      "alpha3": "IMN",
      "alpha2": "IM",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:IM"
  },
  {
      "ja_name": "ミクロネシア連邦",
      "en_name": "Micronesia, Federated States of",
      "numeric": "583",
      "alpha3": "FSM",
      "alpha2": "FM",
      "location": "オセアニア",
      "subdivision": "ISO 3166-2:FM"
  },
  {
      "ja_name": "南アフリカ",
      "en_name": "South Africa",
      "numeric": "710",
      "alpha3": "ZAF",
      "alpha2": "ZA",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:ZA"
  },
  {
      "ja_name": "南スーダン",
      "en_name": "South Sudan",
      "numeric": "728",
      "alpha3": "SSD",
      "alpha2": "SS",
      "location": "東アフリカ",
      "subdivision": "ISO 3166-2:SS"
  },
  {
      "ja_name": "ミャンマー",
      "en_name": "Myanmar",
      "numeric": "104",
      "alpha3": "MMR",
      "alpha2": "MM",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:MM"
  },
  {
      "ja_name": "メキシコ",
      "en_name": "Mexico",
      "numeric": "484",
      "alpha3": "MEX",
      "alpha2": "MX",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:MX"
  },
  {
      "ja_name": "モーリシャス",
      "en_name": "Mauritius",
      "numeric": "480",
      "alpha3": "MUS",
      "alpha2": "MU",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:MU"
  },
  {
      "ja_name": "モーリタニア",
      "en_name": "Mauritania",
      "numeric": "478",
      "alpha3": "MRT",
      "alpha2": "MR",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:MR"
  },
  {
      "ja_name": "モザンビーク",
      "en_name": "Mozambique",
      "numeric": "508",
      "alpha3": "MOZ",
      "alpha2": "MZ",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:MZ"
  },
  {
      "ja_name": "モナコ",
      "en_name": "Monaco",
      "numeric": "492",
      "alpha3": "MCO",
      "alpha2": "MC",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:MC"
  },
  {
      "ja_name": "モルディブ",
      "en_name": "Maldives",
      "numeric": "462",
      "alpha3": "MDV",
      "alpha2": "MV",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:MV"
  },
  {
      "ja_name": "モルドバ共和国",
      "en_name": "Moldova, Republic of",
      "numeric": "498",
      "alpha3": "MDA",
      "alpha2": "MD",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:MD"
  },
  {
      "ja_name": "モロッコ",
      "en_name": "Morocco",
      "numeric": "504",
      "alpha3": "MAR",
      "alpha2": "MA",
      "location": "北アフリカ",
      "subdivision": "ISO 3166-2:MA"
  },
  {
      "ja_name": "モンゴル",
      "en_name": "Mongolia",
      "numeric": "496",
      "alpha3": "MNG",
      "alpha2": "MN",
      "location": "東アジア",
      "subdivision": "ISO 3166-2:MN"
  },
  {
      "ja_name": "モンテネグロ",
      "en_name": "Montenegro",
      "numeric": "499",
      "alpha3": "MNE",
      "alpha2": "ME",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:ME"
  },
  {
      "ja_name": "モントセラト",
      "en_name": "Montserrat",
      "numeric": "500",
      "alpha3": "MSR",
      "alpha2": "MS",
      "location": "中央アメリカ",
      "subdivision": "ISO 3166-2:MS"
  },
  {
      "ja_name": "ヨルダン",
      "en_name": "Jordan",
      "numeric": "400",
      "alpha3": "JOR",
      "alpha2": "JO",
      "location": "中東",
      "subdivision": "ISO 3166-2:JO"
  },
  {
      "ja_name": "ラオス人民民主共和国",
      "en_name": "Lao People's Democratic Republic",
      "numeric": "418",
      "alpha3": "LAO",
      "alpha2": "LA",
      "location": "東南アジア",
      "subdivision": "ISO 3166-2:LA"
  },
  {
      "ja_name": "ラトビア",
      "en_name": "Latvia",
      "numeric": "428",
      "alpha3": "LVA",
      "alpha2": "LV",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:LV"
  },
  {
      "ja_name": "リトアニア",
      "en_name": "Lithuania",
      "numeric": "440",
      "alpha3": "LTU",
      "alpha2": "LT",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:LT"
  },
  {
      "ja_name": "リビア",
      "en_name": "Libya",
      "numeric": "434",
      "alpha3": "LBY",
      "alpha2": "LY",
      "location": "北アフリカ",
      "subdivision": "ISO 3166-2:LY"
  },
  {
      "ja_name": "リヒテンシュタイン",
      "en_name": "Liechtenstein",
      "numeric": "438",
      "alpha3": "LIE",
      "alpha2": "LI",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:LI"
  },
  {
      "ja_name": "リベリア",
      "en_name": "Liberia",
      "numeric": "430",
      "alpha3": "LBR",
      "alpha2": "LR",
      "location": "西アフリカ",
      "subdivision": "ISO 3166-2:LR"
  },
  {
      "ja_name": "ルーマニア",
      "en_name": "Romania",
      "numeric": "642",
      "alpha3": "ROU",
      "alpha2": "RO",
      "location": "東ヨーロッパ",
      "subdivision": "ISO 3166-2:RO"
  },
  {
      "ja_name": "ルクセンブルク",
      "en_name": "Luxembourg",
      "numeric": "442",
      "alpha3": "LUX",
      "alpha2": "LU",
      "location": "西ヨーロッパ",
      "subdivision": "ISO 3166-2:LU"
  },
  {
      "ja_name": "ルワンダ",
      "en_name": "Rwanda",
      "numeric": "646",
      "alpha3": "RWA",
      "alpha2": "RW",
      "location": "中央アフリカ",
      "subdivision": "ISO 3166-2:RW"
  },
  {
      "ja_name": "レソト",
      "en_name": "Lesotho",
      "numeric": "426",
      "alpha3": "LSO",
      "alpha2": "LS",
      "location": "南アフリカ",
      "subdivision": "ISO 3166-2:LS"
  },
  {
      "ja_name": "レバノン",
      "en_name": "Lebanon",
      "numeric": "422",
      "alpha3": "LBN",
      "alpha2": "LB",
      "location": "中東",
      "subdivision": "ISO 3166-2:LB"
  },
  {
      "ja_name": "レユニオン",
      "en_name": "Réunion",
      "numeric": "638",
      "alpha3": "REU",
      "alpha2": "RE",
      "location": "インド洋地域",
      "subdivision": "ISO 3166-2:RE"
  },
  {
      "ja_name": "ロシア連邦",
      "en_name": "Russian Federation",
      "numeric": "643",
      "alpha3": "RUS",
      "alpha2": "RU",
      "location": "ロシア",
      "subdivision": "ISO 3166-2:RU"
  }
]

export default countries