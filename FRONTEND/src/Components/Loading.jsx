export default function Loading({ text = "Loading..." }) {
  return (
    <div className="loading">
      <div className="loading-spinner" />
      <p>{text}</p>
    </div>
  );
}