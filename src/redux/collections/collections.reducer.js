import clay from '../../assets/images/clay-nav.jpg'
import glaze from '../../assets/images/glaze-nav.jpg'
import tools from '../../assets/images/tools-nav.jpg'
import workshops from '../../assets/images/workshops-nav.jpg'
import devices from '../../assets/images/devices-nav.jpg'

const INITIAL_STATE = {
  items: [
    {
      title: 'clay',
      bgImage: clay,
      slug: '/sklep/glina'
    },
    {
      title: 'glaze',
      bgImage: glaze,
      slug: '/sklep/szkliwo'
    },
    {
      title: 'tools',
      bgImage: tools,
      slug: '/sklep/narzedzia'
    },
    {
      title: 'workshops',
      bgImage: workshops,
      slug: '/sklep/warsztaty'
    },
    {
      title: 'devices',
      bgImage: devices,
      slug: '/sklep/urzadzenia'
    }
  ]
}

export const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: return state
  }
}