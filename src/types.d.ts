// example declaration file - remove these and add your own custom typings

// memory extension samples
interface CreepMemory {
  role: number;
  room: string;
  working: boolean;
}

interface Memory {
  uuid: number;
  log: any;
  stats: any;
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}


