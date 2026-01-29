// https://mihomo.party/docs/guide/override/javascript
function main(config) {
  config.rules = config.rules || [];
  
  // 进程规则数组
  const procs = ["OneDrive.exe", "Weixin.exe","Androws.exe","STranslate.exe"];
  // 域名规则数组（和进程数组格式统一）
  const domains = ["wolong"];
  
  // 批量添加进程直连规则
  procs.forEach(proc => config.rules.unshift(`PROCESS-NAME,${proc},DIRECT`));
  // 批量添加域名直连规则（和进程逻辑一致）
  domains.forEach(domain => config.rules.unshift(`DOMAIN-KEYWORD,${domain},DIRECT`));

  return config;
}
