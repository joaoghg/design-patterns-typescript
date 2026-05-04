export interface Request {
  body: unknown;
  headers: Record<string, string>;
  user?: { id: string; roles: string[] };
}