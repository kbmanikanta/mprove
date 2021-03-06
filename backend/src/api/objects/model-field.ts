import * as apiEnums from '../enums/_index';

export interface ModelField {
  id: string;
  hidden: boolean;
  label: string;
  field_class: apiEnums.ModelFieldFieldClassEnum;
  result: apiEnums.ModelFieldResultEnum;
  sql_name: string;
  top_id: string;
  top_label: string;
  force_dims: string[];
  description?: string;
  type?: apiEnums.ModelFieldTypeEnum;
  group_id?: string;
  group_label?: string;
  group_description?: string;
  format_number: string;
  currency_prefix: string;
  currency_suffix: string;
}
