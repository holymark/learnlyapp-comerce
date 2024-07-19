import type { Products } from '@/types'
import {
  Store,
  createStore,
  useStore
} from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    user: string
    products: Products
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export {
  Store,
  createStore,
  useStore
}


/**  {
          id: '1',
          name: 'Iphone 12',
          description: 'A nice phone by Apple Inc',
          price: '800',
          brand: 'Apple',
          imageURL:
            'https://www.istore.com.ng/cdn/shop/products/12blk_2ae8247a-5f68-44f7-86f0-d9b605f1332c_5000x.png?v=1619669265'
        },
        {
          id: '1',
          name: 'Iphone 11',
          brand: 'Apple',
          description: 'A nice phone by Apple Inc',
          price: '800',
          imageURL:
            'https://img.freepik.com/free-vector/realistic-smartphone-with-black-back-cover_23-2148385252.jpg?t=st=1721274062~exp=1721277662~hmac=f973f06d6e79ca4969b421e23a8da0fdbb9f849de149f7494178e3d827d8c0f6&w=740'
        },
        {
          id: '1',
          name: 'Iphone X',
          description: 'A nice phone by Apple Inc',
          brand: 'Apple',
          price: '800',
          imageURL:
            'https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147846501.jpg?t=st=1721274122~exp=1721277722~hmac=9b9784339329148fd28564ed63f5a35587bb5c8f92fc9a423c81fdeb64a0ba76&w=740'
        }
      ]
    }
  } */