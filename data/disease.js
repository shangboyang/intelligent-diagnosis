
export default {
  bells: {
    cname: '贝尔氏面瘫',
    probability: 0.022,
    probabilityIndex: 8,
    ageLimit: [30, 50],
    bodyParts: {
      left    : true,
      right   : true,
      key_both: false,
    },
    // 面瘫持续时间
    continued: {},
    // 进展至最重
    progress: {
      key_day   : true,
      week      : false,
      exceedWeek: false,
    },
    checkbox: {
      fever       : false, // 发烧
      ear         : false, // 剧烈耳痛
      throat      : false, // 剧烈咽痛
      hypertension: false, // 高血压史
      diabetes    : true,  // 糖尿病史
      eye         : true,  // 曾眼睑痉挛
      face        : true,  // 曾面瘫
      gestation   : true,  // 正在妊娠
      key_brow    : true,  // 抬眉困难
      key_eye     : true,  // 闭眼困难
      weekTeeth   : false, // 一周内曾拔牙
      weekFace    : false, // 一周内曾接受面部麻醉
      weekVaccine : false, // 一周内曾打疫苗
      tired       : true,  // 易疲劳
      hearing     : false, // 听力下降
      vision      : false, // 视物模糊
      faceNumb    : false, // 面瘫侧麻木
      key_face    : false, // 面瘫侧严重外伤
      skin        : false, // 皮疹
      key_sport   : false, // 四肢运动障碍
      joint       : false, // 四肢关节疼痛
      headache    : false, // 剧烈头痛
    }
  },
  iatrogenic: {
    cname: '医源性损伤',
    probability: 0,
    probabilityIndex: 5,
  },
  // dan zhi
  biliary: {
    cname: '胆脂瘤',
    probability: 0.01,
    probabilityIndex: 7,
  },
  // sai xian
  parotid: {
    cname: '腮腺肿瘤',
    probability: 0.001,
    probabilityIndex: 6,
  },
  // lai mu
  lem: {
    cname: '莱姆病',
    probability: 0,
    probabilityIndex: 4,
  },
  // zhong er yuan
  ear: {
    cname: '中耳炎',
    probability: 7.143,
    probabilityIndex: 12,
  },
  // heng te
  hunter: {
    cname: '亨特氏综合征',
    probability: 0,
    probabilityIndex: 3,
  },
  // liu gan
  cold: {
    cname: '流感疫苗不良反应'
    probability: 0,
    probabilityIndex: 2,
  },
  // wai shang
  injury: {
    cname: '外伤后面神经损害',
    probability: 0,
    probabilityIndex: 1,
  },
  // zi shen mian yi
  immune: {
    cname: '自身免疫性疾病',
    probability: 0.2,
    probabilityIndex: 9,
  },
  // nao
  blood: {
    cname: '脑出血',
    probability: 0.54,
    probabilityIndex: 10,
  },
  // lu nei
  encephalic: {
    cname: '颅内肿瘤',
    probability: 0,
    probabilityIndex: 0,
  },
  // nao geng
  brain: {
    cname: '脑梗',
    probability: 1.08,
    probabilityIndex: 11,
  }
}
