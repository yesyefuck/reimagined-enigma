const _0x20b761 = _0x4660;
(function (_0x5b0fc5, _0x48f441) {
    const _0xf77cf = _0x4660;
    const _0x3b7b25 = _0x5b0fc5();
    while (!![]) {
        try {
            const _0x533fb5 = -parseInt(_0xf77cf(0x2b1)) / 0x1 + parseInt(_0xf77cf(0x23d)) / 0x2 + -parseInt(_0xf77cf(0x1f0)) / 0x3 * (-parseInt(_0xf77cf(0x287)) / 0x4) + parseInt(_0xf77cf(0x29c)) / 0x5 * (-parseInt(_0xf77cf(0x3be)) / 0x6) + -parseInt(_0xf77cf(0x2b3)) / 0x7 * (parseInt(_0xf77cf(0x1b0)) / 0x8) + parseInt(_0xf77cf(0x1f1)) / 0x9 * (-parseInt(_0xf77cf(0x37e)) / 0xa) + parseInt(_0xf77cf(0x2e0)) / 0xb;
            if (_0x533fb5 === _0x48f441) {
                break;
            } else {
                _0x3b7b25['push'](_0x3b7b25['shift']());
            }
        } catch (_0x4e42bb) {
            _0x3b7b25['push'](_0x3b7b25['shift']());
        }
    }
}(_0x4be8, 0x9613c));
import { connect } from '\x63\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x3a\x73\x6f\x63\x6b\x65\x74\x73';
let userID = _0x20b761(0x384) + _0x20b761(0x2ea) + _0x20b761(0x372) + '\x66\x65\x39\x63\x31\x30';
let proxyIP = '';
let sub = '';
let subconverter = '\x53\x55\x42\x41\x50\x49\x2e\x66\x78\x78' + _0x20b761(0x387);
let subconfig = _0x20b761(0x3d8) + '\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73' + '\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e' + _0x20b761(0x3c4) + _0x20b761(0x36b) + _0x20b761(0x211) + _0x20b761(0x32a) + '\x41\x43\x4c\x34\x53\x53\x52\x5f\x4f\x6e' + '\x6c\x69\x6e\x65\x5f\x4d\x69\x6e\x69\x5f' + _0x20b761(0x3a2) + _0x20b761(0x2fe);
let subProtocol = _0x20b761(0x304);
let socks5Address = '';
if (!isValidUUID(userID)) {
    throw new Error(_0x20b761(0x2fb) + _0x20b761(0x34a));
}
let parsedSocks5Address = {};
let enableSocks = ![];
let fakeUserID;
let fakeHostName;
function _0x4be8() {
    const _0x1a819b = [
        '\x0a\x20\x20\x74\x6c\x73\x3a\x20',
        '\x73\x65\x61\x72\x63\x68',
        '\x70\x61\x67\x65\x73\x2e\x64\x65\x76',
        '\x65\x6c\x2f\x63\x6d\x6c\x69\x75',
        '\x26\x74\x79\x70\x65\x3d\x77\x73\x26\x68',
        '\x70\x70\x6f\x72\x74\x2c\x20\x63\x6f\x6d',
        '\x09\x72\x65\x71\x75\x65\x73\x74\x73\x0a',
        '\x74\x3d\x63\x6c\x61\x73\x68\x26\x75\x72',
        '\uff09\x3a\x20\u65e0\u6cd5\u8bbf\u95ee\x2c\x20\u9700',
        '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e',
        '\x32\x30\x35\x33',
        '\x35\x30\x63\x44\x45\x75\x59\x32\x31\x73',
        '\x26\x65\x64\x67\x65\x74\x75\x6e\x6e\x65',
        '\x6e\x74\x54\x61\x67\x3a\x20\x24\x61\x63',
        '\x76\x69\x73\x61\x2e\x63\x6e\x3a\x34\x34',
        '\x73\x65\x74',
        '\u7b26\u5408\u89c4\u8303\x20',
        '\x69\x2e\x63\x6c\x6f\x75\x64\x66\x6c\x61',
        '\x65\x72\x72\x6f\x72',
        '\x6e\x73\x49\x6e\x76\x6f\x63\x61\x74\x69',
        '\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74',
        '\u6210\u5668\uff09\x3a\x20',
        '\x43\x46\x49\x44',
        '\x69\x6e\x76\x69\x6c\x64\x20\x61\x64\x64',
        '\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75',
        '\x61\x64\x64\x72\x65\x73\x73\x54\x79\x70',
        '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79',
        '\x6d\x61\x73\x74\x65\x72\x2f\x43\x6c\x61',
        '\u65e0\u6548\u7684\x20\x53\x4f\x43\x4b\x53\x20',
        '\x6c\x73\x65\x26\x63\x6f\x6e\x66\x69\x67',
        '\x63\x6f\x6e\x64\x73',
        '\x3f\x73\x75\x62\x0a\x0a\x42\x61\x73\x65',
        '\x26\x70\x61\x74\x68\x3d',
        '\x72\x61\x6e\x64\x6f\x6d',
        '\x6e\x6f\x74\x6c\x73',
        '\x73\x2d\x65\x64\x67\x65\x74\x75\x6e\x6e',
        '\x69\x6c\x6c\x69\x6e\x67\x4d\x65\x74\x72',
        '\x26\x69\x6e\x73\x65\x72\x74\x3d\x66\x61',
        '\x6e\x67\x62\x6f\x78\u8ba2\u9605\u5730\u5740\x3a',
        '\u83b7\u53d6\u5730\u5740\u65f6\u51fa\u9519\x3a',
        '\x26\x74\x79\x70\x65\x3d',
        '\x30\x2e\x30\x2e\x34\x34\x33\x30\x2e\x37',
        '\x6a\x73\x6f\x6e',
        '\x73\x65\x26\x74\x66\x6f\x3d\x66\x61\x6c',
        '\u865a\u5047\u8ba2\u9605\x3a\x20',
        '\x49\uff08\x6e\x6f\x54\x4c\x53\u4f18\u9009\u57df',
        '\x0a\x20\x20',
        '\x54\x79\x70\x65\x20\x69\x73\x20',
        '\x26\x75\x75\x69\x64\x3d',
        '\x73\x65\x26\x73\x63\x76\x3d\x74\x72\x75',
        '\x0a\x55\x55\x49\x44\x4e\x6f\x77\x3a\x20',
        '\x0a\x46\x4b\x49\x44\x3a\x20',
        '\x2e\x6f\x72\x67\x2f\x62\x6f\x74',
        '\x69\x6e\x63\x6c\x75\x64\x65\x73',
        '\x0a\x55\x55\x49\x44\x4c\x6f\x77\x3a\x20',
        '\x6e\x67\x44\x61\x74\x61\x20\x69\x73\x20',
        '\x70\x6f\x72\x74\x52\x65\x6d\x6f\x74\x65',
        '\x3c\x2f\x74\x67\x2d\x73\x70\x6f\x69\x6c',
        '\u540d\x26\x49\x50\uff09\x3a\x20\x0a\x20\x20',
        '\x69\x2e\x74\x65\x6c\x65\x67\x72\x61\x6d',
        '\x32\x30\x38\x36',
        '\x61\x64\x64\x72\x65\x73\x73\x56\x61\x6c',
        '\x73\x73\x73\x73\x2e\x74\x6f\x2e\x75\x6e',
        '\x65\x6e\x63\x6f\x64\x65',
        '\x43\x46\x4b\x45\x59',
        '\x3f\x73\x62\x0a\x68\x74\x74\x70\x73\x3a',
        '\x63\x6c\x6f\x73\x65',
        '\x2a\x63\x6c\x6f\x75\x64\x61\x74\x61\x63',
        '\x77\x77\x77\x2e\x67\x6f\x76\x2e\x73\x65',
        '\x73\x65\x74\x48\x6f\x75\x72\x73',
        '\x72\x65\x6d\x6f\x74\x65\x53\x6f\x63\x6b',
        '\x34\x35\x32\x38\x36\x42\x72\x78\x42\x6b\x52',
        '\x6e\x6f\x6e\x65',
        '\x6f\x64\x69\x6e\x67',
        '\x20\x43\x46\x2d\x57\x6f\x72\x6b\x65\x72',
        '\x66\x75\x6e\x63\x74\x69\x6f\x6e',
        '\x65\x74\x54\x6f\x57\x53\x20\x68\x61\x73',
        '\x61\x62\x6f\x72\x74',
        '\x6f\x73\x74\x3d',
        '\x61\x72\x72\x61\x79\x42\x75\x66\x66\x65',
        '\x75\x72\x6c',
        '\x65\x61\x6d\x20\u5df2\u4e2d\u6b62',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x63\x72\x69\x62\x65\x20\x2f\x20\x73\x75',
        '\x38\x38\x38\x30',
        '\x2a\x74\x61\x70\x65\x63\x6f\x6e\x74\x65',
        '\x73\x65\x74\x55\x54\x43\x48\x6f\x75\x72',
        '\x70\x72\x6f\x78\x79\x69\x70',
        '\x72\x65\x71\x75\x65\x73\x74\x73',
        '\x73\x74\x65\x6e\x65\x72',
        '\x72\x65\x76\x65\x72\x73\x65',
        '\x71\x75\x65\x72\x79\x20\x67\x65\x74\x42',
        '\x61\x70\x74\x69\x76\x65',
        '\x74\x6f\x49\x53\x4f\x53\x74\x72\x69\x6e',
        '\x63\x6f\x6d\x3a\x38\x34\x34\x33',
        '\x77\x72\x69\x74\x65',
        '\x2a\x3d\x75\x74\x66\x2d\x38\x27\x27',
        '\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74\x2e',
        '\u987b\u662f\x20\x22\x75\x73\x65\x72\x6e\x61',
        '\x0a\u7ec4\u7ec7\x3a\x20',
        '\x73\x74\x61\x63\x6b',
        '\x09\x09\x09\x77\x6f\x72\x6b\x65\x72\x73',
        '\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63',
        '\x0a\u56fd\u5bb6\x3a\x20',
        '\x65\x64\x67\x65\x74\x75\x6e\x6e\x65\x6c',
        '\x74\x65\x73\x74',
        '\x6d\x3a\x38\x38\x38\x30',
        '\x62\x6f\x64\x79',
        '\x6c\x3d\x63\x6d\x6c\x69\x75\x26\x70\x72',
        '\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65',
        '\x20\u9650\u901f\x20',
        '\x53\x4f\x43\x4b\x53\x35\x20\u8fde\u63a5\u5df2',
        '\u8981\u60a8\u8bbe\u7f6e\x20\x70\x72\x6f\x78\x79',
        '\u91cf\u63d0\u4f9b\x0a',
        '\x75\x72\x69\x74\x79\x3d\x26\x74\x79\x70',
        '\x4b\x45\x59',
        '\x54\x49\x4d\x45\uff08\u52a8\u6001\x55\x55\x49',
        '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f',
        '\x3f\x6e\x6f\x74\x6c\x73',
        '\x41\x63\x63\x65\x70\x74',
        '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x0a',
        '\x3a\x32\x30\x38\x37',
        '\x44\u6709\u6548\u65f6\u95f4\uff09\x3a\x20',
        '\x55\x50\x54\x49\x4d\x45',
        '\x09\x09\x09\x76\x69\x65\x77\x65\x72\x20',
        '\x2a\x2e\x6c\x6f\x61\x64\x73\x68\x61\x72',
        '\x0a\x41\x53\x4e\x3a\x20',
        '\x23\x23\x23\x23\x23\x0a\x53\x75\x62\x73',
        '\x61\x64\x61\x62\x6c\x65\x20\x61\x62\x6f',
        '\x63\x6c\x6f\x73\x65\x20\x77\x69\x74\x68',
        '\x4e\x53\uff08\x35\x33\x20\u7aef\u53e3\uff09\u542f',
        '\u4e49\u57df\uff01',
        '\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73',
        '\x6a\x6f\x69\x6e',
        '\x76\x69\x73\x61\x2e\x63\x6e',
        '\x26\x66\x70\x3d\x72\x61\x6e\x64\x6f\x6d',
        '\x6d\x65\x73\x73\x61\x67\x65',
        '\x6e\x74\x49\x64\x3a\x20\x53\x74\x72\x69',
        '\u53d1\u724c\x21\x0a\x68\x74\x74\x70\x73\x3a',
        '\x0a\x20\x20\x77\x73\x2d\x6f\x70\x74\x73',
        '\u6211\u7684\u9891\u9053\x74\x2e\x6d\x65\x2f\x43',
        '\x77\x6f\x72\x6b\x65\x72\x73\x2e\x64\x65',
        '\x32\x30\x38\x32',
        '\x41\x44\x44\x43\x53\x56\uff08\x49\x50\x54',
        '\x70\x61\x67\x65\x73\x46\x75\x6e\x63\x74',
        '\x38\x72\x6b\x58\x41\x6a\x6d',
        '\x44\x4c\x53',
        '\x68\x74\x74\x70\x3a\x2f\x2f',
        '\x73\x65\x63\x2d\x77\x65\x62\x73\x6f\x63',
        '\x72\x65\x61\x64\x61\x62\x6c\x65\x57\x65',
        '\x20\u95ee\u5019\u6d88\u606f',
        '\x2d\x2d\x0a\x23\x23\x23\x23\x23\x23\x23',
        '\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61',
        '\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x39',
        '\x0a\x20\x20\x63\x6c\x69\x65\x6e\x74\x2d',
        '\x65\x72\x73\x3a\x0a\x20\x20\x20\x20\x20',
        '\x6e\x2f\x6a\x73\x6f\x6e',
        '\x74\x66\x2d\x38',
        '\x53\x4f\x43\x4b\x53\x35',
        '\x53\x4f\x43\x4b\x53\x35\x25\x45\x46\x25',
        '\x0a\x23\x23\x23\x23\x23\x23\x23\x23\x23',
        '\x55\x70\x67\x72\x61\x64\x65',
        '\x74\x72\x69\x6d',
        '\x64\x6d\x78\x6c\x63\x33\x4d\x3d',
        '\x72\x65\x61\x64\x61\x62\x6c\x65',
        '\x73\x70\x6c\x69\x74',
        '\x32\x31\x39\x35\x5a\x79\x75\x58\x44\x41',
        '\u4e0d\u7528\u6000\u7591\uff01\u4f60\x55\x55\x49\x44',
        '\x74\x68\x65\x6e',
        '\x31\x32\x33\x34\x23\x43\x46\x6e\x61\x74',
        '\x74\x69\x6d\x65\x2e\x69\x73',
        '\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73',
        '\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f',
        '\x2f\x70\x72\x6f\x78\x79\x69\x70\x3d',
        '\x72\x65\x74\x72\x79',
        '\x74\x6f\x53\x74\x72\x69\x6e\x67',
        '\x65\x6e\x74\x2f\x76\x34\x2f\x67\x72\x61',
        '\x41\x44\x44',
        '\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20',
        '\x2d\x2d\x2d\x2d\x0a\x23\x23\x23\x23\x23',
        '\x62\x61\x73\x65\x36\x34',
        '\x65\x72\x3a\x20\x7b\x61\x63\x63\x6f\x75',
        '\x26\x66\x70\x3d',
        '\x73\x75\x6d\x20\x7b\x0a\x09\x09\x09\x09',
        '\x72\x65\x6c\x65\x61\x73\x65\x4c\x6f\x63',
        '\x61\x64\x64\x72\x65\x73\x73\x52\x65\x6d',
        '\x50\x52\x4f\x58\x59\x49\x50',
        '\x32\x39\x34\x34\x31\x45\x67\x59\x77\x76\x73',
        '\x65\x6e\x71\x75\x65\x75\x65',
        '\x37\x4c\x67\x43\x54\x54\x50',
        '\x69\x6e\x20\x74\x68\x69\x73\x20\x65\x6e',
        '\x65\x26\x73\x6f\x72\x74\x3d\x66\x61\x6c',
        '\x0a\x53\x55\x42\x41\x50\x49\uff08\u8ba2\u9605',
        '\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c\x2c',
        '\x62\x79\x74\x65\x4c\x65\x6e\x67\x74\x68',
        '\x26\x73\x6e\x69\x3d',
        '\x70\x61\x74\x68\x6e\x61\x6d\x65',
        '\x73\x65\x26\x6e\x65\x77\x5f\x6e\x61\x6d',
        '\x74\x65\x78\x74',
        '\x7b\x0a\x09\x09\x09\x09\x09\x09\x70\x61',
        '\x66\x69\x6e\x67\x65\x72\x70\x72\x69\x6e',
        '\x66\x72\x6f\x6d',
        '\u8ba4\u8bc1\u5931\u8d25',
        '\x63\x68\x61\x72\x41\x74',
        '\x73\x75\x62\x73\x74\x72',
        '\x41\x44\x44\x41\x50\x49\uff08\x54\x4c\x53',
        '\x76\x6c\x65\x73\x73\x56\x65\x72\x73\x69',
        '\x65\x62\x53\x6f\x63\x6b\x65\x74\x20\x65',
        '\x09\x09\x09\x09\x09\x7d\x0a\x09\x09\x09',
        '\x0a\x3c\x74\x67\x2d\x73\x70\x6f\x69\x6c',
        '\x73\x69\x6e\x67\x2d\x62\x6f\x78',
        '\x52\x50\x52\x4f\x58\x59\x49\x50',
        '\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09',
        '\x64\x6e\x2e\x63\x6f\x6d',
        '\x3f\x65\x6e\x63\x72\x79\x70\x74\x69\x6f',
        '\x61\x6c\x6c',
        '\x6f\x74\x65',
        '\x74\x72\x75\x65',
        '\x2e\x6e\x65\x74',
        '\x65\x26\x6c\x69\x73\x74\x3d\x66\x61\x6c',
        '\u5730\u5740\u683c\u5f0f\uff1a\u7aef\u53e3\u53f7\u5fc5\u987b',
        '\x76\x2e\x71\x61\x3a\x38\x34\x34\x33',
        '\x67\x65\x74',
        '\x72\x75\x73\x73\x69\x61\x2e\x63\x6f\x6d',
        '\x69\x63\x73\x28\x24\x61\x63\x63\x6f\x75',
        '\x65\x3d\x77\x73\x26\x68\x6f\x73\x74\x3d',
        '\x67\x65\x74\x52\x65\x61\x64\x65\x72',
        '\x6c\x6f\x63\x6b\x2e\x6d\x6f\x72\x65\x2e',
        '\x38\x2e\x38\x2e\x34\x2e\x34',
        '\x50\uff09\x3a\x20\x0a\x20\x20',
        '\x41\x44\x44\x43\x53\x56',
        '\x54\x4c\x53',
        '\uff0c\u671f\u671b\u662f\x20\x35',
        '\x64\x61\x74\x65\x74\x69\x6d\x65\x5f\x6c',
        '\x31\x33\x34\x39\x39\x35\x33\x30\x5a\x52\x54\x65\x66\x77',
        '\x73\x69\x6e\x67\x62\x6f\x78',
        '\x77\x77\x77\x2e\x76\x69\x73\x61\x65\x75',
        '\x65\x61\x6d\x20\u5df2\u5173\u95ed',
        '\x66\x69\x6e\x61\x6c\x6c\x79',
        '\x55\x52\x4c',
        '\x26\x70\x61\x72\x73\x65\x5f\x6d\x6f\x64',
        '\x70\x72\x6f\x78\x79\x69\x70\x3d\x74\x72',
        '\x63\x6c\x61\x73\x68\x2d\x6d\x65\x74\x61',
        '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d',
        '\x34\x31\x61\x2d\x34\x33\x63\x39\x2d\x39',
        '\u5730\u5740\u683c\u5f0f\uff1a\x49\x50\x76\x36\x20',
        '\x2f\x3f\x65\x64\x3d\x32\x35\x36\x30',
        '\x63\x6f\x6e\x63\x61\x74',
        '\x72\x65\x64\x69\x72\x65\x63\x74',
        '\x63\x6f\x6d\x6d\x61\x6e\x64\x20',
        '\x77\x72\x69\x74\x61\x62\x6c\x65',
        '\x2d\x20\x74\x79\x70\x65\x3a\x20',
        '\x6e\x2f\x78\x68\x74\x6d\x6c\x2b\x78\x6d',
        '\x2a\x74\x74\x76\x6e\x77\x2e\x6e\x65\x74',
        '\x23\x23\x23\x23\x23\x23\x23\x0a',
        '\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef',
        '\u4f18\u9009\u57df\u540d\x26\x49\x50\x20\u7684\x20',
        '\x3f\x62\x36\x34\x0a\x68\x74\x74\x70\x73',
        '\x76\x61\x6c',
        '\u66f4\u591a\u4f18\u9009\u8282\u70b9',
        '\x0a\x53\x55\x42\uff08\u4f18\u9009\u8ba2\u9605\u751f',
        '\x75\x75\x69\x64\x20\x69\x73\x20\x6e\x6f',
        '\x73\x6f\x6d\x65',
        '\x43\x46\x50\x4f\x52\x54\x53',
        '\x69\x6e\x69',
        '\x32\x30\x38\x33',
        '\x66\x69\x6e\x64',
        '\x74\x70\x73\x3a\x2f\x2f',
        '\x61\x58\x56\x7a\x63\x33\x4e\x7a\x4c\x6d',
        '\x68\x61\x73\x45\x72\x72\x6f\x72',
        '\x68\x74\x74\x70\x73',
        '\x26\x65\x6d\x6f\x6a\x69\x3d\x74\x72\x75',
        '\x77\x6f\x72\x6b\x65\x72',
        '\x09\x09\x09\x09\x09\x09\x09\x73\x75\x6d',
        '\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x20',
        '\x62\x36\x34',
        '\x48\x4f\x53\x54\x3a\x20',
        '\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74',
        '\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x75',
        '\u9002\u5e94\u8ba2\u9605\u5730\u5740\x3a\x0a\x68\x74',
        '\x41\x44\x44\x4e\x4f\x54\x4c\x53\uff08\x6e',
        '\x73\x75\x62\x74\x6c\x65',
        '\x76\x69\x65\x77\x65\x72',
        '\x65\x72\x3e\x0a\u57df\u540d\x3a\x20',
        '\x66\x69\x6c\x74\x65\x72',
        '\x6d\x61\x70',
        '\x65\x47\x72\x6f\x75\x70\x73\x28\x6c\x69',
        '\x26\x70\x72\x6f\x78\x79\x69\x70\x3d',
        '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23',
        '\x73\x61\x66\x65\x43\x6c\x6f\x73\x65\x57',
        '\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f',
        '\x20\x28\x55\x54\x43\x2b\x38\x29\x3a\x20',
        '\u7248\u672c\u9519\u8bef\x3a\x20\u6536\u5230\x20',
        '\x76\x6f\x63\x61\x74\x69\x6f\x6e\x73\x41',
        '\x73\x74\x72\x69\x6e\x67\x69\x66\x79',
        '\x6e\x6f\x77',
        '\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74',
        '\x3a\x2f\x2f',
        '\x70\x72\x6f\x78\x79\x68\x6f\x73\x74\x73',
        '\u683c\u5f0f\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d',
        '\x45\x72\x72\x6f\x72\x20\x66\x65\x74\x63',
        '\x63\x6c\x6f\x73\x65\x64',
        '\x63\x48\x4a\x76\x65\x48\x6c\x70\x63\x43',
        '\x69\x6e\x64\x65\x78\x4f\x66',
        '\x73\x74\x61\x74\x75\x73',
        '\x25\x38\x44\x25\x45\x35\x25\x38\x44\x25',
        '\x6f\x6e\x2f',
        '\u7acb\u5931\u8d25',
        '\x73\x68\x2f\x63\x6f\x6e\x66\x69\x67\x2f',
        '\x43\x53\x56\u6587\u4ef6\u7f3a\u5c11\u5fc5\u9700\u7684',
        '\x23\u83b7\u53d6\u8ba2\u9605\x20',
        '\x70\x72\x6f\x78\x79\x69\x70\x2e',
        '\x64\x22\x20\u7684\u5f62\u5f0f',
        '\x41\x44\x44\x41\x50\x49',
        '\x77\x6f\x72\x6b\x65\x72\x73\x49\x6e\x76',
        '\x38\x34\x34\x33',
        '\x65\x61\x72\x6c\x79\x44\x61\x74\x61',
        '\x74\x3d\x73\x69\x6e\x67\x62\x6f\x78\x26',
        '\x6c\x6f\x67',
        '\u8f6c\u6362\u540e\u7aef\uff09\x3a\x20',
        '\x6e\x74\x3a\x20',
        '\x49\x50\x2f\x50\x52\x4f\x58\x59\x49\x50',
        '\x66\x6c\x6f\x6f\x72',
        '\x58\x2d\x41\x55\x54\x48\x2d\x45\x4d\x41',
        '\x55\x44\x50\x20\u4ee3\u7406\u4ec5\u5bf9\x20\x44',
        '\x22\x0a\x20\x20\x20\x20\x68\x65\x61\x64',
        '\x76\x32\x72\x61\x79\x0a\x2d\x2d\x2d\x2d',
        '\x79\x2c\x20\x61\x64\x64\x72\x65\x73\x73',
        '\x6f\x78\x79\x69\x70\x3d',
        '\x70\x61\x64\x53\x74\x61\x72\x74',
        '\x0a\x53\x55\x42\x43\x4f\x4e\x46\x49\x47',
        '\x2d\x2d\x2d\x2d\x0a',
        '\x3f\x62\x61\x73\x65\x36\x34\x0a\x0a\x63',
        '\x63\x6c\x61\x73\x68',
        '\uff09\x3a\x20\x0a\x20\x20',
        '\x6f\x75\x6e\x74\x73',
        '\x45\x72\x72\x6f\x72\x3a\x20\x66\x65\x74',
        '\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70',
        '\x41\x44\x44\x4e\x4f\x54\x4c\x53',
        '\x72\x65\x6a\x65\x63\x74',
        '\x74\x20\x76\x61\x6c\x69\x64',
        '\x43\x46\x63\x64\x6e\x56\x6d\x65\x73\x73',
        '\x73\x69\x67\x6e\x61\x6c',
        '\x2f\x73\x65\x6e\x64\x4d\x65\x73\x73\x61',
        '\x39\x35\x25\x45\x46\x25\x42\x43\x25\x38',
        '\x6c\x73\x65\x0a\x20\x20\x73\x6e\x69\x3a',
        '\x63\x65\x69\x6c',
        '\x64\x61\x74\x65\x2d\x49\x6e\x74\x65\x72',
        '\x2f\x73\x6f\x63\x6b\x73\x3a\x2f\x2f',
        '\x70\x75\x73\x68',
        '\x75\x64\x70\x20',
        '\x54\x52\x55\x45',
        '\x23\x23\x23\x23\x23\x0a',
        '\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69',
        '\x33\x2d\x6d\x75\x78',
        '\x63\x69\x74\x79',
        '\x6e\x67\x21\x2c\x20\x24\x66\x69\x6c\x74',
        '\x65\x6e\x2c\x20\x6d\x61\x79\x62\x65\x20',
        '\x75\x65\x72\x79\x20\u51fd\u6570\u53d1\u751f\u5f02',
        '\x0a\x20\x20\x70\x6f\x72\x74\x3a\x20',
        '\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74',
        '\x64\x61\x74\x61',
        '\x65\x2e\x6f\x72\x67',
        '\x20\x65\x78\x63\x65\x70\x74\x69\x6f\x6e',
        '\x72\x65\x64\x75\x63\x65',
        '\x73\x68\x6f\x70\x69\x66\x79\x2e\x63\x6f',
        '\x36\x25\x42\x35\x25\x38\x31\x25\x45\x39',
        '\x42\x43\x25\x38\x38\x25\x45\x37\x25\x39',
        '\x73\x75\x62',
        '\x64\x65\x63\x6f\x64\x65',
        '\x20\x68\x6f\x73\x74\x3a\x20',
        '\x73\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65',
        '\x43\x46\x2d\x43\x6f\x6e\x6e\x65\x63\x74',
        '\x52\x2f\x41\x43\x4c\x34\x53\x53\x52\x2f',
        '\u627e\u4e0d\u5230\u6570\u636e',
        '\x74\x69\x6f\x6e\x73\x41\x64\x61\x70\x74',
        '\x6f\x6e\x2d\x55\x73\x65\x72\x69\x6e\x66',
        '\x6c\x61\x73\x68\u8ba2\u9605\u5730\u5740\x3a\x0a',
        '\x69\x76\x65\x47\x72\x6f\x75\x70\x73',
        '\uff09\x3a\x20\x50\x72\x6f\x78\x79\x49\x50',
        '\x39\x31\x62\x2d\x30\x38\x32\x36\x33\x63',
        '\x72\x65\x74\x72\x79\x20\x74\x63\x70\x53',
        '\u6d41\u7fa4\x20\u6280\u672f\u5927\u4f6c\x7e\u5728\u7ebf',
        '\x6f\x63\x6b\x65\x74\x20\x63\x6c\x6f\x73',
        '\x32\x32\x37\x2e\x78\x79\x7a\x23\u52a0\u5165',
        '\x73\x69\x6e\x67\x61\x70\x6f\x72\x65\x2e',
        '\x74\x65\x6c\x65\x67\x72\x61\x6d\x20\u4ea4',
        '\x74\x6f\x20',
        '\x73\x6e\x69\x3d',
        '\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74',
        '\x69\x6e\x76\x61\x6c\x69\x64\x20\x64\x61',
        '\x20\x66\x69\x6c\x74\x65\x72\x3a\x20\x24',
        '\x36\x35\x31\x33\x36\x31\x30\x54\x78\x6a\x53\x73\x50',
        '\x75\x72\x6c\x3d',
        '\x20\u5df2\u542f\u7528\u4e34\u65f6\u57df\u540d\u4e2d\u8f6c',
        '\uff09\x3a\x20\x53\x6f\x63\x6b\x73\x35\x0a',
        '\x25\x45\x36\x25\x38\x39\x25\x38\x30\x25',
        '\x68\x61\x73',
        '\x39\x30\x63\x64\x34\x61\x37\x37\x2d\x31',
        '\x6d\x61\x74\x63\x68',
        '\x61\x63\x63\x65\x70\x74',
        '\x6b\x2e\x64\x65\x64\x79\x6e\x2e\x69\x6f',
        '\x6f\x54\x4c\x53\u4f18\u9009\u57df\u540d\x26\x49',
        '\x61\x64\x61\x62\x6c\x65\x20\x69\x73\x20',
        '\x73\x75\x6d',
        '\x6d\x65\x3a\x70\x61\x73\x73\x77\x6f\x72',
        '\x54\x49\x4d\x45',
        '\x74\x65\x72\x5f\x49\x6e\x70\x75\x74\x4f',
        '\x50\x4f\x53\x54',
        '\x21\x20\x73\x74\x61\x74\x75\x73\x3a\x20',
        '\x59\x57\x78\x73\x49\x47\x6c\x75',
        '\x68\x61\x6e\x64\x6c\x65\x44\x4e\x53\x51',
        '\x2f\x2f\x74\x2e\x6d\x65\x2f\x43\x4d\x4c',
        '\x63\x68\x20\x69\x73\x20\x6e\x6f\x74\x20',
        '\x6c\x69\x6d\x69\x74\x3a\x20\x31\x30\x30',
        '\x77\x65\x62\x73\x6f\x63\x6b\x65\x74',
        '\x47\x4f\x32\x53\x4f\x43\x4b\x53\x35',
        '\x3b\x20\x74\x6f\x74\x61\x6c\x3d',
        '\u540d\x26\x49\x50\x20\u7684\x20\x41\x50\x49',
        '\u670d\u52a1\u5668\u4e0d\u63a5\u53d7\u4efb\u4f55\u8ba4\u8bc1',
        '\x6f\x70\x65\x2e\x63\x6f\x6d\x3a\x32\x30',
        '\x6e\x65\x6b\x6f\x62\x6f\x78',
        '\x3a\x0a\x20\x20\x20\x20\x70\x61\x74\x68',
        '\x2e\x77\x6f\x72\x6b\x65\x72\x73\x2e\x64',
        '\x2e\x70\x61\x67\x65\x73\x2e\x64\x65\x76',
        '\x3b\x20\x66\x69\x6c\x65\x6e\x61\x6d\x65',
        '\x2d\x53\x55\x42',
        '\x09\x7d\x0a\x09\x09\x09\x7d',
        '\x4d\x75\x6c\x74\x69\x4d\x6f\x64\x65\x2e',
        '\x68\x74\x74\x70\x3a\x2f\x2f\x69\x70\x2d',
        '\x69\x6f\x6e\x2f\x78\x6d\x6c\x3b',
        '\x6e\x75\x6c\x6c',
        '\x54\x47\x49\x44',
        '\u52a8\u6001\x55\x55\x49\x44\u66f4\u65b0\u65f6\u95f4',
        '\x46\x41\x4c\x53\x45',
        '\x68\x6f\x73\x74\x6e\x61\x6d\x65',
        '\x74\x63\x70\x20',
        '\x64\x69\x67\x65\x73\x74',
        '\x66\x6c\x61\x74\x4d\x61\x70',
        '\x55\x52\x4c\x33\x30\x32',
        '\x53\x4f\x43\x4b\x53\x35\x20\u670d\u52a1\u5668',
        '\x4b\x67\x3d\x3d',
        '\x70\x2c\x30\x32\x2d\x75\x64\x70\x2c\x30',
        '\x09\x09\x09\x09\x72\x65\x71\x75\x65\x73',
        '\x66\x75\x6c\x66\x69\x6c\x6c\x65\x64',
        '\x20\uff09\x3a\x20\x0a\x20\x20',
        '\x53\x48\x41\x2d\x32\x35\x36',
        '\x38\x30\x38\x30',
        '\x63\x61\x74\x63\x68',
        '\x0a\x20\x20\x75\x64\x70\x3a\x20\x66\x61',
        '\x4e\x76\x62\x51\x3d\x3d',
        '\x73\x6c\x69\x63\x65',
        '\x70\x72\x65\x6d\x69\x75\x6d\x2e\x6e\x6f',
        '\x76\x61\x6c\x75\x65\x73',
        '\x29\x20\x54\x43\x50\x20\u8fde\u63a5\u5df2\u5173',
        '\x76\x61\x6c\x75\x65',
        '\x34\x30\x32\x30\x46\x78\x62\x66\x71\x6e',
        '\x63\x6d\x6c\x69\x75\x2f\x65\x64\x67\x65',
        '\x6c\x2f\x63\x6d\x6c\x69\x75',
        '\x65\x72\x3e',
        '\x66\x69\x6c\x74\x65\x72\x29\x20\x7b\x0a',
        '\x67\x65\x74\x57\x72\x69\x74\x65\x72',
        '\x63\x6f\x6d\x2f\x41\x43\x4c\x34\x53\x53',
        '\x6c\x65\x67\x72\x61\x6d\x2e\x63\x68\x61',
        '\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69',
        '\x58\x2d\x41\x55\x54\x48\x2d\x4b\x45\x59',
        '\x75\x74\x68\x65\x61\x73\x74\x65\x75\x72',
        '\x61\x72\x21\x53\x74\x61\x72\x21\x21\x21',
        '\x73\x65\x6e\x64',
        '\x54\x47\x54\x4f\x4b\x45\x4e',
        '\x3f\x63\x6c\x61\x73\x68\x0a\x0a\x73\x69',
        '\x65\x26\x66\x64\x6e\x3d\x66\x61\x6c\x73',
        '\x72\x65\x73\x75\x6c\x74',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70',
        '\x49\x6e\x76\x6f\x63\x61\x74\x69\x6f\x6e',
        '\x67\x3a\x38\x34\x34\x33',
        '\x41\x44\x44\uff08\x54\x4c\x53\u4f18\u9009\u57df',
        '\x6e\x74\x3a',
        '\x41\x44\x44\x4e\x4f\x54\x4c\x53\x41\x50',
        '\x36\x34\u8ba2\u9605\u5730\u5740\x3a\x0a\x68\x74',
        '\x6d\x6f\x7a\x69\x6c\x6c\x61',
        '\x32\x30\x35\x32',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61',
        '\u8fde\u63a5\u5230\x20',
        '\x6e\x3d\x6e\x6f\x6e\x65\x26\x73\x65\x63',
        '\x68\x65\x61\x64\x65\x72\x73',
        '\x6d\x65\x74\x68\x6f\x64',
        '\x2f\x70\x72\x6f\x78\x79\x69\x70\x2e',
        '\x6f\x63\x61\x74\x69\x6f\x6e\x73\x41\x64',
        '\x67\x65\x74\x54\x69\x6d\x65',
        '\x74\x75\x6e\x6e\x65\x6c\x0a\x2d\x2d\x2d',
        '\x30\x30\x2c\x20\x66\x69\x6c\x74\x65\x72',
        '\x4d\x44\x35',
        '\x2f\x73\x75\x62\x3f\x74\x61\x72\x67\x65',
        '\x53\x55\x42\x4e\x41\x4d\x45',
        '\x6d\x61\x6e\x64\x20\x30\x31\x2d\x74\x63',
        '\x0a\x67\x69\x74\x68\x75\x62\x20\u9879\u76ee',
        '\x48\x54\x54\x50\x20\x65\x72\x72\x6f\x72',
        '\x32\x30\x30\x37\x36\x35\x36\x4c\x58\x75\x73\x51\x52',
        '\x69\x63\x6f\x6f\x6b\x2e\x68\x6b',
        '\x72\x65\x73\x73\x54\x79\x70\x65\x20\x69',
        '\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e',
        '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f',
        '\x43\x46\x2d\x57\x6f\x72\x6b\x65\x72\x73',
        '\u53ef\u8bfb\u6d41\u88ab\u53d6\u6d88\uff0c\u539f\u56e0\u662f',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f',
        '\x2e\x78\x79\x7a',
        '\x2e\x74\x70',
        '\x32\x30\x39\x36',
        '\x70\x69\x70\x65\x54\x6f',
        '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x0a',
        '\x73\x75\x62\x63\x6f\x6e\x76\x65\x72\x74',
        '\x3a\x32\x30\x39\x36',
        '\x3f\x6c\x61\x6e\x67\x3d\x7a\x68\x2d\x43',
        '\u5230\u671f\u65f6\u95f4\x28\x55\x54\x43\x29\x3a',
        '\x66\x61\x6c\x73\x65',
        '\x3f\x73\x69\x6e\x67\x62\x6f\x78\x0a\x2d',
        '\u83b7\u53d6\x43\x53\x56\u5730\u5740\u65f6\u51fa\u9519',
        '\u9700\u8981\u8ba4\u8bc1',
        '\u5df2\u53d1\u9001\x20\x53\x4f\x43\x4b\x53\x35',
        '\x32\x30\x39\x35',
        '\x65\x72\x3e\u5165\u53e3\x3a\x20',
        '\x72\x65\x61\x64',
        '\x53\x4f\x43\x4b\x53\x35\x20\u8fde\u63a5\u5efa',
        '\x61\x63\x63\x6f\x75\x6e\x74\x73',
        '\x73\x41\x64\x61\x70\x74\x69\x76\x65\x28',
        '\x69\x6e\x67\x2d\x49\x50',
        '\x44\x4e\x53\x20\u670d\u52a1\u5668\x28',
        '\x70\x6f\x72\x74',
        '\u5730\u5740\u683c\u5f0f\uff1a\u8ba4\u8bc1\u90e8\u5206\u5fc5',
        '\x65\x63\x74\x69\x6f\x6e\x21\x2e\x72\x65',
        '\x72\x65\x2e\x63\x6f\x6d\x2f\x63\x6c\x69',
        '\x67\x65\x74\x55\x69\x6e\x74\x31\x36',
        '\x65\x3d\x74\x72\x75\x65',
        '\x67\x65\x3f\x63\x68\x61\x74\x5f\x69\x64',
        '\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79',
        '\x65\x64\x20\x65\x72\x72\x6f\x72',
        '\x72\x65\x70\x6c\x61\x63\x65',
        '\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e',
        '\x69\x6e\x67\x2d\x62\x6f\x78\x20\u8ba2\u9605',
        '\u8bf7\u63d0\u4f9b\u7528\u6237\u540d\u548c\u5bc6\u7801',
        '\u751f\u6210\u7684\x20\x55\x55\x49\x44\x20\u4e0d',
        '\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d',
        '\x0a\x49\x50\x3a\x20',
        '\x6e\x74\x2e\x6e\x65\x74',
        '\x2f\x73\x6f\x63\x6b\x73\x35\x3d',
        '\x62\x72\x61\x7a\x69\x6c\x2e\x63\x6f\x6d',
        '\x4d\x4c\x69\x75\x73\x73\x73\x73\u89e3\u9501',
        '\x0a\x20\x20\x6e\x65\x74\x77\x6f\x72\x6b',
        '\x39\x25\x33\x41\x25\x32\x30',
        '\x69\x75\x73\x73\x73\x73\x0a\x2d\x2d\x2d',
        '\u7f6e\x20\x61\x64\x64\x72\x65\x73\x73\x65',
        '\u865a\u5047\x48\x4f\x53\x54\x3a\x20',
        '\x43\x46\x45\x4d\x41\x49\x4c',
        '\x61\x73\x68\x2d\x6d\x65\x74\x61\u3001\x73',
        '\x72\x65\x6d\x6f\x74\x65\x43\x6f\x6e\x6e',
        '\uff09\x3a\x20\u81ea\u52a8\u83b7\u53d6\x50\x72\x6f',
        '\x75\x70\x6c\x6f\x61\x64\x3d',
        '\x29\x20\x54\x43\x50\x20\u8fde\u63a5\u5f02\u5e38',
        '\x64\x65\x73\x2e\x63\x66\x2e\x30\x39\x30',
        '\x75\x72\x69\x74\x79\x3d\x74\x6c\x73\x26',
        '\x50\x72\x6f\x66\x69\x6c\x65\x2d\x55\x70',
        '\x38\x38\x36\x30\x39\x38\x67\x64\x62\x75\x66\x74',
        '\x39\x58\x5a\x73\x4b\x6d\x72',
        '\x3b\x20\x65\x78\x70\x69\x72\x65\x3d',
        '\x62\x53\x6f\x63\x6b\x65\x74\x53\x74\x72',
        '\x70\x68\x71\x6c',
        '\x70\x6f\x70'
    ];
    _0x4be8 = function () {
        return _0x1a819b;
    };
    return _0x4be8();
}
let noTLS = _0x20b761(0x1c1);
const expire = 0xf4849500;
let proxyIPs;
let socks5s;
let go2Socks5s = [
    _0x20b761(0x2f3),
    _0x20b761(0x24b) + _0x20b761(0x1de),
    _0x20b761(0x239) + _0x20b761(0x2cb),
    _0x20b761(0x273) + _0x20b761(0x360)
];
let addresses = [];
let addressesapi = [];
function _0x4660(_0x452eb4, _0x34d9dd) {
    const _0x4be843 = _0x4be8();
    _0x4660 = function (_0x466094, _0x20fe58) {
        _0x466094 = _0x466094 - 0x1a7;
        let _0x3acbe5 = _0x4be843[_0x466094];
        return _0x3acbe5;
    };
    return _0x4660(_0x452eb4, _0x34d9dd);
}
let addressesnotls = [];
let addressesnotlsapi = [];
let addressescsv = [];
let DLS = 0x8;
let FileName = _0x20b761(0x25e);
let BotToken = '';
let ChatID = '';
let proxyhosts = [];
let proxyhostsURL = _0x20b761(0x3d8) + '\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73' + _0x20b761(0x1d8) + '\x63\x6f\x6d\x2f\x63\x6d\x6c\x69\x75\x2f' + _0x20b761(0x34b) + '\x32\x73\x75\x62\x2f\x6d\x61\x69\x6e\x2f' + _0x20b761(0x320);
let RproxyIP = _0x20b761(0x1c1);
let httpsPorts = [
    _0x20b761(0x200),
    _0x20b761(0x2ff),
    '\x32\x30\x38\x37',
    _0x20b761(0x1ba),
    _0x20b761(0x331)
];
let effectiveTime = 0x7;
let updateTime = 0x3;
let userIDLow;
let userIDTime = '';
export default {
    async '\x66\x65\x74\x63\x68'(_0x537420, _0x1e6ef5, _0x3d07f3) {
        const _0x4cbcb3 = _0x20b761;
        try {
            const _0x199bda = _0x537420[_0x4cbcb3(0x3db)]['\x67\x65\x74'](_0x4cbcb3(0x31e)) || _0x4cbcb3(0x3a5);
            const _0x1048fa = _0x199bda[_0x4cbcb3(0x27a) + '\x65']();
            userID = (_0x1e6ef5['\x55\x55\x49\x44'] || userID)[_0x4cbcb3(0x27a) + '\x65']();
            const _0x236da9 = new Date();
            _0x236da9[_0x4cbcb3(0x23b)](0x0, 0x0, 0x0, 0x0);
            const _0x4ff89c = Math[_0x4cbcb3(0x350)](_0x236da9['\x67\x65\x74\x54\x69\x6d\x65']() / 0x3e8);
            const _0x329836 = await MD5MD5('' + userID + _0x4ff89c);
            fakeUserID = _0x329836[_0x4cbcb3(0x3b9)](0x0, 0x8) + '\x2d' + _0x329836[_0x4cbcb3(0x3b9)](0x8, 0xc) + '\x2d' + _0x329836[_0x4cbcb3(0x3b9)](0xc, 0x10) + '\x2d' + _0x329836['\x73\x6c\x69\x63\x65'](0x10, 0x14) + '\x2d' + _0x329836[_0x4cbcb3(0x3b9)](0x14);
            fakeHostName = _0x329836[_0x4cbcb3(0x3b9)](0x6, 0x9) + '\x2e' + _0x329836[_0x4cbcb3(0x3b9)](0xd, 0x13);
            if (_0x1e6ef5[_0x4cbcb3(0x269)]) {
                const _0x3093ca = await generateDynamicUUID(_0x1e6ef5[_0x4cbcb3(0x269)]);
                userID = _0x3093ca[0x0];
                userIDLow = _0x3093ca[0x1];
                userIDTime = _0x3093ca[0x2];
                effectiveTime = _0x1e6ef5[_0x4cbcb3(0x38c)] || effectiveTime;
                updateTime = _0x1e6ef5[_0x4cbcb3(0x271)] || updateTime;
            }
            proxyIP = _0x1e6ef5[_0x4cbcb3(0x2b0)] || proxyIP;
            proxyIPs = await ADD(proxyIP);
            proxyIP = proxyIPs[Math['\x66\x6c\x6f\x6f\x72'](Math['\x72\x61\x6e\x64\x6f\x6d']() * proxyIPs[_0x4cbcb3(0x248)])];
            socks5Address = _0x1e6ef5[_0x4cbcb3(0x294)] || socks5Address;
            socks5s = await ADD(socks5Address);
            socks5Address = socks5s[Math[_0x4cbcb3(0x338)](Math[_0x4cbcb3(0x217)]() * socks5s[_0x4cbcb3(0x248)])];
            socks5Address = socks5Address[_0x4cbcb3(0x29b)]('\x2f\x2f')[0x1] || socks5Address;
            if (_0x1e6ef5[_0x4cbcb3(0x2fd)])
                httpsPorts = await ADD(_0x1e6ef5[_0x4cbcb3(0x2fd)]);
            sub = _0x1e6ef5['\x53\x55\x42'] || sub;
            subconverter = _0x1e6ef5['\x53\x55\x42\x41\x50\x49'] || subconverter;
            if (subconverter[_0x4cbcb3(0x22b)](_0x4cbcb3(0x289))) {
                subconverter = subconverter[_0x4cbcb3(0x29b)]('\x2f\x2f')[0x1];
                subProtocol = '\x68\x74\x74\x70';
            } else {
                subconverter = subconverter['\x73\x70\x6c\x69\x74']('\x2f\x2f')[0x1] || subconverter;
            }
            subconfig = _0x1e6ef5['\x53\x55\x42\x43\x4f\x4e\x46\x49\x47'] || subconfig;
            if (socks5Address) {
                try {
                    parsedSocks5Address = socks5AddressParser(socks5Address);
                    RproxyIP = _0x1e6ef5[_0x4cbcb3(0x2c9)] || _0x4cbcb3(0x1c1);
                    enableSocks = !![];
                } catch (_0x3a1a64) {
                    let _0x138315 = _0x3a1a64;
                    console[_0x4cbcb3(0x334)](_0x138315['\x74\x6f\x53\x74\x72\x69\x6e\x67']());
                    RproxyIP = _0x1e6ef5['\x52\x50\x52\x4f\x58\x59\x49\x50'] || !proxyIP ? '\x74\x72\x75\x65' : '\x66\x61\x6c\x73\x65';
                    enableSocks = ![];
                }
            } else {
                RproxyIP = _0x1e6ef5[_0x4cbcb3(0x2c9)] || !proxyIP ? _0x4cbcb3(0x2cf) : _0x4cbcb3(0x1c1);
            }
            if (_0x1e6ef5[_0x4cbcb3(0x2a7)])
                addresses = await ADD(_0x1e6ef5[_0x4cbcb3(0x2a7)]);
            if (_0x1e6ef5[_0x4cbcb3(0x32f)])
                addressesapi = await ADD(_0x1e6ef5[_0x4cbcb3(0x32f)]);
            if (_0x1e6ef5['\x41\x44\x44\x4e\x4f\x54\x4c\x53'])
                addressesnotls = await ADD(_0x1e6ef5[_0x4cbcb3(0x348)]);
            if (_0x1e6ef5[_0x4cbcb3(0x3d4) + '\x49'])
                addressesnotlsapi = await ADD(_0x1e6ef5[_0x4cbcb3(0x3d4) + '\x49']);
            if (_0x1e6ef5[_0x4cbcb3(0x2dc)])
                addressescsv = await ADD(_0x1e6ef5['\x41\x44\x44\x43\x53\x56']);
            DLS = _0x1e6ef5[_0x4cbcb3(0x288)] || DLS;
            BotToken = _0x1e6ef5[_0x4cbcb3(0x3cb)] || BotToken;
            ChatID = _0x1e6ef5[_0x4cbcb3(0x3a6)] || ChatID;
            if (_0x1e6ef5[_0x4cbcb3(0x396)])
                go2Socks5s = await ADD(_0x1e6ef5[_0x4cbcb3(0x396)]);
            const _0xefe8de = _0x537420['\x68\x65\x61\x64\x65\x72\x73'][_0x4cbcb3(0x2d4)](_0x4cbcb3(0x297));
            const _0x5b83a9 = new URL(_0x537420[_0x4cbcb3(0x246)]);
            if (_0x5b83a9[_0x4cbcb3(0x28e) + '\x6d\x73'][_0x4cbcb3(0x383)](_0x4cbcb3(0x366)) && _0x5b83a9[_0x4cbcb3(0x28e) + '\x6d\x73'][_0x4cbcb3(0x2d4)](_0x4cbcb3(0x366)) !== '')
                sub = _0x5b83a9[_0x4cbcb3(0x28e) + '\x6d\x73'][_0x4cbcb3(0x2d4)]('\x73\x75\x62');
            FileName = _0x1e6ef5[_0x4cbcb3(0x1ac)] || FileName;
            if (_0x5b83a9['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61' + '\x6d\x73'][_0x4cbcb3(0x383)](_0x4cbcb3(0x218)))
                noTLS = _0x4cbcb3(0x2cf);
            if (!_0xefe8de || _0xefe8de !== _0x4cbcb3(0x395)) {
                const _0x1d1eaa = _0x5b83a9[_0x4cbcb3(0x2ba)][_0x4cbcb3(0x27a) + '\x65']();
                if (_0x1d1eaa == '\x2f') {
                    const _0x1f9a74 = {};
                    _0x1f9a74[_0x4cbcb3(0x1d5) + '\x70\x65'] = _0x4cbcb3(0x1b4) + _0x4cbcb3(0x292);
                    const _0xa47698 = {};
                    _0xa47698[_0x4cbcb3(0x326)] = 0xc8;
                    _0xa47698['\x68\x65\x61\x64\x65\x72\x73'] = _0x1f9a74;
                    if (_0x1e6ef5[_0x4cbcb3(0x3ad)])
                        return Response['\x72\x65\x64\x69\x72\x65\x63\x74'](_0x1e6ef5[_0x4cbcb3(0x3ad)], 0x12e);
                    else if (_0x1e6ef5[_0x4cbcb3(0x2e5)])
                        return await proxyURL(_0x1e6ef5[_0x4cbcb3(0x2e5)], _0x5b83a9);
                    else
                        return new Response(JSON[_0x4cbcb3(0x31c)](_0x537420['\x63\x66'], null, 0x4), _0xa47698);
                } else if (_0x1d1eaa == '\x2f' + fakeUserID) {
                    const _0x397ef9 = await getVLESSConfig(userID, _0x537420['\x68\x65\x61\x64\x65\x72\x73'][_0x4cbcb3(0x2d4)]('\x48\x6f\x73\x74'), sub, _0x4cbcb3(0x1b5) + '\x2d\x53\x55\x42', RproxyIP, _0x5b83a9, _0x1e6ef5);
                    const _0x28acd9 = {};
                    _0x28acd9[_0x4cbcb3(0x326)] = 0xc8;
                    return new Response('' + _0x397ef9, _0x28acd9);
                } else if (_0x1d1eaa == '\x2f' + _0x1e6ef5[_0x4cbcb3(0x269)] || _0x1d1eaa == '\x2f' + userID) {
                    await sendMessage(_0x4cbcb3(0x32c) + FileName, _0x537420[_0x4cbcb3(0x3db)]['\x67\x65\x74'](_0x4cbcb3(0x36a) + _0x4cbcb3(0x1cc)), '\x55\x41\x3a\x20' + _0x199bda + (_0x4cbcb3(0x22f) + _0x4cbcb3(0x311)) + _0x5b83a9[_0x4cbcb3(0x3a9)] + (_0x4cbcb3(0x2c7) + _0x4cbcb3(0x1c7)) + (_0x5b83a9[_0x4cbcb3(0x2ba)] + _0x5b83a9['\x73\x65\x61\x72\x63\x68']) + (_0x4cbcb3(0x22f) + '\x65\x72\x3e'));
                    const _0x2e3d49 = await getVLESSConfig(userID, _0x537420[_0x4cbcb3(0x3db)]['\x67\x65\x74']('\x48\x6f\x73\x74'), sub, _0x199bda, RproxyIP, _0x5b83a9, _0x1e6ef5);
                    const _0x5e92ad = Date[_0x4cbcb3(0x31d)]();
                    const _0x1f5b66 = new Date(_0x5e92ad);
                    _0x1f5b66['\x73\x65\x74\x48\x6f\x75\x72\x73'](0x0, 0x0, 0x0, 0x0);
                    const _0x1ff3b3 = Math[_0x4cbcb3(0x338)]((_0x5e92ad - _0x1f5b66['\x67\x65\x74\x54\x69\x6d\x65']()) / 0x5265c00 * 0x18 * 0x10000000000 / 0x2);
                    let _0x604ca2 = _0x1ff3b3;
                    let _0xde20a7 = _0x1ff3b3;
                    let _0x46aa43 = 0x18 * 0x10000000000;
                    if (_0x1e6ef5[_0x4cbcb3(0x1e7)] && _0x1e6ef5['\x43\x46\x4b\x45\x59']) {
                        const _0x4b9ed5 = _0x1e6ef5[_0x4cbcb3(0x1e7)];
                        const _0x597bde = _0x1e6ef5[_0x4cbcb3(0x236)];
                        const _0x1a0312 = _0x1e6ef5[_0x4cbcb3(0x20c)] || 0x0;
                        const _0x2d8c48 = await getAccountId(_0x4b9ed5, _0x597bde);
                        if (_0x2d8c48) {
                            const _0x63b4bc = new Date();
                            _0x63b4bc[_0x4cbcb3(0x24c) + '\x73'](0x0, 0x0, 0x0, 0x0);
                            const _0x31d603 = _0x63b4bc[_0x4cbcb3(0x253) + '\x67']();
                            const _0x41d076 = new Date()[_0x4cbcb3(0x253) + '\x67']();
                            const _0x38b923 = await getSum(_0x2d8c48, _0x1a0312, _0x4b9ed5, _0x597bde, _0x31d603, _0x41d076);
                            _0x604ca2 = _0x38b923[0x0];
                            _0xde20a7 = _0x38b923[0x1];
                            _0x46aa43 = 0x19000;
                        }
                    }
                    if (_0x1048fa && _0x1048fa[_0x4cbcb3(0x22b)]('\x6d\x6f\x7a\x69\x6c\x6c\x61')) {
                        const _0x767d6d = {};
                        _0x767d6d[_0x4cbcb3(0x210) + '\x70\x65'] = _0x4cbcb3(0x1ff) + _0x4cbcb3(0x20e) + '\x74\x66\x2d\x38';
                        _0x767d6d[_0x4cbcb3(0x1ef) + _0x4cbcb3(0x351) + _0x4cbcb3(0x2f8)] = '\x36';
                        _0x767d6d[_0x4cbcb3(0x3c6) + _0x4cbcb3(0x36e) + '\x6f'] = _0x4cbcb3(0x1eb) + _0x604ca2 + ('\x3b\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64' + '\x3d') + _0xde20a7 + _0x4cbcb3(0x397) + _0x46aa43 + _0x4cbcb3(0x1f2) + expire;
                        const _0x15eb45 = {};
                        _0x15eb45['\x73\x74\x61\x74\x75\x73'] = 0xc8;
                        _0x15eb45[_0x4cbcb3(0x3db)] = _0x767d6d;
                        return new Response('' + _0x2e3d49, _0x15eb45);
                    } else {
                        return new Response('' + _0x2e3d49, {
                            '\x73\x74\x61\x74\x75\x73': 0xc8,
                            '\x68\x65\x61\x64\x65\x72\x73': {
                                '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x44\x69\x73\x70\x6f\x73\x69\x74\x69\x6f\x6e': _0x4cbcb3(0x37b) + _0x4cbcb3(0x39f) + '\x3d' + FileName + (_0x4cbcb3(0x39f) + _0x4cbcb3(0x256)) + encodeURIComponent(FileName),
                                '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x4cbcb3(0x1ff) + _0x4cbcb3(0x20e) + _0x4cbcb3(0x293),
                                '\x50\x72\x6f\x66\x69\x6c\x65\x2d\x55\x70\x64\x61\x74\x65\x2d\x49\x6e\x74\x65\x72\x76\x61\x6c': '\x36',
                                '\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x2d\x55\x73\x65\x72\x69\x6e\x66\x6f': _0x4cbcb3(0x1eb) + _0x604ca2 + ('\x3b\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64' + '\x3d') + _0xde20a7 + _0x4cbcb3(0x397) + _0x46aa43 + '\x3b\x20\x65\x78\x70\x69\x72\x65\x3d' + expire
                            }
                        });
                    }
                } else {
                    const _0x5bab46 = {};
                    _0x5bab46['\x73\x74\x61\x74\x75\x73'] = 0x194;
                    if (_0x1e6ef5[_0x4cbcb3(0x3ad)])
                        return Response[_0x4cbcb3(0x2ee)](_0x1e6ef5[_0x4cbcb3(0x3ad)], 0x12e);
                    else if (_0x1e6ef5[_0x4cbcb3(0x2e5)])
                        return await proxyURL(_0x1e6ef5['\x55\x52\x4c'], _0x5b83a9);
                    else
                        return new Response(_0x4cbcb3(0x29d) + '\u5c31\u662f\u9519\u7684\uff01\uff01\uff01', _0x5bab46);
                }
            } else {
                proxyIP = _0x5b83a9[_0x4cbcb3(0x28e) + '\x6d\x73'][_0x4cbcb3(0x2d4)](_0x4cbcb3(0x24d)) || proxyIP;
                if (new RegExp(_0x4cbcb3(0x2a3), '\x69')[_0x4cbcb3(0x25f)](_0x5b83a9[_0x4cbcb3(0x2ba)]))
                    proxyIP = _0x5b83a9[_0x4cbcb3(0x2ba)][_0x4cbcb3(0x27a) + '\x65']()[_0x4cbcb3(0x29b)](_0x4cbcb3(0x2a3))[0x1];
                else if (new RegExp('\x2f\x70\x72\x6f\x78\x79\x69\x70\x2e', '\x69')[_0x4cbcb3(0x25f)](_0x5b83a9[_0x4cbcb3(0x2ba)]))
                    proxyIP = _0x4cbcb3(0x32d) + _0x5b83a9[_0x4cbcb3(0x2ba)]['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73' + '\x65']()[_0x4cbcb3(0x29b)](_0x4cbcb3(0x3dd))[0x1];
                socks5Address = _0x5b83a9['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61' + '\x6d\x73'][_0x4cbcb3(0x2d4)]('\x73\x6f\x63\x6b\x73\x35') || socks5Address;
                if (new RegExp(_0x4cbcb3(0x1df), '\x69')[_0x4cbcb3(0x25f)](_0x5b83a9[_0x4cbcb3(0x2ba)]))
                    socks5Address = _0x5b83a9[_0x4cbcb3(0x2ba)]['\x73\x70\x6c\x69\x74']('\x35\x3d')[0x1];
                else if (new RegExp(_0x4cbcb3(0x352), '\x69')[_0x4cbcb3(0x25f)](_0x5b83a9[_0x4cbcb3(0x2ba)]) || new RegExp('\x2f\x73\x6f\x63\x6b\x73\x35\x3a\x2f\x2f', '\x69')[_0x4cbcb3(0x25f)](_0x5b83a9[_0x4cbcb3(0x2ba)])) {
                    socks5Address = _0x5b83a9[_0x4cbcb3(0x2ba)][_0x4cbcb3(0x29b)](_0x4cbcb3(0x31f))[0x1][_0x4cbcb3(0x29b)]('\x23')[0x0];
                    if (socks5Address[_0x4cbcb3(0x22b)]('\x40')) {
                        let _0x55f56d = socks5Address['\x73\x70\x6c\x69\x74']('\x40')[0x0];
                        const _0x4746de = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
                        if (_0x4746de[_0x4cbcb3(0x25f)](_0x55f56d) && !_0x55f56d[_0x4cbcb3(0x22b)]('\x3a'))
                            _0x55f56d = atob(_0x55f56d);
                        socks5Address = _0x55f56d + '\x40' + socks5Address[_0x4cbcb3(0x29b)]('\x40')[0x1];
                    }
                }
                if (socks5Address) {
                    try {
                        parsedSocks5Address = socks5AddressParser(socks5Address);
                        enableSocks = !![];
                    } catch (_0x11df1e) {
                        let _0x4ff30e = _0x11df1e;
                        console['\x6c\x6f\x67'](_0x4ff30e[_0x4cbcb3(0x2a5)]());
                        enableSocks = ![];
                    }
                } else {
                    enableSocks = ![];
                }
                return await vlessOverWSHandler(_0x537420);
            }
        } catch (_0x1a48f6) {
            let _0x2d57f6 = _0x1a48f6;
            return new Response(_0x2d57f6[_0x4cbcb3(0x2a5)]());
        }
    }
};
async function vlessOverWSHandler(_0x21bef7) {
    const _0xe5e2b9 = _0x20b761;
    const _0x48ca16 = new WebSocketPair();
    const [_0x31ae7a, _0x29e731] = Object[_0xe5e2b9(0x3bb)](_0x48ca16);
    _0x29e731[_0xe5e2b9(0x386)]();
    let _0x1ca5e5 = '';
    let _0x41b8ac = '';
    const _0x2002df = (_0x8d2432, _0x45cefa) => {
        const _0x76e3df = _0xe5e2b9;
        console[_0x76e3df(0x334)]('\x5b' + _0x1ca5e5 + '\x3a' + _0x41b8ac + '\x5d\x20' + _0x8d2432, _0x45cefa || '');
    };
    const _0x448cb9 = _0x21bef7[_0xe5e2b9(0x3db)][_0xe5e2b9(0x2d4)](_0xe5e2b9(0x28a) + '\x6b\x65\x74\x2d\x70\x72\x6f\x74\x6f\x63' + '\x6f\x6c') || '';
    const _0x1491b2 = makeReadableWebSocketStream(_0x29e731, _0x448cb9, _0x2002df);
    const _0x361902 = {};
    _0x361902['\x76\x61\x6c\x75\x65'] = null;
    let _0xb615c9 = _0x361902;
    let _0x5982a3 = ![];
    _0x1491b2[_0xe5e2b9(0x1bb)](new WritableStream({
        async '\x77\x72\x69\x74\x65'(_0x18acb7, _0xa506c) {
            const _0x4d7ba5 = _0xe5e2b9;
            if (_0x5982a3) {
                return await handleDNSQuery(_0x18acb7, _0x29e731, null, _0x2002df);
            }
            if (_0xb615c9[_0x4d7ba5(0x3bd)]) {
                const _0x9cb582 = _0xb615c9[_0x4d7ba5(0x3bd)][_0x4d7ba5(0x2f0)][_0x4d7ba5(0x3c3)]();
                await _0x9cb582[_0x4d7ba5(0x255)](_0x18acb7);
                _0x9cb582[_0x4d7ba5(0x2ae) + '\x6b']();
                return;
            }
            const {
                hasError: _0x1c7c59,
                message: _0x46a271,
                addressType: _0x3ef228,
                portRemote: portRemote = 0x1bb,
                addressRemote: addressRemote = '',
                rawDataIndex: _0x427011,
                vlessVersion: vlessVersion = new Uint8Array([
                    0x0,
                    0x0
                ]),
                isUDP: _0x31c505
            } = processVlessHeader(_0x18acb7, userID);
            _0x1ca5e5 = addressRemote;
            _0x41b8ac = portRemote + '\x2d\x2d' + Math[_0x4d7ba5(0x217)]() + '\x20' + (_0x31c505 ? _0x4d7ba5(0x354) : _0x4d7ba5(0x3aa)) + '\x20';
            if (_0x1c7c59) {
                throw new Error(_0x46a271);
                return;
            }
            if (_0x31c505) {
                if (portRemote === 0x35) {
                    _0x5982a3 = !![];
                } else {
                    throw new Error(_0x4d7ba5(0x33a) + _0x4d7ba5(0x278) + '\u7528');
                    return;
                }
            }
            const _0x65333b = new Uint8Array([
                vlessVersion[0x0],
                0x0
            ]);
            const _0x2df254 = _0x18acb7['\x73\x6c\x69\x63\x65'](_0x427011);
            if (_0x5982a3) {
                return handleDNSQuery(_0x2df254, _0x29e731, _0x65333b, _0x2002df);
            }
            _0x2002df('\u5904\u7406\x20\x54\x43\x50\x20\u51fa\u7ad9\u8fde' + '\u63a5\x20' + addressRemote + '\x3a' + portRemote);
            handleTCPOutBound(_0xb615c9, _0x3ef228, addressRemote, portRemote, _0x2df254, _0x29e731, _0x65333b, _0x2002df);
        },
        '\x63\x6c\x6f\x73\x65'() {
            const _0x215f50 = _0xe5e2b9;
            _0x2002df(_0x215f50(0x28b) + _0x215f50(0x1f3) + _0x215f50(0x2e3));
        },
        '\x61\x62\x6f\x72\x74'(_0x4675fd) {
            const _0x184abf = _0xe5e2b9;
            _0x2002df(_0x184abf(0x28b) + _0x184abf(0x1f3) + _0x184abf(0x247), JSON[_0x184abf(0x31c)](_0x4675fd));
        }
    }))[_0xe5e2b9(0x3b6)](_0x2c9502 => {
        const _0x3ee61b = _0xe5e2b9;
        _0x2002df(_0x3ee61b(0x28b) + _0x3ee61b(0x1f3) + '\x65\x61\x6d\x20\u7ba1\u9053\u9519\u8bef', _0x2c9502);
    });
    const _0x648472 = {};
    _0x648472[_0xe5e2b9(0x326)] = 0x65;
    _0x648472['\x77\x65\x62\x53\x6f\x63\x6b\x65\x74'] = _0x31ae7a;
    return new Response(null, _0x648472);
}
async function handleTCPOutBound(_0x4a8025, _0x56d92b, _0x427213, _0x2d751a, _0x20d4cb, _0x362140, _0x526a52, _0x3885ae) {
    const _0x232e7f = _0x20b761;
    async function _0x27c5ea(_0x4dbcbe) {
        const _0x3f64d2 = _0x4660;
        if (go2Socks5s[_0x3f64d2(0x22b)](atob(_0x3f64d2(0x390))) || go2Socks5s[_0x3f64d2(0x22b)](atob(_0x3f64d2(0x3af))))
            return !![];
        return go2Socks5s[_0x3f64d2(0x2fc)](_0xf942 => {
            const _0x1e9124 = _0x3f64d2;
            let _0x3c8b8c = _0xf942[_0x1e9124(0x1d7)](/\*/g, '\x2e\x2a');
            let _0x2b87ba = new RegExp('\x5e' + _0x3c8b8c + '\x24', '\x69');
            return _0x2b87ba['\x74\x65\x73\x74'](_0x4dbcbe);
        });
    }
    async function _0x504f79(_0x5d1540, _0x3ac205, _0x2e2eb5 = ![]) {
        const _0x2afb52 = _0x4660;
        _0x3885ae(_0x2afb52(0x2a8) + _0x2afb52(0x379) + _0x5d1540 + '\x3a' + _0x3ac205);
        const _0x53cf2d = _0x2e2eb5 ? await socks5Connect(_0x56d92b, _0x5d1540, _0x3ac205, _0x3885ae) : connect({
            '\x68\x6f\x73\x74\x6e\x61\x6d\x65': _0x5d1540,
            '\x70\x6f\x72\x74': _0x3ac205
        });
        _0x4a8025[_0x2afb52(0x3bd)] = _0x53cf2d;
        const _0x570947 = _0x53cf2d[_0x2afb52(0x2f0)]['\x67\x65\x74\x57\x72\x69\x74\x65\x72']();
        await _0x570947[_0x2afb52(0x255)](_0x20d4cb);
        _0x570947[_0x2afb52(0x2ae) + '\x6b']();
        return _0x53cf2d;
    }
    async function _0x21892d() {
        const _0x37bd4f = _0x4660;
        if (enableSocks) {
            _0x91174a = await _0x504f79(_0x427213, _0x2d751a, !![]);
        } else {
            if (!proxyIP || proxyIP == '') {
                proxyIP = atob(_0x37bd4f(0x324) + _0x37bd4f(0x201) + _0x37bd4f(0x302) + _0x37bd4f(0x3b8));
            } else if (proxyIP[_0x37bd4f(0x22b)]('\x5d\x3a')) {
                _0x2d751a = proxyIP[_0x37bd4f(0x29b)]('\x5d\x3a')[0x1] || _0x2d751a;
                proxyIP = proxyIP[_0x37bd4f(0x29b)]('\x5d\x3a')[0x0] || proxyIP;
            } else if (proxyIP[_0x37bd4f(0x29b)]('\x3a')[_0x37bd4f(0x248)] === 0x2) {
                _0x2d751a = proxyIP[_0x37bd4f(0x29b)]('\x3a')[0x1] || _0x2d751a;
                proxyIP = proxyIP[_0x37bd4f(0x29b)]('\x3a')[0x0] || proxyIP;
            }
            if (proxyIP['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x37bd4f(0x1b9)))
                _0x2d751a = proxyIP[_0x37bd4f(0x29b)]('\x2e\x74\x70')[0x1][_0x37bd4f(0x29b)]('\x2e')[0x0] || _0x2d751a;
            _0x91174a = await _0x504f79(proxyIP || _0x427213, _0x2d751a);
        }
        _0x91174a[_0x37bd4f(0x323)][_0x37bd4f(0x3b6)](_0x418e70 => {
            const _0x486bea = _0x37bd4f;
            console[_0x486bea(0x334)](_0x486bea(0x373) + _0x486bea(0x375) + _0x486bea(0x1d6), _0x418e70);
        })[_0x37bd4f(0x2e4)](() => {
            safeCloseWebSocket(_0x362140);
        });
        remoteSocketToWS(_0x91174a, _0x362140, _0x526a52, null, _0x3885ae);
    }
    let _0x5e72ef = ![];
    if (go2Socks5s[_0x232e7f(0x248)] > 0x0 && enableSocks)
        _0x5e72ef = await _0x27c5ea(_0x427213);
    let _0x91174a = await _0x504f79(_0x427213, _0x2d751a, _0x5e72ef);
    remoteSocketToWS(_0x91174a, _0x362140, _0x526a52, _0x21892d, _0x3885ae);
}
function makeReadableWebSocketStream(_0x35b335, _0x1eab16, _0x48daf1) {
    let _0x18325e = ![];
    const _0x137149 = new ReadableStream({
        '\x73\x74\x61\x72\x74'(_0x4a2a3c) {
            const _0x51cec1 = _0x4660;
            _0x35b335[_0x51cec1(0x357) + '\x73\x74\x65\x6e\x65\x72']('\x6d\x65\x73\x73\x61\x67\x65', _0x4b86c4 => {
                const _0xea90b8 = _0x51cec1;
                if (_0x18325e) {
                    return;
                }
                const _0x313ca8 = _0x4b86c4['\x64\x61\x74\x61'];
                _0x4a2a3c[_0xea90b8(0x2b2)](_0x313ca8);
            });
            _0x35b335['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69' + _0x51cec1(0x24f)](_0x51cec1(0x238), () => {
                const _0x29cd0b = _0x51cec1;
                safeCloseWebSocket(_0x35b335);
                if (_0x18325e) {
                    return;
                }
                _0x4a2a3c[_0x29cd0b(0x238)]();
            });
            _0x35b335[_0x51cec1(0x357) + '\x73\x74\x65\x6e\x65\x72']('\x65\x72\x72\x6f\x72', _0x1faf8c => {
                const _0x2484a4 = _0x51cec1;
                _0x48daf1(_0x2484a4(0x308) + _0x2484a4(0x2f5));
                _0x4a2a3c['\x65\x72\x72\x6f\x72'](_0x1faf8c);
            });
            const {
                earlyData: _0x5ac39a,
                error: _0x18553c
            } = base64ToArrayBuffer(_0x1eab16);
            if (_0x18553c) {
                _0x4a2a3c[_0x51cec1(0x208)](_0x18553c);
            } else if (_0x5ac39a) {
                _0x4a2a3c[_0x51cec1(0x2b2)](_0x5ac39a);
            }
        },
        '\x70\x75\x6c\x6c'(_0x497957) {
        },
        '\x63\x61\x6e\x63\x65\x6c'(_0x2d5437) {
            const _0x1157e6 = _0x4660;
            if (_0x18325e) {
                return;
            }
            _0x48daf1(_0x1157e6(0x1b6) + '\x20' + _0x2d5437);
            _0x18325e = !![];
            safeCloseWebSocket(_0x35b335);
        }
    });
    return _0x137149;
}
function processVlessHeader(_0x57babd, _0x696887) {
    const _0x1a92a2 = _0x20b761;
    if (_0x57babd[_0x1a92a2(0x2b8)] < 0x18) {
        const _0x3a09f8 = {};
        _0x3a09f8[_0x1a92a2(0x303)] = !![];
        _0x3a09f8[_0x1a92a2(0x27e)] = _0x1a92a2(0x37c) + '\x74\x61';
        return _0x3a09f8;
    }
    const _0x4665db = new Uint8Array(_0x57babd[_0x1a92a2(0x3b9)](0x0, 0x1));
    let _0x37bc37 = ![];
    let _0x26b887 = ![];
    function _0x3e8970(_0x3b3ace, _0x470871, _0x4caa42) {
        const _0x312dcd = _0x1a92a2;
        const _0x4158b8 = new Uint8Array(_0x4caa42[_0x312dcd(0x3b9)](0x1, 0x11));
        const _0x3c2d37 = stringify(_0x4158b8);
        return _0x3c2d37 === _0x3b3ace || _0x3c2d37 === _0x470871;
    }
    _0x37bc37 = _0x3e8970(_0x696887, userIDLow, _0x57babd);
    if (!_0x37bc37) {
        return {
            '\x68\x61\x73\x45\x72\x72\x6f\x72': !![],
            '\x6d\x65\x73\x73\x61\x67\x65': '\x69\x6e\x76\x61\x6c\x69\x64\x20\x75\x73' + '\x65\x72\x20' + new Uint8Array(_0x57babd[_0x1a92a2(0x3b9)](0x1, 0x11))
        };
    }
    const _0x5696b4 = new Uint8Array(_0x57babd[_0x1a92a2(0x3b9)](0x11, 0x12))[0x0];
    const _0xe6c477 = new Uint8Array(_0x57babd[_0x1a92a2(0x3b9)](0x12 + _0x5696b4, 0x12 + _0x5696b4 + 0x1))[0x0];
    if (_0xe6c477 === 0x1) {
    } else if (_0xe6c477 === 0x2) {
        _0x26b887 = !![];
    } else {
        const _0x4fe2b5 = {};
        _0x4fe2b5[_0x1a92a2(0x303)] = !![];
        _0x4fe2b5[_0x1a92a2(0x27e)] = _0x1a92a2(0x2ef) + _0xe6c477 + (_0x1a92a2(0x30c) + _0x1a92a2(0x1fb) + _0x1a92a2(0x1ad) + _0x1a92a2(0x3b0) + _0x1a92a2(0x358));
        return _0x4fe2b5;
    }
    const _0x29897c = 0x12 + _0x5696b4 + 0x1;
    const _0x4a858c = _0x57babd[_0x1a92a2(0x3b9)](_0x29897c, _0x29897c + 0x2);
    const _0x59f61d = new DataView(_0x4a858c)['\x67\x65\x74\x55\x69\x6e\x74\x31\x36'](0x0);
    let _0x3d8d33 = _0x29897c + 0x2;
    const _0x365449 = new Uint8Array(_0x57babd[_0x1a92a2(0x3b9)](_0x3d8d33, _0x3d8d33 + 0x1));
    const _0x340b3a = _0x365449[0x0];
    let _0x101924 = 0x0;
    let _0x4ff97e = _0x3d8d33 + 0x1;
    let _0x4ab7c0 = '';
    switch (_0x340b3a) {
    case 0x1:
        _0x101924 = 0x4;
        _0x4ab7c0 = new Uint8Array(_0x57babd[_0x1a92a2(0x3b9)](_0x4ff97e, _0x4ff97e + _0x101924))['\x6a\x6f\x69\x6e']('\x2e');
        break;
    case 0x2:
        _0x101924 = new Uint8Array(_0x57babd[_0x1a92a2(0x3b9)](_0x4ff97e, _0x4ff97e + 0x1))[0x0];
        _0x4ff97e += 0x1;
        _0x4ab7c0 = new TextDecoder()[_0x1a92a2(0x367)](_0x57babd['\x73\x6c\x69\x63\x65'](_0x4ff97e, _0x4ff97e + _0x101924));
        break;
    case 0x3:
        _0x101924 = 0x10;
        const _0x509c54 = new DataView(_0x57babd[_0x1a92a2(0x3b9)](_0x4ff97e, _0x4ff97e + _0x101924));
        const _0x2111c8 = [];
        for (let _0x3fae90 = 0x0; _0x3fae90 < 0x8; _0x3fae90++) {
            _0x2111c8[_0x1a92a2(0x353)](_0x509c54[_0x1a92a2(0x1d2)](_0x3fae90 * 0x2)[_0x1a92a2(0x2a5)](0x10));
        }
        _0x4ab7c0 = _0x2111c8[_0x1a92a2(0x27b)]('\x3a');
        break;
    default:
        const _0x39127d = {};
        _0x39127d[_0x1a92a2(0x303)] = !![];
        _0x39127d[_0x1a92a2(0x27e)] = _0x1a92a2(0x20d) + _0x1a92a2(0x1b2) + '\x73\x20' + _0x340b3a;
        return _0x39127d;
    }
    if (!_0x4ab7c0) {
        const _0x4cf0f0 = {};
        _0x4cf0f0['\x68\x61\x73\x45\x72\x72\x6f\x72'] = !![];
        _0x4cf0f0[_0x1a92a2(0x27e)] = _0x1a92a2(0x233) + '\x75\x65\x20\x69\x73\x20\x65\x6d\x70\x74' + _0x1a92a2(0x33d) + _0x1a92a2(0x225) + _0x340b3a;
        return _0x4cf0f0;
    }
    const _0x257e6f = {};
    _0x257e6f[_0x1a92a2(0x303)] = ![];
    _0x257e6f[_0x1a92a2(0x2af) + _0x1a92a2(0x2ce)] = _0x4ab7c0;
    _0x257e6f[_0x1a92a2(0x20f) + '\x65'] = _0x340b3a;
    _0x257e6f[_0x1a92a2(0x22e)] = _0x59f61d;
    _0x257e6f['\x72\x61\x77\x44\x61\x74\x61\x49\x6e\x64' + '\x65\x78'] = _0x4ff97e + _0x101924;
    _0x257e6f[_0x1a92a2(0x2c4) + '\x6f\x6e'] = _0x4665db;
    _0x257e6f['\x69\x73\x55\x44\x50'] = _0x26b887;
    return _0x257e6f;
}
async function remoteSocketToWS(_0x4e4e81, _0x323a10, _0x4de90c, _0x22e6df, _0x4d5d9f) {
    const _0x5e0c7c = _0x20b761;
    let _0xa50710 = 0x0;
    let _0x490cb2 = [];
    let _0x1f6b66 = _0x4de90c;
    let _0x58607c = ![];
    await _0x4e4e81['\x72\x65\x61\x64\x61\x62\x6c\x65'][_0x5e0c7c(0x1bb)](new WritableStream({
        '\x73\x74\x61\x72\x74'() {
        },
        async '\x77\x72\x69\x74\x65'(_0x3201f8, _0x5261ee) {
            const _0x2068f5 = _0x5e0c7c;
            _0x58607c = !![];
            if (_0x323a10[_0x2068f5(0x263)] !== WS_READY_STATE_OPEN) {
                _0x5261ee[_0x2068f5(0x208)]('\x77\x65\x62\x53\x6f\x63\x6b\x65\x74\x2e' + '\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65' + _0x2068f5(0x347) + _0x2068f5(0x35b) + _0x2068f5(0x238));
            }
            if (_0x1f6b66) {
                _0x323a10[_0x2068f5(0x3ca)](await new Blob([
                    _0x1f6b66,
                    _0x3201f8
                ])[_0x2068f5(0x245) + '\x72']());
                _0x1f6b66 = null;
            } else {
                _0x323a10['\x73\x65\x6e\x64'](_0x3201f8);
            }
        },
        '\x63\x6c\x6f\x73\x65'() {
            const _0x3750ff = _0x5e0c7c;
            _0x4d5d9f('\x72\x65\x6d\x6f\x74\x65\x43\x6f\x6e\x6e' + '\x65\x63\x74\x69\x6f\x6e\x21\x2e\x72\x65' + _0x3750ff(0x389) + _0x3750ff(0x277) + '\x20\x68\x61\x73\x49\x6e\x63\x6f\x6d\x69' + _0x3750ff(0x22d) + _0x58607c);
        },
        '\x61\x62\x6f\x72\x74'(_0x17a1af) {
            const _0x1beca1 = _0x5e0c7c;
            console[_0x1beca1(0x208)](_0x1beca1(0x1e9) + _0x1beca1(0x1d0) + _0x1beca1(0x276) + '\x72\x74', _0x17a1af);
        }
    }))[_0x5e0c7c(0x3b6)](_0x354f25 => {
        const _0x546d14 = _0x5e0c7c;
        console[_0x546d14(0x208)](_0x546d14(0x23c) + _0x546d14(0x242) + _0x546d14(0x361) + '\x20', _0x354f25[_0x546d14(0x25a)] || _0x354f25);
        safeCloseWebSocket(_0x323a10);
    });
    if (_0x58607c === ![] && _0x22e6df) {
        _0x4d5d9f(_0x5e0c7c(0x2a4));
        _0x22e6df();
    }
}
function base64ToArrayBuffer(_0x104bf0) {
    const _0x3222e5 = _0x20b761;
    if (!_0x104bf0) {
        const _0x358729 = {};
        _0x358729[_0x3222e5(0x208)] = null;
        return _0x358729;
    }
    try {
        _0x104bf0 = _0x104bf0[_0x3222e5(0x1d7)](/-/g, '\x2b')[_0x3222e5(0x1d7)](/_/g, '\x2f');
        const _0x167f22 = atob(_0x104bf0);
        const _0x56a2bd = Uint8Array[_0x3222e5(0x2bf)](_0x167f22, _0x3ac3d9 => _0x3ac3d9[_0x3222e5(0x35e)](0x0));
        const _0x2ead5e = {};
        _0x2ead5e[_0x3222e5(0x332)] = _0x56a2bd['\x62\x75\x66\x66\x65\x72'];
        _0x2ead5e[_0x3222e5(0x208)] = null;
        return _0x2ead5e;
    } catch (_0x2e1b19) {
        const _0x3567a0 = {};
        _0x3567a0[_0x3222e5(0x208)] = _0x2e1b19;
        return _0x3567a0;
    }
}
function isValidUUID(_0x28b3bf) {
    const _0x59eb69 = _0x20b761;
    const _0x3fdff1 = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return _0x3fdff1[_0x59eb69(0x25f)](_0x28b3bf);
}
const WS_READY_STATE_OPEN = 0x1;
const WS_READY_STATE_CLOSING = 0x2;
function safeCloseWebSocket(_0x7faf45) {
    const _0xf58777 = _0x20b761;
    try {
        if (_0x7faf45[_0xf58777(0x263)] === WS_READY_STATE_OPEN || _0x7faf45[_0xf58777(0x263)] === WS_READY_STATE_CLOSING) {
            _0x7faf45[_0xf58777(0x238)]();
        }
    } catch (_0x1d6fd6) {
        console[_0xf58777(0x208)](_0xf58777(0x317) + _0xf58777(0x2c5) + '\x72\x72\x6f\x72', _0x1d6fd6);
    }
}
const byteToHex = [];
for (let i = 0x0; i < 0x100; ++i) {
    byteToHex['\x70\x75\x73\x68']((i + 0x100)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10)['\x73\x6c\x69\x63\x65'](0x1));
}
function unsafeStringify(_0x590c50, _0x1857d0 = 0x0) {
    const _0x4dfc29 = _0x20b761;
    return (byteToHex[_0x590c50[_0x1857d0 + 0x0]] + byteToHex[_0x590c50[_0x1857d0 + 0x1]] + byteToHex[_0x590c50[_0x1857d0 + 0x2]] + byteToHex[_0x590c50[_0x1857d0 + 0x3]] + '\x2d' + byteToHex[_0x590c50[_0x1857d0 + 0x4]] + byteToHex[_0x590c50[_0x1857d0 + 0x5]] + '\x2d' + byteToHex[_0x590c50[_0x1857d0 + 0x6]] + byteToHex[_0x590c50[_0x1857d0 + 0x7]] + '\x2d' + byteToHex[_0x590c50[_0x1857d0 + 0x8]] + byteToHex[_0x590c50[_0x1857d0 + 0x9]] + '\x2d' + byteToHex[_0x590c50[_0x1857d0 + 0xa]] + byteToHex[_0x590c50[_0x1857d0 + 0xb]] + byteToHex[_0x590c50[_0x1857d0 + 0xc]] + byteToHex[_0x590c50[_0x1857d0 + 0xd]] + byteToHex[_0x590c50[_0x1857d0 + 0xe]] + byteToHex[_0x590c50[_0x1857d0 + 0xf]])[_0x4dfc29(0x27a) + '\x65']();
}
function stringify(_0x3f0189, _0x15f48a = 0x0) {
    const _0x2581d0 = _0x20b761;
    const _0x827ba2 = unsafeStringify(_0x3f0189, _0x15f48a);
    if (!isValidUUID(_0x827ba2)) {
        throw TypeError(_0x2581d0(0x1db) + _0x2581d0(0x206) + _0x827ba2);
    }
    return _0x827ba2;
}
async function handleDNSQuery(_0x105e32, _0x406843, _0x15a151, _0x16c6e8) {
    const _0x75f3ab = _0x20b761;
    try {
        const _0x4e5cda = _0x75f3ab(0x2da);
        const _0x52a0e4 = 0x35;
        let _0xb04e94 = _0x15a151;
        const _0x3f7425 = {};
        _0x3f7425['\x68\x6f\x73\x74\x6e\x61\x6d\x65'] = _0x4e5cda;
        _0x3f7425[_0x75f3ab(0x1ce)] = _0x52a0e4;
        const _0x57405e = connect(_0x3f7425);
        _0x16c6e8(_0x75f3ab(0x3d9) + _0x4e5cda + '\x3a' + _0x52a0e4);
        const _0x4f7722 = _0x57405e[_0x75f3ab(0x2f0)]['\x67\x65\x74\x57\x72\x69\x74\x65\x72']();
        await _0x4f7722[_0x75f3ab(0x255)](_0x105e32);
        _0x4f7722[_0x75f3ab(0x2ae) + '\x6b']();
        await _0x57405e['\x72\x65\x61\x64\x61\x62\x6c\x65'][_0x75f3ab(0x1bb)](new WritableStream({
            async '\x77\x72\x69\x74\x65'(_0x17d83d) {
                const _0x1a8adc = _0x75f3ab;
                if (_0x406843[_0x1a8adc(0x263)] === WS_READY_STATE_OPEN) {
                    if (_0xb04e94) {
                        _0x406843[_0x1a8adc(0x3ca)](await new Blob([
                            _0xb04e94,
                            _0x17d83d
                        ])[_0x1a8adc(0x245) + '\x72']());
                        _0xb04e94 = null;
                    } else {
                        _0x406843['\x73\x65\x6e\x64'](_0x17d83d);
                    }
                }
            },
            '\x63\x6c\x6f\x73\x65'() {
                const _0x533c25 = _0x75f3ab;
                _0x16c6e8(_0x533c25(0x1cd) + _0x4e5cda + (_0x533c25(0x3bc) + '\u95ed'));
            },
            '\x61\x62\x6f\x72\x74'(_0x5c3725) {
                const _0x26da86 = _0x75f3ab;
                console[_0x26da86(0x208)]('\x44\x4e\x53\x20\u670d\u52a1\u5668\x28' + _0x4e5cda + (_0x26da86(0x1ec) + '\u4e2d\u65ad'), _0x5c3725);
            }
        }));
    } catch (_0x202c7b) {
        console[_0x75f3ab(0x208)](_0x75f3ab(0x391) + _0x75f3ab(0x35c) + '\u5e38\uff0c\u9519\u8bef\u4fe1\u606f\x3a\x20' + _0x202c7b[_0x75f3ab(0x27e)]);
    }
}
async function socks5Connect(_0x12e306, _0x384112, _0x1b90f3, _0xe43e98) {
    const _0x46162a = _0x20b761;
    const {
        username: _0xe52b5b,
        password: _0x27312b,
        hostname: _0x3345b0,
        port: _0x58bd9d
    } = parsedSocks5Address;
    const _0x3c4a5e = {};
    _0x3c4a5e[_0x46162a(0x3a9)] = _0x3345b0;
    _0x3c4a5e['\x70\x6f\x72\x74'] = _0x58bd9d;
    const _0x394d87 = connect(_0x3c4a5e);
    const _0x506fe6 = new Uint8Array([
        0x5,
        0x2,
        0x0,
        0x2
    ]);
    const _0x3700a2 = _0x394d87[_0x46162a(0x2f0)][_0x46162a(0x3c3)]();
    await _0x3700a2[_0x46162a(0x255)](_0x506fe6);
    _0xe43e98(_0x46162a(0x1c5) + _0x46162a(0x28c));
    const _0x107c2d = _0x394d87[_0x46162a(0x29a)][_0x46162a(0x2d8)]();
    const _0x1089d0 = new TextEncoder();
    let _0x376f9c = (await _0x107c2d[_0x46162a(0x1c8)]())[_0x46162a(0x3bd)];
    if (_0x376f9c[0x0] !== 0x5) {
        _0xe43e98(_0x46162a(0x3ae) + _0x46162a(0x31a) + _0x376f9c[0x0] + _0x46162a(0x2de));
        return;
    }
    if (_0x376f9c[0x1] === 0xff) {
        _0xe43e98(_0x46162a(0x399) + '\u65b9\u6cd5');
        return;
    }
    if (_0x376f9c[0x1] === 0x2) {
        _0xe43e98('\x53\x4f\x43\x4b\x53\x35\x20\u670d\u52a1\u5668' + _0x46162a(0x1c4));
        if (!_0xe52b5b || !_0x27312b) {
            _0xe43e98(_0x46162a(0x1da));
            return;
        }
        const _0x2dab6f = new Uint8Array([
            0x1,
            _0xe52b5b[_0x46162a(0x248)],
            ..._0x1089d0[_0x46162a(0x235)](_0xe52b5b),
            _0x27312b['\x6c\x65\x6e\x67\x74\x68'],
            ..._0x1089d0[_0x46162a(0x235)](_0x27312b)
        ]);
        await _0x3700a2[_0x46162a(0x255)](_0x2dab6f);
        _0x376f9c = (await _0x107c2d[_0x46162a(0x1c8)]())[_0x46162a(0x3bd)];
        if (_0x376f9c[0x0] !== 0x1 || _0x376f9c[0x1] !== 0x0) {
            _0xe43e98(_0x46162a(0x3ae) + _0x46162a(0x2c0));
            return;
        }
    }
    let _0x487591;
    switch (_0x12e306) {
    case 0x1:
        _0x487591 = new Uint8Array([
            0x1,
            ..._0x384112[_0x46162a(0x29b)]('\x2e')['\x6d\x61\x70'](Number)
        ]);
        break;
    case 0x2:
        _0x487591 = new Uint8Array([
            0x3,
            _0x384112[_0x46162a(0x248)],
            ..._0x1089d0[_0x46162a(0x235)](_0x384112)
        ]);
        break;
    case 0x3:
        _0x487591 = new Uint8Array([
            0x4,
            ..._0x384112[_0x46162a(0x29b)]('\x3a')[_0x46162a(0x3ac)](_0x46c674 => [
                parseInt(_0x46c674['\x73\x6c\x69\x63\x65'](0x0, 0x2), 0x10),
                parseInt(_0x46c674[_0x46162a(0x3b9)](0x2), 0x10)
            ])
        ]);
        break;
    default:
        _0xe43e98('\u65e0\u6548\u7684\u5730\u5740\u7c7b\u578b\x3a\x20' + _0x12e306);
        return;
    }
    const _0x33a8d4 = new Uint8Array([
        0x5,
        0x1,
        0x0,
        ..._0x487591,
        _0x1b90f3 >> 0x8,
        _0x1b90f3 & 0xff
    ]);
    await _0x3700a2['\x77\x72\x69\x74\x65'](_0x33a8d4);
    _0xe43e98(_0x46162a(0x1c5) + '\x20\u8bf7\u6c42');
    _0x376f9c = (await _0x107c2d['\x72\x65\x61\x64']())[_0x46162a(0x3bd)];
    if (_0x376f9c[0x1] === 0x0) {
        _0xe43e98(_0x46162a(0x265) + '\u5efa\u7acb');
    } else {
        _0xe43e98(_0x46162a(0x1c9) + _0x46162a(0x329));
        return;
    }
    _0x3700a2[_0x46162a(0x2ae) + '\x6b']();
    _0x107c2d['\x72\x65\x6c\x65\x61\x73\x65\x4c\x6f\x63' + '\x6b']();
    return _0x394d87;
}
function socks5AddressParser(_0x54fb1e) {
    const _0x32f243 = _0x20b761;
    let [_0x4232a9, _0x4d1d9b] = _0x54fb1e[_0x32f243(0x29b)]('\x40')[_0x32f243(0x250)]();
    let _0x2d1462, _0x4cea63, _0x591af0, _0xdb6b7;
    if (_0x4d1d9b) {
        const _0xe54c3e = _0x4d1d9b[_0x32f243(0x29b)]('\x3a');
        if (_0xe54c3e[_0x32f243(0x248)] !== 0x2) {
            throw new Error(_0x32f243(0x212) + _0x32f243(0x1cf) + _0x32f243(0x258) + _0x32f243(0x38b) + _0x32f243(0x32e));
        }
        [_0x2d1462, _0x4cea63] = _0xe54c3e;
    }
    const _0xee95a3 = _0x4232a9[_0x32f243(0x29b)]('\x3a');
    _0xdb6b7 = Number(_0xee95a3[_0x32f243(0x1f5)]());
    if (isNaN(_0xdb6b7)) {
        throw new Error(_0x32f243(0x212) + _0x32f243(0x2d2) + '\u662f\u6570\u5b57');
    }
    _0x591af0 = _0xee95a3[_0x32f243(0x27b)]('\x3a');
    const _0x2603e4 = /^\[.*\]$/;
    if (_0x591af0[_0x32f243(0x22b)]('\x3a') && !_0x2603e4[_0x32f243(0x25f)](_0x591af0)) {
        throw new Error(_0x32f243(0x212) + _0x32f243(0x2eb) + '\u5730\u5740\u5fc5\u987b\u7528\u65b9\u62ec\u53f7\u62ec\u8d77' + '\u6765\uff0c\u5982\x20\x5b\x32\x30\x30\x31\x3a' + '\x64\x62\x38\x3a\x3a\x31\x5d');
    }
    const _0x1efc5f = {};
    _0x1efc5f['\x75\x73\x65\x72\x6e\x61\x6d\x65'] = _0x2d1462;
    _0x1efc5f['\x70\x61\x73\x73\x77\x6f\x72\x64'] = _0x4cea63;
    _0x1efc5f[_0x32f243(0x3a9)] = _0x591af0;
    _0x1efc5f[_0x32f243(0x1ce)] = _0xdb6b7;
    return _0x1efc5f;
}
function revertFakeInfo(_0x4332cf, _0x5b79d2, _0x2dc0e1, _0x5a1d11) {
    const _0x27d15f = _0x20b761;
    if (_0x5a1d11)
        _0x4332cf = atob(_0x4332cf);
    _0x4332cf = _0x4332cf[_0x27d15f(0x1d7)](new RegExp(fakeUserID, '\x67'), _0x5b79d2)[_0x27d15f(0x1d7)](new RegExp(fakeHostName, '\x67'), _0x2dc0e1);
    if (_0x5a1d11)
        _0x4332cf = btoa(_0x4332cf);
    return _0x4332cf;
}
async function MD5MD5(_0x3fc367) {
    const _0x4336ae = _0x20b761;
    const _0x3c6f09 = new TextEncoder();
    const _0x2a4f3b = await crypto[_0x4336ae(0x30f)]['\x64\x69\x67\x65\x73\x74']('\x4d\x44\x35', _0x3c6f09[_0x4336ae(0x235)](_0x3fc367));
    const _0x3520ff = Array[_0x4336ae(0x2bf)](new Uint8Array(_0x2a4f3b));
    const _0x228f90 = _0x3520ff['\x6d\x61\x70'](_0x224369 => _0x224369[_0x4336ae(0x2a5)](0x10)[_0x4336ae(0x33f)](0x2, '\x30'))[_0x4336ae(0x27b)]('');
    const _0x3be874 = await crypto[_0x4336ae(0x30f)][_0x4336ae(0x3ab)](_0x4336ae(0x1aa), _0x3c6f09[_0x4336ae(0x235)](_0x228f90['\x73\x6c\x69\x63\x65'](0x7, 0x1b)));
    const _0x337930 = Array[_0x4336ae(0x2bf)](new Uint8Array(_0x3be874));
    const _0x12e7da = _0x337930[_0x4336ae(0x313)](_0x4b0c52 => _0x4b0c52[_0x4336ae(0x2a5)](0x10)['\x70\x61\x64\x53\x74\x61\x72\x74'](0x2, '\x30'))[_0x4336ae(0x27b)]('');
    return _0x12e7da['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73' + '\x65']();
}
async function ADD(_0x7a4cc3) {
    const _0xdb89fa = _0x20b761;
    var _0xb35eb7 = _0x7a4cc3[_0xdb89fa(0x1d7)](/[	|"'\r\n]+/g, '\x2c')[_0xdb89fa(0x1d7)](/,+/g, '\x2c');
    if (_0xb35eb7[_0xdb89fa(0x2c1)](0x0) == '\x2c')
        _0xb35eb7 = _0xb35eb7[_0xdb89fa(0x3b9)](0x1);
    if (_0xb35eb7[_0xdb89fa(0x2c1)](_0xb35eb7[_0xdb89fa(0x248)] - 0x1) == '\x2c')
        _0xb35eb7 = _0xb35eb7[_0xdb89fa(0x3b9)](0x0, _0xb35eb7[_0xdb89fa(0x248)] - 0x1);
    const _0x41a60c = _0xb35eb7[_0xdb89fa(0x29b)]('\x2c');
    return _0x41a60c;
}
async function proxyURL(_0x975d63, _0x15ceca) {
    const _0x4c9d0f = _0x20b761;
    const _0x2ff2be = await ADD(_0x975d63);
    const _0x96ad73 = _0x2ff2be[Math[_0x4c9d0f(0x338)](Math[_0x4c9d0f(0x217)]() * _0x2ff2be[_0x4c9d0f(0x248)])];
    let _0x36bc53 = new URL(_0x96ad73);
    console[_0x4c9d0f(0x334)](_0x36bc53);
    let _0x41e6dc = _0x36bc53['\x70\x72\x6f\x74\x6f\x63\x6f\x6c'][_0x4c9d0f(0x3b9)](0x0, -0x1) || _0x4c9d0f(0x304);
    let _0x34a6b6 = _0x36bc53[_0x4c9d0f(0x3a9)];
    let _0x4e0dd8 = _0x36bc53[_0x4c9d0f(0x2ba)];
    let _0x1f6394 = _0x36bc53[_0x4c9d0f(0x1f7)];
    if (_0x4e0dd8[_0x4c9d0f(0x2c1)](_0x4e0dd8[_0x4c9d0f(0x248)] - 0x1) == '\x2f') {
        _0x4e0dd8 = _0x4e0dd8[_0x4c9d0f(0x3b9)](0x0, -0x1);
    }
    _0x4e0dd8 += _0x15ceca[_0x4c9d0f(0x2ba)];
    let _0x23d104 = _0x41e6dc + _0x4c9d0f(0x31f) + _0x34a6b6 + _0x4e0dd8 + _0x1f6394;
    let _0x5d2d3d = await fetch(_0x23d104);
    let _0xff33e1 = new Response(_0x5d2d3d[_0x4c9d0f(0x261)], {
        '\x73\x74\x61\x74\x75\x73': _0x5d2d3d[_0x4c9d0f(0x326)],
        '\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74': _0x5d2d3d[_0x4c9d0f(0x20a)],
        '\x68\x65\x61\x64\x65\x72\x73': _0x5d2d3d['\x68\x65\x61\x64\x65\x72\x73']
    });
    _0xff33e1[_0x4c9d0f(0x3db)][_0x4c9d0f(0x205)]('\x58\x2d\x4e\x65\x77\x2d\x55\x52\x4c', _0x23d104);
    return _0xff33e1;
}
function checkSUB(_0x1a1f63) {
    const _0x4b7f04 = _0x20b761;
    if ((!sub || sub == '') && addresses[_0x4b7f04(0x248)] + addressesapi[_0x4b7f04(0x248)] + addressesnotls[_0x4b7f04(0x248)] + addressesnotlsapi[_0x4b7f04(0x248)] + addressescsv['\x6c\x65\x6e\x67\x74\x68'] == 0x0) {
        addresses = [
            '\x4a\x6f\x69\x6e\x2e\x6d\x79\x2e\x54\x65' + _0x4b7f04(0x3c5) + '\x6e\x6e\x65\x6c\x2e\x43\x4d\x4c\x69\x75' + _0x4b7f04(0x234) + _0x4b7f04(0x2d9) + _0x4b7f04(0x3ba) + _0x4b7f04(0x1ed) + _0x4b7f04(0x376) + _0x4b7f04(0x282) + _0x4b7f04(0x1e1) + _0x4b7f04(0x2f9),
            '\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31\x3a' + _0x4b7f04(0x29f),
            _0x4b7f04(0x204) + '\x33',
            _0x4b7f04(0x377) + _0x4b7f04(0x254),
            '\x6a\x61\x70\x61\x6e\x2e\x63\x6f\x6d\x3a' + _0x4b7f04(0x200),
            _0x4b7f04(0x1e0) + '\x3a\x32\x30\x38\x33',
            _0x4b7f04(0x2d5) + _0x4b7f04(0x26f),
            '\x77\x77\x77\x2e\x67\x6f\x76\x2e\x75\x61' + _0x4b7f04(0x1be),
            '\x77\x77\x77\x2e\x67\x63\x6f\x2e\x67\x6f' + _0x4b7f04(0x2d3),
            _0x4b7f04(0x23a),
            _0x4b7f04(0x2a0),
            '\x77\x77\x77\x2e\x77\x74\x6f\x2e\x6f\x72' + _0x4b7f04(0x3d1),
            '\x66\x62\x69\x2e\x67\x6f\x76\x3a\x32\x30' + '\x38\x37',
            _0x4b7f04(0x1b1),
            '\x5b\x32\x36\x30\x36\x3a\x34\x37\x30\x30' + '\x3a\x3a\x5d\x23\x49\x50\x76\x36'
        ];
        if (_0x1a1f63[_0x4b7f04(0x22b)](_0x4b7f04(0x39d) + '\x65\x76'))
            addressesnotls = [
                '\x75\x73\x61\x2e\x76\x69\x73\x61\x2e\x63' + '\x6f\x6d\x3a\x32\x30\x39\x35',
                '\x6d\x79\x61\x6e\x6d\x61\x72\x2e\x76\x69' + '\x73\x61\x2e\x63\x6f\x6d\x3a\x38\x30\x38' + '\x30',
                '\x64\x79\x6e\x61\x64\x6f\x74\x2e\x63\x6f' + _0x4b7f04(0x260),
                _0x4b7f04(0x2e2) + '\x72\x6f\x70\x65\x2e\x63\x68\x3a\x32\x30' + '\x35\x32',
                _0x4b7f04(0x363) + '\x6d\x3a\x32\x30\x38\x32',
                '\x77\x77\x77\x2e\x76\x69\x73\x61\x73\x6f' + _0x4b7f04(0x3c8) + _0x4b7f04(0x39a) + '\x38\x36'
            ];
    }
}
const 啥啥啥_写的这是啥啊 = _0x20b761(0x299);
function 配置信息(_0x1b193c, _0xbcae90) {
    const _0x459eac = _0x20b761;
    const _0x4bfdcb = atob(啥啥啥_写的这是啥啊);
    const _0x36b9f7 = FileName;
    let _0x2870a9 = _0xbcae90;
    let _0x4c6db9 = 0x1bb;
    const _0x557cb3 = _0x1b193c;
    const _0x19ab3e = _0x459eac(0x23e);
    const _0x5e2b6e = '\x77\x73';
    const _0x361644 = _0xbcae90;
    const _0x1515b5 = _0x459eac(0x2ec);
    let _0x3a94a6 = [
        '\x74\x6c\x73',
        !![]
    ];
    const _0x1c6c96 = _0xbcae90;
    const _0x5c6e6b = '\x72\x61\x6e\x64\x6f\x6d\x69\x7a\x65\x64';
    if (_0xbcae90['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x459eac(0x39d) + '\x65\x76')) {
        _0x2870a9 = _0x459eac(0x27c);
        _0x4c6db9 = 0x50;
        _0x3a94a6 = [
            '',
            ![]
        ];
    }
    const _0x216cd7 = _0x4bfdcb + _0x459eac(0x31f) + _0x557cb3 + '\x40' + _0x2870a9 + '\x3a' + _0x4c6db9 + ('\x3f\x65\x6e\x63\x72\x79\x70\x74\x69\x6f' + '\x6e\x3d') + _0x19ab3e + '\x26\x73\x65\x63\x75\x72\x69\x74\x79\x3d' + _0x3a94a6[0x0] + _0x459eac(0x2b9) + _0x1c6c96 + _0x459eac(0x2ac) + _0x5c6e6b + _0x459eac(0x21e) + _0x5e2b6e + '\x26\x68\x6f\x73\x74\x3d' + _0x361644 + _0x459eac(0x216) + encodeURIComponent(_0x1515b5) + '\x23' + encodeURIComponent(_0x36b9f7);
    const _0x238cbe = _0x459eac(0x2f1) + _0x4bfdcb + '\x0a\x20\x20\x6e\x61\x6d\x65\x3a\x20' + FileName + ('\x0a\x20\x20\x73\x65\x72\x76\x65\x72\x3a' + '\x20') + _0x2870a9 + _0x459eac(0x35d) + _0x4c6db9 + '\x0a\x20\x20\x75\x75\x69\x64\x3a\x20' + _0x557cb3 + (_0x459eac(0x1e2) + '\x3a\x20') + _0x5e2b6e + _0x459eac(0x1f6) + _0x3a94a6[0x1] + (_0x459eac(0x3b7) + _0x459eac(0x34f) + '\x20') + _0x1c6c96 + (_0x459eac(0x290) + _0x459eac(0x2be) + '\x74\x3a\x20') + _0x5c6e6b + (_0x459eac(0x281) + _0x459eac(0x39c) + '\x3a\x20\x22') + _0x1515b5 + (_0x459eac(0x33b) + _0x459eac(0x291) + _0x459eac(0x368)) + _0x361644;
    return [
        _0x216cd7,
        _0x238cbe
    ];
}
let subParams = [
    _0x20b761(0x366),
    _0x20b761(0x2aa),
    _0x20b761(0x309),
    _0x20b761(0x343),
    _0x20b761(0x2e1),
    '\x73\x62'
];
async function getVLESSConfig(_0x44e5c3, _0x339245, _0x1e648b, _0x1f1e25, _0x141050, _0x289a93, _0x1f22d4) {
    const _0x1d4825 = _0x20b761;
    const _0x537be0 = _0x289a93[_0x1d4825(0x2ba)] == '\x2f' + _0x1f22d4['\x4b\x45\x59'] ? _0x1f22d4[_0x1d4825(0x269)] : _0x44e5c3;
    checkSUB(_0x339245);
    const _0x2e52cc = _0x1f1e25['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73' + '\x65']();
    const _0x4fd50e = 配置信息(_0x44e5c3, _0x339245);
    const _0x4049c7 = _0x4fd50e[0x0];
    const _0x242642 = _0x4fd50e[0x1];
    let _0x34d90f = '';
    if (_0x339245[_0x1d4825(0x22b)](_0x1d4825(0x39d) + '\x65\x76') || _0x339245[_0x1d4825(0x22b)]('\x2e\x70\x61\x67\x65\x73\x2e\x64\x65\x76')) {
        if (proxyhostsURL && (!proxyhosts || proxyhosts['\x6c\x65\x6e\x67\x74\x68'] == 0x0)) {
            try {
                const _0x4a5ae2 = await fetch(proxyhostsURL);
                if (!_0x4a5ae2['\x6f\x6b']) {
                    console['\x65\x72\x72\x6f\x72']('\u83b7\u53d6\u5730\u5740\u65f6\u51fa\u9519\x3a', _0x4a5ae2[_0x1d4825(0x326)], _0x4a5ae2['\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74']);
                    return;
                }
                const _0x833710 = await _0x4a5ae2[_0x1d4825(0x2bc)]();
                const _0x427be7 = _0x833710['\x73\x70\x6c\x69\x74']('\x0a');
                const _0x417f57 = _0x427be7['\x66\x69\x6c\x74\x65\x72'](_0x39b633 => _0x39b633[_0x1d4825(0x298)]() !== '');
                proxyhosts = proxyhosts[_0x1d4825(0x2ed)](_0x417f57);
            } catch (_0x53c89a) {
            }
        }
        if (proxyhosts['\x6c\x65\x6e\x67\x74\x68'] != 0x0)
            _0x34d90f = proxyhosts[Math[_0x1d4825(0x338)](Math[_0x1d4825(0x217)]() * proxyhosts[_0x1d4825(0x248)])] + '\x2f';
    }
    if (_0x2e52cc[_0x1d4825(0x22b)](_0x1d4825(0x3d6)) && !subParams[_0x1d4825(0x2fc)](_0x91589d => _0x289a93[_0x1d4825(0x28e) + '\x6d\x73']['\x68\x61\x73'](_0x91589d))) {
        const _0x36e78a = socks5s[_0x1d4825(0x313)](_0x820708 => {
            const _0x3cf2fa = _0x1d4825;
            if (_0x820708[_0x3cf2fa(0x22b)]('\x40'))
                return _0x820708[_0x3cf2fa(0x29b)]('\x40')[0x1];
            else if (_0x820708[_0x3cf2fa(0x22b)]('\x2f\x2f'))
                return _0x820708[_0x3cf2fa(0x29b)]('\x2f\x2f')[0x1];
            else
                return _0x820708;
        });
        let _0x488045 = '';
        if (go2Socks5s[_0x1d4825(0x248)] > 0x0 && enableSocks) {
            _0x488045 = '' + decodeURIComponent(_0x1d4825(0x295) + _0x1d4825(0x365) + '\x39\x25\x42\x44\x25\x45\x35\x25\x39\x30' + _0x1d4825(0x327) + _0x1d4825(0x34e) + _0x1d4825(0x1e3));
            if (go2Socks5s[_0x1d4825(0x22b)](atob(_0x1d4825(0x390))) || go2Socks5s[_0x1d4825(0x22b)](atob('\x4b\x67\x3d\x3d')))
                _0x488045 += decodeURIComponent(_0x1d4825(0x382) + '\x45\x36\x25\x39\x43\x25\x38\x39\x25\x45' + _0x1d4825(0x364) + '\x25\x38\x37\x25\x38\x46') + '\x0a';
            else
                _0x488045 += _0x1d4825(0x224) + go2Socks5s[_0x1d4825(0x27b)](_0x1d4825(0x224)) + '\x0a';
        }
        let _0xdf0dc3 = '\x0a';
        if (!_0x1e648b || _0x1e648b == '') {
            if (enableSocks)
                _0xdf0dc3 += '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f' + '\uff09\x3a\x20\x53\x6f\x63\x6b\x73\x35\x0a' + '\x20\x20' + _0x36e78a['\x6a\x6f\x69\x6e'](_0x1d4825(0x224)) + '\x0a' + _0x488045;
            else if (proxyIP && proxyIP != '')
                _0xdf0dc3 += _0x1d4825(0x26b) + _0x1d4825(0x371) + '\x0a\x20\x20' + proxyIPs[_0x1d4825(0x27b)](_0x1d4825(0x224)) + '\x0a';
            else
                _0xdf0dc3 += '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f' + _0x1d4825(0x1fe) + _0x1d4825(0x266) + _0x1d4825(0x337) + '\x20\uff01\uff01\uff01\x0a';
            _0xdf0dc3 += '\x0a\u60a8\u7684\u8ba2\u9605\u5185\u5bb9\u7531\x20\u5185' + _0x1d4825(0x1e5) + '\x73\x2f\x41\x44\x44\x2a\x20\u53c2\u6570\u53d8' + _0x1d4825(0x267);
            if (addresses[_0x1d4825(0x248)] > 0x0)
                _0xdf0dc3 += _0x1d4825(0x3d2) + _0x1d4825(0x230) + addresses['\x6a\x6f\x69\x6e'](_0x1d4825(0x224)) + '\x0a';
            if (addressesnotls[_0x1d4825(0x248)] > 0x0)
                _0xdf0dc3 += _0x1d4825(0x30e) + _0x1d4825(0x388) + _0x1d4825(0x2db) + addressesnotls['\x6a\x6f\x69\x6e']('\x0a\x20\x20') + '\x0a';
            if (addressesapi['\x6c\x65\x6e\x67\x74\x68'] > 0x0)
                _0xdf0dc3 += _0x1d4825(0x2c3) + _0x1d4825(0x2f6) + '\x41\x50\x49\uff09\x3a\x20\x0a\x20\x20' + addressesapi[_0x1d4825(0x27b)](_0x1d4825(0x224)) + '\x0a';
            if (addressesnotlsapi[_0x1d4825(0x248)] > 0x0)
                _0xdf0dc3 += _0x1d4825(0x3d4) + _0x1d4825(0x223) + _0x1d4825(0x398) + _0x1d4825(0x344) + addressesnotlsapi[_0x1d4825(0x27b)](_0x1d4825(0x224)) + '\x0a';
            if (addressescsv['\x6c\x65\x6e\x67\x74\x68'] > 0x0)
                _0xdf0dc3 += _0x1d4825(0x285) + '\x65\x73\x74\u6d4b\u901f\x63\x73\x76\u6587\u4ef6' + _0x1d4825(0x264) + DLS + _0x1d4825(0x3b3) + addressescsv[_0x1d4825(0x27b)](_0x1d4825(0x224)) + '\x0a';
        } else {
            if (enableSocks)
                _0xdf0dc3 += _0x1d4825(0x26b) + _0x1d4825(0x381) + '\x20\x20' + _0x36e78a[_0x1d4825(0x27b)](_0x1d4825(0x224)) + '\x0a' + _0x488045;
            else if (proxyIP && proxyIP != '')
                _0xdf0dc3 += '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f' + _0x1d4825(0x371) + _0x1d4825(0x224) + proxyIPs[_0x1d4825(0x27b)](_0x1d4825(0x224)) + '\x0a';
            else if (_0x141050 == _0x1d4825(0x2cf))
                _0xdf0dc3 += _0x1d4825(0x26b) + _0x1d4825(0x1ea) + '\x78\x79\x49\x50\x0a';
            else
                _0xdf0dc3 += '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f' + '\uff09\x3a\x20\u65e0\u6cd5\u8bbf\u95ee\x2c\x20\u9700' + _0x1d4825(0x266) + _0x1d4825(0x337) + '\x20\uff01\uff01\uff01\x0a';
            _0xdf0dc3 += _0x1d4825(0x2fa) + _0x1d4825(0x20b) + _0x1e648b;
        }
        if (_0x1f22d4['\x4b\x45\x59'] && _0x289a93[_0x1d4825(0x2ba)] !== '\x2f' + _0x1f22d4[_0x1d4825(0x269)])
            _0xdf0dc3 = '';
        else
            _0xdf0dc3 += _0x1d4825(0x2b6) + _0x1d4825(0x335) + subProtocol + _0x1d4825(0x31f) + subconverter + (_0x1d4825(0x340) + '\uff08\u8ba2\u9605\u8f6c\u6362\u914d\u7f6e\u6587\u4ef6\uff09' + '\x3a\x20') + subconfig;
        const _0xa8c962 = _0x537be0 != _0x44e5c3 ? '\x54\x4f\x4b\x45\x4e\x3a\x20' + _0x537be0 + _0x1d4825(0x228) + _0x44e5c3 + _0x1d4825(0x22c) + userIDLow + '\x0a' + userIDTime + (_0x1d4825(0x26a) + _0x1d4825(0x270)) + effectiveTime + ('\x20\u5929\x0a\x55\x50\x54\x49\x4d\x45\uff08' + _0x1d4825(0x3a7) + '\uff09\x3a\x20') + updateTime + '\x20\u65f6\uff08\u5317\u4eac\u65f6\u95f4\uff09\x0a\x0a' : '' + userIDTime;
        return '\x0a\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x1d4825(0x316) + _0x1d4825(0x316) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x1d4825(0x316) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x1d4825(0x275) + _0x1d4825(0x249) + '\x62\x20\u8ba2\u9605\u5730\u5740\x2c\x20\u652f\u6301' + '\x20\x42\x61\x73\x65\x36\x34\u3001\x63\x6c' + _0x1d4825(0x1e8) + _0x1d4825(0x1d9) + _0x1d4825(0x321) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + '\x2d\x2d\x2d\x2d\x2d\x2d\x0a\u5feb\u901f\u81ea' + _0x1d4825(0x30d) + _0x1d4825(0x301) + _0x34d90f + _0x339245 + '\x2f' + _0x537be0 + '\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f' + _0x34d90f + _0x339245 + '\x2f' + _0x537be0 + (_0x1d4825(0x215) + _0x1d4825(0x3d5) + _0x1d4825(0x301)) + _0x34d90f + _0x339245 + '\x2f' + _0x537be0 + (_0x1d4825(0x2f7) + _0x1d4825(0x31f)) + _0x34d90f + _0x339245 + '\x2f' + _0x537be0 + (_0x1d4825(0x342) + _0x1d4825(0x36f) + _0x1d4825(0x1b7)) + _0x34d90f + _0x339245 + '\x2f' + _0x537be0 + (_0x1d4825(0x3cc) + _0x1d4825(0x21c) + _0x1d4825(0x2a2)) + _0x34d90f + _0x339245 + '\x2f' + _0x537be0 + (_0x1d4825(0x237) + '\x2f\x2f') + _0x34d90f + _0x339245 + '\x2f' + _0x537be0 + (_0x1d4825(0x1c2) + _0x1d4825(0x2e9) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x28d) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x1d4825(0x316) + _0x1d4825(0x316) + _0x1d4825(0x316) + _0x1d4825(0x316) + _0x1d4825(0x2f4)) + FileName + ('\x20\u914d\u7f6e\u4fe1\u606f\x0a\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + _0x1d4825(0x26e)) + _0xa8c962 + _0x1d4825(0x30a) + _0x339245 + '\x0a\x55\x55\x49\x44\x3a\x20' + _0x44e5c3 + _0x1d4825(0x229) + fakeUserID + '\x0a\x55\x41\x3a\x20' + _0x1f1e25 + '\x0a' + _0xdf0dc3 + (_0x1d4825(0x1dc) + _0x1d4825(0x2e9) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2a9) + _0x1d4825(0x316) + _0x1d4825(0x316) + _0x1d4825(0x316) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x1d4825(0x316) + _0x1d4825(0x1bc) + _0x1d4825(0x33c) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + _0x1d4825(0x26e)) + _0x4049c7 + (_0x1d4825(0x1dc) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + '\x2d\x2d\x2d\x2d\x0a\x23\x23\x23\x23\x23' + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x1d4825(0x316) + _0x1d4825(0x316) + _0x1d4825(0x316) + _0x1d4825(0x316) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x0a' + _0x1d4825(0x2e8) + '\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x341)) + _0x242642 + (_0x1d4825(0x1dc) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2a9) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x1d4825(0x316) + _0x1d4825(0x316) + _0x1d4825(0x316) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x0a' + _0x1d4825(0x378) + _0x1d4825(0x374) + _0x1d4825(0x280) + _0x1d4825(0x392) + _0x1d4825(0x1e4) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x1ae) + '\u5730\u5740\x20\x53\x74\x61\x72\x21\x53\x74' + _0x1d4825(0x3c9) + '\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67' + _0x1d4825(0x318) + _0x1d4825(0x3bf) + _0x1d4825(0x1a8) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x1d4825(0x2e9) + _0x1d4825(0x2e9) + _0x1d4825(0x296) + _0x1d4825(0x316) + _0x1d4825(0x316) + _0x1d4825(0x316) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x1d4825(0x316) + _0x1d4825(0x356));
    } else {
        if (typeof fetch != _0x1d4825(0x241)) {
            return _0x1d4825(0x346) + _0x1d4825(0x393) + '\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20' + _0x1d4825(0x2b4) + _0x1d4825(0x257);
        }
        let _0x37302d = [];
        let _0x2476b6 = [];
        let _0xc19f73 = [];
        let _0x319b4a = [];
        if (_0x339245[_0x1d4825(0x22b)](_0x1d4825(0x39d) + '\x65\x76')) {
            noTLS = _0x1d4825(0x2cf);
            fakeHostName = fakeHostName + (_0x1d4825(0x39d) + '\x65\x76');
            _0xc19f73 = await getAddressesapi(addressesnotlsapi);
            _0x319b4a = await getAddressescsv(_0x1d4825(0x3a8));
        } else if (_0x339245[_0x1d4825(0x22b)]('\x2e\x70\x61\x67\x65\x73\x2e\x64\x65\x76')) {
            fakeHostName = fakeHostName + _0x1d4825(0x39e);
        } else if (_0x339245[_0x1d4825(0x22b)](_0x1d4825(0x306)) || _0x339245['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x6e\x6f\x74\x6c\x73') || noTLS == _0x1d4825(0x2cf)) {
            noTLS = _0x1d4825(0x2cf);
            fakeHostName = _0x1d4825(0x218) + fakeHostName + _0x1d4825(0x2d0);
            _0xc19f73 = await getAddressesapi(addressesnotlsapi);
            _0x319b4a = await getAddressescsv(_0x1d4825(0x3a8));
        } else {
            fakeHostName = fakeHostName + _0x1d4825(0x1b8);
        }
        console[_0x1d4825(0x334)](_0x1d4825(0x1e6) + fakeHostName);
        let _0x6569b2 = subProtocol + _0x1d4825(0x31f) + _0x1e648b + '\x2f\x73\x75\x62\x3f\x68\x6f\x73\x74\x3d' + fakeHostName + _0x1d4825(0x226) + fakeUserID + (_0x1d4825(0x202) + _0x1d4825(0x262) + _0x1d4825(0x33e)) + _0x141050;
        let _0xf0a962 = !![];
        if (!_0x1e648b || _0x1e648b == '') {
            if (_0x339245[_0x1d4825(0x22b)](_0x1d4825(0x283) + '\x76') || _0x339245['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x70\x61\x67\x65\x73\x2e\x64\x65\x76')) {
                if (proxyhostsURL && (!proxyhosts || proxyhosts[_0x1d4825(0x248)] == 0x0)) {
                    try {
                        const _0xc08582 = await fetch(proxyhostsURL);
                        if (!_0xc08582['\x6f\x6b']) {
                            console[_0x1d4825(0x208)](_0x1d4825(0x21d), _0xc08582[_0x1d4825(0x326)], _0xc08582['\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74']);
                            return;
                        }
                        const _0x3c3a2 = await _0xc08582[_0x1d4825(0x2bc)]();
                        const _0x5b6fd8 = _0x3c3a2[_0x1d4825(0x29b)]('\x0a');
                        const _0x4c53c9 = _0x5b6fd8['\x66\x69\x6c\x74\x65\x72'](_0x31496b => _0x31496b[_0x1d4825(0x298)]() !== '');
                        proxyhosts = proxyhosts['\x63\x6f\x6e\x63\x61\x74'](_0x4c53c9);
                    } catch (_0x570e99) {
                        console['\x65\x72\x72\x6f\x72'](_0x1d4825(0x21d), _0x570e99);
                    }
                }
                proxyhosts = [...new Set(proxyhosts)];
            }
            _0x37302d = await getAddressesapi(addressesapi);
            _0x2476b6 = await getAddressescsv(_0x1d4825(0x355));
            _0x6569b2 = _0x1d4825(0x1b7) + _0x339245 + '\x2f' + fakeUserID;
            if (_0x339245[_0x1d4825(0x22b)](_0x1d4825(0x306)) || _0x339245[_0x1d4825(0x22b)]('\x6e\x6f\x74\x6c\x73') || noTLS == _0x1d4825(0x2cf))
                _0x6569b2 += _0x1d4825(0x26c);
            console[_0x1d4825(0x334)](_0x1d4825(0x222) + _0x6569b2);
        }
        if (!_0x2e52cc[_0x1d4825(0x22b)]((_0x1d4825(0x1b5) + _0x1d4825(0x3a0))[_0x1d4825(0x27a) + '\x65']())) {
            if (_0x2e52cc[_0x1d4825(0x22b)]('\x63\x6c\x61\x73\x68') && !_0x2e52cc[_0x1d4825(0x22b)](_0x1d4825(0x39b)) || _0x289a93[_0x1d4825(0x28e) + '\x6d\x73'][_0x1d4825(0x383)](_0x1d4825(0x343)) && !_0x2e52cc[_0x1d4825(0x22b)]('\x73\x75\x62\x63\x6f\x6e\x76\x65\x72\x74' + '\x65\x72')) {
                _0x6569b2 = subProtocol + _0x1d4825(0x31f) + subconverter + ('\x2f\x73\x75\x62\x3f\x74\x61\x72\x67\x65' + _0x1d4825(0x1fd) + '\x6c\x3d') + encodeURIComponent(_0x6569b2) + (_0x1d4825(0x21b) + _0x1d4825(0x213) + '\x3d') + encodeURIComponent(subconfig) + (_0x1d4825(0x305) + _0x1d4825(0x2d1) + _0x1d4825(0x221) + _0x1d4825(0x227) + _0x1d4825(0x3cd) + '\x65\x26\x73\x6f\x72\x74\x3d\x66\x61\x6c' + '\x73\x65\x26\x6e\x65\x77\x5f\x6e\x61\x6d' + '\x65\x3d\x74\x72\x75\x65');
                _0xf0a962 = ![];
            } else if (_0x2e52cc[_0x1d4825(0x22b)](_0x1d4825(0x2c8)) || _0x2e52cc[_0x1d4825(0x22b)](_0x1d4825(0x2e1)) || (_0x289a93[_0x1d4825(0x28e) + '\x6d\x73'][_0x1d4825(0x383)](_0x1d4825(0x2e1)) || _0x289a93['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61' + '\x6d\x73']['\x68\x61\x73']('\x73\x62')) && !_0x2e52cc['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x1d4825(0x1bd) + '\x65\x72')) {
                _0x6569b2 = subProtocol + _0x1d4825(0x31f) + subconverter + (_0x1d4825(0x1ab) + _0x1d4825(0x333) + _0x1d4825(0x37f)) + encodeURIComponent(_0x6569b2) + (_0x1d4825(0x21b) + _0x1d4825(0x213) + '\x3d') + encodeURIComponent(subconfig) + (_0x1d4825(0x305) + _0x1d4825(0x2d1) + _0x1d4825(0x221) + _0x1d4825(0x227) + '\x65\x26\x66\x64\x6e\x3d\x66\x61\x6c\x73' + _0x1d4825(0x2b5) + _0x1d4825(0x2bb) + _0x1d4825(0x1d3));
                _0xf0a962 = ![];
            }
        }
        try {
            let _0xde347d;
            if ((!_0x1e648b || _0x1e648b == '') && _0xf0a962 == !![]) {
                _0xde347d = await subAddresses(fakeHostName, fakeUserID, noTLS, _0x37302d, _0x2476b6, _0xc19f73, _0x319b4a);
            } else {
                const _0x2d0c03 = {};
                _0x2d0c03[_0x1d4825(0x31e)] = _0x1f1e25 + (_0x1d4825(0x240) + _0x1d4825(0x219) + _0x1d4825(0x1f9));
                const _0x136a6a = {};
                _0x136a6a[_0x1d4825(0x3db)] = _0x2d0c03;
                const _0x343701 = await fetch(_0x6569b2, _0x136a6a);
                _0xde347d = await _0x343701[_0x1d4825(0x2bc)]();
            }
            if (_0x289a93[_0x1d4825(0x2ba)] == '\x2f' + fakeUserID)
                return _0xde347d;
            return revertFakeInfo(_0xde347d, _0x44e5c3, _0x339245, _0xf0a962);
        } catch (_0x4ac191) {
            console[_0x1d4825(0x208)]('\x45\x72\x72\x6f\x72\x20\x66\x65\x74\x63' + '\x68\x69\x6e\x67\x20\x63\x6f\x6e\x74\x65' + _0x1d4825(0x3d3), _0x4ac191);
            return _0x1d4825(0x322) + '\x68\x69\x6e\x67\x20\x63\x6f\x6e\x74\x65' + _0x1d4825(0x336) + _0x4ac191[_0x1d4825(0x27e)];
        }
    }
}
async function getAccountId(_0x4bb22, _0x11d61f) {
    const _0x1880a4 = _0x20b761;
    try {
        const _0x1eba37 = _0x1880a4(0x3cf) + _0x1880a4(0x207) + _0x1880a4(0x1d1) + '\x65\x6e\x74\x2f\x76\x34\x2f\x61\x63\x63' + _0x1880a4(0x345);
        const _0x4a0404 = {};
        _0x4a0404['\x58\x2d\x41\x55\x54\x48\x2d\x45\x4d\x41' + '\x49\x4c'] = _0x4bb22;
        _0x4a0404['\x58\x2d\x41\x55\x54\x48\x2d\x4b\x45\x59'] = _0x11d61f;
        const _0x4e40f3 = new Headers(_0x4a0404);
        const _0x467f7b = {};
        _0x467f7b['\x68\x65\x61\x64\x65\x72\x73'] = _0x4e40f3;
        const _0x5ed75d = await fetch(_0x1eba37, _0x467f7b);
        const _0x429268 = await _0x5ed75d[_0x1880a4(0x220)]();
        return _0x429268[_0x1880a4(0x3ce)][0x0]['\x69\x64'];
    } catch (_0x6035d7) {
        return ![];
    }
}
async function getSum(_0x5513b1, _0x416a1f, _0x4e6483, _0x2ec206, _0x1741d1, _0x17ce62) {
    const _0x378360 = _0x20b761;
    try {
        const _0xab68fb = new Date(_0x1741d1)[_0x378360(0x253) + '\x67']();
        const _0x454548 = new Date(_0x17ce62)['\x74\x6f\x49\x53\x4f\x53\x74\x72\x69\x6e' + '\x67']();
        const _0x1fded4 = {};
        _0x1fded4['\x64\x61\x74\x65\x74\x69\x6d\x65\x5f\x67' + '\x65\x71'] = _0xab68fb;
        _0x1fded4[_0x378360(0x2df) + '\x65\x71'] = _0x454548;
        const _0x2444b2 = {};
        _0x2444b2['\x61\x63\x63\x6f\x75\x6e\x74\x49\x64'] = _0x5513b1;
        _0x2444b2[_0x378360(0x312)] = _0x1fded4;
        const _0x2666c7 = {};
        _0x2666c7['\x71\x75\x65\x72\x79'] = _0x378360(0x251) + _0x378360(0x21a) + _0x378360(0x2d6) + _0x378360(0x27f) + _0x378360(0x35a) + '\x65\x72\x3a\x20\x41\x63\x63\x6f\x75\x6e' + '\x74\x57\x6f\x72\x6b\x65\x72\x73\x49\x6e' + _0x378360(0x31b) + '\x64\x61\x70\x74\x69\x76\x65\x46\x69\x6c' + _0x378360(0x38d) + '\x62\x6a\x65\x63\x74\x29\x20\x7b\x0a\x09' + _0x378360(0x272) + '\x7b\x0a\x09\x09\x09\x09\x09\x61\x63\x63' + '\x6f\x75\x6e\x74\x73\x28\x66\x69\x6c\x74' + _0x378360(0x2ab) + _0x378360(0x203) + '\x63\x6f\x75\x6e\x74\x49\x64\x7d\x29\x20' + _0x378360(0x2bd) + '\x67\x65\x73\x46\x75\x6e\x63\x74\x69\x6f' + _0x378360(0x209) + '\x6f\x6e\x73\x41\x64\x61\x70\x74\x69\x76' + _0x378360(0x314) + '\x6d\x69\x74\x3a\x20\x31\x30\x30\x30\x2c' + _0x378360(0x37d) + _0x378360(0x3c2) + _0x378360(0x307) + '\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09' + _0x378360(0x1fc) + '\x09\x09\x09\x09\x09\x09\x09\x7d\x0a\x09' + _0x378360(0x2c6) + _0x378360(0x25b) + _0x378360(0x3d0) + _0x378360(0x1cb) + _0x378360(0x394) + _0x378360(0x1a9) + '\x3a\x20\x24\x66\x69\x6c\x74\x65\x72\x29' + _0x378360(0x2ca) + _0x378360(0x2ad) + _0x378360(0x3b1) + '\x74\x73\x0a\x09\x09\x09\x09\x09\x09\x09' + '\x7d\x0a\x09\x09\x09\x09\x09\x09\x7d\x0a' + '\x09\x09\x09\x09\x09\x7d\x0a\x09\x09\x09' + _0x378360(0x3a1);
        _0x2666c7['\x76\x61\x72\x69\x61\x62\x6c\x65\x73'] = _0x2444b2;
        const _0x2eeb20 = JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x2666c7);
        const _0x2390ad = {};
        _0x2390ad[_0x378360(0x210) + '\x70\x65'] = _0x378360(0x1b4) + _0x378360(0x292);
        _0x2390ad[_0x378360(0x339) + '\x49\x4c'] = _0x4e6483;
        _0x2390ad[_0x378360(0x3c7)] = _0x2ec206;
        const _0xe699ce = new Headers(_0x2390ad);
        const _0x1a18e5 = {};
        _0x1a18e5[_0x378360(0x3dc)] = _0x378360(0x38e);
        _0x1a18e5[_0x378360(0x3db)] = _0xe699ce;
        _0x1a18e5[_0x378360(0x261)] = _0x2eeb20;
        const _0x10e75f = await fetch(_0x378360(0x3cf) + '\x69\x2e\x63\x6c\x6f\x75\x64\x66\x6c\x61' + _0x378360(0x1d1) + _0x378360(0x2a6) + _0x378360(0x1f4), _0x1a18e5);
        if (!_0x10e75f['\x6f\x6b']) {
            throw new Error(_0x378360(0x1af) + _0x378360(0x38f) + _0x10e75f[_0x378360(0x326)]);
        }
        const _0x178b13 = await _0x10e75f['\x6a\x73\x6f\x6e']();
        const _0x2ce293 = _0x178b13?.[_0x378360(0x35f)]?.['\x76\x69\x65\x77\x65\x72']?.[_0x378360(0x1ca)]?.[_0x416a1f]?.[_0x378360(0x286) + '\x69\x6f\x6e\x73\x49\x6e\x76\x6f\x63\x61' + _0x378360(0x36d) + _0x378360(0x370)];
        const _0x1d9daa = _0x178b13?.[_0x378360(0x35f)]?.[_0x378360(0x310)]?.['\x61\x63\x63\x6f\x75\x6e\x74\x73']?.[_0x416a1f]?.[_0x378360(0x330) + _0x378360(0x3de) + _0x378360(0x252)];
        if (!_0x2ce293 && !_0x1d9daa) {
            throw new Error(_0x378360(0x36c));
        }
        const _0x10ff7c = _0x2ce293[_0x378360(0x362)]((_0x1d9d56, _0x3521f8) => _0x1d9d56 + _0x3521f8?.['\x73\x75\x6d'][_0x378360(0x24e)], 0x0);
        const _0x256d60 = _0x1d9daa[_0x378360(0x362)]((_0x5053f0, _0x2725e7) => _0x5053f0 + _0x2725e7?.[_0x378360(0x38a)][_0x378360(0x24e)], 0x0);
        return [
            _0x10ff7c,
            _0x256d60
        ];
    } catch (_0xff99f9) {
        return [
            0x0,
            0x0
        ];
    }
}
let proxyIPPool = [];
async function getAddressesapi(_0x3a73a2) {
    const _0x2f1fce = _0x20b761;
    if (!_0x3a73a2 || _0x3a73a2[_0x2f1fce(0x248)] === 0x0)
        return [];
    let _0x45fce2 = '';
    const _0x505a22 = new AbortController();
    const _0x446d7b = setTimeout(() => {
        const _0x2f3235 = _0x2f1fce;
        _0x505a22[_0x2f3235(0x243)]();
    }, 0x7d0);
    try {
        const _0x5dcf26 = {};
        _0x5dcf26['\x41\x63\x63\x65\x70\x74'] = _0x2f1fce(0x2b7) + _0x2f1fce(0x1b4) + _0x2f1fce(0x2f2) + _0x2f1fce(0x30b) + _0x2f1fce(0x3a4);
        _0x5dcf26[_0x2f1fce(0x31e)] = _0x2f1fce(0x1b5) + '\x2d\x65\x64\x67\x65\x74\x75\x6e\x6e\x65' + _0x2f1fce(0x3c0);
        const _0x548f8a = {};
        _0x548f8a[_0x2f1fce(0x3dc)] = _0x2f1fce(0x2d4);
        _0x548f8a[_0x2f1fce(0x3db)] = _0x5dcf26;
        _0x548f8a[_0x2f1fce(0x34c)] = _0x505a22[_0x2f1fce(0x34c)];
        const _0x531b72 = await Promise['\x61\x6c\x6c\x53\x65\x74\x74\x6c\x65\x64'](_0x3a73a2[_0x2f1fce(0x313)](_0x138c5a => fetch(_0x138c5a, _0x548f8a)[_0x2f1fce(0x29e)](_0x2d9a0a => _0x2d9a0a['\x6f\x6b'] ? _0x2d9a0a[_0x2f1fce(0x2bc)]() : Promise[_0x2f1fce(0x349)]())));
        for (const [_0x134558, _0x4bb5b4] of _0x531b72['\x65\x6e\x74\x72\x69\x65\x73']()) {
            if (_0x4bb5b4[_0x2f1fce(0x326)] === _0x2f1fce(0x3b2)) {
                const _0x3d6bd1 = await _0x4bb5b4[_0x2f1fce(0x3bd)];
                if (_0x3a73a2[_0x134558][_0x2f1fce(0x22b)](_0x2f1fce(0x2e7) + '\x75\x65')) {
                    proxyIPPool = proxyIPPool[_0x2f1fce(0x2ed)]((await ADD(_0x3d6bd1))['\x6d\x61\x70'](_0x884ca7 => {
                        const _0x5afc74 = _0x2f1fce;
                        const _0x5a8ece = _0x884ca7[_0x5afc74(0x29b)]('\x23')[0x0] || _0x884ca7;
                        if (_0x5a8ece[_0x5afc74(0x22b)]('\x3a')) {
                            const _0x2cffb5 = _0x5a8ece[_0x5afc74(0x29b)]('\x3a')[0x1];
                            if (!httpsPorts[_0x5afc74(0x22b)](_0x2cffb5)) {
                                return _0x5a8ece;
                            }
                        } else {
                            return _0x5a8ece + '\x3a\x34\x34\x33';
                        }
                        return null;
                    })[_0x2f1fce(0x312)](Boolean));
                }
                _0x45fce2 += _0x3d6bd1 + '\x0a';
            }
        }
    } catch (_0x54a941) {
        console[_0x2f1fce(0x208)](_0x54a941);
    } finally {
        clearTimeout(_0x446d7b);
    }
    const _0x567b9e = await ADD(_0x45fce2);
    return _0x567b9e;
}
async function getAddressescsv(_0xe3f73a) {
    const _0x292df4 = _0x20b761;
    if (!addressescsv || addressescsv[_0x292df4(0x248)] === 0x0) {
        return [];
    }
    let _0x51c992 = [];
    for (const _0x510fe8 of addressescsv) {
        try {
            const _0x4b0796 = await fetch(_0x510fe8);
            if (!_0x4b0796['\x6f\x6b']) {
                console['\x65\x72\x72\x6f\x72'](_0x292df4(0x1c3) + '\x3a', _0x4b0796[_0x292df4(0x326)], _0x4b0796['\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74']);
                continue;
            }
            const _0x1249f1 = await _0x4b0796[_0x292df4(0x2bc)]();
            let _0x3a9d93;
            if (_0x1249f1['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x0d\x0a')) {
                _0x3a9d93 = _0x1249f1[_0x292df4(0x29b)]('\x0d\x0a');
            } else {
                _0x3a9d93 = _0x1249f1['\x73\x70\x6c\x69\x74']('\x0a');
            }
            const _0x412822 = _0x3a9d93[0x0][_0x292df4(0x29b)]('\x2c');
            const _0xe1eb83 = _0x412822[_0x292df4(0x325)](_0x292df4(0x2dd));
            const _0xc91937 = 0x0;
            const _0x514c8a = 0x1;
            const _0x257318 = _0xe1eb83 + 0x1;
            if (_0xe1eb83 === -0x1) {
                console[_0x292df4(0x208)](_0x292df4(0x32b) + '\u5b57\u6bb5');
                continue;
            }
            for (let _0x238018 = 0x1; _0x238018 < _0x3a9d93[_0x292df4(0x248)]; _0x238018++) {
                const _0x58e7b0 = _0x3a9d93[_0x238018]['\x73\x70\x6c\x69\x74']('\x2c');
                const _0xd05189 = _0x58e7b0[_0x292df4(0x248)] - 0x1;
                if (_0x58e7b0[_0xe1eb83][_0x292df4(0x2a1) + '\x65']() === _0xe3f73a && parseFloat(_0x58e7b0[_0xd05189]) > DLS) {
                    const _0x49fca6 = _0x58e7b0[_0xc91937];
                    const _0x20d425 = _0x58e7b0[_0x514c8a];
                    const _0x3d3d5c = _0x58e7b0[_0x257318];
                    const _0x5340d9 = _0x49fca6 + '\x3a' + _0x20d425 + '\x23' + _0x3d3d5c;
                    _0x51c992[_0x292df4(0x353)](_0x5340d9);
                    if (_0x510fe8[_0x292df4(0x22b)]('\x70\x72\x6f\x78\x79\x69\x70\x3d\x74\x72' + '\x75\x65') && _0x58e7b0[_0xe1eb83][_0x292df4(0x2a1) + '\x65']() == _0x292df4(0x2cf) && !httpsPorts[_0x292df4(0x22b)](_0x20d425)) {
                        proxyIPPool[_0x292df4(0x353)](_0x49fca6 + '\x3a' + _0x20d425);
                    }
                }
            }
        } catch (_0x15b33a) {
            console[_0x292df4(0x208)](_0x292df4(0x1c3) + '\x3a', _0x15b33a);
            continue;
        }
    }
    return _0x51c992;
}
function subAddresses(_0x20e456, _0x11972e, _0x4ba874, _0x54b9f3, _0x4ee9cd, _0x39ac69, _0xa6df63) {
    const _0x4cda78 = _0x20b761;
    const _0x3b177a = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
    addresses = addresses[_0x4cda78(0x2ed)](_0x54b9f3);
    addresses = addresses[_0x4cda78(0x2ed)](_0x4ee9cd);
    let _0x299127;
    if (_0x4ba874 == _0x4cda78(0x2cf)) {
        addressesnotls = addressesnotls['\x63\x6f\x6e\x63\x61\x74'](_0x39ac69);
        addressesnotls = addressesnotls[_0x4cda78(0x2ed)](_0xa6df63);
        const _0x4492e9 = [...new Set(addressesnotls)];
        _0x299127 = _0x4492e9[_0x4cda78(0x313)](_0x46b93a => {
            const _0x45e442 = _0x4cda78;
            let _0x15814a = '\x2d\x31';
            let _0x4df674 = _0x46b93a;
            const _0x34de17 = _0x4df674['\x6d\x61\x74\x63\x68'](_0x3b177a);
            if (!_0x34de17) {
                if (_0x46b93a[_0x45e442(0x22b)]('\x3a') && _0x46b93a[_0x45e442(0x22b)]('\x23')) {
                    const _0x347c1c = _0x46b93a[_0x45e442(0x29b)]('\x3a');
                    _0x46b93a = _0x347c1c[0x0];
                    const _0x540f99 = _0x347c1c[0x1]['\x73\x70\x6c\x69\x74']('\x23');
                    _0x15814a = _0x540f99[0x0];
                    _0x4df674 = _0x540f99[0x1];
                } else if (_0x46b93a[_0x45e442(0x22b)]('\x3a')) {
                    const _0x3e285d = _0x46b93a[_0x45e442(0x29b)]('\x3a');
                    _0x46b93a = _0x3e285d[0x0];
                    _0x15814a = _0x3e285d[0x1];
                } else if (_0x46b93a[_0x45e442(0x22b)]('\x23')) {
                    const _0x439739 = _0x46b93a[_0x45e442(0x29b)]('\x23');
                    _0x46b93a = _0x439739[0x0];
                    _0x4df674 = _0x439739[0x1];
                }
                if (_0x4df674[_0x45e442(0x22b)]('\x3a')) {
                    _0x4df674 = _0x4df674[_0x45e442(0x29b)]('\x3a')[0x0];
                }
            } else {
                _0x46b93a = _0x34de17[0x1];
                _0x15814a = _0x34de17[0x2] || _0x15814a;
                _0x4df674 = _0x34de17[0x3] || _0x46b93a;
            }
            const _0x39a4bf = [
                _0x45e442(0x3b5),
                _0x45e442(0x24a),
                _0x45e442(0x3d7),
                _0x45e442(0x284),
                _0x45e442(0x232),
                _0x45e442(0x1c6)
            ];
            if (!isValidIPv4(_0x46b93a) && _0x15814a == '\x2d\x31') {
                for (let _0x5c271c of _0x39a4bf) {
                    if (_0x46b93a['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x5c271c)) {
                        _0x15814a = _0x5c271c;
                        break;
                    }
                }
            }
            if (_0x15814a == '\x2d\x31')
                _0x15814a = '\x38\x30';
            let _0x670882 = _0x20e456;
            let _0x8995bc = _0x45e442(0x2ec);
            let _0x41e5ea = '';
            const _0xd0fe29 = atob(啥啥啥_写的这是啥啊);
            const _0x18b9de = _0xd0fe29 + _0x45e442(0x31f) + _0x11972e + '\x40' + _0x46b93a + '\x3a' + _0x15814a + (_0x45e442(0x2cc) + _0x45e442(0x3da) + _0x45e442(0x268) + _0x45e442(0x2d7)) + _0x670882 + _0x45e442(0x216) + encodeURIComponent(_0x8995bc) + '\x23' + encodeURIComponent(_0x4df674 + _0x41e5ea);
            return _0x18b9de;
        })[_0x4cda78(0x27b)]('\x0a');
    }
    const _0x26a525 = [...new Set(addresses)];
    const _0x2b64b0 = _0x26a525[_0x4cda78(0x313)](_0x4d043a => {
        const _0x145f97 = _0x4cda78;
        let _0x79e25f = '\x2d\x31';
        let _0x1f60b9 = _0x4d043a;
        const _0x46f9c6 = _0x1f60b9[_0x145f97(0x385)](_0x3b177a);
        if (!_0x46f9c6) {
            if (_0x4d043a[_0x145f97(0x22b)]('\x3a') && _0x4d043a[_0x145f97(0x22b)]('\x23')) {
                const _0x24fc61 = _0x4d043a[_0x145f97(0x29b)]('\x3a');
                _0x4d043a = _0x24fc61[0x0];
                const _0x5f061c = _0x24fc61[0x1][_0x145f97(0x29b)]('\x23');
                _0x79e25f = _0x5f061c[0x0];
                _0x1f60b9 = _0x5f061c[0x1];
            } else if (_0x4d043a[_0x145f97(0x22b)]('\x3a')) {
                const _0x53f087 = _0x4d043a[_0x145f97(0x29b)]('\x3a');
                _0x4d043a = _0x53f087[0x0];
                _0x79e25f = _0x53f087[0x1];
            } else if (_0x4d043a[_0x145f97(0x22b)]('\x23')) {
                const _0x581b5e = _0x4d043a['\x73\x70\x6c\x69\x74']('\x23');
                _0x4d043a = _0x581b5e[0x0];
                _0x1f60b9 = _0x581b5e[0x1];
            }
            if (_0x1f60b9['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x3a')) {
                _0x1f60b9 = _0x1f60b9[_0x145f97(0x29b)]('\x3a')[0x0];
            }
        } else {
            _0x4d043a = _0x46f9c6[0x1];
            _0x79e25f = _0x46f9c6[0x2] || _0x79e25f;
            _0x1f60b9 = _0x46f9c6[0x3] || _0x4d043a;
        }
        if (!isValidIPv4(_0x4d043a) && _0x79e25f == '\x2d\x31') {
            for (let _0x412c85 of httpsPorts) {
                if (_0x4d043a['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x412c85)) {
                    _0x79e25f = _0x412c85;
                    break;
                }
            }
        }
        if (_0x79e25f == '\x2d\x31')
            _0x79e25f = '\x34\x34\x33';
        let _0x3be1b3 = _0x20e456;
        let _0x1f0536 = '\x2f\x3f\x65\x64\x3d\x32\x35\x36\x30';
        let _0x379cd6 = '';
        const _0x45ccf4 = proxyIPPool[_0x145f97(0x300)](_0x46e349 => _0x46e349[_0x145f97(0x22b)](_0x4d043a));
        if (_0x45ccf4)
            _0x1f0536 += _0x145f97(0x315) + _0x45ccf4;
        if (proxyhosts[_0x145f97(0x248)] > 0x0 && (_0x3be1b3[_0x145f97(0x22b)](_0x145f97(0x39d) + '\x65\x76') || _0x3be1b3[_0x145f97(0x22b)](_0x145f97(0x1f8)))) {
            _0x1f0536 = '\x2f' + _0x3be1b3 + _0x1f0536;
            _0x3be1b3 = proxyhosts[Math['\x66\x6c\x6f\x6f\x72'](Math[_0x145f97(0x217)]() * proxyhosts[_0x145f97(0x248)])];
            _0x379cd6 = _0x145f97(0x380) + '\u670d\u52a1\uff0c\u8bf7\u5c3d\u5feb\u7ed1\u5b9a\u81ea\u5b9a' + _0x145f97(0x279);
        }
        const _0xbc1dcd = atob(啥啥啥_写的这是啥啊);
        const _0x148191 = _0xbc1dcd + '\x3a\x2f\x2f' + _0x11972e + '\x40' + _0x4d043a + '\x3a' + _0x79e25f + (_0x145f97(0x2cc) + _0x145f97(0x3da) + _0x145f97(0x1ee) + _0x145f97(0x37a)) + _0x3be1b3 + (_0x145f97(0x27d) + _0x145f97(0x1fa) + _0x145f97(0x244)) + _0x3be1b3 + '\x26\x70\x61\x74\x68\x3d' + encodeURIComponent(_0x1f0536) + '\x23' + encodeURIComponent(_0x1f60b9 + _0x379cd6);
        return _0x148191;
    })[_0x4cda78(0x27b)]('\x0a');
    let _0x4dfb90 = _0x2b64b0;
    if (_0x4ba874 == '\x74\x72\x75\x65')
        _0x4dfb90 += '\x0a' + _0x299127;
    return btoa(_0x4dfb90);
}
async function sendMessage(_0xe40800, _0x424cb, _0x5931f2 = '') {
    const _0x454e54 = _0x20b761;
    if (BotToken !== '' && ChatID !== '') {
        let _0x5141a6 = '';
        const _0x960adf = await fetch(_0x454e54(0x3a3) + '\x61\x70\x69\x2e\x63\x6f\x6d\x2f\x6a\x73' + _0x454e54(0x328) + _0x424cb + (_0x454e54(0x1bf) + '\x4e'));
        if (_0x960adf[_0x454e54(0x326)] == 0xc8) {
            const _0x1ac99a = await _0x960adf[_0x454e54(0x220)]();
            _0x5141a6 = _0xe40800 + _0x454e54(0x1dd) + _0x424cb + _0x454e54(0x25d) + _0x1ac99a['\x63\x6f\x75\x6e\x74\x72\x79'] + (_0x454e54(0x2c7) + '\x65\x72\x3e\u57ce\u5e02\x3a\x20') + _0x1ac99a[_0x454e54(0x359)] + _0x454e54(0x259) + _0x1ac99a['\x6f\x72\x67'] + _0x454e54(0x274) + _0x1ac99a['\x61\x73'] + '\x0a' + _0x5931f2;
        } else {
            _0x5141a6 = _0xe40800 + '\x0a\x49\x50\x3a\x20' + _0x424cb + ('\x0a\x3c\x74\x67\x2d\x73\x70\x6f\x69\x6c' + _0x454e54(0x3c1)) + _0x5931f2;
        }
        let _0x1f1013 = '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70' + _0x454e54(0x231) + _0x454e54(0x22a) + BotToken + (_0x454e54(0x34d) + _0x454e54(0x1d4) + '\x3d') + ChatID + (_0x454e54(0x2e6) + '\x65\x3d\x48\x54\x4d\x4c\x26\x74\x65\x78' + '\x74\x3d') + encodeURIComponent(_0x5141a6);
        const _0x13eb19 = {};
        _0x13eb19[_0x454e54(0x26d)] = _0x454e54(0x2b7) + _0x454e54(0x1b4) + _0x454e54(0x2f2) + _0x454e54(0x30b) + _0x454e54(0x3a4);
        _0x13eb19[_0x454e54(0x25c) + _0x454e54(0x23f)] = '\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c' + '\x61\x74\x65\x2c\x20\x62\x72';
        _0x13eb19[_0x454e54(0x31e)] = _0x454e54(0x1b3) + _0x454e54(0x28f) + _0x454e54(0x21f) + '\x32';
        const _0x5ea62b = {};
        _0x5ea62b[_0x454e54(0x3dc)] = _0x454e54(0x2d4);
        _0x5ea62b[_0x454e54(0x3db)] = _0x13eb19;
        return fetch(_0x1f1013, _0x5ea62b);
    }
}
function isValidIPv4(_0x1be84b) {
    const _0x34d1b6 = _0x20b761;
    const _0x5f32cb = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return _0x5f32cb[_0x34d1b6(0x25f)](_0x1be84b);
}
function generateDynamicUUID(_0x44d30e) {
    const _0x333841 = _0x20b761;
    function _0x3ee133() {
        const _0x47dd04 = _0x4660;
        const _0x1277e3 = new Date();
        const _0x8dace4 = 0x8;
        const _0x8e98af = new Date(_0x1277e3[_0x47dd04(0x1a7)]() + _0x8dace4 * 0x3c * 0x3c * 0x3e8);
        const _0x24832d = new Date(0x7d7, 0x6, 0x7, updateTime, 0x0, 0x0);
        const _0x2e59b3 = _0x8e98af - _0x24832d;
        const _0x17559b = 0x3e8 * 0x3c * 0x3c * 0x18 * effectiveTime;
        return Math['\x63\x65\x69\x6c'](_0x2e59b3 / _0x17559b);
    }
    const _0x596651 = _0x3ee133();
    const _0x1a5c55 = new Date(0x7d7, 0x6, 0x7, updateTime, 0x0, 0x0);
    _0x1a5c55[_0x333841(0x369) + _0x333841(0x214)](_0x1a5c55['\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65' + _0x333841(0x214)]() + _0x596651 * 0x3e8 * 0x3c * 0x3c * 0x18 * effectiveTime);
    function _0x26e167(_0x5c7cc7) {
        const _0x28e6d9 = _0x333841;
        const _0x5a0c8e = new TextEncoder()[_0x28e6d9(0x235)](_0x5c7cc7);
        return crypto[_0x28e6d9(0x30f)][_0x28e6d9(0x3ab)](_0x28e6d9(0x3b4), _0x5a0c8e)[_0x28e6d9(0x29e)](_0x34674c => {
            const _0x124c8c = _0x28e6d9;
            const _0x102fb8 = Array[_0x124c8c(0x2bf)](new Uint8Array(_0x34674c));
            const _0xafa263 = _0x102fb8[_0x124c8c(0x313)](_0x577c81 => _0x577c81['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10)['\x70\x61\x64\x53\x74\x61\x72\x74'](0x2, '\x30'))[_0x124c8c(0x27b)]('');
            let _0x19e513 = _0xafa263[_0x124c8c(0x2c2)](0x0, 0x8) + '\x2d' + _0xafa263[_0x124c8c(0x2c2)](0x8, 0x4) + '\x2d\x34' + _0xafa263[_0x124c8c(0x2c2)](0xd, 0x3) + '\x2d' + (parseInt(_0xafa263['\x73\x75\x62\x73\x74\x72'](0x10, 0x2), 0x10) & 0x3f | 0x80)[_0x124c8c(0x2a5)](0x10) + _0xafa263['\x73\x75\x62\x73\x74\x72'](0x12, 0x2) + '\x2d' + _0xafa263['\x73\x75\x62\x73\x74\x72'](0x14, 0xc);
            return _0x19e513;
        });
    }
    const _0x57e079 = _0x26e167(_0x44d30e + _0x596651);
    const _0x19a933 = _0x26e167(_0x44d30e + (_0x596651 - 0x1));
    const _0x5d984d = new Date(_0x1a5c55['\x67\x65\x74\x54\x69\x6d\x65']() - 0x8 * 0x3c * 0x3c * 0x3e8);
    const _0x3047ff = _0x333841(0x1c0) + '\x20' + _0x5d984d[_0x333841(0x253) + '\x67']()[_0x333841(0x3b9)](0x0, 0x13)[_0x333841(0x1d7)]('\x54', '\x20') + _0x333841(0x319) + _0x1a5c55[_0x333841(0x253) + '\x67']()[_0x333841(0x3b9)](0x0, 0x13)['\x72\x65\x70\x6c\x61\x63\x65']('\x54', '\x20') + '\x0a';
    return Promise[_0x333841(0x2cd)]([
        _0x57e079,
        _0x19a933,
        _0x3047ff
    ]);
}