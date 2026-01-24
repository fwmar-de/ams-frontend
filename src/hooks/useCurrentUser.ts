import { useMsal } from '@azure/msal-react';
import type { User } from '../types/user';
import type { MsalIdTokenClaims } from '../types/auth';

export function useCurrentUser(): User | null {
  const { accounts } = useMsal();
  const account = accounts[0];

  if (!account || !account.idTokenClaims) {
    return null;
  }

  const claims = account.idTokenClaims as MsalIdTokenClaims;

  return {
    name: claims.name ?? '',
    email: claims.email ?? claims.preferred_username ?? '',
    id: claims.oid ?? '',
  };
}
