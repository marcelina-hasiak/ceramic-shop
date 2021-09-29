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
      slug: '/clay'
    },
    {
      title: 'glaze',
      bgImage: glaze,
      slug: '/glaze'
    },
    {
      title: 'tools',
      bgImage: tools,
      slug: '/tools'
    },
    {
      title: 'workshops',
      bgImage: workshops,
      slug: '/workshops'
    },
    {
      title: 'devices',
      bgImage: devices,
      slug: '/devices'
    }
  ]
}

export const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: return state
  }
}