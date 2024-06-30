import { lazy, Suspense} from 'react'

export default function ComponenteDinamico(props) {
  const Dyn = lazy(() => import(`./${props.nomeComponente}.jsx`))
  
  return(
    <Suspense fallback={<div>Carregando...</div>}>
      <Dyn {...props} />
    </Suspense>
  )
}