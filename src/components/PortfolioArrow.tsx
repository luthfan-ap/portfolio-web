export function Arrow({ down = false }: { down?: boolean }) {
  return <svg className={down ? 'p-arrow p-arrow-down' : 'p-arrow'} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}

