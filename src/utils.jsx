export function VoteSum(votes) {
  if (votes) {
    const ups = Object.entries(votes).map(
      ([, v]) => { return v.up });
    return ups.reduce((s, up) => s + (up ? 1 : -1), 0);
  }
  return 0;
}
