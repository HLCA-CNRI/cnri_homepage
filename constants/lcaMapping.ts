import {LcaCycle} from "./enum/lca_cycle.enum";

export const LcaCycleKorMapping = new Map<LcaCycle, string>([
  [LcaCycle.RESOURCE, "원료 채취"],
  [LcaCycle.PROCESSING, "원료 가공"],
  [LcaCycle.MANUFACTURE, "제조"],
  [LcaCycle.DISTRIBUTION, "분배"],
  [LcaCycle.USE, "사용"],
  [LcaCycle.DISPOSAL, "폐기"],
]);
