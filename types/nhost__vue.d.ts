declare module '@nhost/vue' {
  export function useAuth(): {
    [x: string]: any;
    isAuthenticated: { value: boolean },
    user: { value: any },
    signIn: () => Promise<void>,
    signOut: () => Promise<void>
  }
}
