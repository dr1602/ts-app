// export type idType = string | number;
export type idType = number;

export interface BaseModel {
  readonly id: idType;
  readonly createdAt: Date;
  updatedAt: Date;
}
