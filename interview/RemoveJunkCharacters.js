var str = "abc's test#s";
str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_');

console.log(str);