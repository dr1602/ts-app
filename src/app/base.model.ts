export type idType = string | number;

export interface BaseModel {
  id: idType;
  createdAt: Date;
  updateddAt: Date;
}
