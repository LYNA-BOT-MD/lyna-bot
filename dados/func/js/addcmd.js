const _0x2636d8=_0x67fd;function _0x67fd(_0x280072,_0x378efb){const _0x107c6a=_0x107c();return _0x67fd=function(_0x67fdc7,_0x4714f6){_0x67fdc7=_0x67fdc7-0x7a;let _0x33edad=_0x107c6a[_0x67fdc7];return _0x33edad;},_0x67fd(_0x280072,_0x378efb);}function _0x107c(){const _0x306db6=['parse','674523ivPBCP','writeFileSync','5006264fZhGPT','./dados/registros/preci/comandos.json','2qWtVva','17188170AUERwb','comandos','forEach','4417gSxovJ','push','groupId','366obcpcU','57217caQUiN','95972vBNjtt','keys','65YGmDpz','stringify','exports','splice','5212386TtUBWZ','readFileSync'];_0x107c=function(){return _0x306db6;};return _0x107c();}(function(_0x4d8a4e,_0x7b7d34){const _0xc9730e=_0x67fd,_0x2e4a36=_0x4d8a4e();while(!![]){try{const _0x5e2851=-parseInt(_0xc9730e(0x7e))/0x1+parseInt(_0xc9730e(0x8c))/0x2*(parseInt(_0xc9730e(0x88))/0x3)+-parseInt(_0xc9730e(0x7f))/0x4*(parseInt(_0xc9730e(0x81))/0x5)+-parseInt(_0xc9730e(0x7d))/0x6*(parseInt(_0xc9730e(0x7a))/0x7)+-parseInt(_0xc9730e(0x8a))/0x8+-parseInt(_0xc9730e(0x85))/0x9+parseInt(_0xc9730e(0x8d))/0xa;if(_0x5e2851===_0x7b7d34)break;else _0x2e4a36['push'](_0x2e4a36['shift']());}catch(_0x60cf94){_0x2e4a36['push'](_0x2e4a36['shift']());}}}(_0x107c,0x50d60));const fs=require('fs'),comandos=JSON[_0x2636d8(0x87)](fs[_0x2636d8(0x86)](_0x2636d8(0x8b))),addComandosId=_0x52dc3c=>{const _0x375dde=_0x2636d8,_0xb62c5c={'groupId':_0x52dc3c,'comandos':[]};comandos[_0x375dde(0x7b)](_0xb62c5c),fs['writeFileSync'](_0x375dde(0x8b),JSON[_0x375dde(0x82)](comandos));},getComandos=_0x2987e5=>{const _0xc2a064=_0x2636d8;let _0x3ad4c2=![];Object[_0xc2a064(0x80)](comandos)[_0xc2a064(0x8f)](_0x5800f7=>{const _0x3833f7=_0xc2a064;comandos[_0x5800f7][_0x3833f7(0x7c)]===_0x2987e5&&(_0x3ad4c2=_0x5800f7);});if(_0x3ad4c2!==![])return comandos[_0x3ad4c2][_0xc2a064(0x7c)];},addComandos=(_0xe6e6a5,_0x3861d7)=>{const _0x35e75e=_0x2636d8;let _0x250f5=![];Object[_0x35e75e(0x80)](comandos)[_0x35e75e(0x8f)](_0x719247=>{const _0x40a2ef=_0x35e75e;comandos[_0x719247][_0x40a2ef(0x7c)]===_0xe6e6a5&&(_0x250f5=_0x719247);}),_0x250f5!==![]&&(comandos[_0x250f5][_0x35e75e(0x8e)][_0x35e75e(0x7b)](_0x3861d7),fs['writeFileSync']('./dados/registros/preci/comandos.json',JSON[_0x35e75e(0x82)](comandos)));},deleteComandos=(_0x70b936,_0x27ef0b)=>{const _0x5d8026=_0x2636d8;let _0x15bb00=![];Object[_0x5d8026(0x80)](comandos)[_0x5d8026(0x8f)](_0x23915f=>{const _0x26f793=_0x5d8026;comandos[_0x23915f][_0x26f793(0x7c)]===_0x70b936&&(_0x15bb00=_0x23915f);}),_0x15bb00!==![]&&(comandos[_0x15bb00]['comandos'][_0x5d8026(0x84)](_0x27ef0b,0x1),fs[_0x5d8026(0x89)](_0x5d8026(0x8b),JSON[_0x5d8026(0x82)](comandos)));},getComandoBlock=_0x535909=>{const _0x4be801=_0x2636d8;let _0x6b60e4=![];Object['keys'](comandos)[_0x4be801(0x8f)](_0x316797=>{const _0x4e8fa3=_0x4be801;comandos[_0x316797][_0x4e8fa3(0x7c)]===_0x535909&&(_0x6b60e4=_0x316797);});if(_0x6b60e4!==![])return comandos[_0x6b60e4][_0x4be801(0x8e)];};module[_0x2636d8(0x83)]={'addComandosId':addComandosId,'deleteComandos':deleteComandos,'getComandoBlock':getComandoBlock,'getComandos':getComandos,'addComandos':addComandos};