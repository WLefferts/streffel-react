interface PostParams {
  key: number;
  title: string;
  body: string;
}

export async function Post(params: PostParams) {
  return (
    <section className="mb-12 border border-gray-300 dark:border-zinc-600 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 text-center">
        {params.title}
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{params.body}</p>
    </section>
  );
}
