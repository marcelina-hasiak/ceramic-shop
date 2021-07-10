import SIBELCO_ATELIERMASSE from '../../assets/glina/images/glina-sibelco-ateliermasse-biala-w4005.jpg'
import SIBELCO_K144 from '../../assets/images/glina/glina-sibelco-k144.jpg'
import SIBELCO_K3020 from '../../assets/images/glina/glina-sibelco-k3020.jpg'
import SIBELCO_TERRA_NIGRA from '../../assets/images/glina/glina-sibelco-terra-nigra.jpg'
import SIBELCO_TERRAZZO_ROT from '../../assets/images/glina/glina-sibelco-terrazzo-rot.jpg'
import SIBELCO_WMS_2002GG from '../../assets/images/glina/glina-sibelco-wms-2002gg.jpg'
import SIBELCO_WMS_2005GG from '../../assets/images/glina/glina-sibelco-wms-2005gg.jpg'
import SIBELCO_BETONGRAU from '../../assets/images/glina/glina-silbeco-betongrau.jpg'

import BOTZ_FIOLKOWY from '../../assets/images/szkliwo/szkliwo-botz-fiolkowy'
import BOTZ_MAJOWY_DESZCZ from '../../assets/images/szkliwo/szkliwo-botz-majowy-deszcz'
import BOTZ_NIEBIESKIE_ORIENTALNE from '../../assets/images/szkliwo/szkliwo-botz-niebieskie-orientalne'
import TERRACOLOR_CYTRYNA from '../../assets/images/szkliwo/szkliwo-terracolor-cytryna'
import TERRACOLOR_CZERWONY_ZAR from '../../assets/images/szkliwo/szkliwo-terracolor-czerwony-zar'
import TERRACOLOR_KREMOWE from '../../assets/images/szkliwo/szkliwo-terracolor-kremowe'
import TERRACOLOR_NIEBIESKA_KUKURYDZA from '../../assets/images/szkliwo/szkliwo-terracolor-niebieska-kukurydza'
import TERRACOLOR_PLAMISTA_ZIELEN from '../../assets/images/szkliwo/szkliwo-terracolor-plamista-zielen'
import TERRACOLOR_RAJSKI_PTAK from '../../assets/images/szkliwo/szkliwo-terracolor-rajski-ptak'
import TERRACOLOR_ZIELONE_KRYSZTALY from '../../assets/images/szkliwo/szkliwo-terracolor-zielone-krysztaly'
import TERRACOLOR_ZIELONY_GRYNSZPAN from '../../assets/images/szkliwo/szkliwo-terracolor-zielony-grynszpan'

import WYKROJNIK_OTWOROW_8MM from '../../assets/images/narzedzia/narzedzia-wykrojnik-otworow-8mm'
import OCZKO_DWUSTRONNE from '../../assets/images/narzedzia/narzedzia-oczko-dwustronne'
import PEDZLE_BRODA_KOZIA from '../../assets/images/narzedzia/narzedzia-pedzel-broda-kozia'
import TOCZEK_METALOWY_WYSOKI from '../../assets/images/narzedzia/narzedzia-toczek-metalowy-wysoki'
import CYKLINA_SILIKONOWA_MIEKKA from '../../assets/images/narzedzia/narzedzia-cyklina-silikonowa-miekka'

import WARSZTATY_DLA_DZIECI from '../../assets/images/warsztaty/warsztaty-dla-dzieci'
import WARSZTATY_I_STOPNIA from '../../assets/images/warsztaty/warsztaty-I-stopnia'
import WARSZTATY_II_STOPNIA from '../../assets/images/warsztaty/warsztaty-II-stopnia'
import WARSZTATY_III_STOPNIA from '../../assets/images/warsztaty/warsztaty-III-stopnia'

import ROHDE_WALCARKA_DO_GLINY_PW_600 from '../../assets/images/urzadzenia/rohde-walcarka-do-gliny-pw-600'
import SHIMPO_KOLO_GARNCARSKIE_RK55 from '../../assets/images/urzadzenia/shimpo-kolo-garncarskie-rk55'
import SHIMPO_MIESZARKA_DO_GLINY_NRA_04S from '../../assets/images/urzadzenia/shimpo-mieszarka-do-gliny-nra-04s'
import KOMORA_NATRYSKOWA_DO_SZKLIWIENIA from '../../assets/images/urzadzenia/komora-natryskowa-do-szkliwienia'


