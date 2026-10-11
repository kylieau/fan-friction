// Reading a Supabase error. Migrations are pasted by Kylie into the SQL editor, so a
// build can reach the live project before a table, view, column or function it expects
// exists. Code that can fall back to the older shape asks here first.

export interface DbError {
  code?: string;
  message: string;
}

/** A table, view or function this build expects is not there yet (a migration not yet run). */
export function notThereYet(error: DbError | null | undefined): boolean {
  if (!error) return false;
  return (
    error.code === '42P01' || // undefined table or view
    error.code === '42883' || // undefined function
    error.code === 'PGRST202' || // PostgREST: function not in the schema cache
    error.code === 'PGRST205' || // PostgREST: table or view not in the schema cache
    /schema cache|does not exist/i.test(error.message)
  );
}

/** A column this build expects is not there yet, or a value the current check constraint refuses. */
export function olderShape(error: DbError | null | undefined): boolean {
  if (!error) return false;
  return error.code === '42703' || error.code === '23514' || notThereYet(error);
}
