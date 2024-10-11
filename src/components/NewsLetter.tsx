import Button from "./Button/Button";

export default function NewsLetter() {
  return (
    <section
      className="flex flex-col items-center bg-cover bg-center py-28"
      style={{ backgroundImage: "url('/src/assets/newsLetter/banner.png')" }}
    >
      <h2 className="max-w-[46rem] text-center mb-10">
        Get Latest Update By Subscribe 0ur Newsletter
      </h2>
      <Button mode="filled">Suscribe</Button>
    </section>
  );
}