export const SHOP_PRODUCTS_DATA = [
  {
    id: 1,
    title: 'Glina',
    slug: 'glina',
    items: [
      {
        id: 1,
        name: 'Sibelco ateliermasse biała W4005',
        imageSrc: SIBELCO_ATELIERMASSE,
        price: 30
      },
      {
        id: 2,
        name: 'Sibelco K144',
        imageSrc: SIBELCO_K144,
        price: 32.50
      },
      {
        id: 3,
        name: 'Sibelco K3020',
        imageSrc: SIBELCO_K3020,
        price: 32.50
      },
      {
        id: 4,
        name: 'Sibelco terra nigra',
        imageSrc: SIBELCO_TERRA_NIGRA,
        price: 40
      },
      {
        id: 5,
        name: 'Sibelco terrazzo rot',
        imageSrc: SIBELCO_TERRAZZO_ROT,
        price: 30
      },
      {
        id: 6,
        name: 'Sibelco WMS 2002GG',
        imageSrc: SIBELCO_WMS_2002GG,
        price: 30
      },
      {
        id: 7,
        name: 'Sibelco WMS 2005GG',
        imageSrc: SIBELCO_WMS_2005GG,
        price: 30
      },
      {
        id: 8,
        name: 'Silbeco betongrau',
        imageSrc: SIBELCO_BETONGRAU,
        price: 35
      }
    ]
  },
  {
    id: 2,
    title: 'Szkliwo',
    slug: 'szkliwo',
    items: [
      {
        id: 1,
        name: 'Botz fiołkowy',
        imageSrc: BOTZ_FIOLKOWY,
        price: 42.30
      },
      {
        id: 2,
        name: 'Botz majowy deszcz',
        imageSrc: BOTZ_MAJOWY_DESZCZ,
        price: 40
      },
      {
        id: 3,
        name: 'Botz niebieskie orientalne',
        imageSrc: BOTZ_NIEBIESKIE_ORIENTALNE,
        price: 45
      },
      {
        id: 4,
        name: 'Terracolor cytryna',
        imageSrc: TERRACOLOR_CYTRYNA,
        price: 36
      },
      {
        id: 5,
        name: 'Terracolor czerwony zar',
        imageSrc: TERRACOLOR_CZERWONY_ZAR,
        price: 40
      },
      {
        id: 6,
        name: 'Terracolor kremowe',
        imageSrc: TERRACOLOR_KREMOWE,
        price: 36
      },
      {
        id: 7,
        name: 'Terracolor niebieska kukurydza',
        imageSrc: TERRACOLOR_NIEBIESKA_KUKURYDZA,
        price: 36
      },
      {
        id: 8,
        name: 'Terracolor plamista zielen',
        imageSrc: TERRACOLOR_PLAMISTA_ZIELEN,
        price: 40
      },
      {
        id: 9,
        name: 'Terracolor rajski ptak',
        imageSrc: TERRACOLOR_RAJSKI_PTAK,
        price: 46.50
      },
      {
        id: 10,
        name: 'Terracolor zielone krysztaly',
        imageSrc: TERRACOLOR_ZIELONE_KRYSZTALY,
        price: 46.50
      },
      {
        id: 11,
        name: 'Terracolor zielony grynszpan',
        imageSrc: TERRACOLOR_ZIELONY_GRYNSZPAN,
        price: 46.50
      }
    ]
  },
  {
    id: 3,
    title: 'Narzędzia',
    slug: 'narzedzia',
    items: [
      {
        id: 1,
        name: 'Wykrojnik otworów 8mm',
        imageSrc: WYKROJNIK_OTWOROW_8MM,
        price: 17.30
      },
      {
        id: 2,
        name: 'Oczko dwustronne',
        imageSrc: OCZKO_DWUSTRONNE,
        price: 90
      },
      {
        id: 3,
        name: 'Pędzle z brody koziej',
        imageSrc: PEDZLE_BRODA_KOZIA,
        price: 45
      },
      {
        id: 4,
        name: 'Toczek metalowy wysoki',
        imageSrc: TOCZEK_METALOWY_WYSOKI,
        price: 156
      },
      {
        id: 5,
        name: 'Cyklina silikonowa miękka',
        imageSrc: CYKLINA_SILIKONOWA_MIEKKA,
        price: 12.50
      }
    ]
  },
  {
    id: 4,
    title: 'Warsztaty',
    slug: 'warsztaty',
    items: [
      {
        id: 1,
        name: 'Warsztaty dla dzieci',
        imageSrc: WARSZTATY_DLA_DZIECI,
        price: 80
      },
      {
        id: 2,
        name: 'Warsztaty I stopnia',
        imageSrc: WARSZTATY_I_STOPNIA,
        price: 350
      },
      {
        id: 3,
        name: 'Warsztaty II stopnia',
        imageSrc: WARSZTATY_II_STOPNIA,
        price: 400
      },
      {
        id: 4,
        name: 'Warsztaty III stopnia',
        imageSrc: WARSZTATY_III_STOPNIA,
        price: 500
      }
    ]
  },
  {
    id: 5,
    title: 'Urządzenia',
    slug: 'urzadzenia',
    items: [
      {
        id: 1,
        name: 'Rohde walcarka do gliny pw 600',
        imageSrc: ROHDE_WALCARKA_DO_GLINY_PW_600,
        price: 9150
      },
      {
        id: 2,
        name: 'Shimpo kolo garncarskie rk55',
        imageSrc: SHIMPO_KOLO_GARNCARSKIE_RK55,
        price: 4890
      },
      {
        id: 3,
        name: 'Shimpo mieszarka do gliny nra 04s',
        imageSrc: SHIMPO_MIESZARKA_DO_GLINY_NRA_04S,
        price: 19020
      },
      {
        id: 4,
        name: 'Komora natryskowa do szkliwienia',
        imageSrc: KOMORA_NATRYSKOWA_DO_SZKLIWIENIA,
        price: 50100
      }
    ]
  }
]