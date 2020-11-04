import * as S from './styles'

const Main = ({ title = 'NextJS', description = 'Typescript' }) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um atomo e react" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Ilustração de um garoto sentado no pc"
    />
  </S.Wrapper>
)

export default Main
