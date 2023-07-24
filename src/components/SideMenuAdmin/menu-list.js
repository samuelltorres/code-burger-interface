import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LocalMallIcon from '@mui/icons-material/LocalMall'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.ListOrders,
    icon: LocalMallIcon
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.ListProducts,
    icon: FastfoodIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon
  }
]

export default listLinks
