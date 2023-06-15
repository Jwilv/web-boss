import { Route, Routes } from "react-router"
import { routes } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      {
        routes.map(({ path, name, component: Component }) => {
          return (<Route path={path} key={name} element={<Component />} />)
        })
      }
    </Routes>
  )
}

export default AppRouter
