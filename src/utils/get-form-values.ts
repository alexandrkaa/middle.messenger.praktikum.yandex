export const getFormValues = (
  formData: FormData,
): Record<string, string | Blob> => {
  const result = {} as Record<string, string | Blob>;
  for (const [key, val] of formData.entries()) {
    result[key] = val;
  }
  return result;
};
