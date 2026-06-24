// src/data/products.js

export const PRODUCTS = [
  // Laptops
  {
    id: 'core-laptop-13',
    name: 'CORE MODULAR LAPTOP (13-inch)',
    price: 1199,
    category: 'laptops',
    isConfigurable: true,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqFEU0SVhQMKcFDI4vZobYy5SotgK6UcTiQ2kiU03p-zt_ptk-JrfCOr5A-ugGesihPOqqd4RYDqTk7KSsBY7NarCUFBP1gTYbiUr7A2EVhVqWkatfEKG6J_or0n38aalToQS0Oe0KMZGmtb0kiaUMhVguNHenoIyaUiqv0CvO3vb5ONNRQPQl_mkfn5xivmAYcvDK4d7KU8ro3F5jIB4qstYP9W9SDhuvCp0c0XCk5fXhSE9sEOR4r0i0sOWGSbr1UZAqO9ryLtg'
  },
  {
    id: 'core-laptop-16',
    name: 'CORE MODULAR LAPTOP (16-inch)',
    price: 1599,
    category: 'laptops',
    isConfigurable: true,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqFEU0SVhQMKcFDI4vZobYy5SotgK6UcTiQ2kiU03p-zt_ptk-JrfCOr5A-ugGesihPOqqd4RYDqTk7KSsBY7NarCUFBP1gTYbiUr7A2EVhVqWkatfEKG6J_or0n38aalToQS0Oe0KMZGmtb0kiaUMhVguNHenoIyaUiqv0CvO3vb5ONNRQPQl_mkfn5xivmAYcvDK4d7KU8ro3F5jIB4qstYP9W9SDhuvCp0c0XCk5fXhSE9sEOR4r0i0sOWGSbr1UZAqO9ryLtg'
  },
  
  // Workstations
  {
    id: 'core-workstation-apex',
    name: 'CORE WORKSTATION APEX',
    price: 1499,
    category: 'workstations',
    isConfigurable: true,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxEIJZ5GNdGJ6YmzpJDzLZustUflNkLDvk2BJM-lSISCEEF3kZhGqDYjKXzeDA_no_4hrmLz9zbRIT6RVt0I5eJql9ktafZtq93eGSjieioJKCMm-ztr_noIw_-rKwTMJ9zDxt9EDk296Hie7JB9ArQyVskgKvG8aGeGPH2tNL4t8Xfrm8Dv-a7hOtwpDBm3mN3DzbLfHubGClu9QRDkGJokTlWID6edYXuz0YpTgz3fBBOiWzDgGiw7g_A_s4rUN-rN0xV27Z2Ac'
  },
  { 
    id: 'gaming-pc-tower', 
    name: 'GAMING PC TOWER Chassis', 
    price: 349, 
    category: 'workstations', 
    isConfigurable: true,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxEIJZ5GNdGJ6YmzpJDzLZustUflNkLDvk2BJM-lSISCEEF3kZhGqDYjKXzeDA_no_4hrmLz9zbRIT6RVt0I5eJql9ktafZtq93eGSjieioJKCMm-ztr_noIw_-rKwTMJ9zDxt9EDk296Hie7JB9ArQyVskgKvG8aGeGPH2tNL4t8Xfrm8Dv-a7hOtwpDBm3mN3DzbLfHubGClu9QRDkGJokTlWID6edYXuz0YpTgz3fBBOiWzDgGiw7g_A_s4rUN-rN0xV27Z2Ac' 
  },

  // Ecosystem / Spotlight / Trending (Accessories & Non-Configurable)
  { id: 'vortex-7', name: 'VORTEX 7 Cooling Fan', price: 89, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpuRmpoBol8zNLpVDNeq0DPuFv616Sw-fX-GP3YvCmsKLYND9UQb5WMgaBfRndCvw-s_7TTC-Dcts_lmMUf2UQHKKcODjmgS1CZWS2wlur3YCoqxXL9OkRZ4d7BaULWx3cdItJ4wyslH2MMGTCEbWUib9d8226mkAICkijbyBvWvfq6sRO-so7L0ldhdVj2N9SGLC2lYeI46wjIpbtGu9RmnaPLIgdaSfDvvIJYPN_AebGQoHlr_hYaBOqJiPBxMIJ9742_m8diVY' },
  { id: 'aero-mouse-pro', name: 'AERO-MOUSE PRO', price: 129, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFCYAPvggbfJirTKhNdo9lz_iP4CQdwUyz2MjLoy8ZkKxzlzcQzTtnhQutIjk0StqKmu3Lo7i2s031vxRVtfBoGpXWx0amf0GXqqA80uX9kRTV4POdviTtaH5R2Px4eKgyZy4Zq_X5RrmjYDG84IzbhPImp36Wamj6U8hRQGK47Z8GPdnJEeGHeJWkWxv3eoKbFpoRzyK-_HihXutl3ovbFPEleYKUzCzo2LSggDDGidEHVL0jQjisQ2PJ82OnEJbH_TqdMWkuOC8' },
  { id: 'kinetix-mkl', name: 'KINETIX MKL Keyboard', price: 249, category: 'keyboards', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAedBYTJHePaVIUZyYI1uv650KpsahVV9hOuesu2JW1Vql1vl9eTWAdybe4CSbOainb9-dwd6aOtM4IFUdfJhj458aOLwDNBMZhF7Q1qWPocfKwArJxa8uD3WQNhord89fVmSs0Y5kVV4N4jfH5zE02a6LUfgzGvoTTOxphwGPxS_TwiACLL1vFKUSvI9n2qZ2xEjlJQ2XILZn1xCnq5gr7FTF3Z_unktGbXbtaV5XMG-VYgtTCLFbdqM619qq2C1LxNi-kqAqjRp8' },
  { id: 'titanpad-xl', name: 'TITANPAD XL Deskmat', price: 49, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXEEsNm5ps1uX9s8eO4bQHoWLDyDXwT-g-mvmfaNdNc3oBIPgIpYL9uCxbqVsPVg9038r0WGVIhFpqhGUmuLniF9hdojtYQe-FprInPy1babNwxppDSob6UysrcB09bGAXndyYZP6jjQ2q1qSe-hUxVmWHdKWcP5KcAST4BGa6FfqhmNik8ge2L4Sl_EWrFo0nNMH4TQejt9mBEQQlSDYdKXb2D7cnzhc3tFHpd8aEYD7LR8qGXYu6AqUZ846GrkHIASuHDbiAy-M' },
  { id: 'core-monitor', name: 'CORE MONITOR Pro', price: 899, category: 'displays', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Ezqcxm-Hjqi3k0icXb5wgEJ4VS7uQkVjynUhpA-Ks8VAikZcdZzgR0jP3SnMRJt7R49ESe54S_tEBA9QE3Sl0VDrZQOfDKhhGLqnHhZmtr3g03l5MFMEkS6_t7KXJDY8HrHrXMsaEov6AFijaoHAPKeiEQ13lYrgCs0dvbjGH8bSzmrUBD7a0G1DkLlrcalyP7WQoW7PBqJYKQHlZAPV2UZcp4oEem0Da4hI27MAGriM1AIkNhh-ZVFDQEIOh2CQW9LG5qlYUEw' },
  { id: 'apex-streamer', name: 'APEX STREAMER Interface', price: 199, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC51kHt_P7np0feyN_sI_H_3yWurPTXjeHgNXqbHcjawgnVZW-pKrMM1NYKpnL5kM-A5L9DnX39NGYTGgH-dqXD3-3qOq7tnbZhxVPbzGqDYQIyFVSM7ElgS4jTTTIyV0XQ6u8TESNOvx6w7sE0WDd0NWg1X0ra6ZEHMXQnkoHVaBiYUh_lI9V5YiVeE-TF0vyuO6NxM-58rqvr8OL4Q1kOs8shFYybtnFlFMIdWm-u6HRZP1nfeRZd1hwhQMSx3rKvjfqbkr5HnF8' },
  { id: 'power-cube', name: 'POWER CUBE GaN Hub', price: 99, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRf7Zcq4cmyEaiP3NikzQ1aHQdp-Xim2qCztrlJdzbj5ToGHsCfJsp8_jIlF_Rx1tEifZ0p0PPLLJ7DR4fOX6WJXgAdGsMaqipQ7Ic1_26WHQQkCFyCVWZv9cn7rzWQCcIXDiNsaU6QmeN9af0aXGpgvwDzAKQcvOzbR-3epgqEIvHH4vaFth3DK8iJnbXGEuEn7wigPtuaECCUGPZmES8WutxM_5sx1Su7jVJ8bu6W0CIpeTaHdlRqOfcgKff03MMW-u_wK6u5T8' },
  { id: 'syncdesk', name: 'SYNCDESK Smart Frame', price: 1299, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiXeuCoXQ6WxTlq4mp6nl95PXrfZwpEIQnZk7Cqa3dWhZ_-rsfk73-YlJJhZlZGZdg0ESfTILW8H3iC07_nlynsH2IBnHUaBHACRGyEBNGriV7OoozW4iCOs7g7SfIBzH2kMtVIkywJp76PqtHtPUw9yx_1JQ67-GYYMkeeCwxqpCkrVaXYEPB-1MKOjEXRjdKy08YrdMeaXufP6mHHt9ar_Mv6HaKR7PHA_R66ZmO-9dXcbok3nsapKItmtBOzC_NuKkX3jxXdjk' },
  { id: 'throne-se', name: 'THRONE SE Ergonomic Chair', price: 699, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBh8ZGxPSb8uVZankhkASHRPYJvTTaSFfL3Arw4tVvBIaTT6cH1JL6UUuLcZfONBwGDlR2Tmz-BFVZLNFQzb9CcZsGpgX9Bkk9CL6Kbigx_YxQsNvAu5Xbvr0Wc-oxhLu90J2E7KJc2eLPr5q_jKsTct8K2fs4SgOTV-O_jf5j5w7yDpG3nObOSp_SUL7ioXjFUbiXtu2aRW-IP6UIo8jQdFHVs4CtmU_hFl2nZLAlK_JP_1eO2gasPT1m5tsFIt0aoDE4ujX5Qus' },
  { id: 'vr-gear-v2', name: 'VR GEAR V2 Headset', price: 599, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChRPurMapNW2NFxCzoRa8TCn01gWUJ3NvUuE8HJ4erUHzKjfaloIvg1Jo-UijP67L4oLJt8P9peIpmOlZaj-JadC84vuF0RbApeoUEyF3_WJ-pPID2Bnq2SF_JMh2-l-d6hLrvO7QMAGy5--DtwqMPNJWMaXIBjH5IFCddsiM62MH5BJZy9fNzePPQ_uKQb8HHktzjPo7a6RCRrSFKQB7BVtfjurbtKdg-GUETci71P6STXni0fgd3jcGzwuUJpmi1AoOtWcMe0Dc' },
  { id: 'controller-s', name: 'CONTROLLER S Custom gamepad', price: 79, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjxnXawIwNpOODtOBhdFjmkJkrazb_6bcx67y0wnd3rm09CJUjwcAbzwEz6hYQSAtATfyJBjM4RD6cx0O9xgkHgAasj9cWBSR-MDpu8V0ZsHo-crj_ItH8t50Yx8eHae_jRxrAuLN_Dr3-CLNLkK4mutnSG5y-1otFvwDn8e4ROks3FggRugAl7LjPuQC2OhyTNqw4JCeIrpCNERVoezw4_i2ZxEdvMLHJkpa_qbIwwjeZ_VeglSxVXRPTpqjWyKuNlGgHv76MhNM' },
  { id: 'cable-kit', name: 'CABLE KIT Braided Connectors', price: 39, category: 'accessories', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUDZwcKMoIqG5R0u6F-yKW7jomfSac745ulhQD9SVBPc240-oHLOuQUPzMGA9q04jYu3I90nGIIoMJzBUZxX3ccQmF9QevI8iabmrrJMoROwhNg1blOGm27VFbsSaTeU3Y-LuO0RJeFAyozqx6lnTC16V5-i3GYyZMTW-zCaR8ekHVBjwdJIlsGoluSoVsrF381X8Mpsrlwr2s0_UvHxCfe8-YA3hCRPUdShDoTdKBr-rctJHPNs2DZM4r_WGrTL4qeDCgw-6s87w' },
  { id: 'gear-pack', name: 'GEAR PACK Utility Bag', price: 119, category: 'apparel', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTfKF7VQHAKyAEnYTY75zaUPeI-Q6w94nNIm8nZWWiTUt0n8vHdWA6LvDIEwjVQwb8eD9E8imqHNdpK8HzY9QYHt0AlwMIJak1Ilni3UejRdVvrv94g6eCXWSSftoiz1KbuGCVIBBasyaVePoI9EnzhnchFx8QFm51KqnMK9oqdrbnQQU4X49sRR2K6hS4Ju_etv4GmQimeDSzGxI1mKJ8b5SMQG_HjWfpL4PwCOseqS_Jy8dU02NxzHuBBivQJEqcGMagxW88a0k' },
  { id: 'brand-tee', name: 'CORE BRAND TEE', price: 35, category: 'apparel', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFak3PmROaY2tNV9LwL7T4Py6JSA56Cs-1BNnJm3d3wI9NDw9NdyV3KA8E2Yb51U-UeMsmJ0XLqHT1W3KEnN5Vrr9_xuEUeSTxiDf8lOv0R5oztLjEt-iAY6nMmWADhWUhGEZdpO8LzQEFFSXPP1CxVJSUSsO1JkZnvGNXxCt8Jmfci2w-AVWs-2LdkaKdQQVS69rJNZVl3ndS44dgZo6e_2vlQ5BzFlhcYRzxqXUzU0tfcJZ7M5Oq8l8fGmoZ4wI1Y8KdGsOxBHk' },
  { id: 'brand-hoodie', name: 'CORE BRAND HOODIE', price: 65, category: 'apparel', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_RNs7oDEnHKHDcoMapBsIhUJkYiQlP3VOMh0fhbfGOf3qpxyOWvpWPRQgWLYeRpA5W3P-Xw4lnhrU108KyB2dO0DZbiQ0AqG3jSjN0Fh65cjhjmNN1CKfiZuZfAlbJ-XUbh4ayA1y02PxP33B5eSRTRZE2jhd4kZdh6ygbgV6BPKa9yZO8JcnU5igX-m5E1e9kG_6jVVSgUFxSCbG6ZpDRt9LyrjE07q9KTxcOPtr86QO5_gA5-wDxXeyOfr2wAmA11aF2T3_Eho' },
  
  // Extra Trending
  { id: 'core-studio-display', name: 'CORE STUDIO Display 5K', price: 1299, category: 'displays', isConfigurable: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Ezqcxm-Hjqi3k0icXb5wgEJ4VS7uQkVjynUhpA-Ks8VAikZcdZzgR0jP3SnMRJt7R49ESe54S_tEBA9QE3Sl0VDrZQOfDKhhGLqnHhZmtr3g03l5MFMEkS6_t7KXJDY8HrHrXMsaEov6AFijaoHAPKeiEQ13lYrgCs0dvbjGH8bSzmrUBD7a0G1DkLlrcalyP7WQoW7PBqJYKQHlZAPV2UZcp4oEem0Da4hI27MAGriM1AIkNhh-ZVFDQEIOh2CQW9LG5qlYUEw' },
];

export const getProductById = (id) => PRODUCTS.find(p => p.id === id);
