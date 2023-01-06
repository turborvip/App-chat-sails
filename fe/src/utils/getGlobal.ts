export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';

  return {
    device,
  } as const;
}
