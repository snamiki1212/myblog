export const renderDate = (dateStr: string): string => {
  const d = new Date(dateStr);
  return d.toISOString().split('T')[0];
}