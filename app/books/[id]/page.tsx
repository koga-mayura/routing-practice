type Props = {
  params: Promise<{ id: string }>;
};

export default async function BookPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow p-10 max-w-md w-full">
        <p className="text-sm text-gray-400 mb-2">URLのID</p>
        <p className="text-5xl font-bold text-indigo-600">{id}</p>
        <p className="mt-4 text-gray-500 text-sm">/books/<span className="font-mono">{id}</span> にアクセスしています</p>
      </div>
    </main>
  );
}
