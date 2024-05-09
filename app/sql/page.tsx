import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from customers`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - <pre>
          {JSON.stringify(row, null ,2)}
          </pre>
        </div>
      ))}
    </div>
  );
}