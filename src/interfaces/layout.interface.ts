import {Block} from "@/interfaces/block.interface";

export interface Layout {
  blocks:         Block[];
  createdAt:      Date;
  createdBy:      number;
  default:        number;
  deletedAt:      Date | null;
  deletedBy:      number | null;
  entityType:     string;
  id:             number;
  organizationId: any;
  status:         number;
  systemName:     string;
  title:          string;
  type:           string | null;
  updatedAt:      Date;
  updatedBy:      number;
}
