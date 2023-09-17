"use strict";(self.webpackChunkconstruction=self.webpackChunkconstruction||[]).push([[529],{1128:function(e,t,n){var s=n(2791),o=n(4164),i=document.getElementById("modal");if(!i)throw new Error('Element with id "modal" not found');t.Z=function(e){var t=e.children,n=e.onClose,r=(0,s.useCallback)((function(e){var t=document.querySelector(".modal__backdrop");e.target===t&&n()}),[n]),l=(0,s.useCallback)((function(e){"Escape"===e.key&&n()}),[n]);return(0,s.useEffect)((function(){return window.addEventListener("keydown",l),null===i||void 0===i||i.addEventListener("click",r),function(){window.removeEventListener("keydown",l),null===i||void 0===i||i.removeEventListener("click",r)}}),[l,r]),o.createPortal(t,i)}},4852:function(e,t,n){n.d(t,{a:function(){return i}});var s=n(9439),o=n(2791),i=function(){var e=(0,o.useState)(window.innerWidth),t=(0,s.Z)(e,2),n=t[0],i=t[1];return(0,o.useEffect)((function(){var e=function(e){i(e.target.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),{width:n,isScreenSm:n>=450,isScreenMd:n>=786,isScreenLg:n>=992,isScreenTableMini:n>=620,isScreenTable:n>=868,isScreenHero:n>=1065,isScreenXxxl:n>=1230}}},1475:function(e,t,n){n.d(t,{x:function(){return o}});var s=n(184),o=function(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z",fill:"#787A80"})})}},4832:function(e,t,n){n.d(t,{s:function(){return o}});var s=n(184),o=function(e){var t=e.opacity,n=void 0===t?"0.6":t,o=e.width,i=void 0===o?"24":o,r=e.height,l=void 0===r?"24":r,c=e.color,a=void 0===c?"#FFFFFF":c;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:l,viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("g",{opacity:n,children:(0,s.jsx)("path",{d:"M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z",fill:a})})})}},2997:function(e,t,n){n.d(t,{x:function(){return o}});var s=n(184),o=function(e){var t=e.color,n=void 0===t?"#fff":t,o=e.opacity,i=void 0===o?"0.6":o,r=e.width,l=void 0===r?"24":r,c=e.height,a=void 0===c?"24":c;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:a,viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("g",{opacity:i,children:(0,s.jsx)("path",{d:"M12 2C6.4775 2 2 6.145 2 11.2587C2 14.1725 3.45375 16.7712 5.72625 18.4688V22L9.13125 20.1313C10.04 20.3825 11.0025 20.5187 12 20.5187C17.5225 20.5187 22 16.3737 22 11.26C22 6.14625 17.5225 2 12 2ZM12.9937 14.4688L10.4475 11.7525L5.47875 14.4688L10.945 8.66625L13.5538 11.3825L18.46 8.66625L12.9937 14.4688Z",fill:n})})})}},9890:function(e,t,n){n.d(t,{t:function(){return o}});var s=n(184),o=function(e){var t=e.opacity,n=void 0===t?"0.6":t,o=e.width,i=void 0===o?"24":o,r=e.height,l=void 0===r?"24":r,c=e.color,a=void 0===c?"#FFFFFF":c;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:l,viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("g",{opacity:n,children:(0,s.jsx)("path",{d:"M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z",fill:a})})})}},9003:function(e,t,n){n.d(t,{C:function(){return o}});var s=n(184),o=function(e){var t=e.opacity,n=void 0===t?"0.6":t,o=e.width,i=void 0===o?"24":o,r=e.height,l=void 0===r?"24":r,c=e.color,a=void 0===c?"white":c;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:l,viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("g",{opacity:n,children:(0,s.jsx)("path",{d:"M22 11.7424C22 17.1231 17.6047 21.4849 12.1818 21.4849C10.4602 21.4849 8.84289 21.0449 7.43578 20.2727L2 22L3.77222 16.7729C2.87822 15.3049 2.36333 13.5831 2.36333 11.7424C2.36333 6.36178 6.75911 2 12.1818 2C17.6051 2 22 6.36178 22 11.7424ZM12.1818 3.55156C7.62978 3.55156 3.92711 7.226 3.92711 11.7424C3.92711 13.5347 4.51133 15.1944 5.49956 16.5447L4.46822 19.5867L7.64044 18.5784C8.94378 19.4342 10.5051 19.9333 12.182 19.9333C16.7333 19.9333 20.4367 16.2593 20.4367 11.7429C20.4367 7.22644 16.7336 3.55156 12.1818 3.55156ZM17.1398 13.9862C17.0791 13.8869 16.9189 13.8269 16.6784 13.7076C16.4376 13.5882 15.254 13.0102 15.034 12.9309C14.8133 12.8513 14.6524 12.8113 14.4922 13.0502C14.332 13.2893 13.8707 13.8269 13.73 13.9862C13.5896 14.146 13.4493 14.166 13.2084 14.0464C12.968 13.9271 12.1927 13.6747 11.2733 12.8613C10.558 12.2284 10.0749 11.4471 9.93444 11.2078C9.79422 10.9689 9.91978 10.8398 10.04 10.7209C10.1484 10.6138 10.2809 10.442 10.4011 10.3027C10.5218 10.1631 10.5618 10.0638 10.6416 9.90422C10.7222 9.74489 10.682 9.60556 10.6216 9.48578C10.5616 9.36644 10.0798 8.19133 9.87933 7.71311C9.67889 7.23533 9.47867 7.31489 9.338 7.31489C9.19778 7.31489 9.03711 7.29489 8.87667 7.29489C8.71622 7.29489 8.45533 7.35467 8.23467 7.59356C8.01422 7.83267 7.39267 8.41044 7.39267 9.58533C7.39267 10.7604 8.25467 11.8958 8.37533 12.0549C8.49556 12.214 10.0398 14.7038 12.4864 15.66C14.9333 16.6158 14.9333 16.2969 15.3747 16.2569C15.8156 16.2171 16.7982 15.6793 16.9996 15.122C17.1996 14.5638 17.1996 14.0858 17.1398 13.9862Z",fill:a})})})}},3766:function(e,t,n){n.d(t,{_:function(){return o}});var s=n(184),o=function(e){var t=e.color,n=void 0===t?"#fff":t,o=e.opacity,i=void 0===o?"0.6":o,r=e.width,l=void 0===r?"24":r,c=e.height,a=void 0===c?"24":c;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:a,viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("g",{opacity:i,children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.3903 4.11358C22.4182 4.39044 23.2288 5.20086 23.5055 6.22899C24.0197 8.10691 23.9999 12.0213 23.9999 12.0213C23.9999 12.0213 23.9999 15.9158 23.5057 17.7939C23.2288 18.8218 22.4184 19.6324 21.3903 19.9091C19.5122 20.4035 12 20.4035 12 20.4035C12 20.4035 4.50731 20.4035 2.60961 19.8895C1.58148 19.6127 0.771054 18.802 0.4942 17.7741C0 15.9158 0 12.0015 0 12.0015C0 12.0015 0 8.10691 0.4942 6.22899C0.770871 5.20104 1.60125 4.37066 2.60943 4.09399C4.48753 3.59961 11.9998 3.59961 11.9998 3.59961C11.9998 3.59961 19.5122 3.59961 21.3903 4.11358ZM15.8549 12.0016L9.60788 15.5996V8.40355L15.8549 12.0016Z",fill:n})})})}},5529:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var s=n(2791),o=n(7689),i=n(9439),r=n(184),l=function(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.5387 17.6113C36.3013 19.2559 35.7387 20.8189 34.905 22.2563C34.9675 22.6121 34.9996 22.9719 34.9996 23.3331C34.9996 24.5878 34.636 25.7886 33.9626 26.8796C33.6264 27.4242 33.5399 28.0623 33.5067 28.4839C33.4685 28.9671 33.4814 29.4958 33.5159 30.0037C33.5546 30.5735 33.6246 31.1717 33.7048 31.736C33.0543 31.5463 32.3492 31.3558 31.6763 31.204C31.1166 31.0777 30.5439 30.9701 30.0252 30.9165C29.5727 30.8698 28.9188 30.8336 28.3341 31.0226C27.0556 31.4359 25.6488 31.6665 24.1662 31.6665C22.403 31.6665 20.7837 31.3535 19.3643 30.8098C19.0229 30.8253 18.679 30.8331 18.3328 30.8331C16.3252 30.8331 14.3929 30.5691 12.585 30.0811C15.2132 33.1209 19.546 34.9998 24.1662 34.9998C25.9711 34.9998 27.7034 34.7227 29.2999 34.2135C29.3027 34.2136 29.3078 34.2135 29.3153 34.2133C29.3563 34.2125 29.4701 34.2103 29.6827 34.2322C30.017 34.2667 30.4469 34.3438 30.9428 34.4556C31.9301 34.6783 33.0395 35.007 33.9041 35.2814C35.7377 35.8635 37.5143 34.2634 37.1866 32.4027C37.0456 31.6019 36.899 30.6245 36.8415 29.7778C36.8126 29.3521 36.8094 29.0026 36.8297 28.7462C36.8381 28.6399 36.8488 28.5733 36.8556 28.5379C37.7933 26.9846 38.3329 25.216 38.3329 23.3331C38.3329 21.2105 37.6736 19.2723 36.5387 17.6113Z",fill:"#FF5A30"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.32773 9.49661C7.08113 11.2146 5.83266 13.4698 5.83266 15.833C5.83266 17.0114 6.13943 18.1463 6.71496 19.2017C6.93417 19.6037 6.99636 20.0183 7.0186 20.299C7.04285 20.6051 7.03076 20.9197 7.00414 21.2139C6.95085 21.8028 6.82372 22.4701 6.67124 23.1274C6.49287 23.8962 6.26431 24.7162 6.03239 25.486C6.91281 25.166 7.87508 24.8381 8.78733 24.5719C9.52461 24.3568 10.2692 24.1702 10.9318 24.0654C11.5027 23.9751 12.3311 23.8864 13.0443 24.1332C14.6448 24.6869 16.4353 24.9997 18.3327 24.9997C21.9113 24.9997 25.0895 23.8886 27.3376 22.1694C29.5842 20.4514 30.8327 18.1962 30.8327 15.833C30.8327 13.4698 29.5842 11.2146 27.3376 9.49661C25.0895 7.77745 21.9113 6.66634 18.3327 6.66634C14.754 6.66634 11.5759 7.77745 9.32773 9.49661ZM7.30289 6.84875C10.1821 4.64702 14.0872 3.33301 18.3327 3.33301C22.5781 3.33301 26.4832 4.64702 29.3624 6.84875C32.2431 9.05167 34.166 12.2131 34.166 15.833C34.166 19.4529 32.2431 22.6143 29.3624 24.8173C26.4832 27.019 22.5781 28.333 18.3327 28.333C16.0942 28.333 13.9561 27.9681 12.0148 27.3041C12.0128 27.3095 11.8554 27.2941 11.4524 27.3578C10.988 27.4313 10.3952 27.5751 9.72089 27.7719C8.37845 28.1635 6.87087 28.7176 5.72255 29.1645C3.73317 29.9387 1.70658 28.0281 2.37685 25.9929C2.7321 24.9142 3.15108 23.5511 3.42414 22.3741C3.5617 21.7812 3.65096 21.2827 3.68437 20.9135C3.69596 20.7853 3.69896 20.6919 3.69829 20.6288C2.93115 19.1629 2.49932 17.5417 2.49932 15.833C2.49932 12.2131 4.42216 9.05167 7.30289 6.84875ZM3.6928 20.5379C3.69296 20.5377 3.69377 20.5422 3.69475 20.5518C3.69313 20.5429 3.69264 20.5381 3.6928 20.5379Z",fill:"#FF5A30"})]})},c=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.1663 4.86947C12.7856 4.86947 11.6663 5.98875 11.6663 7.36947V32.6299C11.6663 34.0106 12.7856 35.1299 14.1663 35.1299H25.833C27.2137 35.1299 28.333 34.0106 28.333 32.6299V7.36947C28.333 5.98875 27.2137 4.86947 25.833 4.86947H25.694L25.2881 5.84355C25.0293 6.46458 24.4225 6.86909 23.7497 6.86909H16.2497C15.5769 6.86909 14.9701 6.46458 14.7113 5.84355L14.3053 4.86947H14.1663ZM8.33301 7.36947C8.33301 4.1478 10.9447 1.53613 14.1663 1.53613H25.833C29.0547 1.53613 31.6663 4.1478 31.6663 7.36947V32.6299C31.6663 35.8515 29.0547 38.4632 25.833 38.4632H14.1663C10.9447 38.4632 8.33301 35.8515 8.33301 32.6299V7.36947Z",fill:"#FF5A30"})})},a=function(){return(0,r.jsxs)("div",{className:"contactBlock__wrapper",children:[(0,r.jsxs)("div",{className:"contactBlock__wrapper--contact",children:[(0,r.jsx)(c,{}),(0,r.jsxs)("div",{className:"contactBlock__wrapper--text",children:[(0,r.jsx)("p",{className:"contactBlock__text",children:"Call us"}),(0,r.jsx)("a",{className:"contactBlock__link",href:"tel:+4055550128",children:"(405) 555-0128"})]})]}),(0,r.jsxs)("div",{className:"contactBlock__wrapper--contact",children:[(0,r.jsx)(l,{}),(0,r.jsxs)("div",{className:"contactBlock__wrapper--text",children:[(0,r.jsx)("p",{className:"contactBlock__text",children:"Talk to us"}),(0,r.jsx)("a",{className:"contactBlock__link contactBlock__link--email",href:"mailto:hello@createx.com",children:"hello@createx.com"})]})]})]})},d=n(1087),C=function(e){var t=e.setIsMenu,n=e.onClose,l=(0,s.useState)("home"),c=(0,i.Z)(l,2),a=c[0],C=c[1],h=(0,o.TH)().pathname.split("/");return(0,s.useEffect)((function(){if(h.length>1&&""!==h[1]){var e=h[1];C(e)}else C("home")}),[h]),(0,r.jsx)("div",{className:"nav__wrapper",children:(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"nav__list",children:[(0,r.jsx)("li",{className:"nav__item",onClick:function(){n&&t&&(setTimeout((function(){n()}),300),t(!1))},children:(0,r.jsx)(d.OL,{className:"About"===a?"nav__link--active":"nav__link--passive",to:"/About",children:"About Us"})}),(0,r.jsx)("li",{className:"nav__item",onClick:function(){n&&t&&(setTimeout((function(){n()}),300),t(!1))},children:(0,r.jsx)(d.OL,{className:"Services"===a?"nav__link--active":"nav__link--passive",to:"/Services",children:"Services"})}),(0,r.jsx)("li",{className:"nav__item",onClick:function(){n&&t&&(setTimeout((function(){n()}),300),t(!1))},children:(0,r.jsx)(d.OL,{className:"Work"===a?"nav__link--active":"nav__link--passive",to:"/Work",children:"Work"})}),(0,r.jsx)("li",{className:"nav__item",onClick:function(){n&&t&&(setTimeout((function(){n()}),300),t(!1))},children:(0,r.jsx)(d.OL,{className:"News"===a?"nav__link--active":"nav__link--passive",to:"/News",children:"News"})}),(0,r.jsx)("li",{className:"nav__item",onClick:function(){n&&t&&(setTimeout((function(){n()}),300),t(!1))},children:(0,r.jsx)(d.OL,{className:"Contacts"===a?"nav__link--active":"nav__link--passive",to:"/Contacts",children:"Contacts"})})]})})})},h=n(1128),u=(n(8458),n(4852)),f=function(e){var t=e.color;return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"130",height:"22",viewBox:"0 0 130 22",fill:"none",children:[(0,r.jsxs)("g",{clipPath:"url(#clip0_73497_2121)",children:[(0,r.jsx)("path",{d:"M0 11.0998C0 4.9998 3.3 1.2998 8.7 1.2998C12.8 1.2998 16.1 3.7998 16.7 7.4998C16.8 7.8998 16.5 8.1998 16.1 8.1998H13.5C13.2 8.1998 13 7.9998 12.9 7.6998C12.4 5.7998 10.8 4.5998 8.7 4.5998C5.8 4.5998 4 7.0998 4 11.0998C4 15.0998 5.8 17.5998 8.8 17.5998C10.9 17.5998 12.4 16.4998 13 14.6998C13.1 14.3998 13.3 14.1998 13.6 14.1998H16.2C16.6 14.1998 16.9 14.5998 16.8 14.8998C16.2 18.4998 13 20.8998 8.8 20.8998C3.3 20.8998 0 17.0998 0 11.0998Z",fill:t}),(0,r.jsx)("path",{d:"M24.2997 20.4001H21.3997C21.0997 20.4001 20.8997 20.2001 20.8997 19.9001V2.60006C20.8997 2.20006 21.2997 1.80006 21.6997 1.80006H28.6997C32.7997 1.80006 35.2997 4.10006 35.2997 7.70006C35.2997 9.80006 34.2997 11.7001 32.5997 12.7001C32.1997 12.9001 32.0997 13.4001 32.2997 13.7001L35.3997 19.6001C35.5997 19.9001 35.2997 20.3001 34.9997 20.3001H31.6997C31.4997 20.3001 31.2997 20.2001 31.1997 20.0001L28.2997 14.0001C28.1997 13.7001 27.8997 13.6001 27.5997 13.6001H25.2997C24.9997 13.6001 24.7997 13.8001 24.7997 14.1001V20.0001C24.8997 20.2001 24.5997 20.4001 24.2997 20.4001ZM24.8997 10.2001C24.8997 10.5001 25.0997 10.7001 25.3997 10.7001H28.3997C30.3997 10.7001 31.4997 9.60006 31.4997 7.80006C31.4997 6.00006 30.2997 4.90006 28.3997 4.90006H25.4997C25.1997 4.90006 24.9997 5.10006 24.9997 5.40006V10.2001H24.8997Z",fill:t}),(0,r.jsx)("path",{d:"M51.4998 20.4001H40.4998C40.0998 20.4001 39.7998 20.1001 39.7998 19.7001V2.50006C39.7998 2.10006 40.0998 1.80006 40.4998 1.80006H51.4998C51.8998 1.80006 52.1998 2.10006 52.1998 2.50006V4.40006C52.1998 4.80006 51.8998 5.10006 51.4998 5.10006H44.1998C43.8998 5.10006 43.6998 5.30006 43.6998 5.60006V9.00006C43.6998 9.30006 43.8998 9.50006 44.1998 9.50006H50.9998C51.3998 9.50006 51.6998 9.80006 51.6998 10.2001V11.9001C51.6998 12.3001 51.3998 12.6001 50.9998 12.6001H44.1998C43.8998 12.6001 43.6998 12.8001 43.6998 13.1001V16.9001C43.6998 17.2001 43.8998 17.4001 44.1998 17.4001H51.4998C51.8998 17.4001 52.1998 17.7001 52.1998 18.1001V20.0001C52.1998 20.1001 51.8998 20.4001 51.4998 20.4001Z",fill:t}),(0,r.jsx)("path",{d:"M66.9999 15.9001H61.2999C60.9999 15.9001 60.7999 16.1001 60.6999 16.3001L59.5999 20.0001C59.4999 20.3001 59.2999 20.4001 58.9999 20.4001H56.3999C55.9999 20.4001 55.6999 20.0001 55.7999 19.6001L61.7999 2.20006C61.8999 2.00006 62.0999 1.80006 62.3999 1.80006H66.0999C66.3999 1.80006 66.5999 2.00006 66.6999 2.20006L72.6999 19.6001C72.7999 20.0001 72.4999 20.4001 72.0999 20.4001H69.1999C68.8999 20.4001 68.6999 20.2001 68.5999 20.0001L67.4999 16.3001C67.4999 16.1001 67.1999 15.9001 66.9999 15.9001ZM62.0999 13.0001H66.1999C66.3999 13.0001 66.4999 12.8001 66.4999 12.6001L64.2999 5.60006H64.0999L61.8999 12.6001C61.7999 12.8001 61.8999 13.0001 62.0999 13.0001Z",fill:t}),(0,r.jsx)("path",{d:"M79.0001 19.7005V5.50045C79.0001 5.20045 78.8001 5.00045 78.5001 5.00045H74.1001C73.7001 5.00045 73.3001 4.70045 73.3001 4.20045V2.50045C73.3001 2.10045 73.6001 1.70045 74.1001 1.70045H87.7001C88.1001 1.70045 88.5001 2.00045 88.5001 2.50045V4.20045C88.5001 4.60045 88.2001 5.00045 87.7001 5.00045H83.3001C83.0001 5.00045 82.8001 5.20045 82.8001 5.50045V19.8004C82.8001 20.2004 82.5001 20.5005 82.1001 20.5005H79.6001C79.3001 20.4004 79.0001 20.1005 79.0001 19.7005Z",fill:t}),(0,r.jsx)("path",{d:"M103.8 20.4001H92.7999C92.3999 20.4001 92.0999 20.1001 92.0999 19.7001V2.50006C92.0999 2.10006 92.3999 1.80006 92.7999 1.80006H103.8C104.2 1.80006 104.5 2.10006 104.5 2.50006V4.40006C104.5 4.80006 104.2 5.10006 103.8 5.10006H96.4999C96.1999 5.10006 95.9999 5.30006 95.9999 5.60006V9.00006C95.9999 9.30006 96.1999 9.50006 96.4999 9.50006H103.3C103.7 9.50006 104 9.80006 104 10.2001V11.9001C104 12.3001 103.7 12.6001 103.3 12.6001H96.4999C96.1999 12.6001 95.9999 12.8001 95.9999 13.1001V16.9001C95.9999 17.2001 96.1999 17.4001 96.4999 17.4001H103.8C104.2 17.4001 104.5 17.7001 104.5 18.1001V20.0001C104.5 20.1001 104.2 20.4001 103.8 20.4001Z",fill:t}),(0,r.jsx)("path",{d:"M117.7 9.7L111.5 1.6C111.1 1.2 110.6 1 110.1 1C109.6 1 109.1 1.2 108.7 1.6C108 2.4 108 3.6 108.7 4.4L113.6 11L108.7 17.6C108 18.4 108 19.6 108.7 20.4C109.1 20.8 109.6 21 110.1 21C110.6 21 111.1 20.8 111.5 20.4L117.7 12.3C118.4 11.7 118.4 10.5 117.7 9.7Z",fill:"#FF5A30"}),(0,r.jsx)("path",{d:"M120.343 9.7L126.543 1.6C126.943 1.2 127.443 1 127.943 1C128.443 1 128.943 1.2 129.343 1.6C130.043 2.4 130.043 3.6 129.343 4.4L124.443 11L129.343 17.6C130.043 18.4 130.043 19.6 129.343 20.4C128.943 20.8 128.443 21 127.943 21C127.443 21 126.943 20.8 126.543 20.4L120.343 12.3C119.643 11.7 119.643 10.5 120.343 9.7Z",fill:"#FF5A30"})]}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_73497_2121",children:(0,r.jsx)("rect",{width:"130",height:"22",fill:"white"})})})]})},x=function(){return(0,r.jsxs)("svg",{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{width:"50",height:"50",rx:"10",fill:"white"}),(0,r.jsx)("rect",{x:"18",y:"32",width:"20",height:"3",rx:"1.5",fill:"#787A80"}),(0,r.jsx)("rect",{x:"10",y:"24",width:"20",height:"2",rx:"1",fill:"#787A80"}),(0,r.jsx)("rect",{x:"18",y:"15",width:"20",height:"3",rx:"1.5",fill:"#787A80"})]})},_=n(1475),v=function(e){var t=e.onClose,n=(0,s.useState)(!1),o=(0,i.Z)(n,2),l=o[0],c=o[1];return(0,s.useEffect)((function(){return document.body.classList.add("modal-open"),setTimeout((function(){c(!0)}),100),function(){document.body.classList.remove("modal-open"),c(!1)}}),[]),(0,r.jsx)("div",{className:"mobMenuHeader__backdrop",children:(0,r.jsxs)("div",{className:"mobMenuHeader__wrapper ".concat(l?"open":""),children:[(0,r.jsx)("button",{className:"mobMenuHeader__btn",type:"button",onClick:function(){c(!1),setTimeout((function(){t()}),300)},children:(0,r.jsx)(_.x,{})}),(0,r.jsx)(C,{onClose:t,setIsMenu:c}),(0,r.jsx)(a,{})]})})},m=function(){var e=(0,u.a)().isScreenHero,t=(0,s.useState)(!1),n=(0,i.Z)(t,2),o=n[0],l=n[1],c=function(){l(!1)};return(0,r.jsx)("header",{className:"header",children:(0,r.jsxs)("div",{className:"container header__conteiner",children:[(0,r.jsxs)("div",{className:"nav__logo--wrapper",children:[(0,r.jsx)(f,{color:"#1E212C"}),(0,r.jsx)(d.OL,{className:"nav__logo--link",to:"/"})]}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"header__wrapper--logoNavBlock",children:(0,r.jsx)(C,{})}),(0,r.jsx)(a,{})]}):(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"header__Burger--btn",onClick:function(){l(!0)},children:(0,r.jsx)(x,{})})}),o&&(0,r.jsx)(h.Z,{onClose:c,children:(0,r.jsx)(v,{onClose:c})})]})})},j=n(9003),p=n(2997),w=n(4832),g=n(9890),N=n(3766),k=function(){var e=(0,s.useState)(!1),t=(0,i.Z)(e,2),n=t[0],o=t[1],l=(0,s.useState)(!1),c=(0,i.Z)(l,2),a=c[0],d=c[1],C=(0,s.useState)(!1),h=(0,i.Z)(C,2),u=h[0],f=h[1],x=(0,s.useState)(!1),_=(0,i.Z)(x,2),v=_[0],m=_[1],k=(0,s.useState)(!1),L=(0,i.Z)(k,2),b=L[0],H=L[1];return(0,r.jsxs)("div",{className:"footer__wrapper--socialBlock",children:[(0,r.jsx)("a",{href:"https://web.whatsapp.com/",target:"_blank",rel:"noopener noreferrer",className:"social-icon",onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:(0,r.jsx)(j.C,{opacity:n?"1":"0.6"})}),(0,r.jsx)("a",{href:"https://www.messenger.com/",target:"_blank",rel:"noopener noreferrer",className:"social-icon",onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:(0,r.jsx)(p.x,{color:a?"#0084FF":"#fff",opacity:a?"1":"0.6"})}),(0,r.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",className:"social-icon",onMouseEnter:function(){f(!0)},onMouseLeave:function(){f(!1)},children:(0,r.jsx)(w.s,{opacity:u?"1":"0.6"})}),(0,r.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer",className:"social-icon",onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)},children:(0,r.jsx)(g.t,{opacity:v?"1":"0.6"})}),(0,r.jsx)("a",{href:"https://www.youTube.com/",target:"_blank",rel:"noopener noreferrer",className:"social-icon",onMouseEnter:function(){H(!0)},onMouseLeave:function(){H(!1)},children:(0,r.jsx)(N._,{color:b?"#FF0000":"#fff",opacity:b?"1":"0.6"})})]})},L=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.99925 13.2715C4.93321 11.5252 3.22318 9.78955 2.39626 8.28361C1.54992 6.74228 1.62377 5.4441 2.0934 4.52273C3.05872 2.62892 5.80378 2.02333 7.4763 4.13865L7.99921 4.80001L8.52217 4.13868C10.195 2.02327 12.9402 2.62896 13.9055 4.52273C14.3751 5.44408 14.4489 6.74226 13.6025 8.28359C12.7756 9.78954 11.0654 11.5252 7.99925 13.2715ZM7.99928 2.73726C5.64647 0.501518 2.17555 1.42555 0.905488 3.91723C0.20846 5.2847 0.198939 7.05212 1.22753 8.92536C2.247 10.782 4.2796 12.7417 7.67675 14.6194L7.99924 14.7976L8.32173 14.6194C11.719 12.7417 13.7517 10.782 14.7712 8.92537C15.7999 7.05214 15.7904 5.28472 15.0934 3.91723C13.8233 1.4255 10.3523 0.501552 7.99928 2.73726Z",fill:"#FF5A30"})})},b=function(){var e=(0,s.useState)(""),t=(0,i.Z)(e,2),n=t[0],o=t[1],l=function(){window.scrollTo(0,0)};return(0,r.jsx)("footer",{className:"footer__section",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"footer__topBlock",children:[(0,r.jsxs)("div",{className:"footer__wrapper--logoBlock ",children:[(0,r.jsxs)("div",{className:"footer__wrapper--logo",children:[(0,r.jsx)("div",{style:{cursor:"pointer"},children:(0,r.jsx)(d.OL,{to:"/",onClick:l,children:(0,r.jsx)(f,{color:"#fff"})})}),(0,r.jsx)(k,{})]}),(0,r.jsx)("p",{className:"footer__socialBlock--text",children:"Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere."})]}),(0,r.jsxs)("div",{className:"footer__input--wrapperBlock",children:[(0,r.jsx)("h2",{className:"footer__touch--title",children:"Let\u2019s stay in touch"}),(0,r.jsxs)("div",{className:"footer__input--wrapper",children:[(0,r.jsx)("input",{autoComplete:"email",id:"email",className:"footer__input",type:"email",placeholder:"Your email address",value:n,onChange:function(e){o(e.target.value)}}),(0,r.jsx)("button",{className:"footer__button",onClick:function(){console.log("Email:",n)},children:"subscribe"})]}),(0,r.jsx)("p",{className:"footer__input--text",children:"*Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau."})]})]}),(0,r.jsxs)("div",{className:"footer__bot--wrapper",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"footer__button--title",children:"HEAD OFFICE"}),(0,r.jsxs)("ul",{className:"footer__adresse--list",children:[(0,r.jsx)("li",{className:"footer__adresse--item",children:(0,r.jsxs)("a",{href:"https://www.google.com/maps/d/viewer?mid=1IiQ_TjXiV3-jt2PcUa0o9hFqZLA&hl=ru&ll=40.73853244735144%2C-73.94864082061513&z=12",target:"_blank",rel:"noopener noreferrer",className:"footer__button--text",children:["Address:",(0,r.jsx)("span",{className:"footer__button--span",children:"8502 Preston Rd. Inglewood, New York"})]})}),(0,r.jsx)("li",{className:"footer__adresse--item",children:(0,r.jsxs)("a",{href:"tel:(405) 555-0128",target:"_blank",rel:"noopener noreferrer",className:"footer__button--text",children:["Call:",(0,r.jsx)("span",{className:"footer__button--span",children:"(405) 555-0128"})]})}),(0,r.jsx)("li",{className:"footer__adresse--item",children:(0,r.jsxs)("a",{href:"mailto:hello@createx.com",target:"_blank",rel:"noopener noreferrer",className:"footer__button--text",children:["Email:",(0,r.jsx)("span",{className:"footer__button--span",children:"hello@createx.com"})]})})]})]}),(0,r.jsxs)("div",{className:"footer__wrapper--infoBLock",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"footer__button--title",children:"WHO WE ARE"}),(0,r.jsxs)("ul",{className:"footer__adresse--list",children:[(0,r.jsx)("li",{className:"footer__adresse--item",children:(0,r.jsx)(d.OL,{to:"/About",onClick:l,children:(0,r.jsx)("span",{className:"footer__button--text footer__button--span",children:"About Us"})})}),(0,r.jsx)("li",{className:"footer__adresse--item",children:(0,r.jsx)(d.OL,{to:"/About/Positions",onClick:l,children:(0,r.jsx)("span",{className:"footer__button--text footer__button--span",children:"Available Positions"})})}),(0,r.jsx)("li",{className:"footer__adresse--item",children:(0,r.jsx)(d.OL,{to:"/Contacts",onClick:l,children:(0,r.jsx)("span",{className:"footer__button--text footer__button--span",children:"Contacts"})})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"footer__button--title",children:"OUR EXPERIENCE"}),(0,r.jsxs)("ul",{className:"footer__adresse--list",children:[(0,r.jsx)("li",{className:"footer__adresse--item",children:(0,r.jsx)(d.OL,{to:"/Services",onClick:l,children:(0,r.jsx)("span",{className:"footer__button--text footer__button--span",children:"Services"})})}),(0,r.jsx)("li",{className:"footer__adresse--item",children:(0,r.jsx)(d.OL,{to:"/Work",onClick:l,children:(0,r.jsx)("span",{className:"footer__button--text footer__button--span",children:"Work"})})}),(0,r.jsx)("li",{className:"footer__adresse--item",children:(0,r.jsx)(d.OL,{to:"/News",onClick:l,children:(0,r.jsx)("span",{className:"footer__button--text footer__button--span",children:"News"})})})]})]})]})]}),(0,r.jsxs)("p",{className:"footer__reserved ",children:["\xa9 All rights reserved. Made with",(0,r.jsx)("span",{className:"footer__reserved--span",children:(0,r.jsx)(L,{})}),"by Createx Studio"]})]})})},H=function(){return(0,r.jsxs)(s.Suspense,{fallback:null,children:[(0,r.jsx)(m,{}),(0,r.jsx)(o.j3,{}),(0,r.jsx)(b,{})]})}},8458:function(){}}]);
//# sourceMappingURL=529.ae459381.chunk.js.map