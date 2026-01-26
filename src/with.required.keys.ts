export type WithRequiredKeys<A extends {}, K extends keyof A> = Partial<
  Omit<A, K>
> &
  Pick<A, K>
