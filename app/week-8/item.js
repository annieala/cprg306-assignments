export default function Item({ name, quantity, category, onSelect }) {
    return (
      <section className="bg-gray-900 p-4 m-4 rounded-lg" onClick={() => onSelect(item)}>

        <p className="font-bold space-x-2 text-gray-100">{name}</p>
        <p className="font-thin text-gray-100">Buy  {quantity} in {category}</p>
      </section>
    );
  }
  