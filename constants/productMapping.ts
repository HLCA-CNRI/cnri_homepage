import {ProductNameEnum} from "./enum/product_name.enum";

export const ProductEngNameMapping = new Map<ProductNameEnum, string>([
  [ProductNameEnum.GREENERP, "GreenERP"],
  [ProductNameEnum.CIET, "CIET"],
]);

export const ProductKorNameMapping = new Map<ProductNameEnum, string>([
  [ProductNameEnum.GREENERP, "그리너프"],
  [ProductNameEnum.CIET, "사이어트"],
]);

export const ProductNameInterpretMapping = new Map<ProductNameEnum, string>([
  [ProductNameEnum.GREENERP, "Green+ERP"],
  [ProductNameEnum.CIET, "Carbon diet"],
]);

export const ProductNameSummaryMapping = new Map<ProductNameEnum, string>([
  [ProductNameEnum.GREENERP, "클라우드 SaaS 기반 탄소회계 ERP"],
  [ProductNameEnum.CIET, "어려운 탄소회계 데이터 관리\n탄소회계 RPA를 통해 업무 자동화 해보세요."],
]);

export const ProductDownloadFileNameMapping = new Map<ProductNameEnum, string>([
  [ProductNameEnum.GREENERP, "그리너프 제품소개서.pdf"],
  [ProductNameEnum.CIET, "CIET 제품소개서.pdf"],
]);
