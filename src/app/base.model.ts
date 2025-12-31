export type idType = string | number;

export interface BaseModel {
  readonly id: idType;
  readonly createdAt: Date;
  updatedAt: Date;
}
