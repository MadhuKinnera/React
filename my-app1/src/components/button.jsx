export default function Button(props) {
  console.log(props);
  const {text} = props;
  return <button>{text}</button>;
}
