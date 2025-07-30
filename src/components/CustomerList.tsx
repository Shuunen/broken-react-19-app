export function CustomerList({ items }: { items: any[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li className="text-left">
          -{item.firstName}
          {item.lastName}
        </li>
      ))}
    </ul>
  );
}
