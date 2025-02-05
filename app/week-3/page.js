import ItemList from "./item-list"; 

export default function Page() {
  return (
    <main className="flex flex-col items-flex-start p-8 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-100">Shopping List</h1>
      <ItemList />
    </main>
  );
}
