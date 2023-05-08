export default function LoginForm() {
  return (
    <form
      method="post"
      className="w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 pt-10"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="submit" title="Submeter" />
    </form>
  );
}
