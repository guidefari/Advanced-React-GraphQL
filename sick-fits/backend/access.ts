import { ListAccessArgs } from './types';

// At its simplest, access control returns a yes or a no value depending on the users session

export function isSignedIn({ session }: ListAccessArgs): boolean {
  return !!session;
}
