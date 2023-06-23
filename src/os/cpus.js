import os from "os";

export const cpus = () => {
  const cpuData = os.cpus();
  console.log(`Overall amount of CPUS ${cpuData.length}`);
  cpuData.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}: model: ${cpu.model}, clock rate: ${(cpu.speed / 1000).toFixed(2)} `);
  })
}
