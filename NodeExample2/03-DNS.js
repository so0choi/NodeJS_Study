"use strict";

// dns : node.js의 기본 모듈로 name resolution 기능을 가진 모듈
const dns = require("dns");

// dns.lookup() : 'host name'을 인자로 받아 ip 주소를 반환한다. family 값은 IP 프로토콜의 버전을 나타낸다 (4 OR 6)
dns.lookup("test.com", (err, address, family) => {
  console.log(`address: ${address}, ${family}`);
  // family : IPv
});

// resolve4() : hostname을 통해 IPv4 주소를 알아낸다.
dns.resolve4("archive.org", (err, addresses) => {
  if (err) throw err;
  const res = JSON.stringify(addresses);
  console.log(res);

  addresses.forEach((a) => {
    // reverse() : ip 주소를 dns hostname으로 변환하여 알려준다
    dns.reverse(a, (err, hostname) => {
      if (err) throw err;
      console.log(`reverse for ${a}; ${JSON.stringify(hostname)}`);
    });
  });
});
