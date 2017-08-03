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
      bells     :   //贝尔氏面瘫
      iatrogenic:   //医源性损伤
      biliary   :   //胆脂瘤
      parotid   :   //腮腺肿瘤
      lem       :   //莱姆病
      ear       : //中耳炎
      hunter    : //亨特氏综合征
      cold      : //流感疫苗不良反应
      injury    : //外伤后面神经损害
      immune    : //自身免疫性疾病
      blood     : //脑出血
      encephalic: //颅内肿瘤
      brain     : //脑梗
    },
    ages: {
      baby    : // 0-1
      child   : // 2-11
      teenager: // 12-17
      youth   : // 18-30
      prime   : // 30-49
      middle  : // 50
    },
    continued: {
      stage1: // 1周以内
      stage2: // 1周-1月
      stage3: // 1月-6月
      stage4: // 
    },
    sex: [1, 1],
    keyTags: {
      hypertension: true,
      diabetes    : true,
      gestation   : true,
    },
    highLight: [0]
  },
  zhangyu: {
    cname: '章鱼',
    type: 3, // 白肉
    defaultRank: 2,
    weight: 2.167,
  },
  zhugan: {
    cname: '猪肝',
    type: 4, // 红肉
    defaultRank: 3,
    weight: 2.167,
  }
}
export default Ingredients
