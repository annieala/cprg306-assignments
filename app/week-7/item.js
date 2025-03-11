export default function Item({ name, quantity, category }) {
    return (
      <section className="bg-gray-900 p-4 m-4 rounded-lg">
        <p className="font-bold space-x-2 text-gray-100">{name}</p>
        <p className="font-thin text-gray-100">Buy  {quantity} in {category}</p>
      </section>
    );
  }
  