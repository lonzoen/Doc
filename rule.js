function main(config) {
  // 统一规则配置：整合两段代码的所有直连/拒绝规则
  const ruleConfig = {
    directProcesses: ["OneDrive.exe", "Weixin.exe", "Androws.exe", "STranslate.exe"], // 合并所有直连进程
    directDomainKeywords: ["wolong", "frp", "admin", "bilibili"], // 合并所有直连域名关键词
    rejectDomainKeywords: ["PotPlayer"] // 拒绝域名规则
  };

  // 初始化rules数组，避免空值报错
  config.rules = config.rules || [];

  // 批量插入所有规则（按「拒绝→直连域名→直连进程」顺序插入，优先级从高到低）
  [
    ...ruleConfig.rejectDomainKeywords.map(k => `DOMAIN-KEYWORD,${k},REJECT`),
    ...ruleConfig.directDomainKeywords.map(k => `DOMAIN-KEYWORD,${k},DIRECT`),
    ...ruleConfig.directProcesses.map(p => `PROCESS-NAME,${p},DIRECT`)
  ].forEach(rule => config.rules.unshift(rule));

  return config;
}
