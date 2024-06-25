import Card from "./GameComponents/Card";

export default function Game({ difficulty }) {
  return (
    <>
      <p> {difficulty} </p>
      <Card name={'ditto'} />
    </>
  )
}