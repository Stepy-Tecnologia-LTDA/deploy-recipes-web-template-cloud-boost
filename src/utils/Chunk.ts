interface ChunkProps {
  id: number;
  title: string;
  description: string;
}

export function chunk(arr: ChunkProps[], size: number) {
  const faqsChunk = [];

  for (let index = 0; index < arr.length; index += size) {
    faqsChunk.push(arr.slice(index, index + size));
  }

  return faqsChunk;
}
