import { useState } from 'react';

interface IUseFormFieldsOwnProps {
  [key: string]: string | number;
}

// 'as const' should add to type safety but not useable with a return type..
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useFormFields = <T extends IUseFormFieldsOwnProps>(initialFields: T) => {
  const [fields, setFields] = useState<T>(initialFields);

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>) => setFields({
    ...fields,
    [e.target.id]: e.target.value,
  });

  return [fields, handleFields] as const;
};

export default useFormFields;
