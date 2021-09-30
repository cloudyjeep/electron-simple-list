import { FormField, Select, TextInput } from "grommet";

export const FieldInputText = ({
  label,
  disabled,
  data: [field, value, error],
  handler,
}) => {
  return (
    <FormField label={label} name={field} error={error} disabled={disabled}>
      <TextInput
        name={field}
        type="text"
        value={value}
        {...handler}
        disabled={disabled}
      />
    </FormField>
  );
};

export const FieldInputSelect = ({
  label,
  disabled,
  options,
  data: [field, value, error],
  handler,
}) => {
  return (
    <FormField
      disabled={disabled}
      label={label}
      name={field}
      error={error}
      onBlur={handler.onBlur}
    >
      <Select
        name={field}
        disabled={disabled}
        value={value}
        // onChange={({ option }) => handler.setFieldValue(field, option)}
        options={options}
        labelKey="label"
        valueKey="value"
        {...handler}
      />
    </FormField>
  );
};
