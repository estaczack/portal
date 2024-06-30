export default function InfoBox ({ titulo, valor }) {
  return (
    <div className='box fundo-infobox'>
      <div className='destaque-sombra-1'>{titulo}</div>
      <div className='destaque-sombra-2'>{valor}</div>
    </div>
  )
}
