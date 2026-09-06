import { forwardRef } from "react";

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  hint?: string;
};

type InputProps = BaseProps &
  React.InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaProps = BaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };
type SelectProps = BaseProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    as: "select";
    options: readonly string[];
    placeholder?: string;
  };

function Wrapper({
  label,
  name,
  error,
  required,
  hint,
  children,
}: BaseProps & { children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-ink-muted">{hint}</p>}
      {error && (
        <p id={`${name}-error`} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, required, hint, ...rest }, ref) => (
    <Wrapper label={label} name={name} error={error} required={required} hint={hint}>
      <input
        ref={ref}
        id={name}
        name={name}
        className="field-input"
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...rest}
      />
    </Wrapper>
  ),
);
TextField.displayName = "TextField";

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, error, required, hint, ...rest }, ref) => (
    <Wrapper label={label} name={name} error={error} required={required} hint={hint}>
      <textarea
        ref={ref}
        id={name}
        name={name}
        rows={4}
        className="field-input resize-y"
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...rest}
      />
    </Wrapper>
  ),
);
TextAreaField.displayName = "TextAreaField";

export const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, error, required, hint, options, placeholder, ...rest }, ref) => (
    <Wrapper label={label} name={name} error={error} required={required} hint={hint}>
      <select
        ref={ref}
        id={name}
        name={name}
        className="field-input"
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        defaultValue=""
        {...rest}
      >
        <option value="" disabled>
          {placeholder ?? "Selecione…"}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Wrapper>
  ),
);
SelectField.displayName = "SelectField";
