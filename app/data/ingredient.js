/*
		默认排序依据
食材	排名	疾病权重	分类	分类序号
西兰花	1	2.167	植物	1
章鱼	2	2.167	白肉	3
猪肝	3	2.167	红肉	4
八角	4	2.167	调料	5
燕麦	5	1.857	植物	1
芹菜	6	1.625	植物	1
黄豆	7	1.625	植物	1
三文鱼	8	1.444	白肉	3
鳙鱼头	9	1.444	白肉	3
核桃仁	10	1.300	植物	1
猴头菇	11	1.300	真菌	2
鸡肝	12	1.000	红肉	4
 */
const Ingredients = {
  broccoli: {
    cname: '西兰花',
    type: 1, // 植物
    defaultRank: 1,
    weight: 2.167,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: true,  //医源性损伤
      biliary   : true,  //胆脂瘤
      parotid   : true,  //腮腺肿瘤
      lem       : false,  //莱姆病
      ear       : false,//中耳炎
      hunter    : false,//亨特氏综合征
      cold      : false,//流感疫苗不良反应
      injury    : true,//外伤后面神经损害
      immune    : false,//自身免疫性疾病
      blood     : false,//脑出血
      encephalic: true,//颅内肿瘤
      brain     : false,//脑梗
    },
    ages: {
      baby    : true,// 0-1
      child   : true,// 2-11
      teenager: false,// 12-17
      youth   : true,// 18-30
      prime   : true,// 30-49
      middle  : false,// 50
    },
    continued: {
      stage1: false,// 1周以内
      stage2: false,// 1周-1月
      stage3: true,// 1月-6月
      stage4: true,//
    },
    sex: [1, 1],
    keyTags: {
      hypertension: true,
      diabetes    : true,
      gestation   : true,
    },
    highLight: {
      vision      : false
    }
  },
  devilfish: {
    cname: '章鱼',
    type: 3, // 白肉
    defaultRank: 2,
    weight: 2.167,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: false,  //医源性损伤
      biliary   : false,  //胆脂瘤
      parotid   : false,  //腮腺肿瘤
      lem       : true , //莱姆病
      ear       : true,//中耳炎
      hunter    : true,//亨特氏综合征
      cold      : true,//流感疫苗不良反应
      injury    : false,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : false,//脑出血
      encephalic: false,//颅内肿瘤
      brain     : false,//脑梗
    },
    ages: {
      baby    : false,// 0-1
      child   : true,// 2-11
      teenager: true,// 12-17
      youth   : true,// 18-30
      prime   : true,// 30-49
      middle  : true,// 50
    },
    continued: {
      stage1: true,// 1周以内
      stage2: true,// 1周-1月
      stage3: false,// 1月-6月
      stage4: false,//
    },
    sex: [1, 1],
    keyTags: {
      hypertension: true,
      diabetes    : true,
      gestation   : true,
    },
    highLight: {
      vision      : false
    }
  },
  pork_liver: {
    cname: '猪肝',
    type: 4, // 红肉
    defaultRank: 3,
    weight: 2.167,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: true,  //医源性损伤
      biliary   : true,  //胆脂瘤
      parotid   : true,  //腮腺肿瘤
      lem       : false,  //莱姆病
      ear       : false,//中耳炎
      hunter    : false,//亨特氏综合征
      cold      : false,//流感疫苗不良反应
      injury    : true,//外伤后面神经损害
      immune    : false,//自身免疫性疾病
      blood     : false,//脑出血
      encephalic: true,//颅内肿瘤
      brain     : false,//脑梗
    },
    ages: {
      baby    : true,// 0-1
      child   : true,// 2-11
      teenager: false,// 12-17
      youth   : true,// 18-30
      prime   : true,// 30-49
      middle  : false,// 50
    },
    continued: {
      stage1: false,// 1周以内
      stage2: true,// 1周-1月
      stage3: true,// 1月-6月
      stage4: true,//
    },
    sex: [1, 1],
    keyTags: {
      hypertension: false,
      diabetes    : false,
      gestation   : true,
    },
    highLight: {
      vision      : true
    }
  },
  anise: {
    cname: '八角',
    type: 5, // 调料
    defaultRank: 4,
    weight: 2.167,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: false,  //医源性损伤
      biliary   : false,  //胆脂瘤
      parotid   : false,  //腮腺肿瘤
      lem       : true,  //莱姆病
      ear       : true,//中耳炎
      hunter    : true,//亨特氏综合征
      cold      : true,//流感疫苗不良反应
      injury    : false,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : false,//脑出血
      encephalic: false,//颅内肿瘤
      brain     : false,//脑梗
    },
    ages: {
      baby    : false,// 0-1
      child   : false,// 2-11
      teenager: false,// 12-17
      youth   : false,// 18-30
      prime   : true,// 30-49
      middle  : true,// 50
    },
    continued: {
      stage1: true,// 1周以内
      stage2: true,// 1周-1月
      stage3: true,// 1月-6月
      stage4: true,//
    },
    sex: [1, 1],
    keyTags: {
      hypertension: false,
      diabetes    : true,
      gestation   : false,
    },
    highLight: {
      vision      : false
    }
  },
  oat: {
    cname: '燕麦',
    type: 1, // 植物
    defaultRank: 5,
    weight: 1.857,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: false,  //医源性损伤
      biliary   : true,  //胆脂瘤
      parotid   : true,  //腮腺肿瘤
      lem       : false,  //莱姆病
      ear       : false,//中耳炎
      hunter    : false,//亨特氏综合征
      cold      : false,//流感疫苗不良反应
      injury    : false,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : true,//脑出血
      encephalic: true,//颅内肿瘤
      brain     : true,//脑梗
    },
    ages: {
      baby    : false,// 0-1
      child   : false,// 2-11
      teenager: true,// 12-17
      youth   : true,// 18-30
      prime   : true,// 30-49
      middle  : false,// 50
    },
    continued: {
      stage1: true,// 1周以内
      stage2: true,// 1周-1月
      stage3: false,// 1月-6月
      stage4: false,//
    },
    sex: [1, 1],
    keyTags: {
      hypertension: true,
      diabetes    : true,
      gestation   : true,
    },
    highLight: {
      vision      : true
    }
  },
  celery: {
    cname: '芹菜',
    type: 1, // 植物
    defaultRank: 6,
    weight: 1.625,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: false,  //医源性损伤
      biliary   : false,  //胆脂瘤
      parotid   : false,  //腮腺肿瘤
      lem       : true , //莱姆病
      ear       : true,//中耳炎
      hunter    : true,//亨特氏综合征
      cold      : true,//流感疫苗不良反应
      injury    : false,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : true,//脑出血
      encephalic: false,//颅内肿瘤
      brain     : true,//脑梗
    },
    ages: {
      baby    : false,// 0-1
      child   : true,// 2-11
      teenager: true,// 12-17
      youth   : true,// 18-30
      prime   : true,// 30-49
      middle  : true,// 50
    },
    continued: {
      stage1: true,// 1周以内
      stage2: true,// 1周-1月
      stage3: false,// 1月-6月
      stage4: false,//
    },
    sex: [1, 1],
    keyTags: {
      hypertension: true,
      diabetes    : true,
      gestation   : true,
    },
    highLight: {
      vision      : true
    }
  },
  soybean: {
    cname: '黄豆',
    type: 1, // 植物
    defaultRank: 7,
    weight: 1.625,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: false,  //医源性损伤
      biliary   : false,  //胆脂瘤
      parotid   : false,  //腮腺肿瘤
      lem       : true, //莱姆病
      ear       : true,//中耳炎
      hunter    : true,//亨特氏综合征
      cold      : true,//流感疫苗不良反应
      injury    : false,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : true,//脑出血
      encephalic: false,//颅内肿瘤
      brain     : true,//脑梗
    },
    ages: {
      baby    : true,// 0-1
      child   : true,// 2-11
      teenager: false,// 12-17
      youth   : true,// 18-30
      prime   : true,// 30-49
      middle  : true,// 50
    },
    continued: {
      stage1: true,// 1周以内
      stage2: true,// 1周-1月
      stage3: false,// 1月-6月
      stage4: false,//
    },
    sex: [0, 1],
    keyTags: {
      hypertension: true,
      diabetes    : true,
      gestation   : true,
    },
    highLight: {
      vision      : false
    }
  },
  salmon: {
    cname: '三文鱼',
    type: 3, // 白肉
    defaultRank: 8,
    weight: 1.444,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: false,  //医源性损伤
      biliary   : false,  //胆脂瘤
      parotid   : false,  //腮腺肿瘤
      lem       : true,  //莱姆病
      ear       : true,//中耳炎
      hunter    : true,//亨特氏综合征
      cold      : true,//流感疫苗不良反应
      injury    : false,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : false,//脑出血
      encephalic: false,//颅内肿瘤
      brain     : false,//脑梗
    },
    ages: {
      baby    : false,// 0-1
      child   : true,// 2-11
      teenager: true,// 12-17
      youth   : true,// 18-30
      prime   : false,// 30-49
      middle  : false,// 50
    },
    continued: {
      stage1: false,// 1周以内
      stage2: false,// 1周-1月
      stage3: true,// 1月-6月
      stage4: true,//
    },
    sex: [0, 1],
    keyTags: {
      hypertension: true,
      diabetes    : false,
      gestation   : true,
    },
    highLight: {
      vision      : false
    }
  },
  bighead: {
    cname: '鳙鱼头',
    type: 3, // 白肉
    defaultRank: 9,
    weight: 1.444,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: true,  //医源性损伤
      biliary   : true,  //胆脂瘤
      parotid   : true,  //腮腺肿瘤
      lem       : false,  //莱姆病
      ear       : false,//中耳炎
      hunter    : false,//亨特氏综合征
      cold      : false,//流感疫苗不良反应
      injury    : true,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : true,//脑出血
      encephalic: true,//颅内肿瘤
      brain     : true,//脑梗
    },
    ages: {
      baby    : true,// 0-1
      child   : true,// 2-11
      teenager: true,// 12-17
      youth   : true,// 18-30
      prime   : true,// 30-49
      middle  : true,// 50
    },
    continued: {
      stage1: false,// 1周以内
      stage2: true,// 1周-1月
      stage3: true,// 1月-6月
      stage4: true,//
    },
    sex: [1, 0],
    keyTags: {
      hypertension: true,
      diabetes    : true,
      gestation   : true,
    },
    highLight: {
      vision      : true
    }
  },
  nut: {
    cname: '核桃仁',
    type: 1, // 植物
    defaultRank: 10,
    weight: 1.300,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: false,  //医源性损伤
      biliary   : true , //胆脂瘤
      parotid   : true,  //腮腺肿瘤
      lem       : true,  //莱姆病
      ear       : true,//中耳炎
      hunter    : true,//亨特氏综合征
      cold      : true,//流感疫苗不良反应
      injury    : false,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : true,//脑出血
      encephalic: false,//颅内肿瘤
      brain     : true,//脑梗
    },
    ages: {
      baby    : true,// 0-1
      child   : true,// 2-11
      teenager: true,// 12-17
      youth   : false,// 18-30
      prime   : false,// 30-49
      middle  : true,// 50
    },
    continued: {
      stage1: true,// 1周以内
      stage2: true,// 1周-1月
      stage3: false,// 1月-6月
      stage4: true,//
    },
    sex: [1, 1],
    keyTags: {
      hypertension: true,
      diabetes    : true,
      gestation   : true,
    },
    highLight: {
      vision      : true
    }
  },
  hericium: {
    cname: '猴头菇',
    type: 2, // 真菌
    defaultRank: 11,
    weight: 1.300,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: true,  //医源性损伤
      biliary   : false,  //胆脂瘤
      parotid   : false,  //腮腺肿瘤
      lem       : true,  //莱姆病
      ear       : true,//中耳炎
      hunter    : true,//亨特氏综合征
      cold      : true,//流感疫苗不良反应
      injury    : true,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : true,//脑出血
      encephalic: false,//颅内肿瘤
      brain     : true,//脑梗
    },
    ages: {
      baby    : false,// 0-1
      child   : false,// 2-11
      teenager: false,// 12-17
      youth   : false,// 18-30
      prime   : true,// 30-49
      middle  : true,// 50
    },
    continued: {
      stage1: false,// 1周以内
      stage2: true,// 1周-1月
      stage3: true,// 1月-6月
      stage4: true,//
    },
    sex: [1, 1],
    keyTags: {
      hypertension: true,
      diabetes    : true,
      gestation   : true,
    },
    highLight: {
      vision      : false
    }
  },
  chicken_liver: {
    cname: '鸡肝',
    type: 4, // 红肉
    defaultRank: 12,
    weight: 1.000,
    diseases: {
      bells     : true,  //贝尔氏面瘫
      iatrogenic: true,  //医源性损伤
      biliary   : true,  //胆脂瘤
      parotid   : true,  //腮腺肿瘤
      lem       : true,  //莱姆病
      ear       : true,//中耳炎
      hunter    : true,//亨特氏综合征
      cold      : true,//流感疫苗不良反应
      injury    : true,//外伤后面神经损害
      immune    : true,//自身免疫性疾病
      blood     : true,//脑出血
      encephalic: true,//颅内肿瘤
      brain     : true,//脑梗
    },
    ages: {
      baby    : true,// 0-1
      child   : true,// 2-11
      teenager: false,// 12-17
      youth   : false,// 18-30
      prime   : true,// 30-49
      middle  : false,// 50
    },
    continued: {
      stage1: false,// 1周以内
      stage2: false,// 1周-1月
      stage3: true,// 1月-6月
      stage4: true,//
    },
    sex: [1, 0],
    keyTags: {
      hypertension: false,
      diabetes    : true,
      gestation   : true,
    },
    highLight: {
      vision      : true
    }
  }
}
export default Ingredients
