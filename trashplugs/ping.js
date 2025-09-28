const axios = require("axios");
const os = require('os')
let trashplug = async (m, { reply,trashcore }) => {
await m.reply(`💥 𝒔𝒑𝒆𝒆𝒅.........`)
  const memoryUsage = process.memoryUsage();
  const cpuInfo = os.cpus().map(cpu => ({
    total: Object.values(cpu.times).reduce((a, b) => a + b, 0),
    times: cpu.times,
  }));
  const totalCpuInfo = cpuInfo.reduce((acc, cpu) => ({
    total: acc.total + cpu.total,
    times: {
      user: (acc.times.user || 0) + (cpu.times.user || 0),
      nice: (acc.times.nice || 0) + (cpu.times.nice || 0),
      sys: (acc.times.sys || 0) + (cpu.times.sys || 0),
      idle: (acc.times.idle || 0) + (cpu.times.idle || 0),
      irq: (acc.times.irq || 0) + (cpu.times.irq || 0),
    },
  }), {
    total: 0,
    times: {},
  });

  const startTime = performance.now();
  const latency = performance.now() - startTime;
  const finalStatus = `𝗦𝗔𝗠𝗦𝗨𝗡𝗚_𝗫𝗠𝗗: ${latency.toFixed(4)} ms`;
  m.reply(finalStatus);
};  
trashplug.help = ['ping']
trashplug.tags = ['status']
trashplug.command = ['ping2']


module.exports = trashplug;
